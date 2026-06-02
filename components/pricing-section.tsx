"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Check, Star, Sparkles, Music, Mic, Users, Clock, Zap, Crown, Disc3 } from "lucide-react"
import { useState } from "react"

const packages = [
  {
    name: "Básico",
    subtitle: "Eventos Privados",
    price: "500",
    duration: "3 horas",
    icon: Music,
    color: "primary",
    features: [
      "Set de 3 horas",
      "Equipo de sonido básico",
      "Iluminación LED",
      "Biblioteca musical",
      "Coordinación previa",
    ],
    popular: false,
  },
  {
    name: "Premium",
    subtitle: "Clubes & Festivales",
    price: "1,200",
    duration: "5 horas",
    icon: Crown,
    color: "secondary",
    features: [
      "Set de 5 horas",
      "Equipo de sonido profesional",
      "Show de luces sincronizado",
      "Efectos visuales",
      "Tracks exclusivos",
      "Meet & Greet VIP",
    ],
    popular: true,
  },
  {
    name: "Élite",
    subtitle: "Grandes Eventos",
    price: "2,500",
    duration: "Full Night",
    icon: Star,
    color: "chart-4",
    features: [
      "Set completo toda la noche",
      "Sistema de sonido premium",
      "Producción visual completa",
      "DJ invitado apertura",
      "Contenido para redes",
      "Streaming en vivo",
      "Afterparty set",
    ],
    popular: false,
  },
]

// Animated equalizer for cards
function MiniEqualizer({ color }: { color: string }) {
  return (
    <div className="flex items-end gap-0.5 h-6">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`w-1 bg-${color} rounded-full`}
          animate={{
            height: [
              `${30 + Math.random() * 70}%`,
              `${50 + Math.random() * 50}%`,
              `${20 + Math.random() * 60}%`,
            ],
          }}
          transition={{
            duration: 0.4 + Math.random() * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  )
}

// Floating particles component
function FloatingParticles({ count = 10, color = "primary" }: { count?: number; color?: string }) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full bg-${color}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, (Math.random() - 0.5) * 20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </>
  )
}

