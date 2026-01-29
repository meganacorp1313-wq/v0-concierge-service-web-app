import { Metadata } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, FileText, User, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"

export const metadata: Metadata = {
  title: "Dashboard | Luxury Concierge",
  description: "Manage your concierge requests and profile",
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

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return null
  }

  const [user, requests, stats] = await Promise.all([
    prisma.user.findUnique({
      where: { id: session.user.id },
      select: { name: true, email: true },
    }),
    prisma.request.findMany({
      where: {
        userId: session.user.id,
        status: { in: ["NEW", "IN_PROGRESS", "CONFIRMED"] },
      },
      orderBy: { arrivalDate: "asc" },
      take: 5,
    }),
    prisma.request.groupBy({
      by: ["status"],
      where: { userId: session.user.id },
      _count: true,
    }),
  ])

  const totalRequests = stats.reduce((acc, s) => acc + s._count, 0)
  const activeRequests = stats
    .filter((s) => ["NEW", "IN_PROGRESS", "CONFIRMED"].includes(s.status))
    .reduce((acc, s) => acc + s._count, 0)
  const completedRequests =
    stats.find((s) => s.status === "COMPLETED")?._count || 0

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-semibold text-foreground">
            Welcome back, {user?.name?.split(" ")[0] || "Guest"}
          </h1>
          <p className="text-muted-foreground mt-1">
            Here{`'`}s an overview of your concierge requests
          </p>
        </div>
        <Link href="/dashboard/requests/new">
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Request
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">
                  {totalRequests}
                </p>
                <p className="text-sm text-muted-foreground">Total Requests</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-700" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">
                  {activeRequests}
                </p>
                <p className="text-sm text-muted-foreground">Active Requests</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">
                  {completedRequests}
                </p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/dashboard/requests/new">
          <Card className="border-border/50 hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Plus className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">New Request</p>
                <p className="text-sm text-muted-foreground">
                  Submit a new service request
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/requests">
          <Card className="border-border/50 hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">My Requests</p>
                <p className="text-sm text-muted-foreground">
                  View all your requests
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/profile">
          <Card className="border-border/50 hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">My Profile</p>
                <p className="text-sm text-muted-foreground">
                  Update your information
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Upcoming Requests */}
      <Card className="border-border/50">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Upcoming Requests</CardTitle>
          <Link href="/dashboard/requests">
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          {requests.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                No upcoming requests yet
              </p>
              <Link href="/dashboard/requests/new">
                <Button className="bg-primary hover:bg-primary/90">
                  Create Your First Request
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {requests.map((request) => (
                <Link
                  key={request.id}
                  href={`/dashboard/requests/${request.id}`}
                  className="block"
                >
                  <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-foreground">
                          {format(new Date(request.arrivalDate), "MMM d")} -{" "}
                          {format(new Date(request.departureDate), "MMM d, yyyy")}
                        </p>
                        <Badge
                          variant="secondary"
                          className={
                            statusColors[
                              request.status as keyof typeof statusColors
                            ]
                          }
                        >
                          {
                            statusLabels[
                              request.status as keyof typeof statusLabels
                            ]
                          }
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {request.adults} adults
                        {request.kids > 0 && `, ${request.kids} kids`}
                        {request.infants > 0 && `, ${request.infants} infants`}
                        {request.villaName && ` • ${request.villaName}`}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Services: {request.services.join(", ")}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
