import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, RefreshCcw, Trophy } from "lucide-react";

type Vec = { x: number; y: number };

type Ship = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  invulnUntil: number;
};

type Bullet = Vec & { vx: number; vy: number; life: number };

type Asteroid = Vec & {
  vx: number;
  vy: number;
  angle: number;
  spin: number;
  radius: number;
  size: 1 | 2 | 3;
  verts: Vec[];
};

type Particle = Vec & { vx: number; vy: number; life: number; maxLife: number };

type Keys = {
  left: boolean;
  right: boolean;
  thrust: boolean;
  fire: boolean;
};

const HS_KEY = "evolves-404-asteroids-hs";
const TWO_PI = Math.PI * 2;

const THRUST = 420;
const TURN = 4.2;
const FRICTION = 0.992;
const MAX_SPEED = 520;
const BULLET_SPEED = 560;
const BULLET_LIFE = 0.7;
const FIRE_COOLDOWN = 0.18;
const SHIP_R = 11;

function wrap(v: number, max: number) {
  if (v < 0) return v + max;
  if (v >= max) return v - max;
  return v;
}

function dist2(a: Vec, b: Vec) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}

function asteroidVerts(radius: number): Vec[] {
  const n = 8 + Math.floor(Math.random() * 5);
  const verts: Vec[] = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * TWO_PI;
    const r = radius * (0.72 + Math.random() * 0.36);
    verts.push({ x: Math.cos(a) * r, y: Math.sin(a) * r });
  }
  return verts;
}

function spawnAsteroid(
  w: number,
  h: number,
  size: 1 | 2 | 3,
  around?: Vec,
): Asteroid {
  const radius = size === 3 ? 42 : size === 2 ? 24 : 13;
  let x: number;
  let y: number;
  if (around) {
    const a = Math.random() * TWO_PI;
    x = around.x + Math.cos(a) * 8;
    y = around.y + Math.sin(a) * 8;
  } else {
    x = Math.random() * w;
    y = Math.random() * h;
    const cx = w / 2;
    const cy = h / 2;
    if (Math.hypot(x - cx, y - cy) < 140) {
      x = wrap(cx + 180 + Math.random() * 80, w);
      y = wrap(cy + (Math.random() - 0.5) * 220, h);
    }
  }
  const speed = (size === 3 ? 38 : size === 2 ? 62 : 90) * (0.7 + Math.random());
  const dir = Math.random() * TWO_PI;
  return {
    x,
    y,
    vx: Math.cos(dir) * speed,
    vy: Math.sin(dir) * speed,
    angle: Math.random() * TWO_PI,
    spin: (Math.random() - 0.5) * 1.4,
    radius,
    size,
    verts: asteroidVerts(radius),
  };
}

function makeShip(w: number, h: number, invulnUntil: number): Ship {
  return {
    x: w / 2,
    y: h / 2,
    vx: 0,
    vy: 0,
    angle: 0,
    invulnUntil,
  };
}

function readHighScore() {
  if (typeof window === "undefined") return 0;
  const n = Number(window.localStorage.getItem(HS_KEY));
  return Number.isFinite(n) ? n : 0;
}

