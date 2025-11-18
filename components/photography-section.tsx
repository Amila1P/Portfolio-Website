"use client"

export function PhotographySection() {
  const platforms = [
    {
      name: "Adobe Stock",
      icon: "/assets/images/stock photography icon/Adobe Stock Icon Logo.png",
      url: "https://stock.adobe.com/lk/contributor/212733795/Aura_Pixels",
      description: "Stock photography portfolio",
    },
    {
      name: "Shutterstock",
      icon: "/assets/images/stock photography icon/shutterstock-seeklogo.png",
      url: "https://www.shutterstock.com/g/Pathu_Art",
      description: "Premium stock images",
    },
    {
      name: "Dreamstime",
      icon: "/assets/images/stock photography icon/dreamstime-seeklogo.png",
      url: "https://www.dreamstime.com/pathummalaka76_info",
      description: "Royalty-free stock photos",
    },
  ]

  return (
    <section id="photography" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Stock Photography</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Apart from web development, I also work on stock photography platforms. Check out my photography work:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-xl p-6 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors group-hover:scale-110 transition-transform duration-300 p-2">
                  <img
                    src={platform.icon}
                    alt={`${platform.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {platform.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm"
                >
                  View
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
