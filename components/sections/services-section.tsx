import { Card, CardContent } from "@/components/ui/card"
import {
  Home,
  Car,
  ChefHat,
  Flag,
  Baby,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Villa Concierge",
    description:
      "Complete villa management including pre-arrival setup, daily housekeeping, and personalized guest services.",
    href: "/services#villa-concierge",
  },
  {
    icon: Car,
    title: "Airport Transfers",
    description:
      "Luxury vehicle transportation from Punta Cana or Santo Domingo airports with professional drivers.",
    href: "/services#airport-transfers",
  },
  {
    icon: ChefHat,
    title: "Private Chef",
    description:
      "World-class private chefs preparing gourmet meals in your villa with locally sourced ingredients.",
    href: "/services#private-chef",
  },
  {
    icon: Flag,
    title: "Golf Tee Times",
    description:
      "Priority reservations at Teeth of the Dog, Dye Fore, The Links, and other premier courses.",
    href: "/services#golf",
  },
  {
    icon: Baby,
    title: "Babysitting & Kids",
    description:
      "Vetted childcare professionals and equipment rentals including cribs, strollers, and toys.",
    href: "/services#babysitting",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Reservations",
    description:
      "VIP tables at the finest restaurants in Casa de Campo, La Romana, and Altos de Chavón.",
    href: "/services#restaurants",
  },
  {
    icon: Sparkles,
    title: "Events & Special Requests",
    description:
      "Custom event planning, yacht charters, spa services, and any special arrangements you desire.",
    href: "/services#events",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            What We Offer
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From the moment you arrive until you depart, we ensure every aspect 
            of your stay is exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <Card className="group h-full border-border/50 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