function oklchToRgb(l: number, c: number, hDeg: number) {
  const hr = (hDeg * Math.PI) / 180;
  const a = c * Math.cos(hr);
  const b = c * Math.sin(hr);
  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291485548 * b;
  const lmsL = l_ * l_ * l_;
  const lmsM = m_ * m_ * m_;
  const lmsS = s_ * s_ * s_;
  const toSrgb = (x: number) => {
    const v = Math.min(1, Math.max(0, x));
    return v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055;
  };
  const r = toSrgb(4.0767416621 * lmsL - 3.3077115913 * lmsM + 0.2309699292 * lmsS);
  const g = toSrgb(-1.2684380046 * lmsL + 2.6097574011 * lmsM - 0.3413193965 * lmsS);
  const bl = toSrgb(-0.0041960863 * lmsL - 0.7034186147 * lmsM + 1.707614701 * lmsS);
  return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(bl * 255)})`;
}

function resolveCssColor(value: string, fallback: string) {
  const m = value.trim().match(/^oklch\(\s*([\d.]+)(%?)\s+([\d.]+)\s+([\d.]+)/i);
  if (m) {
    let l = Number(m[1]);
    if (m[2] === "%") l /= 100;
    return oklchToRgb(l, Number(m[3]), Number(m[4]));
  }
  if (value.startsWith("rgb") || value.startsWith("#") || value.startsWith("hsl")) {
    return value;
  }
  return fallback;
}

export function NotFoundGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const primarySwatchRef = useRef<HTMLSpanElement>(null);
  const paletteRef = useRef({ fg: "#111111", bg: "#ffffff", primary: "#5b5bd6" });
  const rafRef = useRef(0);
  const lastRef = useRef(0);
  const fireAtRef = useRef(0);
  const keysRef = useRef<Keys>({
    left: false,
    right: false,
    thrust: false,
    fire: false,
  });

  const shipRef = useRef<Ship | null>(null);
  const bulletsRef = useRef<Bullet[]>([]);
  const asteroidsRef = useRef<Asteroid[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const starsRef = useRef<Vec[]>([]);
  const playingRef = useRef(false);
  const livesRef = useRef(3);
  const scoreRef = useRef(0);
  const waveRef = useRef(1);
  const sizeRef = useRef({ w: 1, h: 1, dpr: 1 });

  const [playing, setPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [highScore, setHighScore] = useState(0);

  const burst = useCallback((x: number, y: number, n: number, speed: number) => {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * TWO_PI;
      const s = speed * (0.35 + Math.random());
      const life = 0.25 + Math.random() * 0.45;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        life,
        maxLife: life,
      });
    }
  }, []);

  const seedField = useCallback((w: number, h: number, count: number) => {
    asteroidsRef.current = [];
    for (let i = 0; i < count; i++) {
      asteroidsRef.current.push(spawnAsteroid(w, h, 3));
    }
  }, []);

  const endGame = useCallback(() => {
    playingRef.current = false;
    shipRef.current = null;
    keysRef.current = { left: false, right: false, thrust: false, fire: false };
    setPlaying(false);
    setGameOver(true);
    setHighScore((hs) => {
      const next = Math.max(hs, scoreRef.current);
      window.localStorage.setItem(HS_KEY, String(next));
      return next;
    });
  }, []);

  const startGame = useCallback(() => {
    const { w, h } = sizeRef.current;
    playingRef.current = true;
    scoreRef.current = 0;
    livesRef.current = 3;
    waveRef.current = 1;
    bulletsRef.current = [];
    particlesRef.current = [];
    shipRef.current = makeShip(w, h, performance.now() / 1000 + 2);
    seedField(w, h, 4);
    lastRef.current = 0;
    fireAtRef.current = 0;
    setScore(0);
    setLives(3);
    setGameOver(false);
    setPlaying(true);
  }, [seedField]);

  useEffect(() => {
    setHighScore(readHighScore());
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const refreshPalette = () => {
      const canvasCs = getComputedStyle(canvas);
      const swatch = primarySwatchRef.current;
      paletteRef.current = {
        fg: resolveCssColor(canvasCs.color, "#111111"),
        bg: resolveCssColor(canvasCs.backgroundColor, "#ffffff"),
        primary: resolveCssColor(
          swatch ? getComputedStyle(swatch).color : "",
          "#5b5bd6",
        ),
      };
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      sizeRef.current = { w: rect.width, h: rect.height, dpr };
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const stars: Vec[] = [];
      const n = Math.floor((rect.width * rect.height) / 14000);
      for (let i = 0; i < n; i++) {
        stars.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
        });
      }
      starsRef.current = stars;
      refreshPalette();

      if (!playingRef.current && asteroidsRef.current.length === 0) {
        seedField(rect.width, rect.height, 5);
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const themeObserver = new MutationObserver(refreshPalette);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    const drawWrapped = (
      x: number,
      y: number,
      r: number,
      w: number,
      h: number,
      draw: (ox: number, oy: number) => void,
    ) => {
      draw(x, y);
      if (x < r) draw(x + w, y);
      if (x > w - r) draw(x - w, y);
      if (y < r) draw(x, y + h);
      if (y > h - r) draw(x, y - h);
    };

    const loop = (nowMs: number) => {
      const now = nowMs / 1000;
      if (!lastRef.current) lastRef.current = now;
      let dt = now - lastRef.current;
      lastRef.current = now;
      if (dt > 0.05) dt = 0.05;

      const { w, h } = sizeRef.current;
      const pal = paletteRef.current;
      const keys = keysRef.current;
      const ship = shipRef.current;
      const playingNow = playingRef.current;

      if (playingNow && ship) {
        if (keys.left) ship.angle -= TURN * dt;
        if (keys.right) ship.angle += TURN * dt;

        if (keys.thrust) {
          ship.vx += Math.sin(ship.angle) * THRUST * dt;
          ship.vy -= Math.cos(ship.angle) * THRUST * dt;
        }

        const speed = Math.hypot(ship.vx, ship.vy);
        if (speed > MAX_SPEED) {
          ship.vx = (ship.vx / speed) * MAX_SPEED;
          ship.vy = (ship.vy / speed) * MAX_SPEED;
        }

        ship.vx *= FRICTION;
        ship.vy *= FRICTION;
        ship.x = wrap(ship.x + ship.vx * dt, w);
        ship.y = wrap(ship.y + ship.vy * dt, h);

        if (keys.fire && now - fireAtRef.current > FIRE_COOLDOWN) {
          fireAtRef.current = now;
          const nx = Math.sin(ship.angle);
          const ny = -Math.cos(ship.angle);
          bulletsRef.current.push({
            x: ship.x + nx * 14,
            y: ship.y + ny * 14,
            vx: ship.vx + nx * BULLET_SPEED,
            vy: ship.vy + ny * BULLET_SPEED,
            life: BULLET_LIFE,
          });
        }
      }

      const bullets = bulletsRef.current;
      for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.x = wrap(b.x + b.vx * dt, w);
        b.y = wrap(b.y + b.vy * dt, h);
        b.life -= dt;
        if (b.life <= 0) bullets.splice(i, 1);
      }

      const asteroids = asteroidsRef.current;
      for (const a of asteroids) {
        a.x = wrap(a.x + a.vx * dt, w);
        a.y = wrap(a.y + a.vy * dt, h);
        a.angle += a.spin * dt;
      }

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= dt;
        if (p.life <= 0) particles.splice(i, 1);
      }

      if (playingNow && ship) {
        let scored = 0;
        for (let i = bullets.length - 1; i >= 0; i--) {
          const b = bullets[i];
          for (let j = asteroids.length - 1; j >= 0; j--) {
            const a = asteroids[j];
            if (dist2(b, a) < a.radius * a.radius) {
              bullets.splice(i, 1);
              asteroids.splice(j, 1);
              burst(a.x, a.y, 6 + a.size * 3, 80 + a.size * 30);
              scored += a.size === 3 ? 20 : a.size === 2 ? 50 : 100;
              if (a.size > 1) {
                const next = (a.size - 1) as 1 | 2;
                asteroids.push(spawnAsteroid(w, h, next, a));
                asteroids.push(spawnAsteroid(w, h, next, a));
              }
              break;
            }
          }
        }

        if (scored) {
          scoreRef.current += scored;
          setScore(scoreRef.current);
        }

        if (asteroids.length === 0) {
          waveRef.current += 1;
          seedField(w, h, Math.min(4 + waveRef.current, 9));
        }

        const vulnerable = now >= ship.invulnUntil;
        if (vulnerable) {
          for (const a of asteroids) {
            if (dist2(ship, a) < (a.radius + SHIP_R) * (a.radius + SHIP_R)) {
              burst(ship.x, ship.y, 18, 160);
              livesRef.current -= 1;
              setLives(livesRef.current);
              if (livesRef.current <= 0) {
                endGame();
              } else {
                shipRef.current = makeShip(w, h, now + 2.2);
              }
              break;
            }
          }
        }
      }

      ctx.fillStyle = pal.bg;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = pal.fg;
      ctx.globalAlpha = 0.22;
      for (const s of starsRef.current) {
        ctx.fillRect(s.x, s.y, 1.2, 1.2);
      }
      ctx.globalAlpha = 1;

      ctx.strokeStyle = pal.fg;
      ctx.lineWidth = 1.5;
      ctx.lineJoin = "round";

      for (const a of asteroids) {
        drawWrapped(a.x, a.y, a.radius + 2, w, h, (ox, oy) => {
          ctx.beginPath();
          a.verts.forEach((v, i) => {
            const c = Math.cos(a.angle);
            const s = Math.sin(a.angle);
            const px = ox + v.x * c - v.y * s;
            const py = oy + v.x * s + v.y * c;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          });
          ctx.closePath();
          ctx.stroke();
        });
      }

      ctx.fillStyle = pal.primary;
      for (const b of bullets) {
        ctx.globalAlpha = Math.min(1, b.life / 0.15);
        ctx.beginPath();
        ctx.arc(b.x, b.y, 1.8, 0, TWO_PI);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      ctx.fillStyle = pal.fg;
      for (const p of particles) {
        ctx.globalAlpha = p.life / p.maxLife;
        ctx.fillRect(p.x, p.y, 1.5, 1.5);
      }
      ctx.globalAlpha = 1;

      const liveShip = shipRef.current;
      if (playingNow && liveShip) {
        const blink =
          now < liveShip.invulnUntil && Math.floor(now * 12) % 2 === 0;
        if (!blink) {
          ctx.strokeStyle = pal.primary;
          ctx.lineWidth = 1.5;
          const drawShip = (ox: number, oy: number) => {
            const c = Math.cos(liveShip.angle);
            const s = Math.sin(liveShip.angle);
            const tip = { x: 0, y: -14 };
            const left = { x: -9, y: 10 };
            const right = { x: 9, y: 10 };
            const rot = (p: Vec) => ({
              x: ox + p.x * c - p.y * s,
              y: oy + p.x * s + p.y * c,
            });
            const t = rot(tip);
            const l = rot(left);
            const r = rot(right);
            ctx.beginPath();
            ctx.moveTo(t.x, t.y);
            ctx.lineTo(l.x, l.y);
            ctx.lineTo(r.x, r.y);
            ctx.closePath();
            ctx.stroke();

            if (keys.thrust) {
              const flame = rot({ x: 0, y: 16 + Math.random() * 5 });
              ctx.beginPath();
              ctx.moveTo(rot({ x: -4, y: 10 }).x, rot({ x: -4, y: 10 }).y);
              ctx.lineTo(flame.x, flame.y);
              ctx.lineTo(rot({ x: 4, y: 10 }).x, rot({ x: 4, y: 10 }).y);
              ctx.stroke();
            }
          };
          drawWrapped(liveShip.x, liveShip.y, 18, w, h, drawShip);
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      themeObserver.disconnect();
    };
  }, [burst, endGame, seedField]);

  useEffect(() => {
    const mapKey = (code: string, down: boolean) => {
      const keys = keysRef.current;
      if (code === "ArrowLeft" || code === "KeyA") keys.left = down;
      else if (code === "ArrowRight" || code === "KeyD") keys.right = down;
      else if (code === "ArrowUp" || code === "KeyW") keys.thrust = down;
      else if (code === "Space") keys.fire = down;
    };

    const onDown = (e: KeyboardEvent) => {
      if (
        ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Space"].includes(
          e.code,
        )
      ) {
        e.preventDefault();
      }
      if (e.code === "Space" && !playingRef.current) {
        startGame();
        return;
      }
      mapKey(e.code, true);
    };
    const onUp = (e: KeyboardEvent) => mapKey(e.code, false);
    const onBlur = () => {
      keysRef.current = {
        left: false,
        right: false,
        thrust: false,
        fire: false,
      };
    };

    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
      window.removeEventListener("blur", onBlur);
    };
  }, [startGame]);

  const hold = (key: keyof Keys, pressed: boolean) => {
    keysRef.current[key] = pressed;
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background select-none">
      <div className="absolute top-0 left-0 right-0 z-50 flex h-20 items-center px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para a Home
        </Link>
      </div>

      <div ref={wrapRef} className="absolute inset-0">
        <span ref={primarySwatchRef} className="sr-only text-primary" />
        <canvas
          ref={canvasRef}
          className="block h-full w-full bg-background text-foreground"
        />
      </div>

      {playing && (
        <div className="pointer-events-none absolute top-24 left-6 right-6 z-40 flex items-start justify-between font-mono text-sm tracking-widest text-foreground/80">
          <div>
            <p className="text-[11px] uppercase text-muted-foreground">Score</p>
            <p className="text-2xl tabular-nums text-primary">{score}</p>
          </div>
          <div className="flex items-center gap-2 pt-5" aria-label={`${lives} vidas`}>
            {Array.from({ length: 3 }).map((_, i) => (
              <span
                key={i}
                className={`inline-block h-0 w-0 border-x-[5px] border-b-[10px] border-x-transparent ${
                  i < lives ? "border-b-primary" : "border-b-border"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {!playing && !gameOver && (
        <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-20">
          <div className="max-w-xl text-center">
            <h1 className="mb-4 text-8xl font-bold tracking-tighter text-primary sm:text-9xl">
              404
            </h1>
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              Página perdida no espaço
            </h2>
            <p className="mb-3 text-muted-foreground leading-relaxed">
              Este endereço não existe. Enquanto isso, um asteroids mínimo.
            </p>
            <p className="mb-10 font-mono text-xs uppercase tracking-widest text-muted-foreground/80">
              ← → girar · ↑ acelerar · espaço atirar
            </p>
            <button
              onClick={startGame}
              className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:scale-105 hover:bg-primary/90"
            >
              Jogar
            </button>
          </div>
        </main>
      )}

      {gameOver && (
        <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-20">
          <div className="w-full max-w-md rounded-3xl border border-border bg-background/70 p-10 text-center shadow-[var(--shadow-card)] backdrop-blur-md">
            <h2 className="mb-2 text-3xl font-bold">Nave destruída</h2>
            <p className="mb-8 text-muted-foreground">
              Os asteroides ficaram com a rota.
            </p>
            <div className="mb-10 flex items-center justify-center gap-8">
              <div>
                <p className="mb-1 text-sm font-medium text-muted-foreground">
                  Pontuação
                </p>
                <p className="text-5xl font-bold text-primary">{score}</p>
              </div>
              <div className="h-16 w-px bg-border" />
              <div>
                <p className="mb-1 flex items-center justify-center gap-1 text-sm font-medium text-muted-foreground">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  Recorde
                </p>
                <p className="text-5xl font-bold">{highScore}</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={startGame}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 sm:w-auto"
              >
                <RefreshCcw className="h-4 w-4" />
                Jogar de novo
              </button>
              <Link
                to="/"
                className="inline-flex w-full items-center justify-center rounded-full border border-input bg-background/50 px-8 py-3 text-sm font-medium transition-all hover:bg-accent sm:w-auto"
              >
                Voltar para o site
              </Link>
            </div>
          </div>
        </main>
      )}

      {playing && (
        <div className="absolute inset-x-0 bottom-6 z-40 flex items-end justify-between px-5 sm:hidden">
          <div className="flex gap-3">
            <HoldButton
              label="Girar esquerda"
              onHold={(v) => hold("left", v)}
            >
              ←
            </HoldButton>
            <HoldButton
              label="Girar direita"
              onHold={(v) => hold("right", v)}
            >
              →
            </HoldButton>
          </div>
          <div className="flex gap-3">
            <HoldButton label="Acelerar" onHold={(v) => hold("thrust", v)}>
              ↑
            </HoldButton>
            <HoldButton label="Atirar" onHold={(v) => hold("fire", v)}>
              ●
            </HoldButton>
          </div>
        </div>
      )}
    </div>
  );
}

function HoldButton({
  label,
  onHold,
  children,
}: {
  label: string;
  onHold: (pressed: boolean) => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-16 w-16 items-center justify-center rounded-full border border-border/80 bg-background/40 font-mono text-lg text-foreground/90 backdrop-blur-sm active:bg-primary/20"
      onPointerDown={(e) => {
        e.preventDefault();
        (e.currentTarget as HTMLButtonElement).setPointerCapture(e.pointerId);
        onHold(true);
      }}
      onPointerUp={() => onHold(false)}
      onPointerCancel={() => onHold(false)}
    >
      {children}
    </button>
  );
}
