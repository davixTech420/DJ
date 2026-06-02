"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play, Pause, ExternalLink, Headphones, Music2, Radio } from "lucide-react"
import Image from "next/image"

const tracks = [
  {
    id: 1,
    title: "Electric Dreams",
    album: "Neon Horizons",
    duration: "6:42",
    plays: "2.4M",
    bpm: 128,
  },
  {
    id: 2,
    title: "Midnight Pulse",
    album: "Dark Matter",
    duration: "5:18",
    plays: "1.8M",
    bpm: 126,
  },
  {
    id: 3,
    title: "Synthetic Love",
    album: "Neon Horizons",
    duration: "7:05",
    plays: "3.1M",
    bpm: 130,
  },
  {
    id: 4,
    title: "Digital Rain",
    album: "Dark Matter",
    duration: "4:56",
    plays: "1.2M",
    bpm: 124,
  },
  {
    id: 5,
    title: "Future State",
    album: "Neon Horizons",
    duration: "5:33",
    plays: "890K",
    bpm: 132,
  },
]

const platforms = [
  { name: "Spotify", color: "#1DB954", icon: Music2 },
  { name: "Apple Music", color: "#FA243C", icon: Music2 },
  { name: "SoundCloud", color: "#FF5500", icon: Radio },
  { name: "Beatport", color: "#00FFBF", icon: Headphones },
]

export function MusicSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [playingTrack, setPlayingTrack] = useState<number | null>(null)
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null)

  return (
    <section id="music" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]"
          animate={{ scale: [1.2, 1, 1.2], x: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/30"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Headphones className="w-4 h-4" />
            Escucha Mi Musica
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="text-foreground">Mis </span>
            <motion.span
              className="bg-gradient-to-r from-primary via-secondary to-chart-4 bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Tracks
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escucha mis ultimos lanzamientos y sets exclusivos en todas las plataformas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Featured Release */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Ultimo Lanzamiento
            </span>
            <h3 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-foreground">
              Neon
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Horizons
              </span>
            </h3>

            {/* Album Art */}
            <motion.div
              className="relative aspect-square rounded-3xl overflow-hidden mb-8 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glowing Border */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-chart-4 rounded-3xl blur-xl opacity-40"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/images/studio.jpg"
                  alt="Album Cover"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Play Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-2xl shadow-primary/30"
                  >
                    <Play className="w-10 h-10 text-primary-foreground fill-current ml-1" />
                  </motion.button>
                </motion.div>

                {/* Album Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-muted-foreground">Album  2026</p>
                  <p className="text-lg font-semibold text-foreground">12 Tracks  68 min</p>
                </div>

                {/* Animated Equalizer */}
                <div className="absolute top-4 right-4 flex items-end gap-1 h-8 p-2 bg-background/50 backdrop-blur rounded-lg">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-primary rounded-full"
                      animate={{
                        height: ["8px", "24px", "12px", "20px", "8px"],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Platform Links */}
            <div className="grid grid-cols-2 gap-4">
              {platforms.map((platform, i) => (
                <motion.a
                  key={platform.name}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card/80 backdrop-blur border border-border text-sm font-medium text-foreground hover:border-primary/50 transition-all group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${platform.color}20` }}
                  >
                    <platform.icon className="w-5 h-5" style={{ color: platform.color }} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{platform.name}</p>
                    <p className="text-xs text-muted-foreground">Escuchar ahora</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Track List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Music2 className="w-5 h-5 text-primary" />
              Tracks Populares
            </h3>
            
            <div className="space-y-3">
              {tracks.map((track, i) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  onMouseEnter={() => setHoveredTrack(track.id)}
                  onMouseLeave={() => setHoveredTrack(null)}
                  className={`group flex items-center gap-4 p-4 rounded-xl transition-all cursor-pointer ${
                    playingTrack === track.id
                      ? "bg-gradient-to-r from-primary/20 to-secondary/10 border border-primary/30"
                      : "bg-card/50 backdrop-blur border border-transparent hover:border-border hover:bg-card"
                  }`}
                >
                  {/* Track Number / Play Button */}
                  <div className="w-12 h-12 flex items-center justify-center">
                    {hoveredTrack === track.id || playingTrack === track.id ? (
                      <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        onClick={() => setPlayingTrack(playingTrack === track.id ? null : track.id)}
                        className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20"
                      >
                        {playingTrack === track.id ? (
                          <Pause className="w-5 h-5 text-primary-foreground fill-current" />
                        ) : (
                          <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
                        )}
                      </motion.button>
                    ) : (
                      <span className="text-2xl font-bold text-muted-foreground/50">{String(i + 1).padStart(2, "0")}</span>
                    )}
                  </div>

                  {/* Track Info */}
                  <div className="flex-1 min-w-0">
                    <p className={`font-bold text-lg truncate ${playingTrack === track.id ? "text-primary" : "text-foreground"}`}>
                      {track.title}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{track.album}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span>{track.bpm} BPM</span>
                    </div>
                  </div>

                  {/* Plays */}
                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-sm font-semibold text-foreground">{track.plays}</span>
                    <span className="text-xs text-muted-foreground">plays</span>
                  </div>

                  {/* Duration */}
                  <span className="text-sm text-muted-foreground font-mono px-3 py-1 bg-muted/30 rounded-lg">{track.duration}</span>

                  {/* Playing Animation */}
                  {playingTrack === track.id && (
                    <div className="flex items-end gap-0.5 h-6">
                      {[...Array(4)].map((_, j) => (
                        <motion.div
                          key={j}
                          className="w-1.5 bg-gradient-to-t from-primary to-secondary rounded-full"
                          animate={{
                            height: ["6px", "20px", "10px", "18px", "6px"],
                          }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: j * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* View All Button */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="mt-6 w-full flex items-center justify-center gap-2 p-4 rounded-xl border border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-colors"
            >
              Ver Toda la Discografia
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
