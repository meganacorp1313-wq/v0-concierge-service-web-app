import { MapPin, DollarSign, BadgeCheck, Heart } from "lucide-react"
import type { Translations } from "@/lib/translations"

interface WhyUsProps {
  t: Translations
}

const icons = [MapPin, DollarSign, BadgeCheck, Heart]

export function WhyUs({ t }: WhyUsProps) {
  return (
    <section id="why-us" className="py-20 px-4 bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyUs.items.map((item, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-foreground" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
