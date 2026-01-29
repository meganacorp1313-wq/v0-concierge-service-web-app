import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Calendar,
  Users,
  Home,
  MessageCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { RequestMessages } from "@/components/dashboard/request-messages"

export const metadata: Metadata = {
  title: "Request Details | Luxury Concierge",
  description: "View your request details and timeline",
}

const statusColors = {
  NEW: "bg-blue-100 text-blue-800",
  IN_PROGRESS: "bg-yellow-100 text-yellow-800",
  CONFIRMED: "bg-green-100 text-green-800",
  COMPLETED: "bg-gray-100 text-gray-800",
  CANCELLED: "bg-red-100 text-red-800",
}

const statusLabels = {
  NEW: "New",
  IN_PROGRESS: "In Progress",
  CONFIRMED: "Confirmed",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
}

const serviceLabels: Record<string, string> = {
  "villa-concierge": "Villa Concierge",
  "airport-transfers": "Airport Transfers",
  "private-chef": "Private Chef",
  golf: "Golf Tee Times",
  babysitting: "Babysitting / Kids Equipment",
  restaurants: "Restaurant Reservations",
  events: "Events & Special Requests",
}

export default async function RequestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return null
  }

  const request = await prisma.request.findUnique({
    where: { id, userId: session.user.id },
    include: {
      messages: {
        include: { user: { select: { name: true, role: true } } },
        orderBy: { createdAt: "asc" },
      },
    },
  })

  if (!request) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/dashboard/requests"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to requests
        </Link>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="font-serif text-3xl font-semibold text-foreground">
                Request Details
              </h1>
              <Badge
                variant="secondary"
                className={
                  statusColors[request.status as keyof typeof statusColors]
                }
              >
                {statusLabels[request.status as keyof typeof statusLabels]}
              </Badge>
            </div>
            <p className="text-muted-foreground mt-1">
              Created {format(new Date(request.createdAt), "MMMM d, yyyy")}
            </p>
          </div>
          <Link
            href={`https://wa.me/18090000000?text=Hi, I have a question about my request (ID: ${request.id})`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white">
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact via WhatsApp
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Trip Details */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Trip Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Dates</p>
                    <p className="font-medium text-foreground">
                      {format(new Date(request.arrivalDate), "MMM d")} -{" "}
                      {format(new Date(request.departureDate), "MMM d, yyyy")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Guests</p>
                    <p className="font-medium text-foreground">
                      {request.adults} adults
                      {request.kids > 0 && `, ${request.kids} kids`}
                      {request.infants > 0 && `, ${request.infants} infants`}
                    </p>
                  </div>
                </div>

                {request.villaName && (
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Home className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Villa</p>
                      <p className="font-medium text-foreground">
                        {request.villaName}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Contact Preference
                    </p>
                    <p className="font-medium text-foreground">
                      {request.contactPreference === "WHATSAPP"
                        ? "WhatsApp"
                        : "Email"}
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm text-muted-foreground mb-3">
                  Services Requested
                </p>
                <div className="flex flex-wrap gap-2">
                  {request.services.map((service) => (
                    <Badge key={service} variant="secondary">
                      {serviceLabels[service] || service}
                    </Badge>
                  ))}
                </div>
              </div>

              {request.notes && (
                <>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Additional Notes
                    </p>
                    <p className="text-foreground whitespace-pre-wrap">
                      {request.notes}
                    </p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Messages */}
          <RequestMessages requestId={request.id} messages={request.messages} />
        </div>

        {/* Sidebar - Timeline */}
        <div>
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-border" />
                <div className="space-y-6">
                  <div className="relative flex items-start gap-4">
                    <div className="w-4 h-4 rounded-full bg-primary border-2 border-background relative z-10" />
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Request Created
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {format(
                          new Date(request.createdAt),
                          "MMM d, yyyy 'at' h:mm a"
                        )}
                      </p>
                    </div>
                  </div>

                  {request.status !== "NEW" && (
                    <div className="relative flex items-start gap-4">
                      <div
                        className={`w-4 h-4 rounded-full border-2 border-background relative z-10 ${
                          ["IN_PROGRESS", "CONFIRMED", "COMPLETED"].includes(
                            request.status
                          )
                            ? "bg-primary"
                            : "bg-muted"
                        }`}
                      />
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          In Progress
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Team reviewing your request
                        </p>
                      </div>
                    </div>
                  )}

                  {["CONFIRMED", "COMPLETED"].includes(request.status) && (
                    <div className="relative flex items-start gap-4">
                      <div
                        className={`w-4 h-4 rounded-full border-2 border-background relative z-10 ${
                          ["CONFIRMED", "COMPLETED"].includes(request.status)
                            ? "bg-primary"
                            : "bg-muted"
                        }`}
                      />
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          Confirmed
                        </p>
                        <p className="text-xs text-muted-foreground">
                          All services confirmed
                        </p>
                      </div>
                    </div>
                  )}

                  {request.status === "COMPLETED" && (
                    <div className="relative flex items-start gap-4">
                      <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-background relative z-10" />
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          Completed
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {format(
                            new Date(request.updatedAt),
                            "MMM d, yyyy 'at' h:mm a"
                          )}
                        </p>
                      </div>
                    </div>
                  )}

                  {request.status === "CANCELLED" && (
                    <div className="relative flex items-start gap-4">
                      <div className="w-4 h-4 rounded-full bg-destructive border-2 border-background relative z-10" />
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          Cancelled
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {format(
                            new Date(request.updatedAt),
                            "MMM d, yyyy 'at' h:mm a"
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
