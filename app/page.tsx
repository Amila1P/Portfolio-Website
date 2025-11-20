"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificatesSection } from "@/components/certificates-section"
import { PhotographySection } from "@/components/photography-section"
import { ArticlesSection } from "@/components/articles-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <CertificatesSection />
      <PhotographySection />
      <ArticlesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
