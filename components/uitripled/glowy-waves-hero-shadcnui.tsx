"use client";

import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";

type Point = {
  x: number;
  y: number;
};

interface WaveConfig {
  offset: number;
  amplitude: number;
  frequency: number;
  color: string;
  opacity: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const statsVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
  },
};

interface GlowyWavesHeroProps {
  badge?: string;
  title?: React.ReactNode;
  description?: string;
  highlightPills?: string[];
  stats?: { label: string; value: string }[];
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export function GlowyWavesHero({
  badge = "Feature Spotlight",
  title = "Intelligent API Security",
  description = "Protect your digital assets with Mosura's advanced guardian logic.",
  highlightPills = ["Low Latency", "Zero Trust", "AI-Powered"],
  stats = [
    { label: "Uptime", value: "99.99%" },
    { label: "Latency", value: "<1ms" },
    { label: "Scale", value: "Unlimited" },
  ],
  primaryCTA = { label: "Get Started", href: "#" },
  secondaryCTA = { label: "Learn More", href: "#" },
}: GlowyWavesHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const targetMouseRef = useRef<Point>({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let animationId: number;
    let time = 0;

    const computeThemeColors = () => {
      // Mosura Brand Orange: #ed7f18
      const brandColor = "#ed7f18";
      
      return {
        backgroundTop: "#000000",
        backgroundBottom: "#000000",
        wavePalette: [
          {
            offset: 0,
            amplitude: 70,
            frequency: 0.003,
            color: brandColor,
            opacity: 0.6,
          },
          {
            offset: Math.PI / 2,
            amplitude: 90,
            frequency: 0.0026,
            color: brandColor,
            opacity: 0.4,
          },
          {
            offset: Math.PI,
            amplitude: 60,
            frequency: 0.0034,
            color: "#ffffff",
            opacity: 0.2,
          },
          {
            offset: Math.PI * 1.5,
            amplitude: 80,
            frequency: 0.0022,
            color: brandColor,
            opacity: 0.3,
          },
          {
            offset: Math.PI * 2,
            amplitude: 55,
            frequency: 0.004,
            color: brandColor,
            opacity: 0.15,
          },
        ] satisfies WaveConfig[],
      };
    };

    let themeColors = computeThemeColors();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const mouseInfluence = prefersReducedMotion ? 10 : 70;
    const influenceRadius = prefersReducedMotion ? 160 : 320;
    const smoothing = prefersReducedMotion ? 0.04 : 0.1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const recenterMouse = () => {
      const centerPoint = { x: canvas.width / 2, y: canvas.height / 2 };
      mouseRef.current = centerPoint;
      targetMouseRef.current = centerPoint;
    };

    const handleResize = () => {
      resizeCanvas();
      recenterMouse();
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseLeave = () => {
      recenterMouse();
    };

    resizeCanvas();
    recenterMouse();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const drawWave = (wave: WaveConfig) => {
      ctx.save();
      ctx.beginPath();

      for (let x = 0; x <= canvas.width; x += 4) {
        const dx = x - mouseRef.current.x;
        const dy = canvas.height / 2 - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / influenceRadius);
        const mouseEffect =
          influence *
          mouseInfluence *
          Math.sin(time * 0.001 + x * 0.01 + wave.offset);

        // Increased vertical distribution
        const baseline = canvas.height * 0.55; 
        const y =
          baseline +
          Math.sin(x * wave.frequency + time * 0.002 + wave.offset) *
            wave.amplitude +
          Math.sin(x * wave.frequency * 0.4 + time * 0.003) *
            (wave.amplitude * 0.6) +
          mouseEffect;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.lineWidth = 2.8;
      ctx.strokeStyle = wave.color;
      ctx.globalAlpha = wave.opacity;
      ctx.shadowBlur = 45;
      ctx.shadowColor = wave.color;
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      time += 1;

      mouseRef.current.x +=
        (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y +=
        (targetMouseRef.current.y - mouseRef.current.y) * smoothing;

      ctx.fillStyle = themeColors.backgroundTop;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      themeColors.wavePalette.forEach(drawWave);

      animationId = window.requestAnimationFrame(animate);
    };

    animationId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-black"
      role="region"
      aria-label="Glowing waves hero section"
    >
      <motion.div 
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 z-0"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        />

        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#ed7f18]/10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#ed7f18]/5 blur-[140px]" />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24 flex flex-col justify-center min-h-[85vh]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left h-full w-full"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(237,127,24,0.35)] bg-black/50 px-3 py-1 text-[11px] font-mediumtracking-[0.22em] text-orange-100/80 backdrop-blur w-fit"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-(--primary-color) shadow-[0_0_14px_rgba(237,127,24,0.95)]" />
            {badge}
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 mt-6 md:mt-8">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
              <span className="bg-[linear-gradient(90deg,var(--primary-color),#ffffff)] bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <p className="max-w-3xl text-balance text-sm leading-relaxed text-slate-200/80 md:text-base lg:text-lg">
              {description}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start gap-3 pt-6 md:pt-8 sm:flex-row sm:items-center sm:justify-start"
          >
            <button
              className="inline-flex items-center justify-center rounded-xl bg-(--primary-color) px-7 py-2.5 text-sm font-medium text-white shadow-[0_18px_60px_rgba(237,127,24,0.55)] transition hover:bg-[#ff8f28] hover:shadow-[0_20px_70px_rgba(237,127,24,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary-color) focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {primaryCTA.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              className="inline-flex items-center justify-center rounded-xl border border-(--primary-color) bg-black/40 px-7 py-2.5 text-sm font-medium text-slate-100 transition hover:border-(--primary-color) hover:bg-black/70 hover:text-(--primary-color) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary-color) focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 shadow-sm"
            >
              {secondaryCTA.label}
            </button>
          </motion.div>

          <motion.ul
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center justify-start gap-3 text-[10px] font-boldtracking-[0.2em] text-slate-500"
          >
            {highlightPills.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-white/5 bg-white/2 px-4 py-1.5 backdrop-blur"
              >
                {pill}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={statsVariants}
            className="mt-10 grid gap-4 rounded-2xl border border-white/5 bg-black/40 p-6 backdrop-blur-sm sm:grid-cols-3 max-w-3xl"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="space-y-1"
              >
                <div className="text-[10px] font-boldtracking-[0.3em] text-slate-500">
                  {stat.label}
                </div>
                <div className="text-2xl font-semibold text-white">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
