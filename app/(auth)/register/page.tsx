import Button from "@/components/button";
import FormControl from "@/components/form/form-control";
import FormInput from "@/components/form/form-input";
import FormLabel from "@/components/form/form-label";
import React from "react";

function Register() {
  return (
    <form className="flex flex-col gap-6 w-full max-w-[400px]">
      <FormControl>
        <FormLabel htmlFor="email" className="text-sm">
          Fullname
        </FormLabel>
        <FormInput type="text" placeholder="Fullname" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email" className="text-sm">
          Email
        </FormLabel>
        <FormInput type="text" placeholder="Email" />
      </FormControl>
      <Button>Register</Button>
    </form>
  );
}

export default Register;
