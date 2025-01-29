"use client";

import React, { useState } from "react";
import {
  User,
  ShoppingCart,
  Settings,
  HelpCircle,
  Users,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const BrowserSidebar = () => {
  const pathname = usePathname(); // Get current route path
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State to manage dropdown visibility

  // Helper function to check if the route is active
 const isActive = (path: string) => {
   const relatedPaths: Record<string, string[]> = {
     "/shopping": [
       "/shopping",
       "/cart-cms",
       "/payment-method-cms",
       "/payment-success-cms",
     ],
     "/profile": ["/profile", "/create-avatar"],
   };

   return relatedPaths[path]
     ? relatedPaths[path].includes(pathname)
     : pathname === path;
 };

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  return (
    <aside className="md:w-44 lg:w-60 bg-white h-screen">
      <div className="md:p-2 lg:py-4 lg:px-2">
        {/* Logo */}
        <div className="flex items-center justify-start mb-8 px-5">
          <Image src="/Avatar4.png" alt="Logo" width={70} height={70} />
        </div>

        {/* Menu */}
        <ul className="space-y-3">
          {/* Profile */}
          <li className={`overflow-hidden flex items-start gap-2`}>
            {isActive("/profile") || isActive("/create-avatar") ? (
              <div className="bg-secondarycolor w-[3px] h-10 rounded-lg mt-0.5"></div>
            ) : (
              <div className="w-[3px] h-10 mt-0.5"></div>
            )}
            <div className="w-full">
              <div
                className={`flex items-center gap-3 cursor-pointer py-2.5 w-full rounded-t-md ${
                  isActive("/profile") || isActive("/create-avatar")
                    ? "bg-secondarycolor text-white"
                    : "text-blackcolor"
                } ${isDropdownVisible ? "rounded-b-none" : "rounded-md"}`}
                onClick={toggleDropdown} // Toggle dropdown on click
              >
                <User
                  className={`w-5 h-5 ${
                    isActive("/profile") || isActive("/create-avatar")
                      ? "text-white"
                      : "text-blackcolor"
                  } ml-3`}
                />
                <span
                  className={`font-normal md:text-base lg:text-lg ${
                    isActive("/profile") || isActive("/create-avatar")
                      ? "text-white"
                      : "text-blackcolor"
                  }`}
                >
                  Profile
                </span>
              </div>

              {/* Dropdown */}
              <ul
                className={`space-y-1 ${isDropdownVisible ? "" : "hidden"} ${
                  isActive("/profile") || isActive("/create-avatar")
                    ? "bg-lightblue"
                    : ""
                }`}
              >
                <li>
                  <Link
                    href="/profile"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/profile") && !isActive("/create-avatar")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/profile") && !isActive("/create-avatar")
                          ? "bg-secondarycolor"
                          : ""
                      } rounded-full mr-3`}
                    ></span>
                    Personal Information
                  </Link>
                </li>
                <li>
                  <Link
                    href="/create-avatar"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/create-avatar")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/create-avatar") ? "bg-secondarycolor" : ""
                      } rounded-full mr-3`}
                    ></span>
                    Create Avatar
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Other sections */}
          {[
            {
              path: "/subscription",
              label: "Subscription",
              icon: ShoppingCart,
            },
            { path: "/chat", label: "My Avatar", icon: UserCircle },
            { path: "/avatars", label: "Public Avatar", icon: Users },
            { path: "/shopping", label: "Shopping", icon: ShoppingCart },
            { path: "/settings", label: "Settings", icon: Settings },
            { path: "/support", label: "Support", icon: HelpCircle },
          ].map(({ path, label, icon: Icon }) => (
            <li key={path} className="flex gap-2 items-center">
              {isActive(path) ? (
                <div className="bg-secondarycolor w-[3px] h-10 rounded-lg"></div>
              ) : (
                <div className="w-[3px] h-10"></div>
              )}
              <Link
                href={path}
                className={`flex items-center p-2 md:text-base lg:text-lg rounded-md font-normal w-full ${
                  isActive(path)
                    ? "text-white bg-secondarycolor"
                    : "text-blackcolor"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive(path) ? "text-white" : "text-blackcolor"
                  }`}
                />
                <span className="ml-3">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BrowserSidebar;
