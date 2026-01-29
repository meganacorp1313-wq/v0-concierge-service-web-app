import { Shield, MapPin, MessageCircle, Clock, DollarSign } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Trusted & Discreet",
    description:
      "We serve high-profile clients with the utmost confidentiality and professionalism.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Deep connections and insider knowledge of Casa de Campo and the surrounding area.",
  },
  {
    icon: MessageCircle,
    title: "Fast WhatsApp Response",
    description:
      "Reach us instantly via WhatsApp for quick answers and real-time coordination.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance throughout your stay. We're always just a message away.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Clear, upfront pricing with no hidden fees. Know exactly what to expect.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            The Difference
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
