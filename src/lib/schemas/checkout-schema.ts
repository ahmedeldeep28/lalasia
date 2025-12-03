import { z } from "zod";

export const checkoutSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),

  // Shipping Address
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  zipCode: z.string().min(3, "Zip code must be at least 3 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),

  // Payment Method
  paymentMethod: z.enum(["credit_card", "paypal", "bank_transfer"], {
    message: "Please select a payment method",
  }),
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
