"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ease = "easeOut" as const;

const particles = [
  { x: 15, y: 20, size: 3, delay: 0, dur: 4.2 },
  { x: 75, y: 15, size: 2, delay: 0.5, dur: 5.1 },
  { x: 85, y: 40, size: 4, delay: 1, dur: 3.8 },
  { x: 60, y: 70, size: 2.5, delay: 1.5, dur: 4.6 },
  { x: 30, y: 80, size: 2, delay: 0.8, dur: 5.3 },
  { x: 92, y: 60, size: 3, delay: 2, dur: 4.0 },
  { x: 45, y: 10, size: 2, delay: 1.2, dur: 6.0 },
  { x: 20, y: 55, size: 2.5, delay: 0.3, dur: 4.8 },
];

const stars = [
  { x: 10, y: 5, s: 1.5, o: 0.6, d: 2.1 },
  { x: 22, y: 12, s: 1, o: 0.3, d: 3.0 },
  { x: 35, y: 8, s: 1.2, o: 0.5, d: 2.5 },
  { x: 48, y: 3, s: 0.8, o: 0.4, d: 1.8 },
  { x: 60, y: 10, s: 1.5, o: 0.7, d: 2.8 },
  { x: 72, y: 6, s: 1, o: 0.3, d: 3.2 },
  { x: 83, y: 14, s: 1.3, o: 0.5, d: 2.3 },
  { x: 91, y: 4, s: 0.8, o: 0.6, d: 2.6 },
  { x: 15, y: 25, s: 1, o: 0.3, d: 3.5 },
  { x: 26, y: 30, s: 1.5, o: 0.4, d: 2.9 },
  { x: 40, y: 20, s: 0.8, o: 0.6, d: 1.9 },
  { x: 55, y: 28, s: 1.2, o: 0.3, d: 3.1 },
  { x: 65, y: 18, s: 1, o: 0.5, d: 2.4 },
  { x: 77, y: 22, s: 1.5, o: 0.4, d: 2.7 },
  { x: 88, y: 27, s: 0.8, o: 0.7, d: 2.0 },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const mountainY = useTransform(scrollY, [0, 600], [0, 60]);
  const haloScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const textY = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-parchment">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 w-full pt-20 pb-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen lg:min-h-0 lg:h-screen max-h-[900px]">

          {/* Left — Text */}
          <motion.div style={{ y: textY }} className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-5 h-px bg-gold" />
              <span className="section-label">Naman Choradia</span>
            </motion.div>

            <div className="overflow-hidden mb-6">
              {["Discipline.", "Research.", "Compounding."].map((word, i) => (
                <motion.div
                  key={word}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.12, ease }}
                >
                  <h1 className="font-cormorant font-300 text-hero text-navy leading-none tracking-[-0.02em]">
                    {word}
                  </h1>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="font-inter text-base text-muted leading-relaxed max-w-[420px] mb-10"
            >
              Documenting my journey through CA Final,<br />
              financial markets, technology,<br />
              and continuous learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/research"
                className="inline-flex items-center gap-2.5 bg-navy text-parchment font-inter text-[13px] font-500 tracking-[0.06em] uppercase px-6 py-3.5 hover:bg-navy-light transition-all duration-300 group"
              >
                Read Research
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/ca-final"
                className="inline-flex items-center gap-2.5 border border-navy/20 text-navy font-inter text-[13px] font-500 tracking-[0.06em] uppercase px-6 py-3.5 hover:border-navy/50 hover:bg-navy/5 transition-all duration-300 group"
              >
                Explore Vault
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="hidden lg:flex items-center gap-3 mt-14 text-navy/30"
            >
              <motion.div
                className="w-px h-8 bg-navy/20"
                animate={{ scaleY: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="font-inter text-[11px] tracking-[0.15em] uppercase">Scroll</span>
            </motion.div>
          </motion.div>

          {/* Right — Artistic Composition */}
          <div className="relative h-[400px] lg:h-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[52%] overflow-hidden">
            {/* Sky */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, #0d0404 0%, #2d0f02 8%, #6b2d0a 18%, #b8520f 30%, #d97c20 42%, #e8a53a 55%, #f2c86a 68%, #f7dfa0 80%, #faecc8 90%, #faf5e8 100%)" }}
            />

            {/* Stars */}
            {stars.map((star, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{ width: star.s, height: star.s, left: `${star.x}%`, top: `${star.y}%` }}
                animate={{ opacity: [star.o * 0.4, star.o, star.o * 0.4] }}
                transition={{ duration: star.d, delay: i * 0.13, repeat: Infinity }}
              />
            ))}

            {/* Halo */}
            <div className="absolute" style={{ right: "8%", top: "12%", width: "55%", aspectRatio: "1" }}>
              <motion.div style={{ scale: haloScale }} className="relative w-full h-full">
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-[-15%] rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(232,165,58,0.25) 0%, rgba(232,165,58,0.08) 50%, transparent 70%)" }}
                />
                <motion.div
                  animate={{ opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute inset-[-5%] rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(255,200,100,0.35) 0%, rgba(255,180,60,0.15) 40%, transparent 65%)" }}
                />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle at 50% 45%, rgba(255,220,140,0.9) 0%, rgba(255,180,60,0.6) 30%, rgba(200,100,20,0.3) 60%, transparent 80%)",
                    boxShadow: "0 0 80px 20px rgba(232,165,58,0.4), inset 0 0 40px rgba(255,220,100,0.3)",
                  }}
                />
                <div
                  className="absolute inset-[25%] rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(255,240,200,1) 0%, rgba(255,200,100,0.8) 50%, rgba(255,160,50,0.4) 100%)",
                    boxShadow: "0 0 40px 10px rgba(255,230,150,0.6)",
                  }}
                />
                <div
                  className="absolute inset-[10%] rounded-full"
                  style={{
                    border: "1px solid rgba(255,200,100,0.4)",
                    boxShadow: "0 0 30px rgba(255,180,60,0.2), inset 0 0 20px rgba(255,220,140,0.1)",
                  }}
                />
              </motion.div>
            </div>

            {/* Mountains */}
            <motion.div style={{ y: mountainY }} className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 800 360" preserveAspectRatio="xMidYMax slice" className="w-full h-auto block"
                style={{ filter: "drop-shadow(0 -8px 20px rgba(0,0,0,0.3))" }}>
                <path d="M0,360 L0,240 L80,170 L160,210 L240,140 L320,180 L400,110 L480,160 L560,120 L640,165 L720,130 L800,155 L800,360 Z" fill="#5c3010" opacity="0.7" />
                <path d="M0,360 L0,280 L60,240 L130,270 L200,210 L280,250 L360,180 L440,230 L520,195 L600,235 L680,200 L750,230 L800,210 L800,360 Z" fill="#3d1f08" opacity="0.85" />
                <path d="M0,360 L0,310 L50,285 L120,295 L200,265 L270,280 L340,250 L420,275 L500,255 L580,270 L650,248 L720,262 L800,250 L800,360 Z" fill="#1f0e04" opacity="0.9" />
                <path d="M0,360 L0,340 L200,320 L400,330 L600,315 L800,325 L800,360 Z" fill="#0d0704" />
              </svg>
            </motion.div>

            {/* Water */}
            <motion.div style={{ y: mountainY }} className="absolute bottom-0 left-0 right-0 h-[22%] pointer-events-none">
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(200,130,40,0.15) 0%, rgba(120,70,20,0.25) 50%, rgba(20,10,5,0.6) 100%)" }} />
              <div className="absolute top-0 left-[20%] right-[20%] h-px opacity-30" style={{ background: "linear-gradient(90deg, transparent, rgba(255,210,100,0.8), transparent)" }} />
            </motion.div>

            {/* Eagle */}
            <motion.div
              initial={{ x: -30, y: 20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1, ease }}
              className="absolute"
              style={{ right: "35%", top: "28%", width: "60px" }}
            >
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 100 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="50" cy="28" rx="14" ry="6" fill="#0d0704" opacity="0.9" />
                  <path d="M36,28 C28,20 10,14 0,20 C12,18 28,22 36,28 Z" fill="#0d0704" opacity="0.85" />
                  <path d="M36,28 C28,24 14,22 4,26 C14,22 30,26 36,28 Z" fill="#1a0e06" opacity="0.7" />
                  <path d="M64,28 C72,20 90,14 100,20 C88,18 72,22 64,28 Z" fill="#0d0704" opacity="0.85" />
                  <path d="M64,28 C72,24 86,22 96,26 C86,22 70,26 64,28 Z" fill="#1a0e06" opacity="0.7" />
                  <ellipse cx="59" cy="24" rx="7" ry="5" fill="#0d0704" opacity="0.95" />
                  <path d="M36,30 L28,36 L34,32 L30,38 L38,33 Z" fill="#0d0704" opacity="0.8" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Particles */}
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gold/30 pointer-events-none"
                style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
                animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
                transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}

            {/* Fade blend */}
            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #FAF8F5)" }} />
            <div className="absolute top-0 left-0 bottom-0 w-24 pointer-events-none hidden lg:block" style={{ background: "linear-gradient(to right, #FAF8F5, transparent)" }} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
