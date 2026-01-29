import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
