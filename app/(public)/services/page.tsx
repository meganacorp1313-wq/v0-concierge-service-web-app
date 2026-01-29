import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Home,
  Car,
  ChefHat,
  Flag,
  Baby,
  UtensilsCrossed,
  Sparkles,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services | Luxury Concierge",
  description:
    "Explore our premium concierge services in Casa de Campo and La Romana - villa management, airport transfers, private chefs, golf reservations, and more.",
}

const services = [
  {
    id: "villa-concierge",
    icon: Home,
    title: "Villa Concierge",
    description:
      "Complete villa management services to ensure your home away from home is perfect in every way.",
    features: [
      "Pre-arrival villa inspection and setup",
      "Grocery stocking based on your preferences",
      "Daily housekeeping coordination",
      "Pool and garden maintenance oversight",
      "24/7 on-call support for any issues",
      "Key holder services",
      "Vendor management and supervision",
    ],
  },
  {
    id: "airport-transfers",
    icon: Car,
    title: "Airport Transfers",
    description:
      "Luxury transportation from the airport to your villa with professional, courteous drivers.",
    features: [
      "Meet and greet at arrivals",
      "Luxury SUVs and sedans",
      "Bilingual professional drivers",
      "Child car seats available",
      "Flight tracking for delays",
      "Complimentary water and refreshments",
      "Service from PUJ and SDQ airports",
    ],
  },
  {
    id: "private-chef",
    icon: ChefHat,
    title: "Private Chef",
    description:
      "World-class culinary experiences in the comfort of your villa with talented private chefs.",
    features: [
      "Personalized menu planning",
      "Locally sourced fresh ingredients",
      "Multiple cuisine expertise",
      "Dietary restrictions accommodated",
      "Full kitchen cleanup included",
      "Special occasion dinners",
      "Cooking classes available",
    ],
  },
  {
    id: "golf",
    icon: Flag,
    title: "Golf Tee Times",
    description:
      "Priority access to the world-renowned golf courses at Casa de Campo and beyond.",
    features: [
      "Teeth of the Dog reservations",
      "Dye Fore and The Links bookings",
      "Club rentals arranged",
      "Caddie coordination",
      "Golf cart reservations",
      "Group booking discounts",
      "Golf lesson arrangements",
    ],
  },
  {
    id: "babysitting",
    icon: Baby,
    title: "Babysitting & Kids Equipment",
    description:
      "Professional childcare and all the equipment you need for traveling with little ones.",
    features: [
      "Vetted, experienced babysitters",
      "Background-checked caregivers",
      "Crib and pack-n-play rentals",
      "High chair and booster seats",
      "Stroller rentals",
      "Beach and pool toys",
      "Nanny services available",
    ],
  },
  {
    id: "restaurants",
    icon: UtensilsCrossed,
    title: "Restaurant Reservations",
    description:
      "VIP tables at the finest restaurants in Casa de Campo, La Romana, and Altos de Chavón.",
    features: [
      "Priority reservations at top venues",
      "Special occasion arrangements",
      "Private dining coordination",
      "Wine pairing consultations",
      "Chef's table experiences",
      "Dietary needs communicated",
      "Transportation coordination",
    ],
  },
  {
    id: "events",
    icon: Sparkles,
    title: "Events & Special Requests",
    description:
      "Custom experiences and event planning to make your stay truly unforgettable.",
    features: [
      "Birthday and anniversary celebrations",
      "Yacht and boat charters",
      "Spa and wellness bookings",
      "Fishing excursions",
      "Horseback riding at Equestrian Center",
      "Shooting range reservations",
      "Custom experience creation",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              What We Offer
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From the moment you book until your departure, we handle every
              detail so you can focus on creating memories.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link
                    href={`https://wa.me/18090000000?text=Hi, I'm interested in ${service.title} services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Inquire on WhatsApp
                    </Button>
                  </Link>
                </div>
                <Card
                  className={`border-border/50 bg-card ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      What{`'`}s Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your upcoming trip. We{`'`}ll create a
            customized service package tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://wa.me/18090000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white min-w-[200px]"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary min-w-[200px]"
              >
                Contact Form
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
