"use client";
import React from "react";
import Image from "next/image";
import Popover from "./popover";
import { getFileType } from "@/utils/getFileCategory";
import { getCategoryColor } from "@/utils/getCategoryColor";
import { cn } from "@/utils/cn";
import { filesicon } from "@/constants/filesIcons";

function SimpleFile({ filename, date }: { filename: string; date: string }) {
  const category = getFileType(filename);

  return (
    <div className="relative flex items-center bg-white max-w-full py-4 gap-4 rounded-lg">
      <div
        className={cn(
          "w-14 aspect-square  rounded-full flex items-center justify-center"
        )}
        style={{ backgroundColor: getCategoryColor(category) }}
      >
        <Image
          src={filesicon[getFileType(filename)]}
          width={25}
          height={25}
          alt="doc"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h3 className="text-lg text-secondary-dark font-semibold">
          {filename}
        </h3>
        <p className="text-sm text-secondary-light">{date}</p>
      </div>

      <div className="relative">
        <Popover>
          <Popover.PopoverBtn>
            <Image
              src="/assets/icons/dots.svg"
              height={50}
              width={25}
              alt={""}
            />
          </Popover.PopoverBtn>
          <Popover.PopoverContent className="-left-8">
            <Popover.PopoverItem className="flex items-center gap-2 px-1">
              <Image
                src="/assets/icons/edit.svg"
                height={25}
                width={25}
                alt={""}
              />
              <span>Rename</span>
            </Popover.PopoverItem>
            <Popover.PopoverItem className="flex items-center gap-2 px-1">
              <Image
                src="/assets/icons/info.svg"
                height={25}
                width={25}
                alt={""}
              />
              <span>Details</span>
            </Popover.PopoverItem>
            <Popover.PopoverItem className="flex items-center gap-2 px-1">
              <Image
                src="/assets/icons/share.svg"
                height={25}
                width={25}
                alt={""}
              />
              <span>Share</span>
            </Popover.PopoverItem>
            <Popover.PopoverItem className="flex items-center gap-2 px-1">
              <Image
                src="/assets/icons/download.svg"
                height={25}
                width={25}
                alt={""}
              />
              <span>Download</span>
            </Popover.PopoverItem>
            <Popover.PopoverItem className="flex items-center gap-2 px-1">
              <Image
                src="/assets/icons/delete.svg"
                height={25}
                width={25}
                alt={""}
              />
              <span>Delete</span>
            </Popover.PopoverItem>
          </Popover.PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default SimpleFile;
