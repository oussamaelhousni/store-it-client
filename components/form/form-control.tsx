import React, { ReactNode } from "react";
import FormLabel from "./form-label";
import FormInput from "./form-input";

function FormControl({ children }: { children: ReactNode }) {
  return (
    <div className="py-2 px-4 rounded-lg shadow-md flex flex-col w-full sm:w-[400px]">
      {children}
    </div>
  );
}

export default FormControl;
