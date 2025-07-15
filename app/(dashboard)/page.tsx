"use client";
import Folder from "@/components/folder";
import PageContainer from "@/components/page-container";
import SimpleFile from "@/components/simple-file";
import SpaceUsed from "@/components/space-used";
import "react-circular-progressbar/dist/styles.css";

export default function Dashboard() {
  return (
    <PageContainer className="grid grid-cols-4 grid-rows-auto lg:grid-rows-3 gap-8 gap-y-12">
      <SpaceUsed
        className="col-span-4 md:col-span-2 row-span-1"
        percentage={0}
        totalSize={15}
        usedSize={15}
      />
      <div className="bg-white col-span-2 row-span-3 rounded-lg hidden md:flex flex-col gap-2 overflow-y-auto overflow-x-hidden custom-scroll relative p-8 shadow-md ">
        <h2 className="heading-2 text-[secondary-dark]">
          Recent uploaded files
        </h2>
        <SimpleFile filename={"oussama.png"} date={"4:00 PM, 2024/12/06"} />
        <SimpleFile filename={"oussama.txt"} date={"4:00 PM, 2024/12/06"} />
        <SimpleFile filename={"oussama.mp4"} date={"4:00 PM, 2024/12/06"} />
      </div>

      <Folder totalSize={118} lastUpdate="10:15am, 10Oct" type="documents" />
      <Folder totalSize={118} lastUpdate="10:15am, 10Oct" type="images" />
      <Folder totalSize={118} lastUpdate="10:15am, 10Oct" type="media" />
      <Folder totalSize={118} lastUpdate="10:15am, 10Oct" type="other" />
    </PageContainer>
  );
}
