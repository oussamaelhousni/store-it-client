import { cn } from "@/utils/cn";
import React from "react";

function FormInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full py-[2px] border-none outline-none text-[14px]",
        className
      )}
      {...props}
    />
  );
}

export default FormInput;
