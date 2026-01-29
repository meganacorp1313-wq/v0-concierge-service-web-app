"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"
import { MessageCircle, Mail, Phone } from "lucide-react"
import Link from "next/link"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormValues = z.infer<typeof formSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      
      if (!response.ok) throw new Error("Failed to submit")
      
      toast.success("Message sent successfully! We'll be in touch soon.")
      form.reset()
    } catch {
      toast.error("Something went wrong. Please try WhatsApp instead.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Info */}
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Get in Touch
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Let{`'`}s Plan Your Perfect Stay
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Ready to experience the finest concierge services in the Dominican 
              Republic? Reach out via WhatsApp for the fastest response, or send 
              us a message below.
            </p>

            <div className="mt-10 space-y-6">
              <Link
                href="https://wa.me/18090000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">
                    +1 (809) 000-0000
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a
                    href="mailto:hello@yourdomain.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@yourdomain.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a
                    href="tel:+18090000000"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (809) 000-0000
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-card rounded-lg p-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
              Send Us a Message
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone / WhatsApp (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (000) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your upcoming trip and how we can help..."
                          className="min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
