"""Check real server-rendered pages: python3 scripts/check-seo.py http://localhost:8080."""
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import urljoin, urlsplit
from urllib.request import urlopen
import xml.etree.ElementTree as ET

BASE = sys.argv[1].rstrip('/') if len(sys.argv) > 1 else 'http://127.0.0.1:8080'
SITE = json.loads((Path(__file__).resolve().parents[1] / 'src/data/site.json').read_text())['url']


def fetch(path):
    try:
        with urlopen(BASE + path, timeout=30) as response:
            return response.status, response.read().decode(), response.headers.get_content_type()
    except HTTPError as error:
        return error.code, error.read().decode(), error.headers.get_content_type()


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.meta, self.canonicals, self.links, self.titles = [], [], [], []
        self.h1 = 0
        self.lang = None
        self.in_title = False
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'html': self.lang = attrs.get('lang')
        if tag == 'meta': self.meta.append(attrs)
        if tag == 'link' and attrs.get('rel') == 'canonical': self.canonicals.append(attrs['href'])
        if tag == 'a' and attrs.get('href'): self.links.append(attrs['href'])
        if tag == 'h1': self.h1 += 1
        if tag == 'title': self.in_title = True

    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False

    def handle_data(self, data):
        if self.in_title: self.titles.append(data)

    def values(self, name):
        return [m.get('content', '') for m in self.meta if m.get('name', m.get('property')) == name]


status, xml, mime = fetch('/sitemap.xml')
assert status == 200 and 'xml' in mime, (status, mime)
urls = [node.text for node in ET.fromstring(xml).findall('{*}url/{*}loc')]
assert urls and len(urls) == len(set(urls)), 'Empty or duplicate sitemap'
status, robots, mime = fetch('/robots.txt')
assert status == 200 and mime == 'text/plain' and f'Sitemap: {SITE}/sitemap.xml' in robots
assert 'Disallow: /' not in robots
status, llms, mime = fetch('/llms.txt')
assert status == 200 and mime == 'text/plain' and llms.startswith('# Evolves Tecnologia')
known = {urlsplit(url).path for url in urls}
for link in re.findall(r'\]\((https?://[^)]+)\)', llms):
    assert urlsplit(link).netloc == urlsplit(SITE).netloc
    assert urlsplit(link).path in known | {'/sitemap.xml'}, link

all_links = set()
titles, descriptions = set(), set()
for url in urls:
    assert url.startswith(SITE + '/')
    path = urlsplit(url).path
    status, html, mime = fetch(path)
    assert status == 200 and mime == 'text/html', (path, status, mime)
    page = Page(html)
    assert page.lang == 'pt-BR', path
    assert page.h1 == 1, (path, 'h1 count', page.h1)
    assert page.canonicals == [url], (path, page.canonicals)
    assert len(page.titles) == 1 and page.titles[0] not in titles, (path, page.titles)
    titles.add(page.titles[0])
    desc = page.values('description')
    assert len(desc) == 1 and desc[0] and desc[0] not in descriptions, (path, desc)
    descriptions.add(desc[0])
    assert page.values('og:url') == [url], (path, page.values('og:url'))
    assert len(page.values('og:title')) == 1 and len(page.values('og:description')) == 1, path
    assert not any('noindex' in value for value in page.values('robots')), path
    for link in page.links:
        absolute = urlsplit(urljoin(url, link))
        if absolute.netloc == urlsplit(SITE).netloc:
            all_links.add(absolute.path)

# Filtered blog views are shareable but intentionally noindex and outside the sitemap.
dynamic_noindex = {
    path for path in all_links
    if re.fullmatch(r'/blog/(?:busca|categoria)/[a-z0-9-]+', path)
}
dynamic_noindex.update(['/blog/busca/ux-ui', '/blog/categoria/seo'])
unknown = all_links - known - dynamic_noindex
assert not unknown, ('Unknown internal links', unknown)

# Every sitemap page is linked, and dynamic filtered URLs remain canonical to themselves.
assert known <= all_links, ('Orphan pages', known - all_links)
for path in dynamic_noindex:
    status, html, mime = fetch(path)
    page = Page(html)
    assert status == 200 and mime == 'text/html', (path, status, mime)
    assert page.canonicals == [SITE + path], (path, page.canonicals)
    assert any('noindex' in value for value in page.values('robots')), (path, 'missing noindex')
for path in ['/blog/seo-test-missing', '/services/seo-test-missing', '/cases/seo-test-missing', '/seo-test-missing']:
    status, html, _ = fetch(path)
    assert status == 404, (path, status)
    assert any('noindex' in value for value in Page(html).values('robots')), (path, 'missing noindex')
print(f'PASS: {len(urls)} sitemap pages, {len(dynamic_noindex)} filtered blog URLs, unique metadata, canonicals, pt-BR, H1, internal links, XML, robots.txt, llms.txt and four real 404 responses.')
