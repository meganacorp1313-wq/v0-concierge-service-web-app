import { Metadata } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, FileText } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"

export const metadata: Metadata = {
  title: "My Requests | Luxury Concierge",
  description: "View and manage your concierge service requests",
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

export default async function RequestsPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return null
  }

  const requests = await prisma.request.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  })

  const activeRequests = requests.filter((r) =>
    ["NEW", "IN_PROGRESS", "CONFIRMED"].includes(r.status)
  )
  const pastRequests = requests.filter((r) =>
    ["COMPLETED", "CANCELLED"].includes(r.status)
  )

  const RequestCard = ({ request }: { request: (typeof requests)[0] }) => (
    <Link href={`/dashboard/requests/${request.id}`}>
      <Card className="border-border/50 hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="font-semibold text-foreground">
                {format(new Date(request.arrivalDate), "MMM d")} -{" "}
                {format(new Date(request.departureDate), "MMM d, yyyy")}
              </p>
              {request.villaName && (
                <p className="text-sm text-muted-foreground mt-1">
                  {request.villaName}
                </p>
              )}
            </div>
            <Badge
              variant="secondary"
              className={statusColors[request.status as keyof typeof statusColors]}
            >
              {statusLabels[request.status as keyof typeof statusLabels]}
            </Badge>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              {request.adults} adults
              {request.kids > 0 && `, ${request.kids} kids`}
              {request.infants > 0 && `, ${request.infants} infants`}
            </p>
            <p>Services: {request.services.join(", ")}</p>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Created {format(new Date(request.createdAt), "MMM d, yyyy")}
          </p>
        </CardContent>
      </Card>
    </Link>
  )

  const EmptyState = ({ message }: { message: string }) => (
    <div className="text-center py-12">
      <FileText className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
      <p className="text-muted-foreground mb-4">{message}</p>
      <Link href="/dashboard/requests/new">
        <Button className="bg-primary hover:bg-primary/90">
          Create a Request
        </Button>
      </Link>
    </div>
  )

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-semibold text-foreground">
            My Requests
          </h1>
          <p className="text-muted-foreground mt-1">
            View and manage all your service requests
          </p>
        </div>
        <Link href="/dashboard/requests/new">
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Request
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList>
          <TabsTrigger value="active">
            Active ({activeRequests.length})
          </TabsTrigger>
          <TabsTrigger value="past">Past ({pastRequests.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-6">
          {activeRequests.length === 0 ? (
            <EmptyState message="No active requests" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeRequests.map((request) => (
                <RequestCard key={request.id} request={request} />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="past" className="mt-6">
          {pastRequests.length === 0 ? (
            <EmptyState message="No past requests" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pastRequests.map((request) => (
                <RequestCard key={request.id} request={request} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
