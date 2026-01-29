import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { MessageCircle, MapPin, Heart, Shield, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us | Luxury Concierge",
  description:
    "Learn about our team and our commitment to providing exceptional concierge services in Casa de Campo, La Romana, and Bayahibe.",
}

const values = [
  {
    icon: Heart,
    title: "Passion for Service",
    description:
      "We genuinely love what we do. Every request, big or small, receives our full attention and enthusiasm.",
  },
  {
    icon: Shield,
    title: "Discretion & Trust",
    description:
      "We understand the importance of privacy. Your personal information and preferences are always kept confidential.",
  },
  {
    icon: Users,
    title: "Local Connections",
    description:
      "Our deep roots in the community mean access to experiences and reservations that others simply can't provide.",
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              About Us
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
              Who We Are
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A dedicated team of hospitality professionals committed to making
              your Dominican Republic experience exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Our Story
              </span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Born from Experience
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our journey began when we noticed a gap in the hospitality
                  landscape of Casa de Campo and La Romana. While the region
                  offers world-class amenities, visitors often struggled to
                  navigate local services, secure reservations, and coordinate
                  the many details that make a vacation truly seamless.
                </p>
                <p>
                  With years of experience in luxury hospitality and deep
                  connections throughout the Dominican Republic, we created a
                  concierge service that bridges this gap. We handle the
                  logistics so our clients can focus on what matters most:
                  enjoying their time in paradise.
                </p>
                <p>
                  Today, we serve discerning travelers from around the world,
                  providing personalized attention that transforms good vacations
                  into unforgettable experiences.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="h-8 w-8 text-primary" />
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Service Area
                </h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background">
                  <h4 className="font-semibold text-foreground mb-2">
                    Casa de Campo
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    The premier luxury resort community featuring world-renowned
                    golf, marina, and equestrian facilities.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-background">
                  <h4 className="font-semibold text-foreground mb-2">
                    La Romana
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    A vibrant city offering authentic Dominican culture,
                    shopping, and dining experiences.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-background">
                  <h4 className="font-semibold text-foreground mb-2">
                    Bayahibe
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    A charming fishing village known for beautiful beaches and
                    access to Saona Island.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-background">
                  <h4 className="font-semibold text-foreground mb-2">
                    Altos de Chavón
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    A recreated Mediterranean village with galleries, fine
                    dining, and the famous amphitheater.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Our Values
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold text-foreground">
              What Guides Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Let{`'`}s Work Together
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Ready to experience the difference? Contact us to discuss your
            upcoming trip to Casa de Campo and La Romana.
          </p>
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
        </div>
      </section>
    </main>
  )
}