export function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Pulsing orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-[100px]"
            style={{
              width: 150 + Math.random() * 200,
              height: 150 + Math.random() * 200,
              left: `${i * 15}%`,
              top: `${(i % 4) * 25}%`,
              background: i % 3 === 0 
                ? "rgba(0, 240, 255, 0.15)" 
                : i % 3 === 1 
                  ? "rgba(255, 0, 150, 0.15)" 
                  : "rgba(120, 0, 255, 0.12)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ 
              duration: 5 + Math.random() * 3, 
              repeat: Infinity, 
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Animated music notes floating */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xl pointer-events-none"
          style={{
            left: `${5 + i * 8}%`,
            top: `${15 + (i % 4) * 20}%`,
            color: i % 3 === 0 ? "var(--primary)" : i % 3 === 1 ? "var(--secondary)" : "var(--chart-4)",
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0, 0.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        >
          {i % 3 === 0 ? "♪" : i % 3 === 1 ? "♫" : "★"}
        </motion.div>
      ))}

      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 0, 150, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/30"
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Disc3 className="w-4 h-4" />
            </motion.span>
            Precios & Paquetes
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span>
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="text-foreground">Tipos de </span>
            <motion.span
              className="relative inline-block"
            >
              <motion.span
                className="bg-gradient-to-r from-primary via-secondary to-chart-4 bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                Shows
              </motion.span>
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-chart-4 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiencias únicas adaptadas a cada tipo de evento. Desde fiestas privadas hasta festivales masivos.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 80, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 80 }}
              whileHover={{ y: -15, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`relative group ${pkg.popular ? "md:-mt-8 md:mb-8" : ""}`}
            >
              {/* Popular Badge with animation */}
              {pkg.popular && (
                <motion.div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 z-20"
                  initial={{ y: -30, opacity: 0, scale: 0 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                >
                  <motion.span 
                    className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary via-secondary to-chart-4 text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(0, 240, 255, 0.5)",
                        "0 0 40px rgba(255, 0, 150, 0.5)",
                        "0 0 20px rgba(0, 240, 255, 0.5)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Crown className="w-4 h-4" />
                    </motion.span>
                    Más Popular
                  </motion.span>
                </motion.div>
              )}

              {/* Rotating glow effect */}
              <AnimatePresence>
                {(hoveredCard === index || pkg.popular) && (
                  <motion.div
                    className="absolute -inset-1 rounded-3xl"
                    style={{
                      background: "conic-gradient(from 0deg, var(--primary), var(--secondary), var(--chart-4), var(--primary))",
                      filter: "blur(15px)",
                    }}
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ opacity: pkg.popular ? 0.4 : 0.6, rotate: 360 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      opacity: { duration: 0.3 },
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Card Content */}
              <div
                className={`relative h-full bg-card/90 backdrop-blur-xl rounded-3xl p-8 border ${
                  pkg.popular ? "border-primary/50" : "border-border"
                } flex flex-col overflow-hidden`}
              >
                {/* Floating particles inside card */}
                <FloatingParticles count={8} color={pkg.color} />

                {/* Animated background pulse */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br from-${pkg.color}/5 to-transparent`}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />

                {/* Icon with equalizer */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${pkg.color}/20 to-${pkg.color}/5 flex items-center justify-center border border-${pkg.color}/30`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <pkg.icon className={`w-8 h-8 text-${pkg.color}`} />
                  </motion.div>
                  <MiniEqualizer color={pkg.color} />
                </div>

                {/* Name & Subtitle */}
                <h3 className="relative z-10 text-2xl font-bold text-foreground mb-1">{pkg.name}</h3>
                <p className="relative z-10 text-sm text-muted-foreground mb-6">{pkg.subtitle}</p>

                {/* Price with animation */}
                <div className="relative z-10 mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-muted-foreground text-lg">$</span>
                    <motion.span
                      className={`text-5xl font-black bg-gradient-to-r from-${pkg.color} to-${
                        pkg.color === "primary" ? "secondary" : pkg.color === "secondary" ? "chart-4" : "primary"
                      } bg-clip-text text-transparent`}
                      initial={{ scale: 0, rotate: -20 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 150 }}
                    >
                      {pkg.price}
                    </motion.span>
                    <span className="text-muted-foreground text-sm">USD</span>
                  </div>
                  <motion.div 
                    className="flex items-center gap-2 mt-3 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Clock className={`w-4 h-4 text-${pkg.color}`} />
                    <span>{pkg.duration}</span>
                  </motion.div>
                </div>

                {/* Features with staggered animation */}
                <ul className="relative z-10 space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.08 }}
                    >
                      <motion.div 
                        className={`w-6 h-6 rounded-full bg-${pkg.color}/20 flex items-center justify-center flex-shrink-0 border border-${pkg.color}/30`}
                        whileHover={{ scale: 1.2, rotate: 180 }}
                      >
                        <Check className={`w-3.5 h-3.5 text-${pkg.color}`} />
                      </motion.div>
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button with effects */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative z-10 w-full py-4 rounded-xl font-bold text-center transition-all overflow-hidden ${
                    pkg.popular
                      ? "bg-gradient-to-r from-primary via-secondary to-chart-4 text-primary-foreground"
                      : "bg-muted/50 text-foreground hover:bg-muted"
                  }`}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <span className="relative z-10">Reservar Ahora</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Package CTA with animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <motion.div 
            className="inline-flex items-center gap-6 p-8 bg-card/80 backdrop-blur-xl border border-border rounded-3xl"
            whileHover={{ scale: 1.02, borderColor: "var(--primary)" }}
          >
            <motion.div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Users className="w-8 h-8 text-primary" />
            </motion.div>
            <div className="text-left">
              <p className="font-bold text-lg text-foreground">Evento Corporativo o Especial?</p>
              <p className="text-sm text-muted-foreground">Contacta para un presupuesto personalizado</p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary font-bold rounded-xl hover:from-primary/30 hover:to-secondary/30 transition-all border border-primary/30"
            >
              Contactar
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
