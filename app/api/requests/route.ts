import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const requestSchema = z.object({
  arrivalDate: z.string().transform((str) => new Date(str)),
  departureDate: z.string().transform((str) => new Date(str)),
  adults: z.coerce.number().min(1),
  kids: z.coerce.number().min(0),
  infants: z.coerce.number().min(0),
  villaName: z.string().optional(),
  services: z.array(z.string()).min(1),
  notes: z.string().optional(),
  contactPreference: z.enum(["WHATSAPP", "EMAIL"]),
})

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const data = requestSchema.parse(body)

    const newRequest = await prisma.request.create({
      data: {
        userId: session.user.id,
        arrivalDate: data.arrivalDate,
        departureDate: data.departureDate,
        adults: data.adults,
        kids: data.kids,
        infants: data.infants,
        villaName: data.villaName || null,
        services: data.services,
        notes: data.notes || null,
        contactPreference: data.contactPreference,
      },
    })

    return NextResponse.json(newRequest)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      )
    }
    console.error("Request creation error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const requests = await prisma.request.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json(requests)
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
