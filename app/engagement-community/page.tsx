"use client";

import { useState } from "react";
import PublicSidebar from "@/components/PublicSidebar";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Trash2, Star, StarHalf } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function EngagementCommunity() {
  const router = useRouter();

  type Status = "approved" | "rejected" | "pending";

  const [status1, setStatus1] = useState<"approved" | "rejected" | "pending">(
    "pending"
  );
  const [status2, setStatus2] = useState<"approved" | "rejected" | "pending">(
    "approved"
  );

  const [status3, setStatus3] = useState<"approved" | "rejected" | "pending">(
    "rejected"
  );

  const [status4, setStatus4] = useState<"approved" | "rejected" | "pending">(
    "approved"
  );

  const [status5, setStatus5] = useState<"approved" | "rejected" | "pending">(
    "pending"
  );

  // Dropdown open state for each row
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);

  // Get button color based on status
  const getButtonColor = (status: string) => {
    return status === "approved"
      ? "bg-green-500"
      : status === "rejected"
      ? "bg-red"
      : "bg-yellow-500";
  };

  // Handle status change for each row
  const handleStatusChange = (newStatus: Status, row: number) => {
    if (row === 1) {
      setStatus1(newStatus);
      setIsDropdownOpen1(false); // Close the dropdown for row 1
    } else if (row === 2) {
      setStatus2(newStatus);
      setIsDropdownOpen2(false); // Close the dropdown for row 2
    } else if (row === 3) {
      setStatus3(newStatus);
      setIsDropdownOpen3(false); // Close the dropdown for row 2
    } else if (row === 4) {
      setStatus4(newStatus);
      setIsDropdownOpen4(false); // Close the dropdown for row 2
    } else if (row === 5) {
      setStatus5(newStatus);
      setIsDropdownOpen5(false); // Close the dropdown for row 2
    }
  };

  // Filter out the current status for each row
  const filteredStatuses1 = ["approved", "rejected", "pending"].filter(
    (s) => s !== status1
  );
  const filteredStatuses2 = ["approved", "rejected", "pending"].filter(
    (s) => s !== status2
  );
  const filteredStatuses3 = ["approved", "rejected", "pending"].filter(
    (s) => s !== status3
  );
  const filteredStatuses4 = ["approved", "rejected", "pending"].filter(
    (s) => s !== status4
  );
  const filteredStatuses5 = ["approved", "rejected", "pending"].filter(
    (s) => s !== status5
  );

  return (
    <>
      <div className="flex h-screen">
        <PublicSidebar />
        <div className="flex-1 h-full px-2 overflow-hidden">
          {/* Header */}

          <div className="flex items-center h-32 py-4 px-7 rounded-md">
            <div className="w-full">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <User className="mr-2 h-6 w-6 text-mediumblack" />
                <span>Engagement</span>
              </h2>
              <div className="flex items-center justify-between">
                <div className="text-black ml-4 flex items-center gap-3">
                  <span
                    onClick={() => router.push("/revenue-settings")}
                    className="cursor-pointer"
                  >
                    Engagement
                  </span>
                  <span>&gt;</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => router.push("/revenue-settings")}
                  >
                    Community
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-100 py-7 px-7 h-[calc(100%-128px)] overflow-y-auto scroll">
            <div className="bg-white rounded-lg shadow-md px-4 py-3 mx-auto">
              <div className="border-b border-secondarycolor pb-4">
                <h2 className="text-lg font-semibold">Community Engagement</h2>
                <div className="flex justify-between">
                  <p className="font-normal text-sm">
                    Manage and enhance user interactions with your content
                    through comments, feedback, and fan engagement metrics.
                  </p>
                </div>
              </div>

              <h1 className="text-lg font-semibold mb-2 mt-6">
                Fan Interaction Metrics
              </h1>

              <div className="flex flex-wrap items-center gap-4 mt-4">
                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] text-white p-4 rounded-3xl shadow-lg flex-1 min-w-[200px] h-40 relative">
                  <img
                    src="/recommend.png"
                    alt="recommend"
                    className="absolute top-4 right-4 w-8 h-8"
                  />
                  <h3 className="text-lg font-semibold">Total Likes</h3>
                  <p className="text-3xl font-bold mt-10">223,230</p>
                </div>

                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] p-4 rounded-3xl shadow-lg flex-1 min-w-[200px] h-40 relative">
                  <img
                    src="/mobile_screen_share.png"
                    alt="Mobile"
                    className="absolute top-4 right-4 w-6 h-10"
                  />
                  <h3 className="text-lg font-semibold text-white">
                    Total Shares
                  </h3>
                  <p className="text-2xl lg:text-3xl font-bold mt-10 text-white">
                    12,521
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] p-4 rounded-3xl shadow-lg flex-1 min-w-[200px] h-40 relative">
                  <img
                    src="/alternate_email.png"
                    alt="alternate_email"
                    className="absolute top-4 right-4 w-8 h-8"
                  />
                  <h3 className="text-lg font-semibold text-white">
                    Total Mentions
                  </h3>
                  <p className="text-2xl lg:text-3xl font-bold mt-10 text-white">
                    534
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#5182E3] via-[#7A9FE8] to-[#c0d4ff] p-4 rounded-3xl shadow-lg flex-1 min-w-[200px] h-40 relative">
                  <img
                    src="/forum.png"
                    alt="Forum"
                    className="absolute top-4 right-4 w-8 h-8"
                  />
                  <h3 className="text-lg font-semibold text-white">
                    Total Comments
                  </h3>
                  <p className="text-2xl lg:text-3xl font-bold mt-10 text-white">
                    23,583
                  </p>
                </div>
              </div>

              <h1 className="text-lg font-semibold mb-2 mt-6">
                Top 3 Content with Most Engagement
              </h1>
              <Table className="w-full overflow-x-auto table-fixed">
                <TableHeader>
                  <TableRow className="border-b border-secondarycolor">
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Post Name
                    </TableHead>
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Likes
                    </TableHead>
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Comments
                    </TableHead>
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Mentions
                    </TableHead>
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Share
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {/* First Row */}
                  <TableRow className="border-0">
                    <TableCell className="w-[200px] flex items-center justify-start gap-3">
                      <img
                        src="/quality-badge.png"
                        alt="Dinner Post"
                        className="w-12 h-12 rounded"
                      />
                      <img
                        src="/food-list.png"
                        alt="Dinner Post"
                        className="w-44 h-16 rounded"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-base">Dinner Post</p>
                        <p className="text-mediumgray2 text-base font-normal">
                          Entertainment
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center">
                      23,230
                    </TableCell>
                    <TableCell className="w-[200px] text-center">200</TableCell>
                    <TableCell className="w-[200px] text-center">
                      1,573
                    </TableCell>
                    <TableCell className="w-[200px] text-center">
                      1,573
                    </TableCell>
                  </TableRow>

                  {/* Second Row */}
                  <TableRow className="border-0">
                    <TableCell className="w-[200px] flex items-center justify-start gap-3">
                      <img
                        src="/quality-badge 2.png"
                        alt="Dinner Post"
                        className="w-12 h-12 rounded"
                      />
                      <img
                        src="/food-list.png"
                        alt="Dinner Post"
                        className="w-44 h-16 rounded"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-base">Dinner Post</p>
                        <p className="text-mediumgray2 text-base font-normal">
                          Entertainment
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      23,230
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      200
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      1,573
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      1,573
                    </TableCell>
                  </TableRow>

                  {/* Third Row */}
                  <TableRow className="border-0">
                    <TableCell className="w-[200px] flex items-center justify-start gap-3">
                      <img
                        src="/quality-badge 3.png"
                        alt="Dinner Post"
                        className="w-12 h-12 rounded"
                      />
                      <img
                        src="/food-list.png"
                        alt="Dinner Post"
                        className="w-40 h-16 rounded"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-base">Dinner Post</p>
                        <p className="text-mediumgray2 text-base font-normal">
                          Entertainment
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      23,230
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      200
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      1,573
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      1,573
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-semibold">
                    Recent Reported Comments
                    <span className="text-base font-normal text-mediumgray2">
                      (Click on the comment to see details)
                    </span>
                  </h1>
                  <div className="bg-skycolor text-white rounded-full w-8 h-8 flex items-center justify-center text-center">
                    50
                  </div>
                </div>

                <span className="text-base font-normal text-skycolor underline cursor-pointer">
                  See all
                </span>
              </div>
              <Table className="w-full overflow-x-auto table-fixed mt-4">
                <TableHeader>
                  <TableRow className="border-b border-secondarycolor">
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Post Name
                    </TableHead>
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Comment by
                    </TableHead>
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Comment
                    </TableHead>
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Reported by
                    </TableHead>
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Date & Time
                    </TableHead>
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Report Count
                    </TableHead>
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {/* First Row */}
                  <TableRow className="border-0">
                    <TableCell className="w-[200px] flex items-center justify-start gap-3">
                      <img
                        src="/food-list.png"
                        alt="Dinner Post"
                        className="w-20 h-16 rounded"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-base">Dinner Post</p>
                        <p className="text-mediumgray2 text-base font-normal">
                          Entertainment
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal ">
                      <div className="flex items-center justify-center">
                        <img
                          src="Harvey.jpg" // Replace with the actual image path
                          alt="Harvey Specter"
                          className="object-cover w-10 h-10 rounded-lg mr-2 ml-6 " // Adjust the size and styling of the image
                        />
                        Harvey Specter
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div className="flex flex-col items-center text-red ">
                        <span>Poor quality,******</span>
                        <span>******yourself</span>
                      </div>
                    </TableCell>

                    <TableCell className="w-[200px] text-center text-base font-normal flex justify-center items-center">
                      <img
                        src="Reported_img.jpg"
                        alt="image"
                        className=" object-cover w-10 h-10 rounded-lg"
                      />
                    </TableCell>

                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div>
                        <span className="text-base font-normal">
                          6th Jan 2025
                        </span>
                        <span className="block text-sm">02:00 PM</span>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      5
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      {/* Dropdown button */}
                      <div className="relative inline-block text-left">
                        <button
                          type="button"
                          className={`inline-flex items-center px-3 py-2 text-white rounded ${getButtonColor(
                            status1
                          )}`}
                          onClick={() => setIsDropdownOpen1(!isDropdownOpen1)} // Toggle dropdown for row 1
                        >
                          {status1.charAt(0).toUpperCase() + status1.slice(1)}
                          <ChevronDown className="ml-2" />
                        </button>

                        {/* Dropdown menu for row 1 */}
                        {isDropdownOpen1 && (
                          <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-full">
                            {filteredStatuses1.map((s) => (
                              <button
                                key={s}
                                onClick={() =>
                                  handleStatusChange(s as Status, 1)
                                } // Ensure the status is typed correctly
                                className={`block w-full px-3 py-2 text-sm text-white ${
                                  s === "approved"
                                    ? "bg-green-500"
                                    : s === "rejected"
                                    ? "bg-red"
                                    : "bg-yellow-500"
                                }`}
                              >
                                {s.charAt(0).toUpperCase() + s.slice(1)}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>

                  {/* Second Row */}
                  <TableRow className="border-0">
                    <TableCell className="w-[200px] flex items-center justify-start gap-3">
                      <img
                        src="/food-list.png"
                        alt="Dinner Post"
                        className="w-20 h-16 rounded"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-base">Dinner Post</p>
                        <p className="text-mediumgray2 text-base font-normal">
                          Entertainment
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div className="flex items-center justify-center">
                        <img
                          src="Harvey.jpg" // Replace with the actual image path
                          alt="Harvey Specter"
                          className="object-cover w-10 h-10 rounded-lg mr-2 ml-6" // Adjust the size and styling of the image
                        />
                        Harvey Specter
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div className="flex flex-col items-center text-red ">
                        <span>Poor quality,******</span>
                        <span>******yourself</span>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal flex justify-center items-center">
                      <img
                        src="Reported_img.jpg"
                        alt="image"
                        className=" object-cover w-10 h-10 rounded-lg"
                      />
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div>
                        <span className="text-base font-normal">
                          6th Jan 2025
                        </span>
                        <span className="block text-sm">02:00 PM</span>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      5
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      {/* Dropdown button */}
                      <div className="relative inline-block text-left">
                        <button
                          type="button"
                          className={`inline-flex items-center px-3 py-2 text-white rounded ${getButtonColor(
                            status2
                          )}`}
                          onClick={() => setIsDropdownOpen2(!isDropdownOpen2)} // Toggle dropdown for row 2
                        >
                          {status2.charAt(0).toUpperCase() + status2.slice(1)}
                          <ChevronDown className="ml-2" />
                        </button>

                        {/* Dropdown menu for row 2 */}
                        {isDropdownOpen2 && (
                          <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-full">
                            {filteredStatuses2.map((s) => (
                              <button
                                key={s}
                                onClick={() =>
                                  handleStatusChange(s as Status, 2)
                                } // Ensure the status is typed correctly
                                className={`block w-full px-3 py-2 text-sm text-white ${
                                  s === "approved"
                                    ? "bg-green-500"
                                    : s === "rejected"
                                    ? "bg-red"
                                    : "bg-yellow-500"
                                }`}
                              >
                                {s.charAt(0).toUpperCase() + s.slice(1)}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>

                  {/* Third Row */}
                  <TableRow className="border-0">
                    <TableCell className="w-[200px] flex items-center justify-start gap-3">
                      <img
                        src="/food-list.png"
                        alt="Dinner Post"
                        className="w-20 h-16 rounded"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-base">Dinner Post</p>
                        <p className="text-mediumgray2 text-base font-normal">
                          Entertainment
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div className="flex items-center justify-center">
                        <img
                          src="Harvey.jpg" // Replace with the actual image path
                          alt="Harvey Specter"
                          className="object-cover w-10 h-10 rounded-lg mr-2 ml-6" // Adjust the size and styling of the image
                        />
                        Harvey Specter
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div className="flex flex-col items-center text-red ">
                        <span>Poor quality,******</span>
                        <span>******yourself</span>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal flex justify-center items-center">
                      <img
                        src="Reported_img.jpg"
                        alt="image"
                        className=" object-cover w-10 h-10 rounded-lg"
                      />
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div>
                        <span className="text-base font-normal">
                          6th Jan 2025
                        </span>
                        <span className="block text-sm">02:00 PM</span>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      5
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      {/* Dropdown button */}
                      <div className="relative inline-block text-left">
                        <button
                          type="button"
                          className={`inline-flex items-center px-3 py-2 text-white rounded ${getButtonColor(
                            status3
                          )}`}
                          onClick={() => setIsDropdownOpen3(!isDropdownOpen3)} // Toggle dropdown for row 2
                        >
                          {status3.charAt(0).toUpperCase() + status3.slice(1)}
                          <ChevronDown className="ml-2" />
                        </button>

                        {/* Dropdown menu for row 2 */}
                        {isDropdownOpen3 && (
                          <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-full">
                            {filteredStatuses3.map((s) => (
                              <button
                                key={s}
                                onClick={() =>
                                  handleStatusChange(s as Status, 3)
                                } // Ensure the status is typed correctly
                                className={`block w-full px-3 py-2 text-sm text-white ${
                                  s === "approved"
                                    ? "bg-green-500"
                                    : s === "rejected"
                                    ? "bg-red"
                                    : "bg-yellow-500"
                                }`}
                              >
                                {s.charAt(0).toUpperCase() + s.slice(1)}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow className="border-0">
                    <TableCell className="w-[200px] flex items-center justify-start gap-3">
                      <img
                        src="/food-list.png"
                        alt="Dinner Post"
                        className="w-20 h-16 rounded"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-base">Dinner Post</p>
                        <p className="text-mediumgray2 text-base font-normal">
                          Entertainment
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div className="flex items-center justify-center">
                        <img
                          src="Harvey.jpg" // Replace with the actual image path
                          alt="Harvey Specter"
                          className="object-cover w-10 h-10 rounded-lg mr-2 ml-6" // Adjust the size and styling of the image
                        />
                        Harvey Specter
                      </div>
                    </TableCell>

                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div className="flex flex-col items-center text-red ">
                        <span>Poor quality,******</span>
                        <span>******yourself</span>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal flex justify-center items-center">
                      <img
                        src="Reported_img.jpg"
                        alt="image"
                        className=" object-cover w-10 h-10 rounded-lg"
                      />
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div>
                        <span className="text-base font-normal">
                          6th Jan 2025
                        </span>
                        <span className="block text-sm">02:00 PM</span>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      5
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      {/* Dropdown button for row 4 */}
                      <div className="relative inline-block text-left">
                        <button
                          type="button"
                          className={`inline-flex items-center px-3 py-2 text-white rounded ${getButtonColor(
                            status4
                          )}`}
                          onClick={() => setIsDropdownOpen4(!isDropdownOpen4)} // Toggle dropdown for row 4
                        >
                          {status4.charAt(0).toUpperCase() + status4.slice(1)}
                          <ChevronDown className="ml-2" />
                        </button>

                        {/* Dropdown menu for row 4 */}
                        {isDropdownOpen4 && (
                          <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-full">
                            {filteredStatuses4.map((s) => (
                              <button
                                key={s}
                                onClick={() =>
                                  handleStatusChange(s as Status, 4)
                                } // Ensure the status is typed correctly
                                className={`block w-full px-3 py-2 text-sm text-white ${
                                  s === "approved"
                                    ? "bg-green-500"
                                    : s === "rejected"
                                    ? "bg-red"
                                    : "bg-yellow-500"
                                }`}
                              >
                                {s.charAt(0).toUpperCase() + s.slice(1)}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow className="border-0">
                    <TableCell className="w-[200px] flex items-center justify-start gap-3">
                      <img
                        src="/food-list.png"
                        alt="Dinner Post"
                        className="w-20 h-16 rounded"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-base">Dinner Post</p>
                        <p className="text-mediumgray2 text-base font-normal">
                          Entertainment
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div className="flex items-center justify-center">
                        <img
                          src="Harvey.jpg" // Replace with the actual image path
                          alt="Harvey Specter"
                          className="object-cover w-10 h-10 rounded-lg mr-2 ml-6" // Adjust the size and styling of the image
                        />
                        Harvey Specter
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div className="flex flex-col items-center text-red ">
                        <span>Poor quality,******</span>
                        <span>******yourself</span>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal flex justify-center items-center">
                      <img
                        src="Reported_img.jpg"
                        alt="image"
                        className=" object-cover w-10 h-10 rounded-lg"
                      />
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div>
                        <span className="text-base font-normal">
                          6th Jan 2025
                        </span>
                        <span className="block text-sm">02:00 PM</span>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      5
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      {/* Dropdown button */}
                      <div className="relative inline-block text-left">
                        <button
                          type="button"
                          className={`inline-flex items-center px-3 py-2 text-white rounded ${getButtonColor(
                            status5
                          )}`}
                          onClick={() => setIsDropdownOpen5(!isDropdownOpen5)} // Toggle dropdown for row 5
                        >
                          {status5.charAt(0).toUpperCase() + status5.slice(1)}
                          <ChevronDown className="ml-2" />
                        </button>

                        {/* Dropdown menu for row 5 */}
                        {isDropdownOpen5 && (
                          <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-full">
                            {filteredStatuses5.map((s) => (
                              <button
                                key={s}
                                onClick={() =>
                                  handleStatusChange(s as Status, 5)
                                } // Ensure the status is typed correctly for row 5
                                className={`block w-full px-3 py-2 text-sm text-white ${
                                  s === "approved"
                                    ? "bg-green-500"
                                    : s === "rejected"
                                    ? "bg-red"
                                    : "bg-yellow-500"
                                }`}
                              >
                                {s.charAt(0).toUpperCase() + s.slice(1)}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-semibold">User Reviews</h1>
                  <div className="bg-skycolor text-white rounded-full w-8 h-8 flex items-center justify-center text-center">
                    50
                  </div>
                </div>
                <span className="text-base font-normal text-skycolor underline cursor-pointer">
                  See all
                </span>
              </div>
              <Table className="w-full overflow-x-auto table-fixed mt-4">
                <TableHeader>
                  <TableRow className="border-b border-secondarycolor">
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Post Name
                    </TableHead>
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Ratings
                    </TableHead>
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      People Responded
                    </TableHead>
                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Date & Time
                    </TableHead>

                    <TableHead className="w-[200px] text-center text-blackcolor font-semibold text-base">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {/* First Row */}
                  <TableRow className="border-0">
                    <TableCell className="w-[200px] flex items-center justify-start gap-3">
                      <img
                        src="/Car.jpg"
                        alt="Dinner Post"
                        className="w-44 h-12 rounded"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-base">Car Rental</p>
                        <p className="text-mediumgray2 text-base font-normal">
                          Informational
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      {/* Full Filled Stars */}
                      <Star className="text-yellow-500 inline-block" />
                      <Star className="text-yellow-500 inline-block" />
                      <Star className="text-yellow-500 inline-block" />
                      <Star className="text-yellow-500 inline-block" />

                      {/* Half Filled Star */}
                      <StarHalf className="text-yellow-500 inline-block" />
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      256,123
                    </TableCell>

                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div>
                        <span className="text-base font-normal">
                          6th Jan 2025
                        </span>
                        <span className="block text-sm">02:00 PM</span>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal flex justify-center items-center">
                      <Trash2 className="text-red" />
                    </TableCell>
                  </TableRow>

                  {/* Second Row */}
                  <TableRow className="border-0">
                    <TableCell className="w-[200px] flex items-center justify-start gap-3">
                      <img
                        src="/Car.jpg"
                        alt="Dinner Post"
                        className="w-44 h-12 rounded"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-base">Car Rental</p>
                        <p className="text-mediumgray2 text-base font-normal">
                          Informational
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      {/* Full Filled Stars */}
                      <Star className="text-yellow-500 inline-block" />
                      <Star className="text-yellow-500 inline-block" />
                      <Star className="text-yellow-500 inline-block" />
                      <Star className="text-yellow-500 inline-block" />

                      {/* Half Filled Star */}
                      <StarHalf className="text-yellow-500 inline-block" />
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      256,123
                    </TableCell>

                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div>
                        <span className="text-base font-normal">
                          6th Jan 2025
                        </span>
                        <span className="block text-sm">02:00 PM</span>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal flex justify-center items-center">
                      <Trash2 className="text-red" />
                    </TableCell>
                  </TableRow>

                  {/* Third Row */}
                  <TableRow className="border-0">
                    <TableCell className="w-[200px] flex items-center justify-start gap-3">
                      <img
                        src="/Car.jpg"
                        alt="Dinner Post"
                        className="w-44 h-12 rounded"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-base">Car Rental</p>
                        <p className="text-mediumgray2 text-base font-normal">
                          Informational
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      {/* Full Filled Stars */}
                      <Star className="text-yellow-500 inline-block" />
                      <Star className="text-yellow-500 inline-block" />
                      <Star className="text-yellow-500 inline-block" />
                      <Star className="text-yellow-500 inline-block" />

                      {/* Half Filled Star */}
                      <StarHalf className="text-yellow-500 inline-block" />
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      256,123
                    </TableCell>

                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div>
                        <span className="text-base font-normal">
                          6th Jan 2025
                        </span>
                        <span className="block text-sm">02:00 PM</span>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal flex justify-center items-center">
                      <Trash2 className="text-red" />
                    </TableCell>
                  </TableRow>

                  <TableRow className="border-0">
                    <TableCell className="w-[200px] flex items-center justify-start gap-3">
                      <img
                        src="/Car.jpg"
                        alt="Dinner Post"
                        className="w-44 h-12 rounded"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-base">Car Rental</p>
                        <p className="text-mediumgray2 text-base font-normal">
                          Informational
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      {/* Full Filled Stars */}
                      <Star className="text-yellow-500 inline-block" />
                      <Star className="text-yellow-500 inline-block" />
                      <Star className="text-yellow-500 inline-block" />
                      <Star className="text-yellow-500 inline-block" />

                      {/* Half Filled Star */}
                      <StarHalf className="text-yellow-500 inline-block" />
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      256,123
                    </TableCell>

                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div>
                        <span className="text-base font-normal">
                          6th Jan 2025
                        </span>
                        <span className="block text-sm">02:00 PM</span>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal flex justify-center items-center">
                      <Trash2 className="text-red" />
                    </TableCell>
                  </TableRow>

                  <TableRow className="border-0">
                    <TableCell className="w-[200px] flex items-center justify-start gap-3">
                      <img
                        src="/Car.jpg"
                        alt="Dinner Post"
                        className="w-44 h-12 rounded"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-base">Car Rental</p>
                        <p className="text-mediumgray2 text-base font-normal">
                          Informational
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      {/* Full Filled Stars */}
                      <Star className="text-yellow-500 inline-block" />
                      <Star className="text-yellow-500 inline-block" />
                      <Star className="text-yellow-500 inline-block" />
                      <Star className="text-yellow-500 inline-block" />

                      {/* Half Filled Star */}
                      <StarHalf className="text-yellow-500 inline-block" />
                    </TableCell>
                    <TableCell className="w-[200px] text-center text-base font-normal">
                      256,123
                    </TableCell>

                    <TableCell className="w-[200px] text-center text-base font-normal">
                      <div>
                        <span className="text-base font-normal">
                          6th Jan 2025
                        </span>
                        <span className="block text-sm">02:00 PM</span>
                      </div>
                    </TableCell>
                    <TableCell className="w-[200px] text-center  text-base font-normal flex justify-center items-center">
                      <Trash2 className="text-red" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
