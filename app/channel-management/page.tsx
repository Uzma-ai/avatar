"use client";
import { useState, useEffect,useRef, KeyboardEvent } from "react";
import PublicSidebar from "@/components/PublicSidebar";
import { useRouter } from "next/navigation";
import { User, Pencil,X,ArrowUpDown } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";
import BarChart from "@/components/BarChart";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function ChannelManagement() {
  const router = useRouter();

  const [categories, setCategories] = useState<string[]>(["Books"]);
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState<string | null>(null);
   const [openFilter1, setOpenFilter1] = useState(false);
  const [openFilter2, setOpenFilter2] = useState(false);
   const [showCalendar1, setShowCalendar1] = useState(false);
  const [showCalendar2, setShowCalendar2] = useState(false);
   const dropdownRef1 = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);
    const calendarRef1 = useRef<HTMLDivElement>(null);
    const calendarRef2 = useRef<HTMLDivElement>(null);

    const handleAddCategory = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputValue.trim()) {
          if (!categories.includes(inputValue.trim())) {
            setCategories([...categories, inputValue.trim()]);
            setInputValue("");
          }
        }
      };

    const handleRemoveCategory = (category: string) => {
        setCategories(categories.filter((c) => c !== category));
      };

     
    
   useEffect(() => {
     const storedImage = localStorage.getItem("channelImage");
     if (storedImage) {
       setImage(storedImage);
     }
   }, []);
  
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
                    onClick={() => router.push("/channel-management")}
                  >
                    Channel Management
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-100 py-7 px-7 h-[calc(100vh-112px)] overflow-y-auto scroll">
            <div className="bg-white rounded-lg shadow-md px-4 py-3 mx-auto">
              <div className="border-b border-secondarycolor pb-4">
                <h2 className="text-lg font-semibold">Channel Management</h2>
                <div className="flex justify-between">
                  <p className="font-normal text-sm">
                    Manage your Avatar content channels, organize videos, and
                    track performance.
                  </p>
                  <button className="">
                    <Link href="/channel-management-edit">
                      <Pencil className="h-4 w-4" />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center mt-6 gap-2">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src={image || "/background.jpeg"}
                      alt="avatar"
                      className="object-cover w-full h-full"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">
                      UX Avatars
                    </h3>
                    <p className="text-base text-mediumgray2 mr-6">
                      12.2M subscribers 146 videos
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white px-5 py-4 rounded-2xl shadow-lg min-w-[15rem] h-40 space-y-5">
                    <h3 className="text-lg font-semibold">Total Views</h3>
                    <p className="text-3xl font-bold">22.5M</p>
                    <p className="text-xs">Aggregate Views of all Videos</p>
                  </div>

                  <div className="flex-1 bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white px-5 py-4 rounded-2xl shadow-lg min-w-[15rem] h-40 space-y-5">
                    <h3 className="text-lg font-semibold">Total Likes</h3>
                    <p className="text-3xl font-bold">15M</p>
                    <p className="text-xs">Aggregate Likes of all Videos</p>
                  </div>

                  <div className="flex-1 bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white px-5 py-4 rounded-2xl shadow-lg min-w-[15rem] h-40 space-y-5">
                    <h3 className="text-lg font-semibold">Earnings</h3>
                    <p className="text-3xl font-bold">15M</p>
                    <p className="text-xs">Aggregate Likes of all Videos</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 px-2">
                <h4 className="text-base font-semibold ">Description:</h4>
                <p className="text-base text-charcoalBlack mt-2 font-normal">
                  Welcome to{" "}
                  <span className=" font-semibold"> UX Avatars,</span> your
                  go-to channel for exploring the intersection of
                  creativity,user experience, and Innovation!
                </p>
                <p className="text-base text-charcoalBlack mt-2 font-normal">
                  Our channel is dedicated to:
                </p>
                <ul className="list-disc list-inside mt-2 text-charcoalBlack text-base">
                  <li className="mt-1">
                    <span className=" font-semibold"> Showcasing Avatars:</span>{" "}
                    Dive into a world of interacting and visually stunning
                    avatars designed to elevate digital experiences.
                  </li>
                  <li className="mt-1">
                    <span className=" font-semibold">
                      {" "}
                      Educational Content:
                    </span>{" "}
                    Learn the principles of user eccentric-design and discover
                    how avatars enhance engagement across various platforms.
                  </li>
                  <li className="mt-1">
                    <span className=" font-semibold">
                      {" "}
                      Inspiration & Trends:
                    </span>{" "}
                    Stay ahead with the latest trends in UX,UI, and virtual
                    avatar technology.
                  </li>
                  <li className="mt-1">
                    <span className=" font-semibold"> Interactive Demos:</span>{" "}
                    Experience how avatars can transform interactions in
                    business, gaming, and social media.{" "}
                  </li>
                </ul>
              </div>
              <hr className="border-t border-secondarycolor mb-6 mt-6" />

              <div className="mt-6 border-b border-secondarycolor pb-6">
                <p className="text-sm text-charcoalBlack mt-2 font-normal">
                  <span className=" font-semibold text-base text-black">
                    {" "}
                    Added Categories
                  </span>{" "}
                  (Please add minimum 5 categories for proper channel
                  management)
                </p>

                <div className="flex flex-wrap gap-2 my-3">
                  {categories.map((category, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="flex items-center gap-1 w-20 h-8 rounded-md bg-inputbackground text-sm"
                    >
                      {category}
                      <button
                        onClick={() => handleRemoveCategory(category)}
                        className="ml-1 hover:bg-muted rounded-full"
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">
                          Remove {category} category
                        </span>
                      </button>
                    </Badge>
                  ))}
                </div>
                <h1 className="text-base font-semibold py-2">Add Categories</h1>
                <Input
                  placeholder="Add Categories"
                  className="w-full py-5 border border-borderColor1 outline-none focus:!outline-none focus:ring-0"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleAddCategory}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mt-5">
                  <h1 className="font-semibold text-base">
                    Content Performance (Graph)
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
                <BarChart />
              </div>

              <div className="flex items-center justify-between mt-5">
                <h1 className="font-semibold text-base">Metrics Table:</h1>
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

              <div className="bg-white mt-5 rounded-lg border border-secondarycolor shadow-md px-4 py-3 mx-auto overflow-x-auto">
                <table className="w-full text-left border-collapse gap-1">
                  <thead className="text-base font-semibold">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold">
                        Content Title
                      </th>
                      <th className="px-4 py-2 text-center font-semibold">
                        Impressions
                      </th>
                      <th className="px-4 py-2 text-center font-semibold">
                        Clicks
                      </th>
                      <th className="px-4 py-2 text-center font-semibold">
                        Engagement Rate
                      </th>
                      <th className="px-4 py-2 text-center font-semibold">
                        Earnings
                      </th>
                    </tr>
                    <tr>
                      <td colSpan={5}>
                        <hr className="border-t border-secondarycolor mb-1" />
                      </td>
                    </tr>
                  </thead>
                  <tbody className="space-x-4">
                    <tr>
                      <td className="px-4 py-2 text-left font-normal">
                        Diwali Post
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        3546
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        7425
                      </td>
                      <td className="px-4 py-2 text-center font-normal">30%</td>
                      <td className="px-4 py-2 text-lightGreen text-center font-normal">
                        $365
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-left font-normal">
                        New Year
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        1202
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        3213
                      </td>
                      <td className="px-4 py-2 text-center font-normal">18%</td>
                      <td className="px-4 py-2 text-lightGreen text-center font-normal">
                        $10
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-left font-normal">
                        Birthday Post
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        2102
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        4541
                      </td>
                      <td className="px-4 py-2 text-center font-normal">63%</td>
                      <td className="px-4 py-2 text-lightGreen text-center font-normal">
                        $30
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-left font-normal">
                        Diwali Post
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        3546
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        7425
                      </td>
                      <td className="px-4 py-2 text-center font-normal">30%</td>
                      <td className="px-4 py-2 text-lightGreen text-center font-normal">
                        $365
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-left font-normal">
                        Birthday Post
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        2102
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        4541
                      </td>
                      <td className="px-4 py-2 text-center font-normal">63%</td>
                      <td className="px-4 py-2 text-lightGreen text-center font-normal">
                        $30
                      </td>
                    </tr>

                    <tr className="">
                      <td className="px-4 py-2 text-left font-normal">
                        New Year
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        1202
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        3213
                      </td>
                      <td className="px-4 py-2 text-center font-normal">18%</td>
                      <td className="px-4 py-2 text-lightGreen text-center font-normal">
                        $10
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-2 text-left font-normal">
                        Birthday Post
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        2102
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        4541
                      </td>
                      <td className="px-4 py-2 text-center font-normal">63%</td>
                      <td className="px-4 py-2 text-lightGreen text-center font-normal">
                        $30
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-2 text-left font-normal">
                        Diwali Post
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        3546
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        7425
                      </td>
                      <td className="px-4 py-2 text-center font-normal">30%</td>
                      <td className="px-4 py-2 text-lightGreen text-center font-normal">
                        $365
                      </td>
                    </tr>

                    <tr className="">
                      <td className="px-4 py-2 text-left font-normal">
                        New Year
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        1202
                      </td>
                      <td className="px-4 py-2 text-center font-normal">
                        3213
                      </td>
                      <td className="px-4 py-2 text-center font-normal">18%</td>
                      <td className="px-4 py-2 text-lightGreen text-center font-normal">
                        $10
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="justify-end mt-10 flex">
                <button className="w-40 py-2 bg-neutral-300 text-neutral-400 rounded-md ml-auto">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}