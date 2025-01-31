"use client";

import { useState } from "react";
import PublicSidebar from "@/components/PublicSidebar";
import { User, TrendingDown, TrendingUp, ArrowUpDown } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

export default function Dashboard() {
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
          <div className="flex justify-between items-center h-28 py-4 px-7 rounded-md">
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <User className="mr-2 h-6 w-6 text-black" />
                <span>Dashboard</span>
              </h2>
              <div className="text-black ml-4">Dashboard</div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-100 py-7 px-7 h-[calc(100vh-112px)] overflow-y-auto scroll">
            <div className="bg-white rounded-lg shadow-md px-4 py-3 mx-auto">
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-base">
                    Content Creator Dashboard
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
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white p-5 rounded-3xl shadow-lg flex-1 min-w-[250px] h-34 relative">
                    <h3 className="text-lg font-semibold">Total earnings</h3>
                    <p className="text-3xl font-bold mt-4">$2,342</p>
                    <p className="text-sm mt-4">Earnings for Dec</p>
                    <TrendingUp className="absolute bottom-5 right-5 h-6 w-6 text-lightGreen" />
                  </div>

                  <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] p-5 rounded-3xl shadow-lg flex-1 min-w-[250px] h-34 relative">
                    <h3 className="text-lg font-semibold text-white">Impressions</h3>
                    <p className="text-3xl font-bold mt-4 text-white">120,000</p>
                    <p className="text-sm mt-4 text-white">Total Reach</p>
                    <TrendingDown className="absolute bottom-5 right-5 h-6 w-6 text-red" />
                  </div>

                  <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] p-5 rounded-3xl shadow-lg flex-1 min-w-[250px] h-34 relative">
                    <h3 className="text-lg font-semibold text-white">Clicks</h3>
                    <p className="text-3xl font-bold mt-4 text-white">15,800</p>
                    <p className="text-sm mt-4 text-white">Interaction Count</p>
                    <TrendingUp className="absolute bottom-5 right-5 h-6 w-6 text-lightGreen" />
                  </div>

                  <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] p-5 rounded-3xl shadow-lg flex-1 min-w-[250px] h-34 relative">
                    <h3 className="text-lg font-semibold text-white">Engagement Rate</h3>
                    <p className="text-3xl font-bold mt-4 text-white">12.5%</p>
                    <p className="text-sm mt-4 text-white">Interaction per View</p>
                    <TrendingDown className="absolute bottom-5 right-5 h-6 w-6 text-red" />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-10">
                  <h1 className="font-semibold text-base">
                    Content Performance Graph
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
                  <h1 className="font-semibold text-base">
                    Content Performance Table
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

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
