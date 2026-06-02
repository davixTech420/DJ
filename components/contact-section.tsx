"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Mail, MapPin, Phone, MessageCircle } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", eventType: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent"
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[180px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[150px]"
          animate={{ scale: [1.2, 1, 1.2] }}
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
            <MessageCircle className="w-4 h-4" />
            Contactame
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="text-foreground">Hagamos </span>
            <motion.span
              className="bg-gradient-to-r from-primary via-secondary to-chart-4 bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Magia Juntos
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Para bookings, colaboraciones o simplemente saludar. Escribeme y hagamos algo increible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "booking@djneonpulse.com", description: "Respuesta en 24h" },
                { icon: Phone, label: "Telefono", value: "+1 (555) 123-4567", description: "Lun-Vie 9AM-6PM" },
                { icon: MapPin, label: "Ubicacion", value: "Los Angeles, CA", description: "Disponible mundialmente" },
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 p-6 bg-card/80 backdrop-blur-xl border border-border rounded-2xl hover:border-primary/50 transition-all cursor-pointer group"
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors"
                    whileHover={{ rotate: 10 }}
                  >
                    <contact.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="font-bold text-lg text-foreground">{contact.value}</p>
                    <p className="text-xs text-muted-foreground">{contact.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-xl border border-primary/20 rounded-2xl"
            >
              <h3 className="font-bold text-lg text-foreground mb-4">Respuesta Rapida Garantizada</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <motion.div
                    className="text-2xl font-black text-primary"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    24h
                  </motion.div>
                  <div className="text-xs text-muted-foreground">Tiempo de respuesta</div>
                </div>
                <div>
                  <motion.div
                    className="text-2xl font-black text-secondary"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.6, type: "spring" }}
                  >
                    100%
                  </motion.div>
                  <div className="text-xs text-muted-foreground">Satisfaccion</div>
                </div>
                <div>
                  <motion.div
                    className="text-2xl font-black text-chart-4"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.7, type: "spring" }}
                  >
                    500+
                  </motion.div>
                  <div className="text-xs text-muted-foreground">Eventos</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-border">
              {/* Decorative Glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-chart-4 rounded-3xl blur-xl opacity-20"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative">
                <h3 className="text-2xl font-bold text-foreground mb-2">Envia un Mensaje</h3>
                <p className="text-muted-foreground mb-8">
                  Cuentame sobre tu evento y te respondere lo antes posible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 bg-background rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all"
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 bg-background rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">Tipo de Evento</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all"
                      required
                    >
                      <option value="">Selecciona un tipo</option>
                      <option value="private">Fiesta Privada</option>
                      <option value="club">Club / Discoteca</option>
                      <option value="festival">Festival</option>
                      <option value="corporate">Evento Corporativo</option>
                      <option value="wedding">Boda</option>
                      <option value="other">Otro</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuentame sobre tu evento, fecha, ubicacion..."
                      rows={4}
                      className="w-full px-4 py-3 bg-background rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all resize-none"
                      required
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitted}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-lg transition-all ${
                      isSubmitted
                        ? "bg-green-500 text-white"
                        : "bg-gradient-to-r from-primary via-secondary to-chart-4 text-primary-foreground hover:shadow-lg hover:shadow-primary/30"
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-xl"
                        >
                          ok
                        </motion.span>
                        Mensaje Enviado
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
