"use client";

import { useState, useRef, useEffect } from "react";
import PublicSidebar from "@/components/PublicSidebar";
import {
  User,
  TrendingDown,
  TrendingUp,
  SlidersHorizontal,
  Bell,
  ChevronRight,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import BarChart from "@/components/BarChart";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default function Dashboard() {
  const [openFilter1, setOpenFilter1] = useState(false);
  const [openFilter2, setOpenFilter2] = useState(false);
  const [openFilter3, setOpenFilter3] = useState(false);
  const [showCalendar1, setShowCalendar1] = useState(false);
  const [showCalendar2, setShowCalendar2] = useState(false);
  const [showCalendar3, setShowCalendar3] = useState(false);
  const dropdownRef1 = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);
  const dropdownRef3 = useRef<HTMLDivElement>(null);
  const calendarRef1 = useRef<HTMLDivElement>(null);
  const calendarRef2 = useRef<HTMLDivElement>(null);
  const calendarRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef1.current &&
        !dropdownRef1.current.contains(event.target as Node) &&
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target as Node) &&
        dropdownRef3.current &&
        !dropdownRef3.current.contains(event.target as Node) &&
        calendarRef1.current &&
        !calendarRef1.current.contains(event.target as Node) &&
        calendarRef2.current &&
        !calendarRef2.current.contains(event.target as Node) &&
        calendarRef3.current &&
        !calendarRef3.current.contains(event.target as Node)
      ) {
        setOpenFilter1(false);
        setOpenFilter2(false);
        setOpenFilter3(false);
        setShowCalendar1(false);
        setShowCalendar2(false);
        setShowCalendar3(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="flex h-screen">
        <PublicSidebar />
        <div className="flex-1 h-full px-2 overflow-hidden">
          <div className="flex justify-between items-center h-32 pt-5 px-7 rounded-md">
            <div className="flex flex-col items-start gap-1 relative w-full">
              <div className="text-2xl font-semibold mb-2 flex items-center justify-between w-full">
                <div className="flex items-center">
                  <User className="mr-2 h-6 w-6 text-black" />
                  <span>Dashboard</span>
                </div>
                <a href="/notification">
                  <Bell className="h-5 w-5 text-black cursor-pointer" />
                </a>
              </div>
              <div className="text-black px-2">Dashboard</div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-100 py-7 px-7 h-[calc(100%-128px)] overflow-y-auto scroll">
            <div className="bg-white rounded-lg shadow-md px-4 py-3 mx-auto">
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-lg">
                    Content Creator Dashboard
                  </h1>
                  <div className="relative inline-block" ref={dropdownRef1}>
                    <Button
                      onClick={() => {
                        setOpenFilter1(!openFilter1);
                        setOpenFilter2(false);
                        setOpenFilter3(false);
                      }}
                      variant="outline"
                      className="border-borderColor1 flex items-center justify-center gap-2"
                    >
                      Filter
                      <SlidersHorizontal />
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
                              setOpenFilter3(false);
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
                  <div className="flex flex-col items-start justify-between bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white p-4 rounded-3xl shadow-lg flex-1 min-w-[250px] h-36">
                    <h3 className="text-lg font-semibold">Total earnings</h3>
                    <p className="text-2xl font-bold">$2,342</p>
                    <div className="flex items-center justify-between w-full">
                      <p className="text-sm">Earnings for Dec</p>
                      <TrendingUp className="h-7 w-7 text-lightGreen" />
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-between bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] p-4 rounded-3xl shadow-lg flex-1 min-w-[250px] h-36">
                    <h3 className="text-lg font-semibold text-white">
                      Impressions
                    </h3>
                    <p className="text-2xl font-bold text-white">120,000</p>
                    <div className="flex items-center justify-between w-full">
                      <p className="text-sm text-white">Total Reach</p>
                      <TrendingDown className="h-7 w-7 text-red" />
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-between bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] p-4 rounded-3xl shadow-lg flex-1 min-w-[250px] h-36">
                    <h3 className="text-lg font-semibold text-white">Clicks</h3>
                    <p className="text-2xl font-bold text-white">15,800</p>
                    <div className="flex items-center justify-between w-full">
                      <p className="text-sm text-white">Interaction Count</p>
                      <TrendingUp className="h-7 w-7 text-lightGreen" />
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-between bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] p-4 rounded-3xl shadow-lg flex-1 min-w-[250px] h-36">
                    <h3 className="text-lg font-semibold text-white">
                      Engagement Rate
                    </h3>
                    <p className="text-2xl font-bold mt-2 text-white">12.5%</p>
                    <div className="flex items-center justify-between w-full">
                      <p className="text-sm text-white">Interaction per View</p>
                      <TrendingDown className="h-7 w-7 text-red" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mt-10">
                    <h1 className="font-semibold text-lg">
                      Content Performance Graph
                    </h1>
                    <div className="relative inline-block" ref={dropdownRef2}>
                      <Button
                        onClick={() => {
                          setOpenFilter2(!openFilter2);
                          setOpenFilter1(false);
                          setOpenFilter3(false);
                        }}
                        variant="outline"
                        className="border-borderColor1 flex items-center justify-center gap-2"
                      >
                        Filter
                        <SlidersHorizontal />
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
                                setOpenFilter3(false);
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
                  <div>
                    <BarChart />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-10">
                  <h1 className="font-semibold text-lg">
                    Content Performance Table
                  </h1>
                  <div className="flex items-center gap-4">
                    {" "}
                    <div className="relative inline-block" ref={dropdownRef3}>
                      <Button
                        onClick={() => {
                          setOpenFilter3(!openFilter3);
                          setOpenFilter1(false);
                          setOpenFilter2(false);
                        }}
                        variant="outline"
                        className="border-borderColor1 flex items-center justify-center gap-2"
                      >
                        Filter
                        <SlidersHorizontal />
                      </Button>

                      {openFilter3 && (
                        <div className="absolute right-1 mt-1 w-40 py-2 bg-white border border-borderColor1 rounded-md z-50">
                          <ul className="text-center">
                            <li
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                setShowCalendar3(true);
                                setOpenFilter3(true);
                                setOpenFilter2(false);
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
                      {showCalendar3 && (
                        <Popover
                          open={showCalendar3}
                          onOpenChange={setShowCalendar3}
                        >
                          <PopoverTrigger asChild>
                            <span
                              ref={calendarRef3}
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
                    {/* See All Button */}
                    <div className="flex items-center gap-1 cursor-pointer text-skycolor ">
                      <span className="text-base font-bold">See All</span>
                      <ChevronRight className="w-4 h-4 font-bold" />
                    </div>
                  </div>
                </div>

                <Table className="w-full overflow-x-auto table-fixed scroll">
                  <TableHeader>
                    <TableRow className="border-b border-secondarycolor">
                      <TableHead className="w-[200px] text-left pl-14 text-blackcolor font-semibold text-base">
                        Content Title
                      </TableHead>
                      <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                        Impressions
                      </TableHead>
                      <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                        Clicks
                      </TableHead>
                      <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base whitespace-nowrap">
                        Engagement Rate
                      </TableHead>
                      <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                        Earnings
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {/* First Row */}
                    <TableRow className="border-0">
                      <TableCell className="w-[200px] text-center">
                        <div className="flex items-center gap-3">
                          <Image
                            src="/food-list.png"
                            alt="Dinner Post"
                            width={140}
                            height={90}
                          />
                          <div className="flex flex-col items-start">
                            <p className="font-normal text-base">Dinner Post</p>
                            <p className="text-mediumgray2 text-base font-normal">
                              Entertainment
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="w-[200px] text-center text-base font-normal">
                        200
                      </TableCell>
                      <TableCell className="w-[200px] text-center text-base font-normal">
                        150
                      </TableCell>
                      <TableCell className="w-[200px] text-center text-base font-normal">
                        15%
                      </TableCell>
                      <TableCell className="w-[200px] text-center text-base font-normal text-lightGreen">
                        $345
                      </TableCell>
                    </TableRow>

                    {/* Second Row */}
                    <TableRow className="border-0">
                      <TableCell className="w-[200px] text-center text-base font-normal">
                        <div className="flex items-center gap-3">
                          <Image
                            src="/food-list.png"
                            alt="Dinner Post"
                            width={140}
                            height={90}
                          />
                          <div className="flex flex-col items-start">
                            <p className="text-base font-normal">Dinner Post</p>
                            <p className="text-mediumgray2 text-base font-normal">
                              Entertainment
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="w-[200px] text-center font-normal text-base">
                        200
                      </TableCell>
                      <TableCell className="w-[200px] text-center font-normal text-base">
                        150
                      </TableCell>
                      <TableCell className="w-[200px] text-center font-normal text-base">
                        15%
                      </TableCell>
                      <TableCell className="w-[200px] text-center font-normal text-base text-lightGreen">
                        $345
                      </TableCell>
                    </TableRow>

                    {/* Third Row */}
                    <TableRow className="border-0">
                      <TableCell className="w-[200px] text-center">
                        <div className="flex items-center gap-3">
                          <Image
                            src="/food-list.png"
                            alt="Dinner Post"
                            width={140}
                            height={90}
                          />
                          <div className="flex flex-col items-start">
                            <p className="text-base font-normal">Dinner Post</p>
                            <p className="text-mediumgray2 text-base font-normal">
                              Entertainment
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="w-[200px] text-center font-normal text-base">
                        200
                      </TableCell>
                      <TableCell className="w-[200px] text-center font-normal text-base">
                        150
                      </TableCell>
                      <TableCell className="w-[200px] text-center font-normal text-base">
                        15%
                      </TableCell>
                      <TableCell className="w-[200px] text-center font-normal text-base text-lightGreen">
                        $345
                      </TableCell>
                    </TableRow>

                    <TableRow className="border-0">
                      <TableCell className="w-[200px] text-center">
                        <div className="flex items-center gap-3">
                          <Image
                            src="/food-list.png"
                            alt="Dinner Post"
                            width={140}
                            height={90}
                          />
                          <div className="flex flex-col items-start">
                            <p className="text-base font-normal">Dinner Post</p>
                            <p className="text-mediumgray2 text-base font-normal">
                              Entertainment
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="w-[200px] text-center font-normal text-base">
                        200
                      </TableCell>
                      <TableCell className="w-[200px] text-center font-normal text-base">
                        150
                      </TableCell>
                      <TableCell className="w-[200px] text-center font-normal text-base">
                        15%
                      </TableCell>
                      <TableCell className="w-[200px] text-center font-normal text-base text-lightGreen">
                        $345
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
