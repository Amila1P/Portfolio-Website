"use client"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      tags: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, user authentication, and team workspaces.",
      tags: ["React", "Firebase", "Tailwind CSS", "WebSocket"],
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization dashboard with interactive charts, real-time metrics, and custom reporting features.",
      tags: ["Next.js", "Recharts", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Mobile App Backend",
      description:
        "RESTful API backend for a mobile application with authentication, file uploads, and third-party integrations.",
      tags: ["Node.js", "Express", "PostgreSQL", "AWS S3"],
      link: "#",
    },
    {
      title: "Design System",
      description: "Comprehensive component library and design system with documentation and Storybook integration.",
      tags: ["React", "TypeScript", "Storybook", "CSS-in-JS"],
      link: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "Web application leveraging AI APIs to generate and optimize content with user preferences and history.",
      tags: ["Next.js", "OpenAI", "Supabase", "React Query"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="flex justify-center mb-6">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of recent projects showcasing my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              className="group bg-card rounded-xl p-6 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 cursor-pointer fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">View Project</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7m0 0l-7 7m7-7H5" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
