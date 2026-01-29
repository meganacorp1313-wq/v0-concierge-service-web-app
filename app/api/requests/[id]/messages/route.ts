import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const messageSchema = z.object({
  content: z.string().min(1),
})

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Verify the request belongs to the user
    const existingRequest = await prisma.request.findFirst({
      where: { id, userId: session.user.id },
    })

    if (!existingRequest) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 })
    }

    const body = await request.json()
    const data = messageSchema.parse(body)

    const message = await prisma.message.create({
      data: {
        content: data.content,
        requestId: id,
        userId: session.user.id,
      },
      include: {
        user: { select: { name: true, role: true } },
      },
    })

    return NextResponse.json(message)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
