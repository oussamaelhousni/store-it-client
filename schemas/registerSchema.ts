import { z } from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "fullname should at least 2 characters" }),
  email: z.string().email(),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
