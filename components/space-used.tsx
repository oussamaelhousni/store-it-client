import { cn } from "@/utils/cn";
import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

interface ISpaceUsed {
  className?: string;
  percentage: number;
  totalSize: number;
  usedSize: number;
}
function SpaceUsed({ className, percentage, totalSize, usedSize }: ISpaceUsed) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row p-4 py-8 md:py-12 items-center justify-evenly gap-6 bg-primary-light  rounded-xl w-full",
        className
      )}
    >
      <div className="max-w-[150px] ">
        <CircularProgressbarWithChildren
          value={0}
          styles={buildStyles({
            pathColor: "var(--primary-dark)",
            trailColor: "white",
          })}
        >
          <div className="flex flex-col items-center justify-center">
            <span className="text-lg md:text-xl font-bold text-white">
              {percentage}%
            </span>
            <span className="text-neutral-200 text-sm md:text-base">
              space used
            </span>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl font-semibold text-white ">
          Available Storage
        </span>
        <span className="text-gray-100">
          {usedSize} KB / {totalSize} GB
        </span>
      </div>
    </div>
  );
}

export default SpaceUsed;
