import DashboardHeader from "@/components/dashboard-header";
import React, { ReactNode } from "react";
import { MdDashboard } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import { BsImages } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { IoPieChartSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import UploadProgress from "@/components/upload-progress";
const SIDEBAR_ITEMS = [
  {
    label: "Dashboard",
    icon: <MdDashboard size={20} />,
    href: "/",
  },
  {
    label: "Documents",
    icon: <IoDocuments size={20} />,
    href: "/",
  },
  {
    label: "Images",
    icon: <BsImages size={20} />,
    href: "/",
  },
  {
    label: "Media",
    icon: <MdVideoLibrary size={20} />,
    href: "/",
  },
  {
    label: "Other",
    icon: <IoPieChartSharp size={20} />,
    href: "/",
  },
];
function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen w-full flex flex-col relative">
      <DashboardHeader />

      <div className="flex-1 flex">
        <div className="min-h-full sidebar-width relative bg-white hidden md:block">
          <div className="h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)] w-full absolute top-0 left-0 flex flex-col px-2 md:px-4 py-8 gap-8">
            {SIDEBAR_ITEMS.map((link) => {
              return (
                <Link
                  href={link.href}
                  key={link.label}
                  className="bg-primary-light text-white rounded-full flex items-center justify-center lg:justify-start gap-3 px-4 py-2 text-lg shadow-sm"
                >
                  {link.icon}
                  <span className="hidden lg:inline-block">{link.label}</span>
                </Link>
              );
            })}

            <div className="mt-auto flex flex-col items-center gap-4">
              <Image
                src="/assets/images/files-2.png"
                width={500}
                height={50}
                className="max-w-full"
                alt={"Files"}
              />

              <div className="rounded-full bg-red-100 flex py-1 lg:py-2 px-1 lg:px-4 gap-2 w-full  max-w-full">
                <Image
                  src="/assets/images/avatar.png"
                  width={40}
                  height={40}
                  className="max-w-full object-contain"
                  alt={"Files"}
                />

                <div className="flex-col hidden md:flex overflow-hidden text-nowrap">
                  <span className="font-semibold text-[14px] overflow-hidden text-nowrap text-ellipsis">
                    Oussama elhousni
                  </span>
                  <span className="text-xs">Oussama@gnail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)]">
          {children}
        </div>
      </div>

      {/* Progress bar */}
      <UploadProgress />
    </main>
  );
}

export default DashboardLayout;
