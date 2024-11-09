"use client";
import React, { useState } from "react";
import FormControl from "@/components/form/form-control";
import Button from "@/components/button";
import FormLabel from "@/components/form/form-label";
import FormInput from "@/components/form/form-input";
import FormError from "@/components/form/form-error";
import Modal from "@/components/modal";
import Otp from "@/components/otp";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { login } from "@/api/login";
import { VerifyOtp } from "@/api/verify-otp";
import { useRouter } from "next/navigation";
import { RiErrorWarningFill } from "react-icons/ri";
import { AxiosError } from "axios";

function Login() {
  const [open, setOpen] = useState<boolean>(true);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [userId, setUserId] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "" },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUserId(data.data.data.userId);
      setOpen(true);
    },
  });

  const { mutate: mutateOtp, isLoading: isLoadingOtp } = useMutation({
    mutationFn: VerifyOtp,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.data.data.accessToken);
      router.push("/");
    },
    onError: (
      error: AxiosError & { response: { data: { error?: string } } }
    ) => {
      setOtpError(
        error?.response?.data?.error || error?.message || "Something went wrong"
      );
    },
  });
  const onSubmit = (data: LoginSchemaType) => {
    mutate(data);
  };

  const onSubmitOtp = () => {
    mutateOtp({ userId, otp });
  };
  return (
    <>
      <form
        className="flex flex-col gap-6 w-full max-w-[400px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl>
          <FormLabel htmlFor="email" className="text-sm">
            Email
          </FormLabel>
          <FormInput type="text" placeholder="Email" {...register("email")} />
          <FormError error={errors.email?.message} />
        </FormControl>
        <Button isLoading={isLoading}>Login</Button>
      </form>
      <Modal open={open} setOpen={setOpen}>
        <div
          className="bg-white p-8 rounded-lg flex flex-col gap-4 max-w-[90%]"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="heading-2 text-center text-secondary-light">
            Enter OTP
          </h2>

          <p className="text-center text-wrap">
            We've sent a code to oussamaelhousnioe@gmail.com
          </p>
          {otpError && (
            <div className="p-4 bg-red-400 text-white rounded-lg flex items-center gap-4">
              <RiErrorWarningFill color="white" size={30} />
              <span>{otpError}</span>
            </div>
          )}
          <Otp otp={otp} setOtp={setOtp} />

          <Button isLoading={isLoadingOtp} onClick={() => onSubmitOtp()}>
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default Login;
