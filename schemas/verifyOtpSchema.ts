import { z } from "zod";

export const verifyOtpSchema = z.object({
  userId: z.string().min(2),
  otp: z.string().min(6, { message: "Otp should be 6 characters long" }),
});

export type VerifyOtpType = z.infer<typeof verifyOtpSchema>;
