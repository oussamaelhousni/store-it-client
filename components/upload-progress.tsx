"use client";
import { filesicon } from "@/constants/filesIcons";
import { getFileType } from "@/utils/getFileCategory";
import React from "react";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import { useUplaodedFiles } from "@/stores/useUploadedFiles";
import { UploadedFile } from "@/types/uploaded-file";
import { useFileManager } from "@/hooks/useFileManger";

function UploadProgress() {
  const { uploadedFiles, removeFile, abortFile } = useFileManager();
  return (
    <>
      {uploadedFiles.length > 0 && (
        <div className="w-full max-w-md bg-neutral-50 p-4 fixed z-10 right-4 bottom-4 rounded-lg shadow-md flex flex-col gap-4">
          {uploadedFiles.map((file) => {
            return (
              <FileProgress
                file={file}
                key={file.filename}
                abortFile={abortFile}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

function FileProgress({
  file,
  abortFile,
}: {
  file: UploadedFile;
  abortFile: any;
}) {
  return (
    <div
      className="w-full bg-neutral-100 p-4 rounded-md flex items-center gap-4"
      key={file.filename}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-purple-100 p-4 rounded-full">
          <Image
            src={filesicon[getFileType(file.filename)]}
            width={50}
            height={50}
            className="w-full aspect-square"
            alt={file.filename}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm max-w-32 whitespace-nowrap overflow-hidden text-ellipsis ">
            {file.filename}
          </h3>
          {/* <p className="text-xs">
            {file.remainingTime} Min{file.remainingTime > 1 ? "s" : ""}{" "}
            Remaining
          </p> */}
        </div>
      </div>

      <div className="flex-1">
        <div className="w-full h-3 bg-red-100 rounded-md overflow-hidden">
          <div
            className="h-full bg-primary-dark"
            style={{ width: `${file.uploadPercentage}%` }}
          ></div>
        </div>
      </div>
      <button onClick={() => abortFile(file.id)}>
        <IoIosClose
          size={25}
          className="rounded-full bg-neutral-400 text-black/60"
        />
      </button>
    </div>
  );
}

export default UploadProgress;
