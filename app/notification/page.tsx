"use client";

import { useState } from "react";
import PublicSidebar from "@/components/PublicSidebar";
import { User, Bell } from "lucide-react";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("basicInfo"); // State to toggle sections

  const [clicked, setClicked] = useState<{ [key: number]: boolean }>({});

  const handleClick = (index: number) => {  // ✅ Explicitly typed 'index' as number
    setClicked((prev) => ({
      ...prev,
      [index]: true, // Set only the clicked notification
    }));
  };

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
              </div>
              <div className="text-black px-2">Dashboard</div>
            </div>
          </div>

          <div className="bg-gray-100 px-7 pt-7 pb-14 h-[calc(100vh-112px)] overflow-y-auto scroll">
            <div className="bg-white rounded-lg shadow-md p-8 mx-auto">
              <div className="flex space-x-4 mb-8  overflow-x-auto">
                <button
                  className={`whitespace-nowrap px-4 py-2 rounded-md font-semibold relative ${
                    activeSection === "basicInfo" ? "text-black" : "text-black"
                  }`}
                  onClick={() => setActiveSection("basicInfo")}
                >
                  General Notifications
                  {activeSection === "basicInfo" && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-secondarycolor"></span>
                  )}
                </button>
                <button
                  className={`whitespace-nowrap px-4 py-2 rounded-md font-semibold relative ${
                    activeSection === "moreDetails"
                      ? "text-black"
                      : "text-black"
                  }`}
                  onClick={() => setActiveSection("moreDetails")}
                >
                  Accounts & Subscription
                  {activeSection === "moreDetails" && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-secondarycolor"></span>
                  )}
                </button>
                <button
                  className={` whitespace-nowrap px-4 py-2 rounded-md font-semibold relative ${
                    activeSection === "orderPurchases"
                      ? "text-black"
                      : "text-black"
                  }`}
                  onClick={() => setActiveSection("orderPurchases")}
                >
                  Order & Purchases
                  {activeSection === "orderPurchases" && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-secondarycolor"></span>
                  )}
                </button>
                <button
                  className={`whitespace-nowrap px-4 py-2 rounded-md font-semibold relative ${
                    activeSection === "engagementContent"
                      ? "text-black"
                      : "text-black"
                  }`}
                  onClick={() => setActiveSection("engagementContent")}
                >
                  Engagement & Content
                  {activeSection === "engagementContent" && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-secondarycolor"></span>
                  )}
                </button>
                <button
                  className={`whitespace-nowrap px-4 py-2 rounded-md font-semibold relative ${
                    activeSection === "adminSystemUpdates"
                      ? "text-black"
                      : "text-black"
                  }`}
                  onClick={() => setActiveSection("adminSystemUpdates")}
                >
                  Admin & System Updates
                  {activeSection === "adminSystemUpdates" && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-secondarycolor"></span>
                  )}
                </button>
              </div>

              <div className="mb-8 p-4 bg-blue-100 rounded-md">
                <h3 className="md:text-base lg:text-lg font-semibold">
                  {activeSection === "basicInfo"
                    ? "General Notifications"
                    : activeSection === "moreDetails"
                    ? "Accounts & Subscription"
                    : activeSection === "orderPurchases"
                    ? "Order & Purchases"
                    : activeSection === "engagementContent"
                    ? "Engagement & Content"
                    : "Admin & System Updates"}
                </h3>
              </div>

              {/* General Notification */}
              {activeSection === "basicInfo" && (
                    <div className="space-y-4 text-black">
                    {/* Notification 1 */}
                    <div className="w-full flex space-x-4 items-center px-4 py-2">
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                        <Bell className="w-4 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">General Notification</p>
                        <p className="text-sm font-normal">
                          New member has signed up as PVT user.
                        </p>
                      </div>
                    </div>
              
                    {/* Notification 2 */}
                    <div
                      className={`w-full flex space-x-4 rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${
                        clicked[2] ? "bg-transparent text-black" : "bg-popbg text-white"
                      }`}
                      onClick={() => handleClick(2)}
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                        <Bell className="w-4 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">General Notification</p>
                        <p className="text-sm font-normal">
                          New member has signed up as PVT user.
                        </p>
                      </div>
                    </div>
              
                    {/* Notification 3 */}
                    <div
                      className={`w-full flex space-x-4 rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${
                        clicked[3] ? "bg-transparent text-black" : "bg-popbg text-white"
                      }`}
                      onClick={() => handleClick(3)}
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                        <Bell className="w-4 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">General Notification</p>
                        <p className="text-sm font-normal">
                          New member has signed up as PVT user.
                        </p>
                      </div>
                    </div>
              
                    {/* Notification 4 */}
                    <div className="w-full flex space-x-4 items-center px-4 py-2">
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                        <Bell className="w-4 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">General Notification</p>
                        <p className="text-sm font-normal">
                          New member has signed up as PVT user.
                        </p>
                      </div>
                    </div>
              
                    {/* Notification 5 */}
                    <div
                      className={`w-full flex space-x-4 rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${
                        clicked[5] ? "bg-transparent text-black" : "bg-popbg text-white"
                      }`}
                      onClick={() => handleClick(5)}
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                        <Bell className="w-4 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">General Notification</p>
                        <p className="text-sm font-normal">
                          New member has signed up as PVT user.
                        </p>
                      </div>
                    </div>
              
                    {/* Notification 6 */}
                    <div className="w-full flex space-x-4 items-center px-4 py-2">
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                        <Bell className="w-4 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">General Notification</p>
                        <p className="text-sm font-normal">
                          New member has signed up as PVT user.
                        </p>
                      </div>
                    </div>
              
                    {/* Notification 7 */}
                    <div
                      className={`w-full flex space-x-4 rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${
                        clicked[7] ? "bg-transparent text-black" : "bg-popbg text-white"
                      }`}
                      onClick={() => handleClick(7)}
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                        <Bell className="w-4 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">General Notification</p>
                        <p className="text-sm font-normal">
                          New member has signed up as PVT user.
                        </p>
                      </div>
                    </div>
              
                    {/* Notification 8 */}
                    <div className="w-full flex space-x-4 items-center px-4 py-2">
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                        <Bell className="w-4 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">General Notification</p>
                        <p className="text-sm font-normal">
                          New member has signed up as PVT user.
                        </p>
                      </div>
                    </div>
              
                    {/* Notification 9 */}
                    <div className="w-full flex space-x-4 items-center px-4 py-2">
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                        <Bell className="w-4 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">General Notification</p>
                        <p className="text-sm font-normal">
                          New member has signed up as PVT user.
                        </p>
                      </div>
                    </div>
              
                    {/* Notification 10 */}
                    <div
                      className={`w-full flex space-x-4 rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${
                        clicked[10] ? "bg-transparent text-black" : "bg-popbg text-white"
                      }`}
                      onClick={() => handleClick(10)}
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                        <Bell className="w-4 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">General Notification</p>
                        <p className="text-sm font-normal">
                          New member has signed up as PVT user.
                        </p>
                      </div>
                    </div>
                  </div>
              
              )}

              {/* Account Subscription */}
              {activeSection === "moreDetails" && (
                <div className="space-y-4 text-black">
                  {/* Notification 1 */}
                  <div
                      className={`w-full flex space-x-4 rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${
                        clicked[11] ? "bg-transparent text-black" : "bg-popbg text-white"
                      }`}
                      onClick={() => handleClick(11)}
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                        <Bell className="w-4 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">General Notification</p>
                        <p className="text-sm font-normal">
                          New member has signed up as PVT user.
                        </p>
                      </div>
                    </div>

                  {/* Notification 2 */}
                  <div className="w-full flex space-x-4 items-center px-4 py-2">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                      <User className="w-6 h-8" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-base">
                        Accounts & Subscription
                      </p>
                      <p className="text-sm font-normal">
                        New member has signed up as PVT user.
                      </p>
                    </div>
                  </div>

                  {/* Notification 3 */}
                  <div
                      className={`w-full flex space-x-4 rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${
                        clicked[13] ? "bg-transparent text-black" : "bg-popbg text-white"
                      }`}
                      onClick={() => handleClick(13)}
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                        <Bell className="w-4 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">General Notification</p>
                        <p className="text-sm font-normal">
                          New member has signed up as PVT user.
                        </p>
                      </div>
                    </div>

                  {/* Notification 4 */}
                  <div className="w-full flex space-x-4 items-center px-4 py-2">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                      <User className="w-6 h-8" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-base">
                        Accounts & Subscription
                      </p>
                      <p className="text-sm font-normal">
                        New member has signed up as PVT user.
                      </p>
                    </div>
                  </div>

                  {/* Notification 5 */}
                  <div
                      className={`w-full flex space-x-4 rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${
                        clicked[15] ? "bg-transparent text-black" : "bg-popbg text-white"
                      }`}
                      onClick={() => handleClick(15)}
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                        <Bell className="w-4 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">General Notification</p>
                        <p className="text-sm font-normal">
                          New member has signed up as PVT user.
                        </p>
                      </div>
                    </div>

                  {/* Notification 6 */}
                  <div
                      className={`w-full flex space-x-4 rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${
                        clicked[16] ? "bg-transparent text-black" : "bg-popbg text-white"
                      }`}
                      onClick={() => handleClick(16)}
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                        <Bell className="w-4 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">General Notification</p>
                        <p className="text-sm font-normal">
                          New member has signed up as PVT user.
                        </p>
                      </div>
                    </div>

                  {/* Notification 7 */}
                  <div className="w-full flex space-x-4 items-center px-4 py-2">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                      <User className="w-6 h-8" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-base">
                        Accounts & Subscription
                      </p>
                      <p className="text-sm font-normal">
                        New member has signed up as PVT user.
                      </p>
                    </div>
                  </div>

                  {/* Notification 8 */}
                  <div className="w-full flex space-x-4 items-center px-4 py-2">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                      <User className="w-6 h-8" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-base">
                        Accounts & Subscription
                      </p>
                      <p className="text-sm font-normal">
                        New member has signed up as PVT user.
                      </p>
                    </div>
                  </div>

                  {/* Notification 9 */}
                  <div
                      className={`w-full flex space-x-4 rounded-full px-4 py-2 cursor-pointer transition-all duration-300 ${
                        clicked[19] ? "bg-transparent text-black" : "bg-popbg text-white"
                      }`}
                      onClick={() => handleClick(19)}
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                        <Bell className="w-4 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">General Notification</p>
                        <p className="text-sm font-normal">
                          New member has signed up as PVT user.
                        </p>
                      </div>
                    </div>
                  {/* Notification 10 */}
                  <div className="w-full flex space-x-4 items-center px-4 py-2">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shrink-0">
                      <User className="w-6 h-8" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-base">
                        Accounts & Subscription
                      </p>
                      <p className="text-sm font-normal">
                        New member has signed up as PVT user.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Order Purchase */}

              {activeSection === "orderPurchases" && (
                <div className="space-y-4 text-black"></div>
              )}

              {/* Engagement Content */}

              {activeSection === "engagementContent" && (
                <div className="space-y-4 text-black"></div>
              )}

              {/* Admin Updates */}

              {activeSection === "adminSystemUpdates" && (
                <div className="space-y-4 text-black"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
