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
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Photo - positioned first to appear at top */}
          <div className="flex items-center justify-center lg:order-2 lg:sticky lg:top-24">
            <div className="relative group">
              {/* soft gradient behind the portrait to frame it */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/25 to-accent/8 rounded-full blur-3xl opacity-20 group-hover:opacity-60 transition-all duration-500"></div>
              <div className="relative w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/60 transition-all duration-300 profile-photo">
                <img
                  src="/assets/images/AboutMe Image.jpg"
                  alt="About me image"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6 fade-in-up lg:order-1">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h2>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Amila Pathum, a highly motivated Computer Science student at the Eastern University, Sri Lanka, Trincomalee Campus. Coding and web creation have always been my core personal interest, driving my goal to become a professional Web Developer/Software Developer. I focus on applying strong programming and analytical skills to build robust web applications, while intensely bridging functionality with design. I am dedicated to mastering UI/UX principles to ensure my projects offer both powerful performance and intuitive user experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">🛠️ Technical Snapshot</span><br />
              <span className="font-medium text-foreground">Educational Foundation:</span> Computer Science Degree, Eastern University, Sri Lanka.<br />
              <span className="font-medium text-foreground">Web Development:</span> Proficient in core web technologies, modern frameworks (like React), and scalable architecture.<br />
              <span className="font-medium text-foreground">Design Focus:</span> Expertise in UI/UX principles, visual design, and prototyping tools.<br />
              <span className="font-medium text-foreground">Creative Edge:</span> My pursuit of stock photography sharpens my understanding of composition and visual storytelling, directly informing my approach to clean UI design.
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
        </div>
      </div>
    </section>
  )
}
