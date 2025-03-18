"use client";

import React, { useState } from "react";
import {
  User,
  Settings,
  MessageCircleQuestion,
  UserCircle,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const PublicSidebar = () => {
  const pathname = usePathname(); // Get current route path
  const [isContentDropdownVisible, setIsContentDropdownVisible] = useState(false);
  const [isRevenueDropdownVisible, setIsRevenueDropdownVisible] = useState(false);
  const [isEngagementDropdownVisible, setIsEngagementDropdownVisible] = useState(false);
  const [isPricingDropdownVisible, setIsPricingDropdownVisible] = useState(false);
  const [isReportsDropdownVisible, setIsReportsDropdownVisible] = useState(false);
  const [isGlobalDropdownVisible, setIsGlobalDropdownVisible] = useState(false);

  const isActive = (path: string) => pathname === path;

  const toggleContentDropdown = () =>
    setIsContentDropdownVisible(!isContentDropdownVisible);
    const toggleRevenueDropdown = () =>
      setIsRevenueDropdownVisible(!isRevenueDropdownVisible);
 const toggleEngagementDropdown = () =>
    setIsEngagementDropdownVisible(!isEngagementDropdownVisible);
  const togglePricingDropdown = () =>
    setIsPricingDropdownVisible(!isPricingDropdownVisible);
  const toggleReportsDropdown = () =>
    setIsReportsDropdownVisible(!isReportsDropdownVisible);
  const toggleGlobalDropdown = () =>
    setIsGlobalDropdownVisible(!isGlobalDropdownVisible);

  return (
    <aside className="md:w-44 lg:w-60 bg-white h-screen">
      <div className="md:p-2 lg:py-4 lg:px-2 h-full">
        <div className="h-40">
          {/* Logo */}
          <div className="flex items-center justify-start px-2">
            <Image src="/Avatar4.png" alt="Logo" width={70} height={70} />
          </div>

          <div className="flex items-center gap-2 px-2 py-5">
            <div className="h-8 w-8 rounded-sm overflow-hidden">
              <Image
                src="/useravtar.jpeg"
                alt="user"
                width={50}
                height={50}
                className="object-center"
              />
            </div>
            <span className="text-base font-bold text-blackcolor">
              UX Avatar&apos;s
            </span>
          </div>
        </div>

        {/* list */}
        <ul className="space-y-3 bg-red-500 h-[calc(100%-160px)] overflow-y-scroll scrollbar-hide">
          {/* Dashboard */}
          <li className="flex gap-2 items-center">
            {isActive("/dashboard") ? (
              <div className="bg-skycolor w-[3px] h-9 rounded-lg"></div>
            ) : (
              <div className="w-[3px] h-9"></div>
            )}
            <Link
              href="/dashboard"
              className={`flex items-center py-2 px-4 md:text-base lg:text-lg rounded-md font-normal w-full ${
                isActive("/dashboard")
                  ? "text-white bg-skycolor"
                  : "text-blackcolor"
              }`}
            >
              <User
                className={`w-5 h-5 ${
                  isActive("/dashboard") ? "text-white" : "text-blackcolor"
                }`}
              />
              <span
                className={`ml-3 ${
                  isActive("/dashboard") ? "font-light" : "font-normal"
                }`}
              >
                Dashboard
              </span>
            </Link>
          </li>

          {/* Content */}
          <li className={`overflow-hidden flex items-start gap-2`}>
            {isActive("/content") ||
            isActive("/content-management") ||
            isActive("/content-scheduling") ||
            isActive("/channel-management-edit") ||
            isActive("/channel-management") ? (
              <div className="bg-skycolor w-[3px] h-9 rounded-lg mt-1.5 "></div>
            ) : (
              <div className="w-[3px] h-9"></div>
            )}
            <div className="w-full">
              <div
                className={`flex items-center gap-3 cursor-pointer py-2.5 px-2 w-full rounded-t-md ${
                  isActive("/content") ||
                  isActive("/content-management") ||
                  isActive("/content-scheduling") ||
                  isActive("/channel-management-edit") ||
                  isActive("/channel-management")
                    ? "bg-skycolor text-white"
                    : "text-blackcolor"
                } ${
                  isContentDropdownVisible ? "rounded-b-none" : "rounded-md"
                }`}
                onClick={toggleContentDropdown} // Toggle dropdown on click
              >
                <Image
                  src="/content-icon.svg"
                  alt="Content"
                  width={20}
                  height={20}
                  className={`${
                    isActive("/content") ||
                    isActive("/content-management") ||
                    isActive("/content-scheduling") ||
                    isActive("/channel-management-edit") ||
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
                    isActive("/channel-management-edit") ||
                    isActive("/channel-management")
                      ? "text-white font-light"
                      : "text-blackcolor font-normal"
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
                  isActive("/channel-management-edit") ||
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
                          ? "bg-skycolor"
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
                          ? "bg-skycolor"
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
                      isActive("/content") ||
                      isActive("/channel-management") ||
                      isActive("/channel-management-edit")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/content") ||
                        isActive("/channel-management") ||
                        isActive("/channel-management-edit")
                          ? "bg-skycolor"
                          : ""
                      } rounded-full mr-3`}
                    ></span>
                    Channel Management
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Revenue */}
          <li className={`overflow-hidden flex items-start gap-2`}>
            {isActive("/revenue-earnings") || isActive("/revenue-settings") ? (
              <div className="bg-skycolor w-[3px] h-9 rounded-lg mt-1.5"></div>
            ) : (
              <div className="w-[3px] h-9 mt-0.5"></div>
            )}
            <div className="w-full">
              <div
                className={`flex items-center gap-3 cursor-pointer py-2.5 px-2 w-full rounded-t-md ${
                  isActive("/revenue-earnings") || isActive("/revenue-settings")
                    ? "bg-skycolor text-white"
                    : "text-blackcolor"
                } ${
                  isRevenueDropdownVisible ? "rounded-b-none" : "rounded-md"
                }`}
                onClick={toggleRevenueDropdown}
              >
                <UserCircle
                  className={`w-5 h-5 ${
                    isActive("/revenue-earnings") ||
                    isActive("/revenue-settings")
                      ? "text-white"
                      : "text-blackcolor"
                  } ml-2`}
                />
                <span
                  className={`font-normal md:text-base lg:text-lg ${
                    isActive("/revenue-earnings") ||
                    isActive("/revenue-settings")
                      ? "text-white font-light"
                      : "text-blackcolor font-normal"
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
                  isActive("/revenue-earnings") || isActive("/revenue-settings")
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
                        isActive("/revenue-earnings") ? "bg-skycolor" : ""
                      } rounded-full mr-3`}
                    ></span>
                    Revenue & Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/revenue-settings"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/revenue-settings")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/revenue-settings") ? "bg-skycolor" : ""
                      } rounded-full mr-3`}
                    ></span>
                    Ad Revenue Settings
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Wallet */}
          <li className="flex gap-2 items-center">
            {isActive("/wallet") ? (
              <div className="bg-skycolor w-[3px] h-9 rounded-lg"></div>
            ) : (
              <div className="w-[3px] h-9"></div>
            )}
            <Link
              href="/wallet"
              className={`flex items-center py-2 px-4 md:text-base lg:text-lg rounded-md font-normal w-full ${
                isActive("/wallet")
                  ? "text-white bg-skycolor"
                  : "text-blackcolor"
              }`}
            >
              <Wallet
                className={`w-5 h-5 ${
                  isActive("/wallet") ? "text-white" : "text-blackcolor"
                }`}
              />
              <span
                className={`ml-3 ${
                  isActive("/wallet") ? "font-light" : "font-normal"
                }`}
              >
                Wallet
              </span>
            </Link>
          </li>

          {/* Engagement */}
          <li className={`overflow-hidden flex items-start gap-2`}>
            {isActive("/engagement-community") ||
            isActive("/engagement-collaboration") ? (
              <div className="bg-skycolor w-[3px] h-9 rounded-lg mt-1.5"></div>
            ) : (
              <div className="w-[3px] h-9 mt-0.5"></div>
            )}
            <div className="w-full">
              <div
                className={`flex items-center gap-3 cursor-pointer py-2.5 px-2 w-full rounded-t-md ${
                  isActive("/engagement-community") ||
                  isActive("/engagement-collaboration")
                    ? "bg-skycolor text-white"
                    : "text-blackcolor"
                } ${
                  isEngagementDropdownVisible ? "rounded-b-none" : "rounded-md"
                }`}
                onClick={toggleEngagementDropdown}
              >
                <MessageCircleQuestion
                  className={`w-5 h-5 ${
                    isActive("/engagement-community") ||
                    isActive("/engagement-collaboration")
                      ? "text-white"
                      : "text-blackcolor"
                  } ml-2`}
                />
                <span
                  className={`font-normal md:text-base lg:text-lg ${
                    isActive("/engagement-community") ||
                    isActive("/engagement-collaboration")
                      ? "text-white font-light"
                      : "text-blackcolor font-normal"
                  }`}
                >
                  Engagement
                </span>
              </div>

              {/* Dropdown */}
              <ul
                className={`space-y-1 ${
                  isEngagementDropdownVisible ? "" : "hidden"
                } ${
                  isActive("/engagement-community") ||
                  isActive("/engagement-collaboration")
                    ? "bg-lightblue rounded-b-md"
                    : ""
                }`}
              >
                <li>
                  <Link
                    href="/engagement-community"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/engagement-community")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/engagement-community") ? "bg-skycolor" : ""
                      } rounded-full mr-3`}
                    ></span>
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="/engagement-collaboration"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/engagement-collaboration")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/engagement-collaboration")
                          ? "bg-skycolor"
                          : ""
                      } rounded-full mr-3`}
                    ></span>
                    Collaboration
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Pricing */}
          <li className={`overflow-hidden flex items-start gap-2`}>
            {isActive("/pricing-subscription") ||
            isActive("/pricing-payment") ? (
              <div className="bg-skycolor w-[3px] h-9 rounded-lg mt-1.5"></div>
            ) : (
              <div className="w-[3px] h-9 mt-0.5"></div>
            )}
            <div className="w-full">
              <div
                className={`flex items-center gap-3 cursor-pointer py-2.5 px-2 w-full rounded-t-md ${
                  isActive("/pricing-subscription") ||
                  isActive("/pricing-payment")
                    ? "bg-skycolor text-white"
                    : "text-blackcolor"
                } ${
                  isPricingDropdownVisible ? "rounded-b-none" : "rounded-md"
                }`}
                onClick={togglePricingDropdown}
              >
                <Settings
                  className={`w-5 h-5 ${
                    isActive("/pricing-subscription") ||
                    isActive("/pricing-payment")
                      ? "text-white"
                      : "text-blackcolor"
                  } ml-2`}
                />
                <span
                  className={`font-normal md:text-base lg:text-lg ${
                    isActive("/pricing-subscription") ||
                    isActive("/pricing-payment")
                      ? "text-white font-light"
                      : "text-blackcolor font-normal"
                  }`}
                >
                  Pricing
                </span>
              </div>

              {/* Dropdown */}
              <ul
                className={`space-y-1 ${
                  isPricingDropdownVisible ? "" : "hidden"
                } ${
                  isActive("/pricing-subscription") ||
                  isActive("/pricing-payment")
                    ? "bg-lightblue rounded-b-md"
                    : ""
                }`}
              >
                <li>
                  <Link
                    href="/pricing-subscription"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/pricing-subscription")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/pricing-subscription") ? "bg-skycolor" : ""
                      } rounded-full mr-3`}
                    ></span>
                    Pricing & Subscription
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing-payment"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/pricing-payment")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/pricing-payment") ? "bg-skycolor" : ""
                      } rounded-full mr-3`}
                    ></span>
                    Subscription & Payments
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Reports */}
          <li className={`overflow-hidden flex items-start gap-2`}>
            {isActive("/reports-performance") ||
            isActive("/reports-audience") ||
            isActive("/reports-analytics") ? (
              <div className="bg-skycolor w-[3px] h-9 rounded-lg mt-1.5"></div>
            ) : (
              <div className="w-[3px] h-9 mt-0.5"></div>
            )}
            <div className="w-full">
              <div
                className={`flex items-center gap-3 cursor-pointer py-2.5 px-2 w-full rounded-t-md ${
                  isActive("/reports-performance") ||
                  isActive("/reports-audience") ||
                  isActive("/reports-analytics")
                    ? "bg-skycolor text-white"
                    : "text-blackcolor"
                } ${
                  isReportsDropdownVisible ? "rounded-b-none" : "rounded-md"
                }`}
                onClick={toggleReportsDropdown}
              >
                <MessageCircleQuestion
                  className={`w-5 h-5 ${
                    isActive("/reports-performance") ||
                    isActive("/reports-audience") ||
                    isActive("/reports-analytics")
                      ? "text-white"
                      : "text-blackcolor"
                  } ml-2`}
                />
                <span
                  className={`font-normal md:text-base lg:text-lg ${
                    isActive("/reports-performance") ||
                    isActive("/reports-audience") ||
                    isActive("/reports-analytics")
                      ? "text-white font-light"
                      : "text-blackcolor font-normal"
                  }`}
                >
                  Reports
                </span>
              </div>

              {/* Dropdown */}
              <ul
                className={`space-y-1 ${
                  isReportsDropdownVisible ? "" : "hidden"
                } ${
                  isActive("/reports-performance") ||
                  isActive("/reports-audience") ||
                  isActive("/reports-analytics")
                    ? "bg-lightblue rounded-b-md"
                    : ""
                }`}
              >
                <li>
                  <Link
                    href="/reports-performance"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/reports-performance")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/reports-performance") ? "bg-skycolor" : ""
                      } rounded-full mr-3`}
                    ></span>
                    Self Performance Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reports-audience"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/reports-audience")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/reports-audience") ? "bg-skycolor" : ""
                      } rounded-full mr-3`}
                    ></span>
                    Self Audience Demographics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reports-analytics"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/reports-analytics")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/reports-analytics") ? "bg-skycolor" : ""
                      } rounded-full mr-3`}
                    ></span>
                    Analytics & Reports
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Global Trends */}
          <li className={`overflow-hidden flex items-start gap-2`}>
            {isActive("/global-trends") || isActive("/global-notification") ? (
              <div className="bg-skycolor w-[3px] h-9 rounded-lg mt-1.5"></div>
            ) : (
              <div className="w-[3px] h-9 mt-0.5"></div>
            )}
            <div className="w-full">
              <div
                className={`flex items-center gap-3 cursor-pointer py-2.5 px-2 w-full rounded-t-md ${
                  isActive("/global-trends") || isActive("/global-notification")
                    ? "bg-skycolor text-white"
                    : "text-blackcolor"
                } ${isGlobalDropdownVisible ? "rounded-b-none" : "rounded-md"}`}
                onClick={toggleGlobalDropdown}
              >
                <MessageCircleQuestion
                  className={`w-5 h-5 ${
                    isActive("/global-trends") ||
                    isActive("/global-notification")
                      ? "text-white"
                      : "text-blackcolor"
                  } ml-2`}
                />
                <span
                  className={`font-normal md:text-base lg:text-lg ${
                    isActive("/global-trends") ||
                    isActive("/global-notification")
                      ? "text-white font-light"
                      : "text-blackcolor font-normal"
                  }`}
                >
                  Global Trends
                </span>
              </div>

              {/* Dropdown */}
              <ul
                className={`space-y-1 ${
                  isGlobalDropdownVisible ? "" : "hidden"
                } ${
                  isActive("/global-trends") || isActive("/global-notification")
                    ? "bg-lightblue rounded-b-md"
                    : ""
                }`}
              >
                <li>
                  <Link
                    href="/global-trends"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/global-trends")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/global-trends") ? "bg-skycolor" : ""
                      } rounded-full mr-3`}
                    ></span>
                    Analytics & Trends
                  </Link>
                </li>
                <li>
                  <Link
                    href="/global-notification"
                    className={`flex items-center p-2 md:text-sm lg:text-base rounded-md ${
                      isActive("/global-notification")
                        ? "text-blackcolor font-normal"
                        : "text-blackcolor font-normal"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 ${
                        isActive("/global-notification") ? "bg-skycolor" : ""
                      } rounded-full mr-3`}
                    ></span>
                    Notification Settings
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default PublicSidebar;
