import { MessageCircle } from "lucide-react"
import type { Translations } from "@/lib/translations"

interface HowItWorksProps {
  t: Translations
}

export function HowItWorks({ t }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.howItWorks.steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-serif text-2xl font-medium">
                {step.step}
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground bg-card rounded-full px-6 py-3 max-w-fit mx-auto">
          <MessageCircle size={16} />
          <span>{t.howItWorks.note}</span>
        </div>
      </div>
    </section>
  )
}
