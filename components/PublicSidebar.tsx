"use client";

import React, { useState } from "react";
import {
  User,
  ShoppingCart,
  Settings,
  MessageCircleQuestion,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const PublicSidebar = () => {
  const pathname = usePathname(); // Get current route path
  const [isContentDropdownVisible, setIsContentDropdownVisible] = useState(false);
  const [isRevenueDropdownVisible, setIsRevenueDropdownVisible] = useState(false);

  const isActive = (path: string) => pathname === path;

  const toggleContentDropdown = () =>
    setIsContentDropdownVisible(!isContentDropdownVisible);
    const toggleRevenueDropdown = () =>
      setIsRevenueDropdownVisible(!isRevenueDropdownVisible);

  return (
    <aside className="md:w-44 lg:w-60 bg-white h-screen">
      <div className="md:p-2 lg:py-4 lg:px-2">
        {/* Logo */}
        <div className="flex items-center justify-start px-5">
          <Image src="/Avatar4.png" alt="Logo" width={70} height={70} />
        </div>

        <div className="flex items-center gap-2 px-2 py-5">
          <div className="h-8 w-8 rounded-full overflow-hidden">
            <Image
              src="/useravtar.jpeg"
              alt="user"
              width={50}
              height={50}
              className="object-center"
            />
          </div>
          <span className="text-sm font-semibold text-blackcolor">
            User Name
          </span>
        </div>

        {/* list */}
        <ul className="space-y-3">
          {/* Dashboard */}
          <li className="flex gap-2 items-center">
            {isActive("/dashboard") ? (
              <div className="bg-secondarycolor w-[3px] h-10 rounded-lg"></div>
            ) : (
              <div className="w-[3px] h-10"></div>
            )}
            <Link
              href="/dashboard"
              className={`flex items-center p-2 md:text-base lg:text-lg rounded-md font-normal w-full ${
                isActive("/dashboard")
                  ? "text-white bg-secondarycolor"
                  : "text-blackcolor"
              }`}
            >
              <User
                className={`w-5 h-5 ${
                  isActive("/dashboard") ? "text-white" : "text-blackcolor"
                }`}
              />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>

          <li className={`overflow-hidden flex items-start gap-2`}>
            {isActive("/content") ||
            isActive("/content-management") ||
            isActive("/content-scheduling") ||
            isActive("/channel-management") ? (
              <div className="bg-secondarycolor w-[3px] h-10 rounded-lg mt-0.5"></div>
            ) : (
              <div className="w-[3px] h-10 mt-0.5"></div>
            )}
            <div className="w-full">
              <div
                className={`flex items-center gap-3 cursor-pointer py-2.5 w-full rounded-t-md ${
                  isActive("/content") ||
                  isActive("/content-management") ||
                  isActive("/content-scheduling") ||
                  isActive("/channel-management")
                    ? "bg-secondarycolor text-white"
                    : "text-blackcolor"
                } ${
                  isContentDropdownVisible ? "rounded-b-none" : "rounded-md"
                }`}
                onClick={toggleContentDropdown} // Toggle dropdown on click
              >
                <ShoppingCart
                  className={`w-5 h-5 ${
                    isActive("/content") ||
                    isActive("/content-management") ||
                    isActive("/content-scheduling") ||
                    isActive("/channel-management")
                      ? "text-white"
                      : "text-blackcolor"
                  } ml-2`}
                />
                <span
                  className={`font-normal md:text-base lg:text-lg ${
                    isActive("/content") ||
                    isActive("/content-management") ||
                    isActive("/content-scheduling") ||
                    isActive("/channel-management")
                      ? "text-white"
                      : "text-blackcolor"
                  }`}
                >
                  Content
                </span>
              </div>

              {/* Dropdown */}
              <ul
                className={`space-y-1 ${
                  isContentDropdownVisible ? "" : "hidden"
                } ${
                  isActive("/content") ||
                  isActive("/content-management") ||
                  isActive("/content-scheduling") ||
                  isActive("/channel-management")
                    ? "bg-lightblue  rounded-b-md"
                    : ""
                }`}
              >
                <li>
                  <Link
                    href="/content-management"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/content") || isActive("/content-management")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/content") || isActive("/content-management")
                          ? "bg-secondarycolor"
                          : ""
                      } rounded-full mr-3`}
                    ></span>
                    Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/content-scheduling"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/content") || isActive("/content-scheduling")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/content") || isActive("/content-scheduling")
                          ? "bg-secondarycolor"
                          : ""
                      } rounded-full mr-3`}
                    ></span>
                    Scheduling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/channel-management"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/content") || isActive("/channel-management")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/content") || isActive("/channel-management")
                          ? "bg-secondarycolor"
                          : ""
                      } rounded-full mr-3`}
                    ></span>
                    Channel Management
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className={`overflow-hidden flex items-start gap-2`}>
            {isActive("/revenue-earnings") ||
            isActive("/ad-revenue-settings") ? (
              <div className="bg-secondarycolor w-[3px] h-10 rounded-lg mt-0.5"></div>
            ) : (
              <div className="w-[3px] h-10 mt-0.5"></div>
            )}
            <div className="w-full">
              <div
                className={`flex items-center gap-3 cursor-pointer py-2.5 w-full rounded-t-md ${
                  isActive("/revenue-earnings") ||
                  isActive("/ad-revenue-settings")
                    ? "bg-secondarycolor text-white"
                    : "text-blackcolor"
                } ${
                  isRevenueDropdownVisible ? "rounded-b-none" : "rounded-md"
                }`}
                onClick={toggleRevenueDropdown}
              >
                <UserCircle
                  className={`w-5 h-5 ${
                    isActive("/revenue-earnings") ||
                    isActive("/ad-revenue-settings")
                      ? "text-white"
                      : "text-blackcolor"
                  } ml-2`}
                />
                <span
                  className={`font-normal md:text-base lg:text-lg ${
                    isActive("/revenue-earnings") ||
                    isActive("/ad-revenue-settings")
                      ? "text-white"
                      : "text-blackcolor"
                  }`}
                >
                  Revenue
                </span>
              </div>

              {/* Dropdown */}
              <ul
                className={`space-y-1 ${
                  isRevenueDropdownVisible ? "" : "hidden"
                } ${
                  isActive("/revenue-earnings") ||
                  isActive("/ad-revenue-settings")
                    ? "bg-lightblue rounded-b-md"
                    : ""
                }`}
              >
                <li>
                  <Link
                    href="/revenue-earnings"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/revenue-earnings")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/revenue-earnings") ? "bg-secondarycolor" : ""
                      } rounded-full mr-3`}
                    ></span>
                    Revenue & Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ad-revenue-settings"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/ad-revenue-settings")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/ad-revenue-settings")
                          ? "bg-secondarycolor"
                          : ""
                      } rounded-full mr-3`}
                    ></span>
                    Ad Revenue Settings
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Other sections */}
          {[
            {
              path: "/engagement",
              label: "Engagement",
              icon: MessageCircleQuestion,
            },
            { path: "/pricings", label: "Pricings", icon: Settings },
            { path: "/reports", label: "Reports", icon: MessageCircleQuestion },
            {
              path: "/global-trends",
              label: "Global Trends",
              icon: MessageCircleQuestion,
            },
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

export default PublicSidebar;
