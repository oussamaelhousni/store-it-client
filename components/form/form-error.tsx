import { cn } from "@/utils/cn";
import React from "react";
import { BiSolidErrorCircle } from "react-icons/bi";

function FormError({
  error,
  className,
}: {
  error?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("text-red-500 text-[12px] w-full text-right", className)}
    >
      <BiSolidErrorCircle className="inline-block mr-1" />
      {error}
    </div>
  );
}

export default FormError;
