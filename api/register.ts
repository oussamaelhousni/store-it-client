import { RegisterSchemaType } from "@/schemas/registerSchema";
import { httpClient } from "@/utils/http-client";

export const register = async (data: RegisterSchemaType) => {
  const res = await httpClient.post("/api/v1/users/register", data);
  return res;
};
