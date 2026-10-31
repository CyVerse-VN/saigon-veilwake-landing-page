"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Firefly {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glowColor: string;
  pulsePhase: number;
  pulseSpeed: number;
  wanderAngle: number;
}

export default function FireflyCanvas() {
  const { isNight } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isNight) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isActive: false,
      lastMoved: 0,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ("touches" in e) {
        if (e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          return;
        }
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      mouse.targetX = clientX;
      mouse.targetY = clientY;
      mouse.isActive = true;
      mouse.lastMoved = Date.now();
    };

    const handlePointerLeave = () => {
      mouse.isActive = false;
    };

    const handleClick = (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY;
      // Gentle sparkle burst on click
      fireflies.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220 && dist > 1) {
          const force = (1 - dist / 220) * 4;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave);
    window.addEventListener("click", handleClick);

    // Color palette matching Saigon: Veilwake nighttime aesthetic
    const palettes = [
      { color: "rgb(253, 224, 71)", glow: "rgba(253, 224, 71, 0.4)" }, // Sun Gold / Warm Firefly
      { color: "rgb(45, 212, 191)", glow: "rgba(45, 212, 191, 0.4)" }, // Bioluminescent Teal
      { color: "rgb(192, 132, 252)", glow: "rgba(192, 132, 252, 0.45)" }, // Veil Lilac / Butterfly
      { color: "rgb(254, 240, 138)", glow: "rgba(254, 240, 138, 0.35)" }, // Soft Starlight
    ];

    // Spawn 50 graceful fireflies
    const fireflyCount = Math.min(55, Math.floor((width * height) / 22000));
    const fireflies: Firefly[] = [];

    for (let i = 0; i < fireflyCount; i++) {
      const chosen = palettes[Math.floor(Math.random() * palettes.length)];
      fireflies.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1.2,
        color: chosen.color,
        glowColor: chosen.glow,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        wanderAngle: Math.random() * Math.PI * 2,
      });
    }

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      if (mouse.isActive) {
        mouse.x += (mouse.targetX - mouse.x) * 0.15;
        mouse.y += (mouse.targetY - mouse.y) * 0.15;
        if (Date.now() - mouse.lastMoved > 3500) {
          mouse.isActive = false;
        }
      }

      for (let i = 0; i < fireflies.length; i++) {
        const p = fireflies[i];

        // 1. Natural organic wandering (sine walk)
        p.wanderAngle += (Math.random() - 0.5) * 0.4;
        const wanderX = Math.cos(p.wanderAngle) * 0.25;
        const wanderY = Math.sin(p.wanderAngle) * 0.25;

        p.vx += wanderX;
        p.vy += wanderY;

        // 2. Mouse Attraction & Flocking Swarm
        let proximityBoost = 0;
        if (mouse.isActive) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 320 && dist > 5) {
            const pullFactor = (1 - dist / 320);
            proximityBoost = pullFactor;

            // Direct attraction towards cursor
            p.vx += (dx / dist) * pullFactor * 0.7;
            p.vy += (dy / dist) * pullFactor * 0.7;

            // Orbital swirl around cursor (makes it look like a dancing swarm)
            p.vx += (-dy / dist) * pullFactor * 0.45;
            p.vy += (dx / dist) * pullFactor * 0.45;
          }
        }

        // 3. Physics integration & damping
        p.vx *= 0.94;
        p.vy *= 0.94;

        // Clamp max speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = mouse.isActive ? 3.6 : 1.8;
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        p.x += p.vx * (dt * 60);
        p.y += p.vy * (dt * 60);

        // Screen boundary wrap
        const padding = 20;
        if (p.x < -padding) p.x = width + padding;
        if (p.x > width + padding) p.x = -padding;
        if (p.y < -padding) p.y = height + padding;
        if (p.y > height + padding) p.y = -padding;

        // 4. Breathing pulsation
        p.pulsePhase += p.pulseSpeed;
        const pulse = (Math.sin(p.pulsePhase) + 1) * 0.5; // 0 to 1
        const alpha = Math.min(1, 0.35 + pulse * 0.5 + proximityBoost * 0.25);
        const r = p.radius * (1 + proximityBoost * 0.3);

        // 5. Render Glowing Firefly
        ctx.save();
        ctx.globalAlpha = alpha;

        // Outer ambient glow
        const glowRadius = r * (4 + pulse * 2 + proximityBoost * 3);
        const grad = ctx.createRadialGradient(p.x, p.y, r * 0.3, p.x, p.y, glowRadius);
        grad.addColorStop(0, p.color);
        grad.addColorStop(0.35, p.glowColor);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Bright core
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 0.7, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("click", handleClick);
    };
  }, [isNight]);

  if (!isNight) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20 select-none"
      style={{ width: "100vw", height: "100vh" }}
      aria-hidden="true"
    />
  );
}

