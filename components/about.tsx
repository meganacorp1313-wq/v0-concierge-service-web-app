export function About() {
  const stats = [
    { value: "15+", label: "Years of Excellence" },
    { value: "500+", label: "Global Partners" },
    { value: "24/7", label: "Dedicated Support" },
    { value: "98%", label: "Client Satisfaction" },
  ]

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              About Aureum
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Redefining the Art of Luxury Service
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded on the principle that true luxury lies in the details, Aureum Concierge 
                has spent over a decade cultivating relationships with the world&apos;s most 
                exclusive venues, services, and experiences.
              </p>
              <p>
                Our team of seasoned professionals brings together expertise from hospitality, 
                travel, and lifestyle management to deliver solutions that are as unique as 
                our clients themselves.
              </p>
              <p>
                Whether you seek the impossible reservation, the sold-out experience, or simply 
                wish to reclaim your most precious resource—time—we are your trusted partner 
                in making it happen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-secondary/50 p-8 rounded-sm text-center"
              >
                <p className="font-serif text-4xl lg:text-5xl text-accent">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
