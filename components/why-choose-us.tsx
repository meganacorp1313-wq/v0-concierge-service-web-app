import { Shield, MapPin, Heart, Clock } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description:
      "Years of experience serving discerning guests with impeccable attention to detail and the highest standards of service.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Deep knowledge of Casa de Campo and the surrounding area. We know the best-kept secrets and have the connections to make them accessible.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description:
      "Every guest is unique. We tailor our services to your specific needs, preferences, and schedule to create your perfect experience.",
  },
  {
    icon: Clock,
    title: "Available When You Need Us",
    description:
      "From pre-arrival planning to last-minute requests during your stay, our team is always ready to assist you.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Your Comfort is Our Priority
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We understand what it takes to create an exceptional stay. Our commitment 
            to excellence ensures your time in the Dominican Republic is nothing short of perfect.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <div key={reason.title} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full mx-auto mb-6">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
