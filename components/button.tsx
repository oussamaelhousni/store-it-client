import { cn } from "@/utils/cn";
import React from "react";

function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "w-full bg-primary-light text-white py-3 px-4 rounded-lg shadow-md text-center cursor-pointer transition-transform active:scale-[99%] ",
        className
      )}
      {...props}
    />
  );
}

export default Button;
