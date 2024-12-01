import { cn } from "@/utils/cn";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Button({
  className,
  isLoading,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { isLoading: boolean }) {
  return (
    <button
      className={cn(
        "w-full bg-primary-light overflow-hidden text-white py-3 px-4 rounded-lg shadow-md text-center cursor-pointer transition-transform active:scale-[99%] hover:bg-opacity-95 relative",
        className
      )}
      {...props}
    >
      {children}
      {isLoading && (
        <div className="top-0 left-0 w-full h-full bg-primary-light absolute z-10 flex items-center justify-center">
          <AiOutlineLoading3Quarters
            color="white"
            size={20}
            className="animate-spin"
          />
        </div>
      )}
    </button>
  );
}

export default Button;
