import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Casa de Campo &amp; La Romana, Dominican Republic
        </p>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-balance max-w-4xl mx-auto">
          Your Personal Concierge for an Unforgettable Stay
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          Experience the finest personalized services in the Dominican Republic. 
          From villa management to exclusive experiences, we handle every detail so you can relax.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/18095551234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium bg-[#25D366] text-white hover:bg-[#22c55e] transition-colors rounded-sm w-full sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-sm w-full sm:w-auto"
          >
            Request Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
