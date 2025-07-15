import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

function PageContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full h-auto md:h-full min-h-full bg-[#F2F4F8] rounded-2xl py-8 px-[1rem] md:px-[2rem] lg:px-[4rem] xl:px-[6rem]",
        className
      )}
    >
      {children}
    </div>
  );
}

export default PageContainer;
