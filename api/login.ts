import { LoginSchemaType } from "@/schemas/loginSchema";
import { httpClient } from "@/utils/http-client";

export const login = async (data: LoginSchemaType) => {
  const res = await httpClient.post("/api/v1/users/login", data);
  return res;
};
