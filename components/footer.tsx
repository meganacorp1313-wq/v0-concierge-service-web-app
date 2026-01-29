import { MessageCircle, Mail } from "lucide-react"
import type { Translations } from "@/lib/translations"

interface FooterProps {
  t: Translations
}

export function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-8">
          <a
            href="#"
            className="font-serif text-xl font-semibold tracking-tight"
          >
            VIP Concierge Casa de Campo
          </a>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/18492022782"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />
              {t.footer.whatsapp}
            </a>
            <a
              href={`mailto:${t.footer.email}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={18} />
              {t.footer.email}
            </a>
          </div>

          <p className="text-sm text-muted-foreground max-w-md">
            {t.footer.disclaimer}
          </p>

          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} VIP Concierge Casa de Campo. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
