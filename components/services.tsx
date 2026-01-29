"use client"

import { useState } from "react"
import { Plane, Building2, Calendar, ShoppingBag, UtensilsCrossed, Car, Plus, Minus } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Private Aviation",
    description:
      "Access to an exclusive fleet of private jets and helicopters, with personalized itineraries and seamless travel coordination worldwide.",
  },
  {
    icon: Building2,
    title: "Luxury Accommodations",
    description:
      "Curated selection of the world's finest hotels, villas, and residences, with VIP treatment and exclusive amenities.",
  },
  {
    icon: Calendar,
    title: "Exclusive Events",
    description:
      "Priority access to sold-out concerts, fashion weeks, sporting events, and invitation-only galas around the globe.",
  },
  {
    icon: ShoppingBag,
    title: "Personal Shopping",
    description:
      "Dedicated stylists and access to limited-edition collections, private showrooms, and bespoke tailoring services.",
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    description:
      "Reservations at Michelin-starred restaurants, private chef experiences, and exclusive culinary journeys.",
  },
  {
    icon: Car,
    title: "Chauffeur Services",
    description:
      "Luxury ground transportation with professional chauffeurs, exotic car rentals, and yacht charters.",
  },
]

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Tailored Excellence for Every Occasion
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            From the moment you reach out, our dedicated team works tirelessly to ensure 
            every aspect of your experience exceeds expectations.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon
              const isExpanded = expandedIndex === index

              return (
                <div
                  key={service.title}
                  className="border border-border bg-background rounded-sm overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-sm">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <span className="font-serif text-lg">{service.title}</span>
                    </div>
                    {isExpanded ? (
                      <Minus className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Plus className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-muted-foreground leading-relaxed pl-16">
                        {service.description}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="hidden lg:block relative">
            <div className="sticky top-32 aspect-[4/5] bg-muted rounded-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <p className="font-serif text-2xl text-foreground mb-4">
                    Uncompromising Quality
                  </p>
                  <p className="text-muted-foreground">
                    Every service is delivered with meticulous attention to detail 
                    and an unwavering commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
