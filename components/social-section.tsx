"use client"

import { motion } from "framer-motion"
import { Instagram, Youtube, Music2, Twitter, Twitch, ExternalLink } from "lucide-react"

const socials = [
  {
    name: "Instagram",
    handle: "@djneonpulse",
    followers: "45.2K",
    icon: Instagram,
    color: "from-purple-500 via-pink-500 to-orange-400",
    link: "#",
    description: "Behind the scenes & daily vibes",
  },
  {
    name: "Spotify",
    handle: "DJ Neon Pulse",
    followers: "120K",
    icon: Music2,
    color: "from-green-500 to-green-400",
    link: "#",
    description: "Escucha mis últimos sets",
  },
  {
    name: "YouTube",
    handle: "DJ Neon Pulse",
    followers: "89K",
    icon: Youtube,
    color: "from-red-500 to-red-600",
    link: "#",
    description: "Live sets & music videos",
  },
  {
    name: "SoundCloud",
    handle: "neonpulse",
    followers: "67K",
    icon: Music2,
    color: "from-orange-500 to-orange-600",
    link: "#",
    description: "Exclusive mixes & remixes",
  },
  {
    name: "Twitter/X",
    handle: "@djneonpulse",
    followers: "32K",
    icon: Twitter,
    color: "from-gray-100 to-gray-300",
    link: "#",
    description: "Noticias & actualizaciones",
  },
  {
    name: "Twitch",
    handle: "djneonpulse",
    followers: "28K",
    icon: Twitch,
    color: "from-purple-600 to-purple-700",
    link: "#",
    description: "Live streaming sessions",
  },
]

export function SocialSection() {
  return (
    <section id="social" className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[180px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-widest text-secondary uppercase bg-secondary/10 rounded-full border border-secondary/30"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            Conecta Conmigo
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="text-foreground">Redes </span>
            <motion.span
              className="bg-gradient-to-r from-secondary via-primary to-chart-4 bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Sociales
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sígueme en todas las plataformas para no perderte ningún lanzamiento, show en vivo o contenido exclusivo.
          </p>
        </motion.div>

        {/* Social Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Hover Glow */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${social.color} rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
              />

              <div className="relative bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6 h-full hover:border-transparent transition-colors">
                <div className="flex items-start justify-between mb-4">
                  {/* Icon with gradient background */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <social.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* External Link Icon */}
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                  >
                    <ExternalLink className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-1">{social.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">{social.handle}</p>
                <p className="text-sm text-muted-foreground mb-4">{social.description}</p>

                {/* Followers */}
                <div className="flex items-center gap-2">
                  <motion.div
                    className="px-3 py-1 bg-muted/50 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm font-semibold text-foreground">{social.followers}</span>
                    <span className="text-xs text-muted-foreground ml-1">seguidores</span>
                  </motion.div>
                </div>

                {/* Animated Border Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${social.color} rounded-b-2xl`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Total Reach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border rounded-3xl"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Alcance Total</span>
            <motion.div
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-primary via-secondary to-chart-4 bg-clip-text text-transparent"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3 }}
            >
              380K+
            </motion.div>
            <span className="text-muted-foreground">Seguidores en todas las plataformas</span>
            
            {/* Animated dots */}
            <div className="flex items-center gap-2 mt-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
