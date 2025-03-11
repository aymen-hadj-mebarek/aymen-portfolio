"use server"

import { Resend } from "resend"
import { z } from "zod"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY)

    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not defined")
    }

    if (!process.env.TO_EMAIL) {
      throw new Error("TO_EMAIL is not defined")
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: process.env.TO_EMAIL,
      subject: `Portfolio Contact: ${validatedData.subject}`,
      reply_to: validatedData.email,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        
        Message:
        ${validatedData.message}
      `,
      // You can also use HTML for a nicer email
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <h3>Message:</h3>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred"
    return { success: false, error: errorMessage }
  }
}

