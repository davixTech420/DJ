"use client"

import { motion } from "framer-motion"
import { Instagram, Youtube, Music2, Heart, Facebook } from "lucide-react"
import Image from "next/image";

const socialIcons = [
  { icon: Instagram, href: "https://www.instagram.com/mala.sangredj?igsh=MWU3aGhzbW4xNWRldw==", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@Mala_sangre_oficial", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/share/1awRWMzdWD/", label: "Facebook" },
  { icon: Music2, href: "https://soundcloud.com/andres-ring-589967772", label: "SoundCloud" },
]

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-border overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[100px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
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

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialIcons.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-primary transition-colors">Inicio</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experiencia</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Precios</a>
            <a href="#music" className="hover:text-primary transition-colors">Musica</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contacto</a>
          </div>

          {/* Divider */}
          <motion.div
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
            <p>2026 DJ Mala Sangre. Todos los derechos reservados.</p>
            <span className="hidden sm:block">|</span>
            <p className="flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-secondary fill-secondary" /> para la musica
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
