import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Villa Concierge", href: "/services#villa-concierge" },
    { name: "Airport Transfers", href: "/services#airport-transfers" },
    { name: "Private Chef", href: "/services#private-chef" },
    { name: "Golf Tee Times", href: "/services#golf" },
    { name: "Babysitting", href: "/services#babysitting" },
    { name: "Restaurant Reservations", href: "/services#restaurants" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Customer Portal", href: "/login" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold tracking-tight">
                Luxury Concierge
              </span>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Premium concierge services in Casa de Campo, La Romana, and
              Bayahibe. Your gateway to exclusive experiences in the Dominican
              Republic.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-background/70" />
                <div className="text-sm">
                  <p className="text-background/70">WhatsApp / Phone</p>
                  <a
                    href="tel:+18090000000"
                    className="text-background hover:underline"
                  >
                    +1 (809) 000-0000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-background/70" />
                <div className="text-sm">
                  <p className="text-background/70">Email</p>
                  <a
                    href="mailto:hello@yourdomain.com"
                    className="text-background hover:underline"
                  >
                    hello@yourdomain.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-background/70" />
                <div className="text-sm">
                  <p className="text-background/70">Service Area</p>
                  <p className="text-background">
                    Casa de Campo, La Romana, Bayahibe
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              {new Date().getFullYear()} Luxury Concierge. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-background/60 hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-background/60 hover:text-background transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
