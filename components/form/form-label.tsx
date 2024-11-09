import { cn } from "@/utils/cn";
import React from "react";

function FormLabel({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("text-[14px]", className)} {...props} />;
}

export default FormLabel;
