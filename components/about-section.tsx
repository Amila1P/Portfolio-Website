"use client"

import { useState, useEffect, useRef } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 fade-in-up">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h2>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an undergraduate Computer Science student passionate about building web applications and exploring
              modern technologies. I'm currently learning Full Stack Development and building real-world projects to
              strengthen my skills.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with curiosity about how web applications work. Today, I'm focused on creating
              seamless user experiences using modern web technologies, with a special interest in React, Next.js, and
              cloud infrastructure.
            </p>

            <div className="pt-4 space-y-4" ref={ref}>
              <div
                className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? "zoom-in" : "opacity-0"}`}
              >
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1 hover-zoom">
                  <svg className="w-4 h-4 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Full-Stack Development</h3>
                  <p className="text-muted-foreground text-sm">Frontend and backend expertise</p>
                </div>
              </div>

              <div
                className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? "zoom-in" : "opacity-0"}`}
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1 hover-zoom">
                  <svg className="w-4 h-4 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">User-Focused Design</h3>
                  <p className="text-muted-foreground text-sm">Beautiful and intuitive interfaces</p>
                </div>
              </div>

              <div
                className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? "zoom-in" : "opacity-0"}`}
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1 hover-zoom">
                  <svg className="w-4 h-4 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Performance Optimization</h3>
                  <p className="text-muted-foreground text-sm">Fast, efficient, and scalable code</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/30 group-hover:border-accent/60 transition-all duration-300 profile-photo">
                <img src="/assets/images/hero images.png" alt="Hero image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
