"use client"

import { useState } from "react"
import { Check, Copy, MessageCircle } from "lucide-react"
import type { Translations } from "@/lib/translations"

interface ContactFormProps {
  t: Translations
}

const serviceOptions = [
  "Airport Transfers",
  "Villa Concierge",
  "Private Chef & Catering",
  "Golf Tee Times",
  "Golf Carts & Rentals",
  "Restaurant Reservations",
  "Babysitting & Kids Equipment",
  "Events & Special Requests",
]

export function ContactForm({ t }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    email: "",
    arrivalDate: "",
    departureDate: "",
    guests: "",
    services: [] as string[],
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const generateWhatsAppText = () => {
    return `Hi! I'd like to request concierge services.

Name: ${formData.fullName}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}
Arrival: ${formData.arrivalDate}
Departure: ${formData.departureDate}
Guests: ${formData.guests}
Services: ${formData.services.join(", ") || "Not specified"}
Details: ${formData.message || "None"}`
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generateWhatsAppText())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (submitted) {
    return (
      <section id="contact" className="py-20 px-4 bg-card">
        <div className="mx-auto max-w-2xl text-center">
          <div className="bg-background rounded-2xl p-8">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} />
            </div>
            <h3 className="font-serif text-2xl font-medium mb-4">
              {t.form.success}
            </h3>
            <p className="text-muted-foreground mb-8">
              {t.form.successMessage}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center justify-center gap-2 border-2 border-primary px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? t.form.copied : t.form.copyText}
              </button>
              <a
                href={`https://wa.me/18492022782?text=${encodeURIComponent(generateWhatsAppText())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} />
                {t.hero.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 px-4 bg-card">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            {t.form.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.form.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-6 md:p-8">
          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.form.fullName}
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.form.whatsapp}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, whatsapp: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t.form.email}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.form.arrivalDate}
                </label>
                <input
                  type="date"
                  required
                  value={formData.arrivalDate}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, arrivalDate: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.form.departureDate}
                </label>
                <input
                  type="date"
                  required
                  value={formData.departureDate}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, departureDate: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.form.guests}
                </label>
                <input
                  type="number"
                  min="1"
                  required
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, guests: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">
                {t.form.servicesNeeded}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((service, index) => (
                  <label
                    key={service}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      formData.services.includes(service)
                        ? "border-primary bg-secondary"
                        : "border-input hover:border-muted-foreground"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        formData.services.includes(service)
                          ? "border-primary bg-primary"
                          : "border-input"
                      }`}
                    >
                      {formData.services.includes(service) && (
                        <Check size={14} className="text-primary-foreground" />
                      )}
                    </div>
                    <span className="text-sm">{t.services.items[index]?.title || service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t.form.message}
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder={t.form.messagePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              {t.form.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
