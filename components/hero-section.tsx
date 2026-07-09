"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Play,
  Music,
  Disc3,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Equalizer bars component
function EqualizerBars() {
  return (
    <div className="flex items-end gap-1 h-16">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 bg-gradient-to-t from-primary via-secondary to-chart- rounded-full"
          animate={{
            height: [
              `${20 + Math.random() * 60}%`,
              `${40 + Math.random() * 60}%`,
              `${10 + Math.random() * 50}%`,
              `${50 + Math.random() * 50}%`,
              `${20 + Math.random() * 60}%`,
            ],
          }}
          transition={{
            duration: 0.5 + Math.random() * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  );
}

// Vinyl record component
function VinylRecord() {
  return (
    <motion.div
      className="absolute -right-20 top-1/4 w-64 h-64 opacity-"
      animate={{ rotate: 180 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-8 border-gray-700">
        <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30" />
        <div className="absolute inset-[45%] rounded-full bg-gray-900" />
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-4 rounded-full border border-gray-700/30"
            style={{
              inset: `${16 + i * 8}px`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Pulse ring component
function PulseRing({
  delay = 0,
  size = 100,
}: {
  delay?: number;
  size?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full border-2 border-primary/30"
      style={{ width: size, height: size }}
      initial={{ scale: 0.8, opacity: 0.8 }}
      animate={{
        scale: [0.8, 2, 2.5],
        opacity: [0.8, 0.3, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeOut",
      }}
    />
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  const rotateX = useTransform(
    springY,
    [0, mounted ? window.innerHeight : 800],
    [5, -5],
  );

  const rotateY = useTransform(
    springX,
    [0, mounted ? window.innerWidth : 1200],
    [-5, 5],
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <VinylRecord />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - DJ Image with lots of effects */}
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0"
              style={{ rotateX, rotateY, transformPerspective: 1000 }}
            >
              {/* Image container */}

              <Image
                src="/images/dj-portrait.png"
                alt="Mala Sangre"
                width={400}
                height={533}
                className="object-cover w-full h-full"
                priority
              />

              <motion.div
                className="relative rounded-2xl overflow-hidden bg-background"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated overlay */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(0,240,255,0.2) 0%, transparent 50%, rgba(255,0,150,0.2) 100%)",
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
                  }}
                />
                {/* Moving light sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)",
                  }}
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 2,
                  }}
                />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </motion.div>
            </motion.div>

            {/* Floating Badge with more animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1, duration: 0.6, type: "spring" }}
              className="absolute -bottom-4 -right-4 lg:right-0"
            >
              <motion.div
                className="bg-card/90 backdrop-blur-xl border border-primary/50 rounded-2xl px-6 py-4 shadow-lg shadow-primary/20"
                animate={{
                  y: [0, -10, 0],
                  boxShadow: [
                    "0 10px 40px rgba(0, 240, 255, 0.2)",
                    "0 15px 50px rgba(0, 240, 255, 0.4)",
                    "0 10px 40px rgba(0, 240, 255, 0.2)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(74, 222, 128, 0.7)",
                        "0 0 0 10px rgba(74, 222, 128, 0)",
                        "0 0 0 0 rgba(74, 222, 128, 0)",
                      ],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-sm font-medium text-foreground">
                    Disponible
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Name & Info */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/40"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Disc3 className="w-4 h-4" />
              </motion.span>
              Artista Musical
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.span>
            </motion.span>

            {/* Main Title with effects */}
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 justify-center item-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.span className="flex shrink-0 justify-center lg:justify-start  ml-20  mr-20">
                <Image
                  src="/images/nameSangre.png"
                  alt="Mala Sangre"
                  width={400}
                  height={120}
                  className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] object-contain scale-1000"
                  priority
                />
              </motion.span>
            </motion.h1>

            {/* Equalizer under title */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <EqualizerBars />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Más que música, una experiencia.
              <motion.span
                className="text-primary font-semibold"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {" "}
                Ritmos envolventes, emociones intensas{" "}
              </motion.span>
              una conexión auténtica con cada persona en la pista
            </motion.p>

            {/* Animated Stats with more effects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-3 gap-4 mb-10"
            >
              {[
                { value: "500+", label: "Shows", icon: Music },
                { value: "10K", label: "Seguidores", icon: Sparkles },
                { value: "10", label: "Años Exp", icon: Zap },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="relative text-center p-4 rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur border border-primary/20 overflow-hidden group"
                  whileHover={{
                    scale: 1.08,
                    borderColor: "var(--primary)",
                    boxShadow: "0 0 30px rgba(0, 240, 255, 0.3)",
                  }}
                  initial={{ opacity: 0, y: 20, rotateY: -20 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ delay: 1.3 + i * 0.15, type: "spring" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                  <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary/60" />
                  <motion.span
                    className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 1.5 + i * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons with more effects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#music"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 0 50px rgba(0, 240, 255, 0.6), 0 0 100px rgba(255, 0, 150, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-chart-4 to-secondary text-primary-foreground font-bold rounded-full text-lg overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary via-chart-4 to-primary"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  style={{ opacity: 0.5 }}
                />
                <Play className="w-5 h-5 fill-current relative z-10" />
                <span className="relative z-10">Escuchar Ahora</span>
              </motion.a>
              <motion.a
                href="#pricing"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 240, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center gap-3 px-8 py-4 border-2 border-primary/50 text-foreground font-semibold rounded-full text-lg hover:bg-primary/10 hover:border-primary transition-all overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Ver Precios</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Sound Bars at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-center gap-1 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 rounded-t-full"
            style={{
              background: `linear-gradient(to top, var(--primary), var(--secondary))`,
            }}
            animate={{
              height: [
                `${10 + Math.random() * 20}px`,
                `${30 + Math.random() * 60}px`,
                `${10 + Math.random() * 20}px`,
              ],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 0.5 + Math.random() * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.02,
            }}
          />
        ))}
      </div>
    </section>
  );
}
