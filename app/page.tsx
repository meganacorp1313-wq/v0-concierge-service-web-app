"use client"

import { useState } from "react"
import { translations, type Language } from "@/lib/translations"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { ServiceArea } from "@/components/service-area"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")
  const t = translations[language]

  return (
    <main className="relative">
      <Header t={t} language={language} onLanguageChange={setLanguage} />
      <Hero t={t} />
      <Services t={t} />
      <WhyUs t={t} />
      <HowItWorks t={t} />
      <Testimonials t={t} />
      <ServiceArea t={t} />
      <ContactForm t={t} />
      <Footer t={t} />
    </main>
  )
}
