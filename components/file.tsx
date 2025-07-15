import React from "react";
import { IFile } from "@/types/file";
import Image from "next/image";
import Popover from "./popover";

function File({ file }: { file: IFile }) {
  return (
    <div className="bg-white aspect-square rounded-xl px-4  py-6">
      <div className="flex items-center justify-between">
        <div className="w-20 rounded-full aspect-square flex items-center justify-center bg-red-100/80">
          <Image
            src={"/assets/icons/file-video.svg"}
            width={12}
            height={12}
            className="w-12 aspect-square"
            alt={""}
          />
        </div>
        <div className="flex flex-col items-center justify-between h-ful">
          <Popover>
            <Popover.PopoverBtn>
              <Image
                src="/assets/icons/dots.svg"
                className="w-8 h-8"
                width={12}
                height={12}
                alt="dots"
              />
            </Popover.PopoverBtn>
            <Popover.PopoverContent className="top-12">
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

          <span>2 GB</span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-lg">App Schhool.mp4</h3>
        <span className="text-sm">10:09pm, 10Oct</span>
      </div>
    </div>
  );
}

export default File;
