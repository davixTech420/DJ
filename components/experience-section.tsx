"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Award, Calendar, MapPin, Disc, Trophy, Zap } from "lucide-react"
import { useRef } from "react"

const experiences = [
  {
    year: "2024",
    title: "Tomorrowland Mainstage",
    location: "Boom, Bélgica",
    description: "Set principal en el festival más grande del mundo",
    icon: Trophy,
    highlight: true,
    image: "/images/event-1.jpg",
  },
  {
    year: "2023",
    title: "Ultra Music Festival",
    location: "Miami, USA",
    description: "Residencia de 3 días en el escenario principal",
    icon: Zap,
    highlight: false,
  },
  {
    year: "2022",
    title: "Amnesia Ibiza",
    location: "Ibiza, España",
    description: "Residencia de verano durante 4 meses",
    icon: Disc,
    highlight: true,
  },
  {
    year: "2021",
    title: "Electric Daisy Carnival",
    location: "Las Vegas, USA",
    description: "Show de cierre en el CosmicMEADOW",
    icon: Award,
    highlight: false,
  },
  {
    year: "2020",
    title: "Creamfields UK",
    location: "Daresbury, UK",
    description: "Debut internacional aclamado por la crítica",
    icon: Calendar,
    highlight: false,
  },
]

const stats = [
  { value: "15+", label: "Años de Carrera", icon: Calendar },
  { value: "40+", label: "Países Visitados", icon: MapPin },
  { value: "500+", label: "Shows en Vivo", icon: Disc },
  { value: "25", label: "Premios Ganados", icon: Trophy },
]

// Animated counter component
function AnimatedStat({ value, label, icon: Icon, index }: { value: string; label: string; icon: React.ElementType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="group relative"
    >

      <div className="relative bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all overflow-hidden">
        {/* Animated background pattern */}


        <motion.div
          className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-30"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Icon className="w-7 h-7 text-primary relative z-10" />
        </motion.div>

        <motion.div
          className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-chart-4 to-secondary bg-clip-text text-transparent mb-2"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + index * 0.15, type: "spring", stiffness: 150 }}
        >
          {value}
        </motion.div>
        <div className="text-sm text-muted-foreground font-medium">{label}</div>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section id="experience" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        {/* Animated orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-[120px]"
            style={{
              width: 200 + Math.random() * 200,
              height: 200 + Math.random() * 200,
              left: `${i * 20}%`,
              top: `${(i % 3) * 30}%`,
              background: i % 3 === 0
                ? "rgba(0, 240, 255, 0.15)"
                : i % 3 === 1
                  ? "rgba(255, 0, 150, 0.15)"
                  : "rgba(120, 0, 255, 0.12)",
            }}
            animate={{
              scale: [1, 1.4, 1],
              x: [0, (Math.random() - 0.5) * 100, 0],
              y: [0, (Math.random() - 0.5) * 100, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Animated grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 0, 150, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating music notes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl pointer-events-none"
          style={{
            left: `${5 + i * 7}%`,
            top: `${10 + (i % 5) * 18}%`,
            color: i % 3 === 0 ? "var(--primary)" : i % 3 === 1 ? "var(--secondary)" : "var(--chart-4)",
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 0.4, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {i % 4 === 0 ? "♪" : i % 4 === 1 ? "♫" : i % 4 === 2 ? "♬" : "★"}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header with animated elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="text-foreground">Mi </span>
            <motion.span
              className="relative inline-block"
            >
              <motion.span
                className="bg-gradient-to-r from-chart-4 via-primary to-secondary bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                Experiencia
              </motion.span>
              {/* Underline animation */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-chart-4 via-primary to-secondary rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de una década llevando la música a una experiancia inolvidable
          </p>
        </motion.div>

        {/* Stats Grid with enhanced animations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <AnimatedStat key={stat.label} {...stat} index={index} />
          ))}
        </motion.div>

        {/* Timeline with enhanced visuals */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1"
            style={{
              background: "linear-gradient(to bottom, var(--primary), var(--secondary), var(--chart-4), var(--primary))",
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />


          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year + exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
                className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
              >
                {/* Animated Timeline Dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
                  whileHover={{ scale: 1.5 }}
                >
                  <motion.div
                    className={`w-6 h-6 rounded-full ${exp.highlight
                      ? "bg-gradient-to-r from-primary via-secondary to-chart-4"
                      : "bg-card border-2 border-primary"
                      }`}
                    animate={exp.highlight ? {
                      boxShadow: [
                        "0 0 0 0 rgba(0, 240, 255, 0.7)",
                        "0 0 0 20px rgba(0, 240, 255, 0)",
                      ],
                      rotate: [0, 360],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className={`group relative p-8 bg-card/90 backdrop-blur-xl border rounded-3xl ${exp.highlight ? "border-primary/50" : "border-border"
                      } hover:border-primary/50 transition-all overflow-hidden`}
                  >
                    {/* Animated gradient background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: "linear-gradient(135deg, rgba(0,240,255,0.05) 0%, rgba(255,0,150,0.05) 50%, rgba(120,0,255,0.05) 100%)",
                      }}
                    />

                    {/* Highlight Glow */}
                    {exp.highlight && (
                      <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-chart-4 rounded-3xl blur-xl"
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    )}



                    <div className="relative z-10">
                      {/* Year Badge with animation */}
                      <motion.span
                        className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-bold text-primary bg-primary/10 rounded-full border border-primary/30"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Calendar className="w-4 h-4" />
                        {exp.year}
                      </motion.span>

                      {/* Icon & Title */}
                      <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse md:justify-end" : ""}`}>
                        <motion.div
                          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <exp.icon className="w-7 h-7 text-primary" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      </div>

                      {/* Location with icon */}
                      <motion.div
                        className={`flex items-center gap-2 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}
                        whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                      >
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span>{exp.location}</span>
                      </motion.div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
