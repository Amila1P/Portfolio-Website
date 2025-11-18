"use client"

export function ExpertiseSection() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["Node.js", "PostgreSQL", "Prisma", "REST APIs", "GraphQL"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "Vercel", "AWS", "GitHub"],
    },
    {
      category: "Design & UX",
      items: ["Figma", "UI/UX Design", "Responsive Design", "Web Accessibility", "Design Systems"],
    },
  ]

  return (
    <section id="expertise" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">My Expertise</h2>
          <div className="flex justify-center mb-6">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of skills and technologies to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-background rounded-xl p-6 border border-border hover:border-accent transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
