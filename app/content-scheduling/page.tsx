"use client";

import PublicSidebar from "@/components/PublicSidebar";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import { ShedulingVideoList } from "@/components/public-cms-components/sheduling-video-list";

export default function ContentSheduling() {
  const router = useRouter();
  return (
    <>
      <div className="flex h-screen">
        <PublicSidebar />
        <div className="flex-1 h-full px-2 overflow-hidden">
          {/* Header */}
          <div className="flex items-center h-28 py-4 px-7 rounded-md">
            <div className="w-full">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <User className="mr-2 h-6 w-6 text-mediumblack" />
                <span>Content</span>
              </h2>
              <div className="flex items-center justify-between">
                <div className="text-black ml-4 flex items-center gap-3">
                  <span
                    onClick={() => router.push("/content-management")}
                    className="cursor-pointer"
                  >
                    Content
                  </span>
                  <span>&gt;</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => router.push("/content-sheduling")}
                  >
                    Scheduling
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-100 py-7 px-7 h-[calc(100vh-112px)] overflow-y-auto scroll">
            <div className="bg-white rounded-lg shadow-md px-4 py-3 mx-auto">
              <div className="border-b border-secondarycolor pb-4">
                <h2 className="text-lg font-semibold">
                  Content Scheduling
                </h2>
                <p className="font-normal text-sm">Plan and manage when your Avatar content gets published.</p>
                </div>
                <ShedulingVideoList/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
