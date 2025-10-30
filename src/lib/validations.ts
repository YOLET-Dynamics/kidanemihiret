import { z } from "zod";

// Membership Form Schema
export const membershipFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number"),
  address: z
    .string()
    .min(5, "Please enter a complete address")
    .max(200, "Address must be less than 200 characters"),
  message: z.string().max(500, "Message must be less than 500 characters").optional(),
});

export type MembershipFormData = z.infer<typeof membershipFormSchema>;

// Contact Form Schema
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

