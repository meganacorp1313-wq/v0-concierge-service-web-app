"use client"

import { useState } from "react"
import { Send, MessageCircle, Mail, Phone, MapPin } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Thank You
            </h2>
            <p className="mt-6 text-primary-foreground/80 leading-relaxed">
              Your inquiry has been received. A member of our team will be in touch 
              within 24 hours to discuss your requirements.
            </p>
            <a
              href="https://wa.me/18095551234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 mt-8 text-sm font-medium bg-[#25D366] text-white hover:bg-[#22c55e] transition-colors rounded-sm"
            >
              <MessageCircle className="h-5 w-5" />
              Or WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">
              Contact Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Let&apos;s Plan Your Perfect Stay
            </h2>
            <p className="mt-6 text-primary-foreground/80 leading-relaxed">
              Whether you&apos;re planning your first visit or returning to Casa de Campo, 
              we&apos;re here to make your experience exceptional. Reach out and let us 
              know how we can help.
            </p>

            <a
              href="https://wa.me/18095551234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 mt-8 text-sm font-medium bg-[#25D366] text-white hover:bg-[#22c55e] transition-colors rounded-sm"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-sm flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary-foreground/80" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">Email</p>
                  <p>hello@casaconcierge.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-sm flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary-foreground/80" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">Phone / WhatsApp</p>
                  <p>+1 (809) 555-1234</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-sm flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary-foreground/80" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">Service Area</p>
                  <p>Casa de Campo, La Romana, Dominican Republic</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-primary-foreground/60 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-primary-foreground/60 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <label
                  htmlFor="arrivalDate"
                  className="block text-sm text-primary-foreground/60 mb-2"
                >
                  Arrival Date
                </label>
                <input
                  type="date"
                  id="arrivalDate"
                  name="arrivalDate"
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground focus:outline-none focus:border-primary-foreground/40 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="departureDate"
                  className="block text-sm text-primary-foreground/60 mb-2"
                >
                  Departure Date
                </label>
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground focus:outline-none focus:border-primary-foreground/40 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm text-primary-foreground/60 mb-2"
                >
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  placeholder="e.g. 4"
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-primary-foreground/60 mb-2"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/40 transition-colors resize-none"
                placeholder="Tell us about your plans, services needed, or any special requests..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-sm font-medium bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Inquiry
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
