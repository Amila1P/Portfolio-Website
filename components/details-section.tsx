"use client"

export function DetailsSection() {
  const details = [
    {
      title: "Years of Experience",
      value: "5+",
      description: "Building modern web applications and solving complex problems",
      icon: "🚀",
    },
    {
      title: "Projects Completed",
      value: "20+",
      description: "From startups to enterprise-level applications",
      icon: "✨",
    },
    {
      title: "Technologies Mastered",
      value: "15+",
      description: "React, Next.js, Node.js, TypeScript, and more",
      icon: "⚡",
    },
    {
      title: "Happy Clients",
      value: "30+",
      description: "Delivered solutions that exceeded expectations",
      icon: "🎯",
    },
  ]

  return (
    <section id="details" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">By The Numbers</h2>
          <div className="flex justify-center mb-6">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my professional journey and the impact I've created through my work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <div
              key={detail.title}
              className="group bg-background rounded-2xl p-8 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 cursor-pointer fade-in-up hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{detail.icon}</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-2">{detail.value}</h3>
              <p className="font-semibold text-foreground mb-2">{detail.title}</p>
              <p className="text-sm text-muted-foreground">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
