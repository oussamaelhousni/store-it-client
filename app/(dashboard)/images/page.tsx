"use client";
import Image from "next/image";
import PageContainer from "@/components/page-container";
import Select from "@/components/select";
import React, { useState } from "react";
import File from "@/components/file";
function page() {
  const [sort, setSort] = useState<string>("size");
  return (
    <PageContainer className="overflow-y-scroll custom-scroll">
      <div className="text-secondary-dark ">
        <div>
          <h2 className="text-3xl font-bold mb-1">Images</h2>
        </div>
        <div className="flex items-center justify-between">
          <div>
            Total : <span className="font-semibold">12 Gb</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-nowrap text-sm text-secondary-light">
              Sort by :
            </div>
            <div className="relative w-full max-w-[32rem]">
              <Select
                options={["Date Created", "Size"]}
                values={["date", "size"]}
                value={sort}
                setValue={setSort}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid max-[450px]:grid-cols-1 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-6 mt-8">
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
        <File file={undefined} />
      </div>
    </PageContainer>
  );
}

export default page;
