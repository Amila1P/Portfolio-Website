"use client"

import { useState, useEffect } from "react"

export function HeroSection() {
  const roles = ["Full-Stack Developer", "Web Developer"]
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const current = roles[roleIndex]

    if (!isDeleting && charIndex < current.length) {
      // type next character
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 100)
    } else if (!isDeleting && charIndex === current.length) {
      // pause when finished typing
      timeout = setTimeout(() => setIsDeleting(true), 1100)
    } else if (isDeleting && charIndex > 0) {
      // delete characters
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40)
    } else if (isDeleting && charIndex === 0) {
      // move to next role
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((r) => (r + 1) % roles.length)
      }, 200)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex, roles])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decorative layers (no background image) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left side - Text content */}
        <div className="space-y-6 fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: "#E0E0E0" }}>
            AMILA PATHUM
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            <span className="text-accent">I'm a</span>{" "}
            <span className="relative inline-block">
              <span 
                className="bg-gradient-to-r from-[#39ff14] via-[#ff00ff] to-[#39ff14] bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% auto",
                  animation: "gradient 4s ease infinite"
                }}
              >
                {roles[roleIndex].slice(0, charIndex)}
              </span>
              <span className="text-[#ff00ff] animate-pulse ml-1">|</span>
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed slide-in-left">
            A University student passionate about building web applications and exploring modern technologies. Currently
            learning Full Stack Development while building real-world projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 fade-in" style={{ animationDelay: "0.3s" }}>
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-card text-foreground border border-accent/30 rounded-lg font-semibold hover:border-accent hover:bg-card/80 transition-all duration-200 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right side - Hero Image */}
        <div className="relative fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <img
              src="/assets/images/hero sec_back.png"
              alt="Developer working on code"
              className="relative w-full rounded-3xl border-2 border-accent/20 group-hover:border-accent/50 transition-all duration-300 object-cover shadow-2xl group-hover:shadow-accent/20 hover:shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
