"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import type { Translations, Language } from "@/lib/translations"

interface HeaderProps {
  t: Translations
  language: Language
  onLanguageChange: (lang: Language) => void
}

export function Header({ t, language, onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#why-us", label: t.nav.whyUs },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-serif text-lg font-semibold tracking-tight">
            VIP Concierge Casa de Campo
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-1 border border-border rounded-full p-1">
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange("es")}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  language === "es"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                ES
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <div className="flex items-center gap-1 border border-border rounded-full p-1">
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-2 py-1 text-xs rounded-full transition-colors ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange("es")}
                className={`px-2 py-1 text-xs rounded-full transition-colors ${
                  language === "es"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                ES
              </button>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
