"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"
import { MessageSquare, Loader2, Send } from "lucide-react"
import { format } from "date-fns"
import { useRouter } from "next/navigation"

interface Message {
  id: string
  content: string
  createdAt: Date
  user: {
    name: string | null
    role: string
  }
}

interface RequestMessagesProps {
  requestId: string
  messages: Message[]
}

const formSchema = z.object({
  content: z.string().min(1, "Please enter a message"),
})

type FormValues = z.infer<typeof formSchema>

export function RequestMessages({ requestId, messages }: RequestMessagesProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/requests/${requestId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Failed to send message")

      toast.success("Message sent")
      form.reset()
      router.refresh()
    } catch {
      toast.error("Failed to send message")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Messages
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {messages.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            No messages yet. Send a note to our team below.
          </p>
        ) : (
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 rounded-lg ${
                  message.user.role === "ADMIN"
                    ? "bg-primary/5 border border-primary/20"
                    : "bg-muted"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-sm text-foreground">
                    {message.user.name || "User"}
                    {message.user.role === "ADMIN" && (
                      <span className="text-xs text-primary ml-2">
                        (Concierge Team)
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {format(
                      new Date(message.createdAt),
                      "MMM d, yyyy 'at' h:mm a"
                    )}
                  </p>
                </div>
                <p className="text-foreground whitespace-pre-wrap">
                  {message.content}
                </p>
              </div>
            ))}
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Write a message to our team..."
                      className="min-h-[80px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
