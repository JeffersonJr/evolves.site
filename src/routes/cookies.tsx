import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-4xl px-6 py-32 sm:py-40">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Política de Cookies</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos
            arquivos baixados no seu computador, para melhorar sua experiência.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">O que são cookies?</h2>
          <p>
            Os cookies são pequenos arquivos de texto que um site, quando visitado, coloca no computador do usuário
            ou no seu dispositivo móvel, através do navegador de internet. A colocação de cookies ajudará o site a
            reconhecer o seu dispositivo na próxima visita.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Como usamos os cookies?</h2>
          <p>Utilizamos cookies por vários motivos, detalhados abaixo:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>Cookies Essenciais:</strong> Necessários para o funcionamento do site. Sem eles, o site não funcionaria corretamente.</li>
            <li className="mb-2"><strong>Cookies de Análise:</strong> Permitem anonimamente monitorar o tráfego do site e como os usuários interagem com nosso conteúdo.</li>
            <li className="mb-2"><strong>Cookies de Preferências:</strong> Armazenam informações como se você já aceitou a nossa política de cookies, para não mostrar o aviso novamente.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Desativar Cookies</h2>
          <p>
            Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a
            Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará
            a funcionalidade deste e de muitos outros sites que você visita.
          </p>

          <p className="mt-8 text-sm text-muted-foreground">Esta política é efetiva a partir de Janeiro de 2024.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
