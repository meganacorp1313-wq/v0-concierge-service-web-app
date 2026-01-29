import { Metadata } from "next"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "Contact Us | Luxury Concierge",
  description:
    "Get in touch with our concierge team. WhatsApp, email, or use our contact form for the fastest response.",
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We{`'`}re here to help plan your perfect Dominican Republic
              experience. Reach out anytime.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
