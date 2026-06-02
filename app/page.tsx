"use client"

import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { PricingSection } from "@/components/pricing-section"
import { MusicSection } from "@/components/music-section"
import { SocialSection } from "@/components/social-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <PricingSection />
      <MusicSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
