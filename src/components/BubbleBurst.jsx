import React, { createContext, useContext, useEffect, useRef } from 'react';

const BubbleContext = createContext({
  spawnBurst: () => {},
  spawnHover: () => {},
});

export const useBubbles = () => useContext(BubbleContext);

// 4 palette colors from the user prompt:
// #1F06AC (Indigo), #0F42C0 (Cobalt), #5882E8 (Cornflower Blue), #E3EF4F (Chartreuse)
const PALETTE_COLORS = [
  { r: 88, g: 130, b: 232 }, // #5882E8
  { r: 15, g: 66, b: 192 },  // #0F42C0
  { r: 31, g: 6, b: 172 },   // #1F06AC
  { r: 227, g: 239, b: 79 },  // #E3EF4F
];

export const BubbleBurst = ({ children }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameIdRef = useRef(null);
  const isRunningRef = useRef(false);
  const lastHoverTargetRef = useRef(null);
  const lastHoverTimeRef = useRef(0);

  const prefersReducedMotion = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  const ensureAnimationLoop = () => {
    if (!isRunningRef.current) {
      isRunningRef.current = true;
      render();
    }
  };

  const spawnBurst = (x, y, count = null) => {
    if (prefersReducedMotion()) return;
    const numBubbles = count || Math.floor(Math.random() * 5) + 8; // 8-12

    for (let i = 0; i < numBubbles; i++) {
      const angle = (Math.PI * 2 * i) / numBubbles + (Math.random() - 0.5) * 0.4;
      const speed = Math.random() * 2.0 + 1.2;
      const baseRadius = Math.random() * 6 + 5;
      const color = PALETTE_COLORS[Math.floor(Math.random() * PALETTE_COLORS.length)];

      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 8,
        vx: Math.cos(angle) * speed * 0.6 + (Math.random() - 0.5) * 0.6,
        vy: -Math.abs(Math.sin(angle) * speed * 0.7) - (Math.random() * 1.5 + 1.0),
        radius: baseRadius,
        maxLife: Math.floor(Math.random() * 20) + 45,
        currentLife: 0,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.1 + 0.05,
        wobbleAmp: Math.random() * 1.0 + 0.4,
        color,
      });
    }

    ensureAnimationLoop();
  };

  const spawnHover = (rect) => {
    if (prefersReducedMotion() || !rect) return;
    const count = 2;

    for (let i = 0; i < count; i++) {
      const startX = rect.left + Math.random() * rect.width;
      const startY = rect.top + rect.height * (0.4 + Math.random() * 0.5);
      const baseRadius = Math.random() * 4 + 4;
      const color = PALETTE_COLORS[Math.floor(Math.random() * PALETTE_COLORS.length)];

      particlesRef.current.push({
        x: startX,
        y: startY,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -(Math.random() * 1.2 + 0.8),
        radius: baseRadius,
        maxLife: Math.floor(Math.random() * 15) + 35,
        currentLife: 0,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.08 + 0.04,
        wobbleAmp: Math.random() * 0.6 + 0.3,
        color,
      });
    }

    ensureAnimationLoop();
  };

  const render = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      isRunningRef.current = false;
      return;
    }

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const particles = particlesRef.current;
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.currentLife++;

      if (p.currentLife >= p.maxLife) {
        particles.splice(i, 1);
        continue;
      }

      p.wobblePhase += p.wobbleSpeed;
      p.x += p.vx + Math.sin(p.wobblePhase) * p.wobbleAmp;
      p.y += p.vy;
      p.vy *= 0.985;

      const progress = p.currentLife / p.maxLife;
      let alpha = 1;
      if (progress < 0.15) {
        alpha = progress / 0.15;
      } else if (progress > 0.7) {
        alpha = 1 - (progress - 0.7) / 0.3;
      }

      const scale = 0.7 + progress * 0.4;
      const currentRadius = Math.max(1, p.radius * scale);
      const { r, g, b } = p.color;

      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));

      // Solid translucent bubble body (no gradient)
      ctx.beginPath();
      ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.22)`;
      ctx.fill();

      // Thin solid rim
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.75)`;
      ctx.stroke();

      // Specular highlight dot
      ctx.beginPath();
      ctx.arc(p.x - currentRadius * 0.35, p.y - currentRadius * 0.35, currentRadius * 0.22, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
      ctx.fill();

      ctx.restore();
    }

    if (particles.length > 0) {
      animationFrameIdRef.current = requestAnimationFrame(render);
    } else {
      isRunningRef.current = false;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const isInteractive = (el) => {
      if (!el || el === document.body || el === document.documentElement) return null;
      return el.closest('button, a, [role="button"], input, textarea, .bubble-interactive, [data-bubble]');
    };

    const handleGlobalClick = (e) => {
      const interactiveEl = isInteractive(e.target);
      if (interactiveEl) {
        spawnBurst(e.clientX, e.clientY);
      }
    };

    const handleGlobalPointerOver = (e) => {
      const interactiveEl = isInteractive(e.target);
      if (!interactiveEl) return;

      const now = performance.now();
      if (lastHoverTargetRef.current === interactiveEl && now - lastHoverTimeRef.current < 450) {
        return;
      }

      lastHoverTargetRef.current = interactiveEl;
      lastHoverTimeRef.current = now;

      const rect = interactiveEl.getBoundingClientRect();
      spawnHover(rect);
    };

    window.addEventListener('click', handleGlobalClick, { passive: true });
    window.addEventListener('pointerover', handleGlobalPointerOver, { passive: true });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('pointerover', handleGlobalPointerOver);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <BubbleContext.Provider value={{ spawnBurst, spawnHover }}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9999]"
      />
      {children}
    </BubbleContext.Provider>
  );
};
