import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Exceptional Service, Effortless Luxury
        </p>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-balance max-w-4xl mx-auto">
          Where Every Detail Becomes an Extraordinary Experience
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          Aureum Concierge delivers bespoke services tailored to the most discerning individuals. 
          From private aviation to exclusive events, we transform your vision into reality.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-sm w-full sm:w-auto"
          >
            Begin Your Journey
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium border border-border hover:bg-secondary transition-colors rounded-sm w-full sm:w-auto"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}
