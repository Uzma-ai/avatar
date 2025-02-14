"use client";

import { useState } from "react";
import PublicSidebar from "@/components/PublicSidebar";
import { useRouter } from "next/navigation";
import { User, ArrowUpDown, TrendingUp } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

export default function ChannelManagement() {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());
 

  const toggleDropdown = (dropdown: string) => {
    setShowDropdown(showDropdown === dropdown ? null : dropdown);
    if (showDropdown === dropdown) {
      setShowCalendar(null);
    }
  };

  const handleOptionClick = (dropdown: string, option: string) => {
    if (option === "Custom Dates") {
      setShowCalendar(dropdown);
    } else {
      setShowCalendar(null);
    }
  };

  
  

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
                    Manage how ads are integrated into your content, optimize CPM rates, and track ad earnings in real time.
                  </p>
                </div>
              </div>

              <h1 className="text-lg font-semibold mb-2 mt-6">Configure Ad Integration</h1>

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
                    Show ads in the middle of the content for maximum engagement.
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
                    Enable AI_powered organic speech transitions for seamless ad delivery.
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
                <div className="relative z-30">
                    <button
                      className="w-24 h-10 rounded-md border border-borderColor1 flex items-center justify-center"
                      onClick={() => toggleDropdown("filter1")}
                    >
                      Filter
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                    {showDropdown === "filter1" && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-400 rounded-md shadow-lg z-40">
                        <ul className="text-center">
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOptionClick("filter1", "Custom Dates")}
                          >
                            Custom Dates
                          </li>
                          <hr className="border-t border-lightblue" />
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">7 days</li>
                          <hr className="border-t border-lightblue" />
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">1 month</li>
                          <hr className="border-t border-lightblue" />
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">3 months</li>
                          <hr className="border-t border-lightblue" />
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">6 months</li>
                          <hr className="border-t border-lightblue" />
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">1 year</li>
                        </ul>
                        {showCalendar === "filter1" && (
                          <div className="absolute top-0 right-48 mt-2 bg-gray-300 rounded-md z-40">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              className="rounded-md border"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
              </div>

              <div className="flex items-center justify-between mt-10">
                <h1 className="font-semibold text-base">
                  Real-Time Ad Earnings 
                </h1>
                <div className={`relative ${showDropdown === "filter1" ? "z-10 opacity-50" : "z-30"}`}>

                    <button
                      className="w-24 h-10 rounded-md border border-borderColor1 flex items-center justify-center"
                      onClick={() => toggleDropdown("filter2")}
                    >
                      Filter
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                    {showDropdown === "filter2" && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-400 rounded-md shadow-lg z-40">
                        <ul className="text-center">
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOptionClick("filter2", "Custom Dates")}
                          >
                            Custom Dates
                          </li>
                          <hr className="border-t border-lightblue" />
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">7 days</li>
                          <hr className="border-t border-lightblue" />
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">1 month</li>
                          <hr className="border-t border-lightblue" />
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">3 months</li>
                          <hr className="border-t border-lightblue" />
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">6 months</li>
                          <hr className="border-t border-lightblue" />
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">1 year</li>
                        </ul>
                        {showCalendar === "filter2" && (
                          <div className="absolute top-0 right-48 mt-2 bg-gray-300 rounded-md z-40">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              className="rounded-md border"
                            />
                          </div>
                        )}
                      </div>
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

                
                  <h3 className="text-lg font-semibold text-white">Top Region </h3>
                  <p className="text-3xl font-bold mt-10 text-white">North America</p>
                </div>

                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] p-4 rounded-3xl shadow-lg flex-1 min-w-[200px] h-40 relative">

                <img 
                 src="/mobile.svg" 
                 alt="Mobile" 
                className="absolute top-4 right-4 w-10 h-10"
                 />
                  <h3 className="text-lg font-semibold text-white">Top Device</h3>
                  <p className="text-3xl font-bold mt-10 text-white">Mobile</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white p-4 rounded-3xl shadow-lg flex items-center justify-center min-w-[200px] h-40 relative">
                  <h3 className="text-lg font-semibold mr-4">Total Ads Earnings</h3>
                  <p className="text-6xl font-bold">$52,342</p>
                  <TrendingUp className="absolute bottom-4 ml-96 h-14 w-14 text-lightGreen mt-2" />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-6">
                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white p-4 rounded-3xl shadow-lg flex-1 min-w-[200px] h-40 relative">
                  <h3 className="text-lg font-semibold">Pre-roll Ads Earnings</h3>
                  <p className="text-3xl font-bold mt-10">$1215.3</p>
                </div>

                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white p-4 rounded-3xl shadow-lg flex-1 min-w-[200px] h-40 relative">
                  <h3 className="text-lg font-semibold">Mid-roll Ads Earnings</h3>
                  <p className="text-3xl font-bold mt-10">$20,232</p>
                </div>

                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white p-4 rounded-3xl shadow-lg flex-1 min-w-[200px] h-40 relative">
                  <h3 className="text-lg font-semibold">Post-roll Ads Earnings</h3>
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