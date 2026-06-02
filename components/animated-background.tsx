"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

interface Laser {
  x: number;
  angle: number;
  speed: number;
  color: string;
  length: number;
  width: number;
}

interface Strobe {
  x: number;
  y: number;
  radius: number;
  color: string;
  phase: number;
  speed: number;
}

export  function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const particles: Particle[] = [];
    const lasers: Laser[] = [];
    const strobes: Strobe[] = [];

    const colors = [
      "rgba(255,0,0,",
      "rgba(186,43,43,",
      "rgba(130,64,64,",
      "rgba(71,55,55,",
      "rgba(0,0,0,",
    ];

    const getParticleCount = () => {
      const area = width * height;

      if (area < 480) return 20;
  if (area < 768) return 30;
  if (area < 1024) return 50;
  if (area < 1440) return 70;

      return 90;
    };

    const initializeScene = () => {
      particles.length = 0;
      lasers.length = 0;
      strobes.length = 0;

      const particleCount = getParticleCount();

      const laserCount =
        width < 768 ? 2 : width < 1200 ? 4 : 6;

      const strobeCount =
        width < 768 ? 3 : width < 1200 ? 5 : 8;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.08 + 0.02,
        });
      }

      for (let i = 0; i < laserCount; i++) {
        lasers.push({
          x: Math.random() * width,
          angle: Math.random() * Math.PI * 2,
          speed: (Math.random() - 0.5) * 0.01,
          color: colors[Math.floor(Math.random() * colors.length)],
          length: Math.max(width, height) * 1.5,
          width: Math.random() * 2 + 1,
        });
      }

      for (let i = 0; i < strobeCount; i++) {
        strobes.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.5,
          radius: Math.min(width, height) * 0.25,
          color: colors[Math.floor(Math.random() * colors.length)],
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.04 + 0.02,
        });
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      initializeScene();
    };

    resize();

    window.addEventListener("resize", resize);

    let animationId = 0;
    let time = 0;

    const animate = () => {
      time += 0.016;

      const beat = Math.sin(time * 4) * 0.5 + 0.5;

      ctx.fillStyle = "rgba(20, 10, 10, 0.12)";
      ctx.fillRect(0, 0, width, height);

      strobes.forEach((strobe) => {
        const intensity =
          (Math.sin(time * 8 + strobe.phase) + 1) * 0.5;

        if (intensity > 0.7) {
          const gradient = ctx.createRadialGradient(
            strobe.x,
            strobe.y,
            0,
            strobe.x,
            strobe.y,
            strobe.radius * intensity
          );

          gradient.addColorStop(
            0,
            strobe.color + 0.35 * intensity + ")"
          );

          gradient.addColorStop(
            0.5,
            strobe.color + 0.1 * intensity + ")"
          );

          gradient.addColorStop(1, strobe.color + "0)");

          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, width, height);
        }

        strobe.phase += strobe.speed;
      });

      lasers.forEach((laser) => {
        ctx.save();

        ctx.translate(laser.x, 0);
        ctx.rotate(laser.angle);

        const gradient = ctx.createLinearGradient(
          0,
          0,
          0,
          laser.length
        );

        gradient.addColorStop(0, laser.color + "0)");
        gradient.addColorStop(
          0.5,
          laser.color + beat * 0.8 + ")"
        );
        gradient.addColorStop(1, laser.color + "0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = laser.width * (1 + beat);

        ctx.shadowBlur = 20;
        ctx.shadowColor = laser.color + "1)";

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, laser.length);
        ctx.stroke();

        ctx.restore();

        laser.angle += laser.speed;

        if (Math.random() < 0.002) {
          laser.x = Math.random() * width;
        }
      });

      const connectionDistance =
        Math.min(width, height) * 0.12;

      particles.forEach((particle, i) => {
        particle.pulse += particle.pulseSpeed;

        const scale =
          1 + Math.sin(particle.pulse) * 0.3;

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;

        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        const size =
          particle.size * scale * (1 + beat * 0.4);

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          size * 3,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          particle.color +
          particle.opacity * 0.15 +
          ")";

        ctx.fill();

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          particle.color +
          particle.opacity +
          ")";

        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];

          const dx = particle.x - other.x;
          const dy = particle.y - other.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);

            const opacity =
              (1 - distance / connectionDistance) * 0.25;

            ctx.strokeStyle =
              particle.color + opacity + ")";

            ctx.lineWidth = 1;

            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

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
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background:
          "linear-gradient(180deg,#0a0a14 0%,#150a28 50%,#0a1420 100%)",
      }}
    />
  );
}