import { z } from "zod";

export const checkoutSchema = z.object({
  // Personal Information
  customer: z.object({
    name: z.string().min(2, "name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
  }),

  // Shipping Address
  address: z.object({
    address: z.string().min(5, "Address must be at least 5 characters"),
    city: z.string().min(2, "City must be at least 2 characters"),
    state: z.string().min(2, "State must be at least 2 characters"),
    zipCode: z.string().min(3, "Zip code must be at least 3 characters"),
  }),

});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
