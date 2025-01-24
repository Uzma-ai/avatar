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
  const isActive = (path: string) => pathname === path;

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  return (
    <aside className="md:w-44 lg:w-60 bg-white h-screen">
      <div className="md:p-2 lg:p-4">
        {/* Logo */}
        <div className="flex items-center justify-start mb-8 px-3">
          <Image src="/Avatar4.png" alt="Logo" width={70} height={70} />
        </div>

        {/* Menu */}
        <ul className="space-y-3">
          {/* Profile */}
          <li
            className={`rounded-sm overflow-hidden ${
              isActive("/profile") || isActive("/create-avatar")
                ? "bg-lightblue"
                : ""
            }`}
          >
            <div
              className={`flex items-center gap-3 cursor-pointer py-2.5 ${
                isActive("/profile") || isActive("/create-avatar")
                  ? "bg-secondarycolor text-white"
                  : "text-blackcolor"
              }`}
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
              className={`ml-3 mt-2 space-y-1 ${
                isDropdownVisible ? "" : "hidden"
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
          </li>

          {/* Other sections */}
          <li>
            <Link
              href="/subscription"
              className={`flex items-center p-2 md:text-base lg:text-lg rounded-md font-normal ${
                isActive("/subscription")
                  ? "text-white bg-secondarycolor"
                  : "text-blackcolor"
              }`}
            >
              <ShoppingCart
                className={`w-5 h-5 ${
                  isActive("/subscription") ? "text-white" : "text-blackcolor"
                }`}
              />
              <span className="ml-3">Subscription</span>
            </Link>
          </li>
          <li>
            <Link
              href="/chat"
              className={`flex items-center p-2 md:text-base lg:text-lg rounded-md font-normal ${
                isActive("/my-avatar")
                  ? "text-white bg-secondarycolor"
                  : "text-blackcolor"
              }`}
            >
              <UserCircle
                className={`w-5 h-5 ${
                  isActive("/my-avatar") ? "text-white" : "text-blackcolor"
                }`}
              />
              <span className="ml-3">My Avatar</span>
            </Link>
          </li>
          <li>
            <Link
              href="/avatars"
              className={`flex items-center p-2 md:text-base lg:text-lg rounded-md font-normal ${
                isActive("/public-avatar")
                  ? "text-white bg-secondarycolor"
                  : "text-blackcolor"
              }`}
            >
              <Users
                className={`w-5 h-5 ${
                  isActive("/public-avatar") ? "text-white" : "text-blackcolor"
                }`}
              />
              <span className="ml-3">Public Avatar</span>
            </Link>
          </li>
          <li>
            <Link
              href="/shopping"
              className={`flex items-center p-2 md:text-base lg:text-lg rounded-md font-normal ${
                isActive("/shopping")
                  ? "text-white bg-secondarycolor"
                  : "text-blackcolor"
              }`}
            >
              <ShoppingCart
                className={`w-5 h-5 ${
                  isActive("/shopping") ? "text-white" : "text-blackcolor"
                }`}
              />
              <span className="ml-3">Shopping</span>
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className={`flex items-center p-2 md:text-base lg:text-lg rounded-md font-normal ${
                isActive("/settings")
                  ? "text-white bg-secondarycolor"
                  : "text-blackcolor"
              }`}
            >
              <Settings
                className={`w-5 h-5 ${
                  isActive("/settings") ? "text-white" : "text-blackcolor"
                }`}
              />
              <span className="ml-3">Settings</span>
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className={`flex items-center p-2 md:text-base lg:text-lg rounded-md font-normal ${
                isActive("/support")
                  ? "text-white bg-secondarycolor"
                  : "text-blackcolor"
              }`}
            >
              <HelpCircle
                className={`w-5 h-5 ${
                  isActive("/support") ? "text-white" : "text-blackcolor"
                }`}
              />
              <span className="ml-3">Support</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default BrowserSidebar;
