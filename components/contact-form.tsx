"use client"

import { useState } from "react"
import { Send } from "lucide-react"

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
              Contact
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Ready to Experience Our Services?
            </h2>
            <p className="mt-6 text-primary-foreground/80 leading-relaxed">
              Whether you have a specific request or wish to learn more about our 
              membership options, we&apos;re here to assist. Complete the form and a 
              dedicated concierge will respond within 24 hours.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="text-sm text-primary-foreground/60 mb-1">Email</p>
                <p className="text-lg">concierge@aureum.com</p>
              </div>
              <div>
                <p className="text-sm text-primary-foreground/60 mb-1">Phone</p>
                <p className="text-lg">+1 (888) 555-0199</p>
              </div>
              <div>
                <p className="text-sm text-primary-foreground/60 mb-1">Headquarters</p>
                <p className="text-lg">New York | London | Dubai</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm text-primary-foreground/60 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm text-primary-foreground/60 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                  placeholder="Doe"
                />
              </div>
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
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm text-primary-foreground/60 mb-2"
              >
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground focus:outline-none focus:border-primary-foreground/40 transition-colors"
              >
                <option value="" className="text-foreground">Select a service</option>
                <option value="aviation" className="text-foreground">Private Aviation</option>
                <option value="accommodations" className="text-foreground">Luxury Accommodations</option>
                <option value="events" className="text-foreground">Exclusive Events</option>
                <option value="shopping" className="text-foreground">Personal Shopping</option>
                <option value="dining" className="text-foreground">Fine Dining</option>
                <option value="chauffeur" className="text-foreground">Chauffeur Services</option>
                <option value="other" className="text-foreground">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-primary-foreground/60 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/40 transition-colors resize-none"
                placeholder="Tell us about your requirements..."
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
                  Submit Inquiry
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
