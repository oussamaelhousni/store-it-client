import React, { ReactNode } from "react";
import Image from "next/image";
function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex">
      <div className="w-[40%] xl:w-[30%] bg-primary-light hidden md:flex flex-col justify-around px-4 md:px-8 lg:px-12 xl:px-16 py-[5rem]">
        <Image
          src={"/assets/icons/logo-full.svg"}
          alt={"Logo"}
          width={200}
          height={50}
          className="object-cover"
        />
        <div className="space-y-4">
          <h2 className="heading-1 text-white leading-[150%]">
            Manage your files the best way
          </h2>
          <p className="text-lg text-white">
            his is a place where you can store all your documents.
          </p>
        </div>
        <div>
          <Image
            src={"/assets/images/files.png"}
            alt={"Logo"}
            className="max-w-[full] object-cover block mx-auto"
            width={350}
            height={350}
          />
        </div>
      </div>

      <div className="flex-1 flex">
        <div className="flex-1 h-full flex flex-col items-center py-[5rem] sm:justify-center px-4">
          <Image
            src={"/assets/icons/logo-full-brand.svg"}
            alt={"Logo"}
            width={200}
            height={50}
            className="object-cover mb-24 block md:hidden"
          />
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
