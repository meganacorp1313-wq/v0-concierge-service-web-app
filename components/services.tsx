import {
  Plane,
  Home,
  ChefHat,
  Trophy,
  Car,
  UtensilsCrossed,
  Baby,
  Sparkles,
} from "lucide-react"
import type { Translations } from "@/lib/translations"

interface ServicesProps {
  t: Translations
}

const icons = [
  Plane,
  Home,
  ChefHat,
  Trophy,
  Car,
  UtensilsCrossed,
  Baby,
  Sparkles,
]

export function Services({ t }: ServicesProps) {
  return (
    <section id="services" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-foreground" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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
