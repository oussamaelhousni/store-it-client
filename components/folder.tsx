import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

const HEADER_IMAGES = {
  documents: "/assets/icons/file-document-light.svg",
  images: "/assets/icons/file-image-light.svg",
  media: "/assets/icons/file-video-light.svg",
  other: "/assets/icons/file-other-light.svg",
};

interface IFolder {
  className?: string;
  type: "images" | "documents" | "media" | "other";
  totalSize: number;
  lastUpdate: string;
}

function Folder({ className, type, totalSize, lastUpdate }: IFolder) {
  return (
    <div
      className={cn(
        "relative p-4 flex items-center flex-col justify-center rounded-2xl bg-white col-span-4 md:col-span-2 lg:col-span-1 row-span-1 ",
        className
      )}
    >
      <Image
        src={HEADER_IMAGES[type]}
        width={100}
        height={100}
        className="summary-type-icon"
        alt={""}
      />

      <span className="text-right font-medium absolute top-4 right-4 z-10 ">
        {totalSize}GB
      </span>

      <h3 className="text-center text-base font-semibold z-10 mt-10 relative capitalize">
        {type}
      </h3>
      <div className="h-[1px] bg-gray-200 my-3 w-full"></div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-sm text-gray-400">Last update</span>
        <span className="text-sm">{lastUpdate}</span>
      </div>
    </div>
  );
}

export default Folder;
