"use client";
import React, { ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "./search";
import { cn } from "@/utils/cn";

import { RiMenu3Fill } from "react-icons/ri";
import useUploadFile from "@/hooks/useUploadFile";

function DashboardHeader() {
  const { mutate } = useUploadFile();
  const onUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const form = new FormData();
    form.append("file", file);
    mutate(form);
  };
  return (
    <div className="items-center h-[80px] sm:h-[100px] bg-white w-full pe-4 sm:pe-8 py-4 flex justify-between sticky top-0 left-0 z-20">
      <div className="sidebar-width ps-4 lg:ps-8">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full-brand.svg"
            width={150}
            height={50}
            alt={"Logo"}
            className="max-w-[110px] lg:max-w-none hidden lg:block"
          />
          <Image
            src="/assets/icons/logo-brand.svg"
            width={45}
            height={45}
            alt={"Logo"}
            className="max-w-[110px] lg:max-w-none block lg:hidden"
          />
        </Link>
      </div>
      <div className="flex-1 hidden md:flex ">
        <Search />
      </div>

      <div className="hidden sm:flex items-center gap-4">
        <label htmlFor="upload-btn" className={cn("btn", "rounded-full")}>
          upload
          <input
            type="file"
            id="upload-btn"
            className="hidden"
            onChange={onUploadFile}
          />
        </label>
        <button>
          <Image
            src="/assets/icons/logout.svg"
            width={30}
            height={30}
            alt="Logout"
          />
        </button>
      </div>

      <button className="sm:hidden">
        <RiMenu3Fill size={30} className="text-primary-dark" />
      </button>
    </div>
  );
}

export default DashboardHeader;
