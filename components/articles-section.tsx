"use client"

export function ArticlesSection() {
  const articles = [
    {
      title: "From Code to Confidence: Why Building Real-World Projects is the Ultimate Developer Hack",
      excerpt:
        "Discover why building real-world projects is the ultimate developer hack for gaining confidence and practical skills.",
      date: "Nov 15, 2024",
      tags: ["Development", "Career", "Learning"],
      link: "https://medium.com/@codewaveacademy/from-code-to-confidence-why-building-real-world-projects-is-the-ultimate-developer-hack-3c9ac3f0ef8e",
    },
    {
      title: "The Practical Roadmap to Becoming a Job-Ready Developer",
      excerpt:
        "A practical guide on the roadmap to becoming a job-ready developer with actionable steps and insights.",
      date: "Nov 8, 2024",
      tags: ["Career", "Development", "Guide"],
      link: "https://medium.com/@codewaveacademy/the-practical-roadmap-to-becoming-a-job-ready-developer-b1fd3e6f6d90",
    },
    {
      title: "Escaping Tutorial Hell: How to Actually Start Building as a Self-Taught Developer",
      excerpt:
        "Learn how to escape tutorial hell and start building real projects as a self-taught developer with practical strategies.",
      date: "Oct 28, 2024",
      tags: ["Learning", "Self-Taught", "Tutorial"],
      link: "https://medium.com/@codewaveacademy/escaping-tutorial-hell-how-to-actually-start-building-as-a-self-taught-developer-f8e41ddf0e0b",
    },
  ]

  return (
    <section id="articles" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left side - GitHub section */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">GitHub & Articles</h2>
                <div className="w-12 h-1 bg-accent rounded-full"></div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Follow my open-source contributions and read my latest articles about web development and technology.
              </p>

              <a
                href="https://github.com/Amila1P"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub
              </a>
            </div>
          </div>

          {/* Right side - Articles list */}
          <div className="lg:col-span-2 space-y-6">
            {articles.map((article) => (
              <div
                key={article.title}
                className="group p-6 bg-background rounded-xl border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">{article.date}</span>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
