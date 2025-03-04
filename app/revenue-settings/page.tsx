"use client";

import { useState, useRef, useEffect } from "react";
import PublicSidebar from "@/components/PublicSidebar";
import { useRouter } from "next/navigation";
import { User, ArrowUpDown, TrendingUp } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function ChannelManagement() {
  const router = useRouter();
  const [openFilter1, setOpenFilter1] = useState(false);
    const [openFilter2, setOpenFilter2] = useState(false);
    const [showCalendar1, setShowCalendar1] = useState(false);
    const [showCalendar2, setShowCalendar2] = useState(false);
    const dropdownRef1 = useRef<HTMLDivElement>(null);
    const dropdownRef2 = useRef<HTMLDivElement>(null);
    const calendarRef1 = useRef<HTMLDivElement>(null);
    const calendarRef2 = useRef<HTMLDivElement>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());
 

  useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            dropdownRef1.current &&
            !dropdownRef1.current.contains(event.target as Node) &&
            dropdownRef2.current &&
            !dropdownRef2.current.contains(event.target as Node) &&
            calendarRef1.current &&
            !calendarRef1.current.contains(event.target as Node) &&
            calendarRef2.current &&
            !calendarRef2.current.contains(event.target as Node)
          ) {
            setOpenFilter1(false);
            setOpenFilter2(false);
            setShowCalendar1(false);
            setShowCalendar2(false);
          }
        };
  
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
          document.removeEventListener("mousedown", handleClickOutside);
      }, []);

  
  

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
                <span>Revenue</span>
              </h2>
              <div className="flex items-center justify-between">
                <div className="text-black ml-4 flex items-center gap-3">
                  <span
                    onClick={() => router.push("/content-management")}
                    className="cursor-pointer"
                  >
                    Revenue
                  </span>
                  <span>&gt;</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => router.push("/content-management")}
                  >
                    Ad Revenue Settings
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-100 py-7 px-7 h-[calc(100vh-112px)] overflow-y-auto scroll">
            <div className="bg-white rounded-lg shadow-md px-4 py-3 mx-auto">
              <div className="border-b border-secondarycolor pb-4">
                <h2 className="text-lg font-semibold"> Ad Revenue Settings</h2>
                <div className="flex justify-between">
                  <p className="font-normal text-sm">
                    Manage how ads are integrated into your content, optimize
                    CPM rates, and track ad earnings in real time.
                  </p>
                </div>
              </div>

              <h1 className="text-lg font-semibold mb-2 mt-6">
                Configure Ad Integration
              </h1>

              <div className="mb-6 flex items-center justify-between mt-3">
                <h2 className="md:text-sm lg:text-base font-medium">
                  Pre-roll Ads
                </h2>
                <div className="flex items-center">
                  <span className="mr-2 md:text-sm lg:text-base font-medium text-gray-400">
                    Display ads before the content starts.
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondarycolor"></div>
                  </label>
                </div>
              </div>

              <div className="mb-6 flex items-center justify-between mt-1">
                <h2 className="md:text-sm lg:text-base font-medium">
                  Mid-roll Ads
                </h2>
                <div className="flex items-center">
                  <span className="mr-2 md:text-sm lg:text-base font-medium text-gray-400">
                    Show ads in the middle of the content for maximum
                    engagement.
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondarycolor"></div>
                  </label>
                </div>
              </div>

              <div className="mb-6 flex items-center justify-between mt-1">
                <h2 className="md:text-sm lg:text-base font-medium">
                  Post-roll Ads
                </h2>
                <div className="flex items-center">
                  <span className="mr-2 md:text-sm lg:text-base font-medium text-gray-400">
                    Play ads after the content ends.
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondarycolor"></div>
                  </label>
                </div>
              </div>

              <div className="mb-6 flex items-center justify-between mt-1">
                <h2 className="md:text-sm lg:text-base font-medium">
                  AI Organic Speech Integration
                </h2>
                <div className="flex items-center">
                  <span className="mr-2 md:text-sm lg:text-base font-medium text-gray-400">
                    Enable AI_powered organic speech transitions for seamless ad
                    delivery.
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondarycolor"></div>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between mt-10">
                <h1 className="font-semibold text-base">
                  Dynamic CPM Rate Adjustments
                </h1>
                <div className="relative inline-block" ref={dropdownRef1}>
                  <Button
                    onClick={() => {
                      setOpenFilter1(!openFilter1);
                      setOpenFilter2(false);
                    }}
                    variant="outline"
                    className="border-borderColor1 flex items-center justify-center gap-2"
                  >
                    Filter
                    <ArrowUpDown />
                  </Button>

                  {openFilter1 && (
                    <div className="absolute right-1 mt-1 w-40 py-2 bg-white border border-borderColor1 rounded-md z-50">
                      <ul className="text-center">
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setShowCalendar1(true);
                            setOpenFilter1(true);
                            setOpenFilter2(false);
                          }}
                        >
                          Custom Dates
                        </li>
                        <hr className="border-t border-lightblue" />
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          7 days
                        </li>
                        <hr className="border-t border-lightblue" />
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          1 month
                        </li>
                        <hr className="border-t border-lightblue" />
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          3 months
                        </li>
                        <hr className="border-t border-lightblue" />
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          6 months
                        </li>
                        <hr className="border-t border-lightblue" />
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          1 year
                        </li>
                      </ul>
                    </div>
                  )}
                  {/* Show Calendar on Left Side */}
                  {showCalendar1 && (
                    <Popover
                      open={showCalendar1}
                      onOpenChange={setShowCalendar1}
                    >
                      <PopoverTrigger asChild>
                        <span
                          ref={calendarRef1}
                          className="absolute left-[-220px] top-0 z-50"
                        >
                          <PopoverContent className="w-auto p-2">
                            <Calendar mode="single" />
                          </PopoverContent>
                        </span>
                      </PopoverTrigger>
                    </Popover>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-4">
                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white p-4 rounded-3xl shadow-lg flex-1 min-w-[200px] h-40 relative">
                  <img
                    src="/cost-per-impression.svg"
                    alt="Cost Per Impression"
                    className="absolute top-4 right-4 w-10 h-10"
                  />
                  <h3 className="text-lg font-semibold">Average CPM</h3>
                  <p className="text-3xl font-bold mt-10">$15.23</p>
                </div>

                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] p-4 rounded-3xl shadow-lg flex-1 min-w-[200px] h-40 relative">
                  <img
                    src="/location.svg"
                    alt="Location"
                    className="absolute top-4 right-4 w-10 h-10"
                  />

                  <h3 className="text-lg font-semibold text-white">
                    Top Region{" "}
                  </h3>
                  <p className="text-3xl font-bold mt-10 text-white">
                    North America
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] p-4 rounded-3xl shadow-lg flex-1 min-w-[200px] h-40 relative">
                  <img
                    src="/mobile.svg"
                    alt="Mobile"
                    className="absolute top-4 right-4 w-10 h-10"
                  />
                  <h3 className="text-lg font-semibold text-white">
                    Top Device
                  </h3>
                  <p className="text-3xl font-bold mt-10 text-white">Mobile</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-10">
                <h1 className="font-semibold text-base">
                  Real-Time Ad Earnings
                </h1>
                <div className="relative inline-block" ref={dropdownRef2}>
                  <Button
                    onClick={() => {
                      setOpenFilter2(!openFilter2);
                      setOpenFilter1(false);
                    }}
                    variant="outline"
                    className="border-borderColor1 flex items-center justify-center gap-2"
                  >
                    Filter
                    <ArrowUpDown />
                  </Button>

                  {openFilter2 && (
                    <div className="absolute right-1 mt-1 w-40 py-2 bg-white border border-borderColor1 rounded-md z-50">
                      <ul className="text-center">
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setShowCalendar2(true);
                            setOpenFilter2(true);
                            setOpenFilter1(false);
                          }}
                        >
                          Custom Dates
                        </li>
                        <hr className="border-t border-lightblue" />
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          7 days
                        </li>
                        <hr className="border-t border-lightblue" />
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          1 month
                        </li>
                        <hr className="border-t border-lightblue" />
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          3 months
                        </li>
                        <hr className="border-t border-lightblue" />
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          6 months
                        </li>
                        <hr className="border-t border-lightblue" />
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          1 year
                        </li>
                      </ul>
                    </div>
                  )}
                  {/* Show Calendar on Left Side */}
                  {showCalendar2 && (
                    <Popover
                      open={showCalendar2}
                      onOpenChange={setShowCalendar2}
                    >
                      <PopoverTrigger asChild>
                        <span
                          ref={calendarRef2}
                          className="absolute left-[-220px] top-0 z-50"
                        >
                          <PopoverContent className="w-auto p-2">
                            <Calendar mode="single" />
                          </PopoverContent>
                        </span>
                      </PopoverTrigger>
                    </Popover>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white p-4 rounded-3xl shadow-lg flex items-center justify-center min-w-[200px] h-40 relative">
                  <h3 className="text-lg font-semibold mr-4">
                    Total Ads Earnings
                  </h3>
                  <p className="text-6xl font-bold">$52,342</p>
                  <TrendingUp className="absolute bottom-4 ml-96 h-14 w-14 text-lightGreen mt-2" />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-6">
                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white p-4 rounded-3xl shadow-lg flex-1 min-w-[200px] h-40 relative">
                  <h3 className="text-lg font-semibold">
                    Pre-roll Ads Earnings
                  </h3>
                  <p className="text-3xl font-bold mt-10">$1215.3</p>
                </div>

                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white p-4 rounded-3xl shadow-lg flex-1 min-w-[200px] h-40 relative">
                  <h3 className="text-lg font-semibold">
                    Mid-roll Ads Earnings
                  </h3>
                  <p className="text-3xl font-bold mt-10">$20,232</p>
                </div>

                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white p-4 rounded-3xl shadow-lg flex-1 min-w-[200px] h-40 relative">
                  <h3 className="text-lg font-semibold">
                    Post-roll Ads Earnings
                  </h3>
                  <p className="text-3xl font-bold mt-10">$1540</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}