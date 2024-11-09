import React from "react";
import FormControl from "@/components/form/form-control";
import Button from "@/components/button";
import FormLabel from "@/components/form/form-label";
import FormInput from "@/components/form/form-input";
import FormError from "@/components/form/form-error";
function Login() {
  return (
    <form className="flex flex-col gap-6 w-full max-w-[400px]">
      <FormControl>
        <FormLabel htmlFor="email" className="text-sm">
          Email
        </FormLabel>
        <FormInput type="text" placeholder="Email" />
        <FormError error={"Please provide a valid email"} />
      </FormControl>
      <Button>Login</Button>
    </form>
  );
}

export default Login;
