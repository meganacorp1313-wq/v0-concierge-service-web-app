import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-serif text-2xl tracking-tight">
              Casa Concierge
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Premium concierge services in Casa de Campo and La Romana. 
              Making your Dominican Republic experience unforgettable.
            </p>
            <a
              href="https://wa.me/18095551234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide mb-4">Services</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Villa Concierge
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Airport Transfers
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Private Chef
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Golf Tee Times
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Restaurant Reservations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@casaconcierge.com" className="hover:text-foreground transition-colors">
                  hello@casaconcierge.com
                </a>
              </li>
              <li>
                <a href="tel:+18095551234" className="hover:text-foreground transition-colors">
                  +1 (809) 555-1234
                </a>
              </li>
              <li className="pt-2">
                Casa de Campo<br />
                La Romana<br />
                Dominican Republic
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide mb-4">Legal</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Casa Concierge. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
