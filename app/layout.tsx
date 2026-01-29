import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/components/providers/session-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Luxury Concierge | Casa de Campo & La Romana",
  description:
    "Premium concierge services in the Dominican Republic. Villa management, airport transfers, private chefs, golf reservations, and exclusive experiences in Casa de Campo, La Romana, and Bayahibe.",
  keywords: [
    "luxury concierge",
    "Casa de Campo",
    "La Romana",
    "Dominican Republic",
    "villa services",
    "private chef",
    "airport transfer",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
