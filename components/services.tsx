"use client"

import { Home, Plane, ChefHat, Flag, Baby, UtensilsCrossed, Sparkles } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Villa Concierge",
    description:
      "Complete villa management and preparation before your arrival. Stocking groceries, arranging housekeeping, pool maintenance, and ensuring everything is perfect for your stay.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Seamless private transportation from Punta Cana or La Romana airports. Professional drivers, luxury vehicles, and meet-and-greet service included.",
  },
  {
    icon: ChefHat,
    title: "Private Chef",
    description:
      "Experience gourmet dining in the comfort of your villa. Our network of talented private chefs prepare exquisite meals tailored to your preferences and dietary requirements.",
  },
  {
    icon: Flag,
    title: "Golf Tee Times",
    description:
      "Priority reservations at world-renowned Casa de Campo courses including Teeth of the Dog, Dye Fore, and The Links. Equipment rental and caddy arrangements available.",
  },
  {
    icon: Baby,
    title: "Babysitting & Kids Equipment",
    description:
      "Trusted, vetted babysitters and nannies available for your peace of mind. We also provide cribs, high chairs, strollers, and children's entertainment.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Reservations",
    description:
      "Access to the finest restaurants in Casa de Campo and La Romana. We secure tables at exclusive venues and can arrange special occasions and celebrations.",
  },
  {
    icon: Sparkles,
    title: "Events & Special Requests",
    description:
      "From intimate dinners to grand celebrations, yacht charters to spa days, excursions to surprise arrangements. No request is too big or small.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Everything You Need, Handled with Care
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            From the moment you arrive until your departure, we ensure every aspect 
            of your stay is seamless and memorable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="bg-background border border-border p-8 rounded-sm hover:border-accent/50 transition-colors"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-secondary rounded-sm mb-6">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
