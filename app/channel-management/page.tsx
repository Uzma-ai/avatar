"use client";
import { useState, KeyboardEvent } from "react";
import PublicSidebar from "@/components/PublicSidebar";
import { useRouter } from "next/navigation";
import { User, Pencil,X,ArrowUpDown } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";

export default function ChannelManagement() {
  const router = useRouter();

  const [categories, setCategories] = useState<string[]>(["Books"]);
    const [inputValue, setInputValue] = useState("");

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
                    onClick={() => router.push("/content-management")}
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
              <div className="flex items-center mt-6">
                <div className="relative w-32 h-32 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
                  <Image
                    src="/background.jpeg"
                    alt="avatar"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-black">UX Avatars</h3>
                  <p className="text-base text-mediumgray2 mr-6">12.2M subscribers 146 videos</p>
                </div>

                <div className="flex flex-wrap gap-4 hidden sm:flex">
                  <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white p-5 rounded-2xl shadow-lg flex-1 min-w-[250px] h-40 relative">
                    <h3 className="text-lg font-semibold">Total Views</h3>
                    <p className="text-3xl font-bold mt-4">22.5M</p>
                    <p className="text-sm mt-4">Aggregate Views of all Videos</p>
                  </div>

                  <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white p-5 rounded-3xl shadow-lg flex-1 min-w-[250px] h-40 relative">
                    <h3 className="text-lg font-semibold">Total Likes</h3>
                    <p className="text-3xl font-bold mt-4">15M</p>
                    <p className="text-sm mt-4">Aggregate Likes of all Videos</p> 
                  </div>

                  <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white p-5 rounded-3xl shadow-lg flex-1 min-w-[250px] h-40 relative">
                    <h3 className="text-lg font-semibold">Earnings</h3>
                    <p className="text-3xl font-bold mt-4">15M</p>
                    <p className="text-sm mt-4">Aggregate Likes of all Videos</p>
                  </div>
                </div>
              </div>
             

            <div className="mt-6">
                <h4 className="text-lg font-semibold ">Description:</h4>
                <p className="text-lg text-charcoalBlack mt-2 font-normal">
                  Welcome to <span className=" font-semibold"> UX Avatars,</span> your go-to channel for exploring the intersection of creativity,user experience, and Innovation! 
                </p>
                <p className="text-lg text-charcoalBlack mt-2 font-normal">
                Our channel is dedicated to:
                </p>
                <ul className="list-disc list-inside mt-2 text-charcoalBlack text-lg">
                    <li className="mt-1"><span className=" font-semibold"> Showcasing Avatars:</span> Dive into a world of interacting and visually stunning avatars designed to elevate digital experiences.</li>
                    <li className="mt-1"><span className=" font-semibold"> Educational Content:</span> Learn the principles of user eccentric-design and discover how avatars enhance engagement across various platforms.</li>
                    <li className="mt-1"><span className=" font-semibold"> Inspiration & Trends:</span> Stay ahead with the latest trends in UX,UI, and virtual avatar technology.</li>
                    <li className="mt-1"><span className=" font-semibold"> Interactive Demos:</span> Experience how avatars can transform interactions in business, gaming, and social media. </li>
                    
                </ul>
            </div>
            <hr className="border-t-2 border-secondarycolor mb-6 mt-6" />

            <div className="mt-6">
            <p className="text-base text-charcoalBlack mt-2 font-normal">
                 <span className=" font-semibold text-lg text-black"> Added Categories</span> (Please add minimum 5 categories for proper channel management)
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
                <h1 className="text-lg font-semibold mt-4">Add Categories</h1>
                <Input
                  placeholder="Categories"
                  className="w-full py-2 border border-borderColor1 outline-none focus:!outline-none focus:ring-0"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleAddCategory}
                />
               
            </div>

            <div className="flex items-center justify-between mt-10">
                  <h1 className="font-semibold text-lg">
                    Content Performance (Graph)
                  </h1>
                  <div className={`relative z-30 ${showDropdown === "filter1" ? "hidden" : ""}`}>
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

                <div className="flex items-center justify-between mt-10">
                  <h1 className="font-semibold text-lg">
                    Metrics Table:
                  </h1>
                  <div className={`relative z-30 ${showDropdown === "filter1" || showDropdown === "filter2" ? "hidden" : ""}`}>
                    <button
                      className="w-24 h-10 rounded-md border border-borderColor1 flex items-center justify-center"
                      onClick={() => toggleDropdown("filter3")}
                    >
                      Filter
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                    {showDropdown === "filter3" && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-400 rounded-md shadow-lg z-40">
                        <ul className="text-center">
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOptionClick("filter3", "Custom Dates")}
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
                        {showCalendar === "filter3" && (
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

                 <div className="bg-white mt-5 rounded-lg border border-secondarycolor shadow-md px-4 py-3 mx-auto overflow-x-auto">
                  <table className="w-full text-left border-collapse gap-1">
                    <thead className="text-base font-semibold">
                      <tr>
                        <th className="px-4 py-2 text-center">Content Title</th>
                        <th className="px-4 py-2 text-center">Impressions</th>
                        <th className="px-4 py-2 text-center">Clicks</th>
                        <th className="px-4 py-2 text-center">Engagement Rate</th>
                        <th className="px-4 py-2 text-center">Earnings</th>
                      </tr>
                      <tr>
                        <td colSpan={5}>
                          <hr className="border-t-2 border-secondarycolor mb-5" />
                        </td>
                      </tr>
                    </thead>
                    <tbody className="space-x-4">
                      <tr>
                        <td className="px-4 py-2 text-center">Diwali Post</td>
                        <td className="px-4 py-2 text-center">3546</td>
                        <td className="px-4 py-2 text-center">7425</td>
                        <td className="px-4 py-2 text-center">30%</td>
                        <td className="px-4 py-2 text-lightGreen text-center">$365</td>
                      </tr>
                      <tr className="">
                        <td className="px-4 py-2 text-center">New Year</td>
                        <td className="px-4 py-2 text-center">1202</td>
                        <td className="px-4 py-2 text-center">3213</td>
                        <td className="px-4 py-2 text-center">18%</td>
                        <td className="px-4 py-2 text-lightGreen text-center">$10</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center">Birthday Post</td>
                        <td className="px-4 py-2 text-center">2102</td>
                        <td className="px-4 py-2 text-center">4541</td>
                        <td className="px-4 py-2 text-center">63%</td>
                        <td className="px-4 py-2 text-lightGreen text-center">$30</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center">Diwali Post</td>
                        <td className="px-4 py-2 text-center">3546</td>
                        <td className="px-4 py-2 text-center">7425</td>
                        <td className="px-4 py-2 text-center">30%</td>
                        <td className="px-4 py-2 text-lightGreen text-center">$365</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center">Birthday Post</td>
                        <td className="px-4 py-2 text-center">2102</td>
                        <td className="px-4 py-2 text-center">4541</td>
                        <td className="px-4 py-2 text-center">63%</td>
                        <td className="px-4 py-2 text-lightGreen text-center">$30</td>
                      </tr>

                      <tr className="">
                        <td className="px-4 py-2 text-center">New Year</td>
                        <td className="px-4 py-2 text-center">1202</td>
                        <td className="px-4 py-2 text-center">3213</td>
                        <td className="px-4 py-2 text-center">18%</td>
                        <td className="px-4 py-2 text-lightGreen text-center">$10</td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 text-center">Birthday Post</td>
                        <td className="px-4 py-2 text-center">2102</td>
                        <td className="px-4 py-2 text-center">4541</td>
                        <td className="px-4 py-2 text-center">63%</td>
                        <td className="px-4 py-2 text-lightGreen text-center">$30</td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 text-center">Diwali Post</td>
                        <td className="px-4 py-2 text-center">3546</td>
                        <td className="px-4 py-2 text-center">7425</td>
                        <td className="px-4 py-2 text-center">30%</td>
                        <td className="px-4 py-2 text-lightGreen text-center">$365</td>
                      </tr>

                      <tr className="">
                        <td className="px-4 py-2 text-center">New Year</td>
                        <td className="px-4 py-2 text-center">1202</td>
                        <td className="px-4 py-2 text-center">3213</td>
                        <td className="px-4 py-2 text-center">18%</td>
                        <td className="px-4 py-2 text-lightGreen text-center">$10</td>
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