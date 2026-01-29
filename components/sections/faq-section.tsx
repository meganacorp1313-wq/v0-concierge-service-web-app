import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How far in advance should I book your services?",
    answer:
      "We recommend booking at least 2-4 weeks before your arrival for standard services. For peak seasons (December-April) or special events, 4-8 weeks advance notice ensures the best availability. However, we can often accommodate last-minute requests via WhatsApp.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Our primary service area includes Casa de Campo Resort, La Romana city, Bayahibe, and Altos de Chavón. We also arrange airport transfers from Punta Cana (PUJ) and Santo Domingo (SDQ) airports.",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "Yes, we typically require a 50% deposit to confirm bookings for services like private chefs, yacht charters, and event planning. Airport transfers and restaurant reservations generally don't require a deposit.",
  },
  {
    question: "What languages do you support?",
    answer:
      "Our team is fluent in English, Spanish, and Russian. We can also arrange translators for other languages upon request.",
  },
  {
    question: "Can you help with villa rentals?",
    answer:
      "While we don't directly rent villas, we work closely with property managers and can recommend trusted partners. Once you've booked your villa, we handle all the concierge services to make your stay perfect.",
  },
  {
    question: "How do I pay for services?",
    answer:
      "We accept major credit cards, bank transfers, and PayPal. For guests staying at Casa de Campo, certain services can be charged to your resort account.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            FAQ
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/50"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
