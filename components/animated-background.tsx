"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId = 0;

    const particles: Particle[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.length = 0;

      const count =
        width < 480
          ? 15
          : width < 768
            ? 25
            : width < 1024
              ? 35
              : width < 1440
                ? 50
                : 70;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 2 + 1,
        });
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const connectionDistance = width < 768 ? 60 : width < 1200 ? 90 : 120;

    const maxDistSq = connectionDistance * connectionDistance;

    let lastTime = 0;

    const animate = (now: number) => {
      const fps = width < 768 ? 30 : 60;

      if (now - lastTime < 1000 / fps) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,0,0,.8)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const o = particles[j];

          const dx = p.x - o.x;
          const dy = p.y - o.y;

          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(o.x, o.y);

            ctx.strokeStyle = `rgba(255,0,0,${(1 - distSq / maxDistSq) * 0.2})`;

            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        background:
          "linear-gradient(180deg,#0a0a14 0%,#150a28 50%,#0a1420 100%)",
      }}
    />
  );
}
