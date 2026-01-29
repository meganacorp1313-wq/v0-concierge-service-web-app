import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Absolutely seamless from start to finish. They arranged everything from our airport pickup to a private chef dinner under the stars. Truly exceptional service.",
    author: "Sarah M.",
    location: "New York, USA",
  },
  {
    quote:
      "The golf reservations alone were worth it. Got us prime tee times at Teeth of the Dog when we thought it was impossible. Will definitely use them again.",
    author: "James R.",
    location: "London, UK",
  },
  {
    quote:
      "Traveling with three kids under five isn't easy, but they had everything set up perfectly. Cribs, high chairs, even a wonderful nanny. Lifesavers!",
    author: "Elena K.",
    location: "Moscow, Russia",
  },
  {
    quote:
      "Their local knowledge is invaluable. Every restaurant recommendation was perfect, and they handled a last-minute anniversary surprise beautifully.",
    author: "Michael & Lisa D.",
    location: "Miami, USA",
  },
  {
    quote:
      "We've been coming to Casa de Campo for years but never had this level of service. They've made it so easy we'll never travel without them again.",
    author: "Robert P.",
    location: "Toronto, Canada",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Testimonials
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <blockquote className="text-foreground leading-relaxed mb-6">
                  {'"'}{testimonial.quote}{'"'}
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {testimonials.slice(3).map((testimonial, index) => (
            <Card
              key={index + 3}
              className="border-border/50 bg-card"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <blockquote className="text-foreground leading-relaxed mb-6">
                  {'"'}{testimonial.quote}{'"'}
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
