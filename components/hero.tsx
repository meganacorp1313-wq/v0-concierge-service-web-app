import { MessageCircle, ChevronDown, Shield, Clock, Zap } from "lucide-react"
import type { Translations } from "@/lib/translations"

interface HeroProps {
  t: Translations
}

export function Hero({ t }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-balance mb-6">
          {t.hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          {t.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="https://wa.me/18492022782"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            {t.hero.whatsapp}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-primary text-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors w-full sm:w-auto justify-center"
          >
            {t.hero.requestService}
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield size={16} />
            <span>{t.hero.trust1}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{t.hero.trust2}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={16} />
            <span>{t.hero.trust3}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <a
          href="#services"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to services"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
