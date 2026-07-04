import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, RefreshCcw, Trophy, Bug, Rocket, Bot, Skull } from "lucide-react";

type EnemyType = "bug" | "drone" | "boss";

type Enemy = {
  id: number;
  type: EnemyType;
  initialX: number;
  x: number;
  y: number;
  speed: number;
  rotation: number;
  hp: number;
  lastShotTime: number;
  flashEndTime: number;
};

type Projectile = {
  id: number;
  x: number;
  y: number;
  isEnemy: boolean;
};

type GameState = {
  playerX: number;
  enemies: Enemy[];
  projectiles: Projectile[];
  score: number;
  isPlaying: boolean;
  gameOver: boolean;
  highScore: number;
};

export function NotFoundGame() {
  const [renderTick, setRenderTick] = useState(0);

  const gameState = useRef<GameState>({
    playerX: 50,
    enemies: [],
    projectiles: [],
    score: 0,
    isPlaying: false,
    gameOver: false,
    highScore: 0,
  });

  const requestRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Constants
  const PLAYER_WIDTH = 12; 
  const ENEMY_SIZE = 8; 
  const PROJECTILE_SPEED = 0.08; 
  const ENEMY_PROJECTILE_SPEED = 0.05; 

  const startGame = useCallback(() => {
    gameState.current.isPlaying = true;
    gameState.current.gameOver = false;
    gameState.current.score = 0;
    gameState.current.enemies = [];
    gameState.current.projectiles = [];
    gameState.current.playerX = 50;
    lastTimeRef.current = 0;
    
    // Force a render immediately to show playing state
    setRenderTick(t => t + 1);

    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    requestRef.current = requestAnimationFrame(gameLoop);
  }, []);

  const stopGame = useCallback(() => {
    gameState.current.isPlaying = false;
    gameState.current.gameOver = true;
    if (gameState.current.score > gameState.current.highScore) {
      gameState.current.highScore = gameState.current.score;
    }
    cancelAnimationFrame(requestRef.current);
    setRenderTick(t => t + 1); // final render for game over screen
  }, []);

  const lastFireTimeRef = useRef<number>(0);

  const fireProjectile = useCallback(() => {
    if (!gameState.current.isPlaying || gameState.current.gameOver) return;
    
    const now = performance.now();
    if (now - lastFireTimeRef.current < 200) return; // Limite de 5 tiros por segundo
    lastFireTimeRef.current = now;

    gameState.current.projectiles.push({
      id: Math.random(),
      x: gameState.current.playerX,
      y: 85,
      isEnemy: false
    });
  }, []);

  // Controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        fireProjectile();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fireProjectile]);

  const handlePointerDown = useCallback((e: PointerEvent) => {
    if (!gameState.current.isPlaying || gameState.current.gameOver) return;
    if ((e.target as HTMLElement).tagName.toLowerCase() === 'button') return;
    fireProjectile();
  }, [fireProjectile]);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!gameState.current.isPlaying || gameState.current.gameOver || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    gameState.current.playerX = Math.max(PLAYER_WIDTH/2, Math.min(100 - PLAYER_WIDTH/2, x));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("pointermove", handlePointerMove, { passive: false });
      container.addEventListener("pointerdown", handlePointerDown);
    }
    return () => {
      if (container) {
        container.removeEventListener("pointermove", handlePointerMove);
        container.removeEventListener("pointerdown", handlePointerDown);
      }
    };
  }, [handlePointerMove, handlePointerDown]);

  // Main Loop
  const gameLoop = useCallback((time: number) => {
    if (!gameState.current.isPlaying) return;

    if (lastTimeRef.current === 0) lastTimeRef.current = time;
    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;

    const state = gameState.current;
    let isGameOver = false;
    let scoreToAdd = 0;

    // 1. Spawn Enemies
    const spawnRate = Math.max(400, 1500 - state.score * 20);
    if (Math.random() < deltaTime / spawnRate) {
      let type: EnemyType = "bug";
      let hp = 1;
      let rand = Math.random();
      
      if (state.score > 300 && rand > 0.85) {
        type = "boss";
        hp = 3;
      } else if (state.score > 100 && rand > 0.6) {
        type = "drone";
      }

      const initialX = Math.random() * 90 + 5;
      
      state.enemies.push({
        id: Math.random(),
        type,
        initialX,
        x: initialX,
        y: -10,
        speed: Math.random() * 0.02 + 0.015 + (state.score * 0.0003),
        rotation: type === 'bug' ? Math.random() * 360 : 0,
        hp,
        lastShotTime: time,
        flashEndTime: 0,
      });
    }

    // 2. Move Projectiles
    for (let i = state.projectiles.length - 1; i >= 0; i--) {
      const p = state.projectiles[i];
      p.y = p.isEnemy ? p.y + ENEMY_PROJECTILE_SPEED * deltaTime : p.y - PROJECTILE_SPEED * deltaTime;
      if (p.y < -10 || p.y > 110) {
        state.projectiles.splice(i, 1);
      }
    }

    // 3. Move Enemies and Boss Shots
    for (let i = state.enemies.length - 1; i >= 0; i--) {
      const e = state.enemies[i];
      
      if (e.type === "bug") {
        e.y += e.speed * deltaTime;
        e.rotation += 1;
      } else if (e.type === "drone") {
        e.y += (e.speed * 1.5) * deltaTime;
        e.x = e.initialX + Math.sin(time / 200) * 15;
      } else if (e.type === "boss") {
        e.y += (e.speed * 0.5) * deltaTime;
        if (time - e.lastShotTime > 1500 && e.y > 0 && e.y < 80) {
          state.projectiles.push({
            id: Math.random(),
            x: e.x,
            y: e.y + 5,
            isEnemy: true
          });
          e.lastShotTime = time;
        }
      }

      // Check Collision with Player
      if (e.y > 80 && e.y < 95) {
        const hitRadius = e.type === 'boss' ? ENEMY_SIZE * 1.5 : ENEMY_SIZE;
        if (Math.abs(e.x - state.playerX) < PLAYER_WIDTH / 2 + hitRadius / 2) {
          isGameOver = true;
        }
      }

      // Remove if off screen
      if (e.y > 110) {
        state.enemies.splice(i, 1);
      }
    }

    // 4. Projectile Collisions
    for (let i = state.projectiles.length - 1; i >= 0; i--) {
      const proj = state.projectiles[i];
      let projDestroyed = false;
      
      if (proj.isEnemy) {
        // Enemy proj vs Player
        if (proj.y > 80 && proj.y < 95) {
          if (Math.abs(proj.x - state.playerX) < PLAYER_WIDTH / 2) {
            isGameOver = true;
            projDestroyed = true;
          }
        }
      } else {
        // Player proj vs Enemy
        for (let j = state.enemies.length - 1; j >= 0; j--) {
          const enemy = state.enemies[j];
          const hitRadius = enemy.type === 'boss' ? ENEMY_SIZE * 1.5 : ENEMY_SIZE;
          
          if (Math.abs(proj.x - enemy.x) < hitRadius && Math.abs(proj.y - enemy.y) < hitRadius) {
            projDestroyed = true;
            enemy.hp -= 1;
            enemy.flashEndTime = time + 100;
            
            if (enemy.hp <= 0) {
              state.enemies.splice(j, 1);
              if (enemy.type === 'boss') scoreToAdd += 50;
              else if (enemy.type === 'drone') scoreToAdd += 20;
              else scoreToAdd += 10;
            }
            break;
          }
        }
      }

      if (projDestroyed) {
        state.projectiles.splice(i, 1);
      }
    }

    if (scoreToAdd > 0) {
      state.score += scoreToAdd;
    }

    if (isGameOver) {
      stopGame();
      return; // Exit loop, stopGame cancelled the next frame
    }

    // Force React to render the new state frame
    setRenderTick(t => t + 1);
    
    // Loop
    requestRef.current = requestAnimationFrame(gameLoop);
  }, [stopGame]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const renderEnemy = (enemy: Enemy, time: number) => {
    const isFlashing = enemy.flashEndTime > time;
    const baseClass = "absolute will-change-transform flex items-center justify-center transition-all duration-75";
    
    let content = null;
    let scale = 1;
    
    if (enemy.type === "bug") {
      content = (
        <div className={`p-3 rounded-xl border transition-colors duration-75 ${isFlashing ? 'bg-white text-destructive border-white' : 'bg-destructive/10 text-destructive border-destructive/30'}`}>
          <Bug className="w-8 h-8" />
        </div>
      );
    } else if (enemy.type === "drone") {
      content = (
        <div className={`p-3 rounded-full border transition-colors duration-75 ${isFlashing ? 'bg-white text-purple-500 border-white' : 'bg-purple-500/20 text-purple-500 border-purple-500/40'}`}>
          <Bot className="w-8 h-8" />
        </div>
      );
    } else if (enemy.type === "boss") {
      scale = 1.5;
      content = (
        <div className={`p-4 rounded-2xl border transition-colors duration-75 ${isFlashing ? 'bg-white text-orange-500 border-white' : 'bg-orange-500/20 text-orange-500 border-orange-500/40'}`}>
          <Skull className="w-10 h-10" />
        </div>
      );
    }

    return (
      <div
        key={enemy.id}
        className={baseClass}
        style={{
          left: `${enemy.x}%`,
          top: `${enemy.y}%`,
          transform: `translate(-50%, -50%) rotate(${enemy.rotation}deg) scale(${scale})`,
        }}
      >
        {content}
      </div>
    );
  };

  const { isPlaying, gameOver, score, highScore, projectiles, enemies, playerX } = gameState.current;

  return (
    <div className="flex min-h-screen flex-col bg-background relative overflow-hidden select-none">
      <div className="absolute top-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-sm z-50 border-b border-border flex items-center px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Voltar para a Home
        </Link>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center pt-20 px-4 relative z-10">
        
        {!isPlaying && !gameOver && (
          <div className="text-center max-w-2xl animate-fade-up">
            <h1 className="text-8xl sm:text-9xl font-bold tracking-tighter text-primary mb-6 drop-shadow-2xl">
              404
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Invasão Crítica no Sistema</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              O ciberespaço está sob ataque! Toque na tela ou aperte ESPAÇO para atirar. Arraste para mover a nave e limpe a rede.
            </p>
            
            <button 
              onClick={startGame}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 shadow-xl shadow-primary/25"
            >
              Iniciar Missão
            </button>
          </div>
        )}

        {gameOver && (
          <div className="text-center z-50 bg-card/80 backdrop-blur-xl p-10 rounded-4xl border border-border shadow-[var(--shadow-card)] animate-scale-in pointer-events-auto">
            <h2 className="text-4xl font-bold text-destructive mb-2">Sistema Corrompido!</h2>
            <p className="text-muted-foreground mb-8">A nave não suportou os danos.</p>
            
            <div className="flex items-center justify-center gap-8 mb-10">
              <div className="text-center">
                <p className="text-sm text-muted-foreground font-medium mb-1">Pontuação Final</p>
                <p className="text-5xl font-bold text-primary">{score}</p>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground font-medium mb-1 flex items-center justify-center gap-1">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  Recorde
                </p>
                <p className="text-5xl font-bold">{highScore}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={startGame}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
              >
                <RefreshCcw className="w-4 h-4" />
                Tentar novamente
              </button>
              <Link 
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm px-8 py-3 text-sm font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                Voltar para o site
              </Link>
            </div>
          </div>
        )}

        {/* Game Area */}
        <div 
          ref={containerRef}
          className={`absolute inset-x-0 bottom-0 top-20 overflow-hidden cursor-crosshair touch-none ${(isPlaying || gameOver) ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-500`}
        >
          {/* Animated Space Background */}
          <div className="absolute inset-0 bg-background overflow-hidden -z-20 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-50 animate-slide-down"></div>
          </div>

          {isPlaying && (
            <div className="absolute top-6 right-6 z-40 bg-card/80 backdrop-blur-md border border-border px-6 py-3 rounded-full shadow-[var(--shadow-soft)] flex items-center gap-4 font-bold text-xl pointer-events-none">
              <span>Score: <span className="text-primary">{score}</span></span>
            </div>
          )}

          {/* Projectiles */}
          {projectiles.map((proj) => (
            <div
              key={proj.id}
              className={`absolute w-2 h-8 rounded-full will-change-transform pointer-events-none ${proj.isEnemy ? 'bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)]' : 'bg-primary shadow-[0_0_15px_rgba(var(--primary),0.8)]'}`}
              style={{
                left: `${proj.x}%`,
                top: `${proj.y}%`,
                transform: `translate(-50%, -50%)`,
              }}
            ></div>
          ))}

          {/* Enemies */}
          {enemies.map(e => renderEnemy(e, performance.now()))}

          {/* Player Ship */}
          <div
            className="absolute bottom-8 will-change-transform pointer-events-none"
            style={{
              left: `${playerX}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="relative flex flex-col items-center justify-center">
              <div className="text-primary bg-primary/10 p-3 rounded-full border border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.2)] backdrop-blur-sm z-10">
                <Rocket className="w-10 h-10 -rotate-45" />
              </div>
              
              {isPlaying && (
                <div className="w-4 h-12 bg-gradient-to-t from-transparent via-orange-500 to-yellow-300 blur-sm rounded-full absolute -bottom-8 animate-pulse"></div>
              )}
            </div>
          </div>
          
        </div>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide-down {
          from { background-position: 0 0; }
          to { background-position: 0 1000px; }
        }
        .animate-slide-down {
          animation: slide-down 20s linear infinite;
        }
      `}} />
    </div>
  );
}
