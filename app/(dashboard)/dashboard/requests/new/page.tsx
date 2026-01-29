"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import { ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"

const services = [
  { id: "villa-concierge", label: "Villa Concierge" },
  { id: "airport-transfers", label: "Airport Transfers" },
  { id: "private-chef", label: "Private Chef" },
  { id: "golf", label: "Golf Tee Times" },
  { id: "babysitting", label: "Babysitting / Kids Equipment" },
  { id: "restaurants", label: "Restaurant Reservations" },
  { id: "events", label: "Events & Special Requests" },
]

const formSchema = z.object({
  arrivalDate: z.string().min(1, "Arrival date is required"),
  departureDate: z.string().min(1, "Departure date is required"),
  adults: z.coerce.number().min(1, "At least 1 adult required"),
  kids: z.coerce.number().min(0),
  infants: z.coerce.number().min(0),
  villaName: z.string().optional(),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  notes: z.string().optional(),
  contactPreference: z.enum(["WHATSAPP", "EMAIL"]),
})

type FormValues = z.infer<typeof formSchema>

export default function NewRequestPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      arrivalDate: "",
      departureDate: "",
      adults: 1,
      kids: 0,
      infants: 0,
      villaName: "",
      services: [],
      notes: "",
      contactPreference: "WHATSAPP",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsLoading(true)
    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Failed to create request")

      const result = await response.json()
      toast.success("Request submitted successfully!")
      router.push(`/dashboard/requests/${result.id}`)
    } catch {
      toast.error("Failed to submit request. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const today = format(new Date(), "yyyy-MM-dd")

  return (
    <div className="max-w-2xl">
      <Link
        href="/dashboard/requests"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to requests
      </Link>

      <div className="mb-8">
        <h1 className="font-serif text-3xl font-semibold text-foreground">
          New Request
        </h1>
        <p className="text-muted-foreground mt-1">
          Tell us about your upcoming trip and how we can assist
        </p>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Trip Details</CardTitle>
          <CardDescription>
            Please provide information about your stay
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="arrivalDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Arrival Date</FormLabel>
                      <FormControl>
                        <Input type="date" min={today} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="departureDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Departure Date</FormLabel>
                      <FormControl>
                        <Input type="date" min={today} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="adults"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adults</FormLabel>
                      <FormControl>
                        <Input type="number" min={1} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="kids"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kids</FormLabel>
                      <FormControl>
                        <Input type="number" min={0} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="infants"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Infants</FormLabel>
                      <FormControl>
                        <Input type="number" min={0} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="villaName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Villa Name (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Villa Castellana, Casa de Campo #123"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      If you know where you{`'`}ll be staying
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services"
                render={() => (
                  <FormItem>
                    <FormLabel>Services Needed</FormLabel>
                    <FormDescription>
                      Select all services you{`'`}re interested in
                    </FormDescription>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      {services.map((service) => (
                        <FormField
                          key={service.id}
                          control={form.control}
                          name="services"
                          render={({ field }) => (
                            <FormItem
                              key={service.id}
                              className="flex items-center space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(service.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          service.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== service.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {service.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us more about your needs, special requests, dietary restrictions, etc."
                        className="min-h-[100px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactPreference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Contact Method</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select contact method" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="WHATSAPP">WhatsApp</SelectItem>
                        <SelectItem value="EMAIL">Email</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Submit Request
                </Button>
                <Link href="/dashboard/requests">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
