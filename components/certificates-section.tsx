"use client"

import { useState } from "react"

export function CertificatesSection() {
  const [showHiddenCerts, setShowHiddenCerts] = useState(false)

  const certificates = [
    {
      title: "Introduction to Figma",
      issuer: "Simplilearn",
      date: "2025",
      image: "/assets/images/Introduction_to_Figma.jpg",
      link: "https://simpli-web.app.link/e/UrSmgsUPjYb",
    },
    {
      title: "Introduction to Adobe XD",
      issuer: "Simplilearn",
      date: "2025",
      image: "/assets/images/Introduction_to_Adobe_XD.jpg",
      link: "https://simpli-web.app.link/e/xRmUyMuQjYb",
    },
    {
      title: "Intro to Graphic Design; Basics of UI/UX",
      issuer: "Simplilearn",
      date: "2025",
      image: "/assets/images/Introduction_to_Graphic_Design;Basic_UI_UX.jpg",
      link: "https://simpli-web.app.link/e/e3nQnFbRjYb",
    },
    {
      title: "Introduction to Java",
      issuer: "Sololearn",
      date: "2025",
      image: "/assets/images/Introduction to Java_certificate.jpg",
      link: "https://www.sololearn.com/en/profile/34095545",
    },
  ]

  const hiddenCertificates = [
    {
      title: "Introduction to C++",
      issuer: "Sololearn",
      date: "2025",
      image: "/assets/images/Introduction to C++_certificate.jpg",
      link: "https://www.sololearn.com/en/profile/34095545",
    },
  ]

  const toggleCertificates = () => {
    setShowHiddenCerts(!showHiddenCerts)
  }

  return (
    <section id="certificates" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Certificates & Courses</h2>
          <div className="flex justify-center mb-6">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses I have completed to enhance my skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group fade-in-up block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-background rounded-xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 h-full flex flex-col">
                <div className="relative overflow-hidden bg-card h-40">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}, {cert.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Hidden Certificates Container */}
        <div
          id="hidden-certs"
          className={showHiddenCerts ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6" : "hidden"}
        >
          {hiddenCertificates.map((cert, index) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group fade-in-up block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-background rounded-xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 h-full flex flex-col">
                <div className="relative overflow-hidden bg-card h-40">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}, {cert.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mt-8">
          <button
            id="toggle-button"
            onClick={toggleCertificates}
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
          >
            {showHiddenCerts ? "Show Less" : "View All Certificates"}
          </button>
        </div>
      </div>
    </section>
  )
}

