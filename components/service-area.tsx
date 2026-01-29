import { MapPin } from "lucide-react"
import type { Translations } from "@/lib/translations"

interface ServiceAreaProps {
  t: Translations
}

export function ServiceArea({ t }: ServiceAreaProps) {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
          {t.serviceArea.title}
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          {t.serviceArea.subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {t.serviceArea.locations.map((location, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 bg-card rounded-full px-6 py-3"
            >
              <MapPin size={16} className="text-muted-foreground" />
              <span className="font-medium">{location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
