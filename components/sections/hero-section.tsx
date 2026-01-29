import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, hsl(25 15% 15% / 0.4), hsl(25 15% 15% / 0.6)), url('/images/hero-bg.jpg')` 
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <span className="inline-block text-sm uppercase tracking-[0.2em] text-background/80 mb-6">
          Casa de Campo & La Romana
        </span>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-background max-w-4xl mx-auto leading-tight text-balance">
          Luxury Concierge Services
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-background/90 max-w-2xl mx-auto leading-relaxed text-pretty">
          Elevate your Dominican Republic experience with personalized services 
          crafted for discerning travelers. From villa management to exclusive 
          reservations, we handle every detail.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://wa.me/18090000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white min-w-[200px]">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-background/50 text-background hover:bg-background hover:text-foreground min-w-[200px]"
            >
              <FileText className="mr-2 h-5 w-5" />
              Request a Quote
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-background/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
