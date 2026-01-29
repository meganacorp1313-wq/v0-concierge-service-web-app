import { Star } from "lucide-react"
import type { Translations } from "@/lib/translations"

interface TestimonialsProps {
  t: Translations
}

export function Testimonials({ t }: TestimonialsProps) {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-foreground text-foreground"
                  />
                ))}
              </div>
              <p className="text-foreground mb-4 text-pretty">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
