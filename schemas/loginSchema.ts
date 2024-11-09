import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
