import { VerifyOtpType } from "@/schemas/verifyOtpSchema";
import { httpClient } from "@/utils/http-client";

export const VerifyOtp = async (data: VerifyOtpType) => {
  const res = await httpClient.post("/api/v1/users/verify", data);
  return res;
};
