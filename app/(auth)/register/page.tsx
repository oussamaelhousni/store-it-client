"use client";
import Button from "@/components/button";
import FormControl from "@/components/form/form-control";
import FormInput from "@/components/form/form-input";
import FormLabel from "@/components/form/form-label";
import { registerSchema, RegisterSchemaType } from "@/schemas/registerSchema";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/components/form/form-error";
import { useMutation } from "react-query";
import { register as registerUser } from "@/api/register";
import { RiErrorWarningFill } from "react-icons/ri";
import { AxiosError } from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterSchemaType>({
    defaultValues: {
      email: "",
      fullName: "",
    },
    resolver: zodResolver(registerSchema),
  });
  const { mutate, isLoading } = useMutation({
    mutationFn: registerUser,
    onError: (
      error: AxiosError & { response: { data: { error?: string } } }
    ) => {
      setError("root", {
        message:
          error?.response?.data?.error ||
          error?.message ||
          "Something went wrong",
      });
    },
  });
  const onSubmit = async (data: RegisterSchemaType) => {
    mutate(data);
  };
  return (
    <>
      <form
        className="flex flex-col gap-6 w-full max-w-[400px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {errors.root && (
          <div className="p-4 bg-red-400 text-white rounded-lg flex items-center gap-4">
            <RiErrorWarningFill color="white" />{" "}
            <span>{errors.root.message}</span>
          </div>
        )}
        <FormControl>
          <FormLabel htmlFor="email" className="text-sm">
            Fullname
          </FormLabel>
          <FormInput
            type="text"
            placeholder="Fullname"
            {...register("fullName")}
          />
          <FormError error={errors.fullName?.message} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email" className="text-sm">
            Email
          </FormLabel>
          <FormInput type="text" placeholder="Email" {...register("email")} />
          <FormError error={errors.email?.message} />
        </FormControl>
        <Button isLoading={isLoading}>Register</Button>
        <Link
          href="/login"
          className="text-primary-dark underline underline-offset-2 text-[14px] text-center"
        >
          Already have an account ?
        </Link>
      </form>
    </>
  );
}

export default Register;
