"use client";

import { useState, useRef, useEffect } from "react";
import PublicSidebar from "@/components/PublicSidebar";
import { useRouter } from "next/navigation";
import {
  User,
  SlidersHorizontal,
  TrendingUp,
  TrendingDown,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BarChart from "@/components/BarChart";
import { RevenueList } from "@/components/public-cms-components/revenue-list";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ExpenseRevenueList } from "@/components/public-cms-components/expense-revenue-list";

interface MetricCardProps {
  title: string;
  amount: string;
  trend: "up" | "down";
}

export default function ReveneuEarnings() {
  const router = useRouter();
  const [openFilter1, setOpenFilter1] = useState(false);
  const [openFilter2, setOpenFilter2] = useState(false);
  const [showCalendar1, setShowCalendar1] = useState(false);
  const [showCalendar2, setShowCalendar2] = useState(false);
  const dropdownRef1 = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);
  const calendarRef1 = useRef<HTMLDivElement>(null);
  const calendarRef2 = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("credit-card");
  const [activeTab, setActiveTab] = useState("revenue");
  const [withdrawPopup, setOpenWithdrawpopup] = useState(false);
  const [isWithdrawalSuccessfullOpen, setIsWithdrawalSuccessfullOpen] =
    useState(false);

  const handleWithdrawPopup = () => {
    setOpenWithdrawpopup(!withdrawPopup);
  };

  const closeWithdrawPopup = () => {
    setOpenWithdrawpopup(false);
  };

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setOpenWithdrawpopup(false);
    setIsWithdrawalSuccessfullOpen(true);
  };

  const RevenueContent = () => (
    <>
      <div className="flex h-screen">
        <PublicSidebar />
        <div className="flex-1 h-full px-2 overflow-hidden">
          {/* Header */}
          <div className="flex items-center h-32 py-4 px-7 rounded-md">
            <div className="w-full">
              <h2 className="text-2xl font-semibold flex items-center py-2">
                <User className="mr-2 h-6 w-6 text-mediumblack" />
                <span>Revenue</span>
              </h2>
              <div className="flex items-center justify-between">
                <div className="text-black ml-4 flex items-center gap-3">
                  <span
                    onClick={() => router.push("/revenue-earnings")}
                    className="cursor-pointer"
                  >
                    Revenue
                  </span>
                  <span>&gt;</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => router.push("/revenue-earnings")}
                  >
                    Revenue & Earnings
                  </span>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <span className="text-secondarycolor underline text-sm cursor-pointer">
                    View Monetization Policies
                  </span>
                  <button
                    className="w-32 h-10 bg-secondarycolor rounded-md text-white flex items-center justify-center gap-2"
                    onClick={handleWithdrawPopup}
                  >
                    <Image
                      src="/withdraw.svg"
                      alt="Withdraw"
                      width={25}
                      height={25}
                    />
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-100 py-7 px-7 h-[calc(100%-128px)] overflow-y-auto scroll">
            <div className="bg-white rounded-lg shadow-md px-4 py-3 mx-auto">
              <div className="flex gap-6 px-4 py-4 ">
                <button
                  className={`font-medium px-4 py-2 ${
                    activeTab === "revenue"
                      ? "border-b-2 border-blue-500 "
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("revenue")}
                >
                  Revenue and Earnings
                </button>
                <button
                  className={`font-medium px-4 py-2 ${
                    activeTab === "expenses"
                      ? "border-b-2 border-blue-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("expenses")}
                >
                  Expenses
                </button>
              </div>
              <div className="pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Revenue & Earnings</h2>
                  <p className="font-normal text-sm">
                    Monitor your earnings, track performance, and manage
                    withdrawals all in one place.
                  </p>
                </div>
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

              {/* Total Revenue Card */}
              <Card className="px-6 flex items-center justify-center bg-custom-gradient text-white rounded-2xl shadow-lg h-36">
                <div className="space-y-2 flex items-center justify-center gap-4">
                  <p className="text-base font-normal">Total Revenue</p>
                  <div className="flex items-end justify-between gap-3">
                    <h2 className="text-7xl font-bold">$122,342</h2>
                    <TrendingUp className="h-14 w-14 text-lightGreen" />
                  </div>
                </div>
              </Card>

              {/* Metric Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                <MetricCard
                  title="Revenue from Ads"
                  amount="52,342"
                  trend="up"
                />
                <MetricCard
                  title="Revenue from Subscriptions"
                  amount="22,342"
                  trend="down"
                />
                <MetricCard
                  title="Revenue from Pay per Interaction"
                  amount="1,342"
                  trend="up"
                />
                <MetricCard
                  title="Revenue from Contributions"
                  amount="12,342"
                  trend="down"
                />
                <MetricCard title="Custom Revenue" amount="5,342" trend="up" />
                <MetricCard
                  title="Boost Earnings"
                  amount="42,342"
                  trend="down"
                />
              </div>

              {/* Graph */}
              <div className="w-full">
                <div className="pt-8 pb-4 flex flex-col items-start lg:flex-row lg:items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">
                      Detailed Report Section
                    </h2>
                  </div>
                  <div className="flex items-center justifiy-center gap-2 xl:gap-4">
                    <Select defaultValue="revenue">
                      <SelectTrigger className="w-full sm:w-[180px] border-borderColor1 rounded-md py-4 focus:!outline-none focus:!ring-0">
                        <SelectValue placeholder="Revenue Source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="revenue">Revenue Source</SelectItem>
                        <SelectItem value="ads">Ads</SelectItem>
                        <SelectItem value="subscriptions">
                          Subscriptions
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="bar">
                      <SelectTrigger className="w-full sm:w-[180px] border-borderColor1 rounded-md py-4 focus:!outline-none focus:!ring-0">
                        <SelectValue placeholder="Type of graph" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bar">Bar Graph</SelectItem>
                        <SelectItem value="line">Line Graph</SelectItem>
                      </SelectContent>
                    </Select>
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
                </div>
                <BarChart />
              </div>

              {/* List */}
              <RevenueList />
            </div>
          </div>

          {/*Popups */}
          {withdrawPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2">
              <div className="bg-popbg rounded-lg p-4 max-w-[57rem] w-full h-[44rem] backdrop-blur-sm text-white overflow-y-scroll scroll">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-lg">Withdraw Money</h1>
                  <button onClick={closeWithdrawPopup} className="text-white">
                    ✖
                  </button>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="space-y-1 flex flex-col items-center justify-center">
                    <p className="font-normal text-sm">Current Balance</p>
                    <h3 className="font-semibold text-6xl">$ 112,224.00</h3>
                    <p className="font-normal text-sm">
                      Min: USD 500 | Max: USD 5,00,000
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                  <Input
                    placeholder="Enter Amount for Withdrawal"
                    className="w-full py-5 rounded-md border border-whitecolor outline-none focus:!outline-none focus:!ring-0 placeholder:text-white"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <div>
                    <h2 className="font-semibold text-base mb-2">
                      Select Account or card for Withdrawl
                    </h2>

                    <div className="space-y-3">
                      <div>
                        <div className="py-2">
                          <p className="text-xs font-medium">FREQUENTLY USED</p>
                        </div>
                        <RadioGroup
                          value={selectedMethod}
                          onValueChange={setSelectedMethod}
                        >
                          <div className="p-4 bg-white border border-lightblue rounded-md text-blackcolor">
                            <div className="flex items-center gap-3 justify-between">
                              <div className="flex items-center gap-3">
                                <RadioGroupItem
                                  value="credit-card"
                                  id="credit-card"
                                />
                                <div className="flex-1">
                                  <Label
                                    htmlFor="credit-card"
                                    className="font-semibold text-base"
                                  >
                                    Amazon pay ICICI bank credit card
                                  </Label>
                                  <p className="text-xs font-semibold text-mediumgray2 py-1">
                                    **3425 | Gaurav Yadav
                                  </p>
                                </div>
                              </div>
                              <Trash2 className="text-red w-6 h-6 cursor-pointer" />
                            </div>
                          </div>

                          <div className="py-2">
                            <p className="text-xs font-medium">UPI</p>
                          </div>

                          <div className="p-4 bg-white border border-lightblue rounded-md text-blackcolor">
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="upi" id="upi" />
                              <div className="flex-1">
                                <Label
                                  htmlFor="upi"
                                  className="font-semibold text-base"
                                >
                                  UPI
                                </Label>
                              </div>
                            </div>
                          </div>

                          <div className="py-2">
                            <p className="text-xs font-medium">
                              CREDIT & DEBIT CARDS
                            </p>
                          </div>

                          <div className="p-4 bg-white border border-lightblue rounded-md text-blackcolor">
                            <Button
                              variant="ghost"
                              className="w-full justify-start p-0 h-auto font-semibold text-base focus:!outline-none focus:!ring-0"
                            >
                              + Add a new credit or debit card
                            </Button>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <div className="py-2">
                          <p className="text-xs font-medium">
                            MORE WAYS TO PAY
                          </p>
                        </div>
                        <RadioGroup
                          value={selectedMethod}
                          onValueChange={setSelectedMethod}
                        >
                          <div className="p-4 border-b-2 bg-white border border-lightblue rounded-md text-blackcolor">
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="emi" id="emi" />
                              <Label htmlFor="emi">EMI</Label>
                            </div>
                          </div>

                          <div className="p-4 border-b-2 bg-white border border-lightblue rounded-md text-blackcolor">
                            <div className="flex items-center gap-3">
                              <RadioGroupItem
                                value="net-banking"
                                id="net-banking"
                              />
                              <Label htmlFor="net-banking">Net Banking</Label>
                            </div>
                          </div>

                          <div className="p-4 border-b-2 bg-white border border-lightblue rounded-md text-blackcolor">
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="cod" id="cod" />
                              <Label htmlFor="cod">
                                Cash on delivery/Pay on delivery
                              </Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="flex justify-center">
                        <Button
                          className="px-20 bg-secondarycolor text-white h-12 text-base hover:bg-secondarycolor hover:text-white"
                          onClick={handleSubmit}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {isWithdrawalSuccessfullOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-popbg p-4 rounded-lg max-w-[44rem] w-full h-[35rem] text-white backdrop-blur-sm flex flex-col items-start justify-center">
            <div className="flex flex-col items-center py-4 px-3 w-full">
              <div className="w-full flex justify-end">
                <button
                  onClick={() => setIsWithdrawalSuccessfullOpen(false)}
                  className="text-white"
                >
                  ✖
                </button>
              </div>
              <div className="my-8">
                <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center">
                  <Image
                    src="/payment-success.gif"
                    alt="success"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Withdrawal Successful
              </h2>
            </div>

            <div className="w-full">
              <h2 className="text-base mb-2">Withdrawal details</h2>

              <div className="space-y-3">
                <div>
                  <div className="py-2">
                    <p className="text-xs font-medium">PAYMENT METHOD</p>
                  </div>

                  <div className="p-4 bg-white border border-lightblue rounded-md text-blackcolor">
                    <div className="flex items-center gap-3 ">
                      <div className="flex-1">
                        <Label
                          htmlFor="credit-card"
                          className="font-semibold text-base"
                        >
                          Amazon pay ICICI bank credit card
                        </Label>
                        <p className="text-xs font-semibold text-mediumgray2 py-1">
                          **3425 | Gaurav Yadav
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-white text-sm mt-2 flex justify-between">
                  <span className="mr-10 ">Order ID</span>
                  <span className="ml-10 ">ID12345574324324</span>
                </div>

                <div className="text-white  mt-2 flex justify-between">
                  <span className="mr-10 text-sm">Total Amount</span>
                  <span className="ml-10 text-lg   font-semibold">$243</span>
                </div>

                <div className="flex justify-center">
                  <Button className="px-32 bg-secondarycolor text-white h-12 text-base hover:bg-secondarycolor hover:text-white">
                    Done
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  const ExpensesContent = () => (
    <>
      <div className="flex h-screen">
        <PublicSidebar />
        <div className="flex-1 h-full px-2 overflow-hidden">
          {/* Header */}
          <div className="flex items-center h-32 py-4 px-7 rounded-md">
            <div className="w-full">
              <h2 className="text-2xl font-semibold flex items-center py-2">
                <User className="mr-2 h-6 w-6 text-mediumblack" />
                <span>Revenue</span>
              </h2>
              <div className="flex items-center justify-between">
                <div className="text-black ml-4 flex items-center gap-3">
                  <span
                    onClick={() => router.push("/revenue-earnings")}
                    className="cursor-pointer"
                  >
                    Revenue
                  </span>
                  <span>&gt;</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => router.push("/revenue-earnings")}
                  >
                    Revenue & Earnings
                  </span>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <span className="text-secondarycolor underline text-sm cursor-pointer">
                    View Monetization Policies
                  </span>
                  <button
                    className="w-32 h-10 bg-secondarycolor rounded-md text-white flex items-center justify-center gap-2"
                    onClick={handleWithdrawPopup}
                  >
                    <Image
                      src="/withdraw.svg"
                      alt="Withdraw"
                      width={25}
                      height={25}
                    />
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-100 py-7 px-7 h-[calc(100%-128px)] overflow-y-auto scroll">
            <div className="bg-white rounded-lg shadow-md px-4 py-3 mx-auto">
              <div className="flex gap-6 px-4 py-4">
                <button
                  className={`font-medium px-4 py-2 ${
                    activeTab === "revenue"
                      ? "border-b-2 border-blue-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("revenue")}
                >
                  Revenue and Earnings
                </button>
                <button
                  className={`font-medium px-4 py-2 ${
                    activeTab === "expenses"
                      ? "border-b-2 border-blue-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("expenses")}
                >
                  Expenses
                </button>
              </div>
              <div className="pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Expenses</h2>
                  <p className="font-normal text-sm">
                    Monitor your expenses, track performance, and manage
                    transactions all in one place.
                  </p>
                </div>
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

              {/* Total Expense Card */}
              <Card className="px-6 flex items-center justify-center bg-custom-gradient text-white rounded-2xl shadow-lg h-36">
                <div className="space-y-2 flex items-center justify-center gap-4">
                  <p className="text-base font-normal">Total Expenses</p>
                  <div className="flex items-end justify-between gap-3">
                    <h2 className="text-7xl font-bold">$122,342</h2>
                    <TrendingUp className="h-14 w-14 text-lightGreen" />
                  </div>
                </div>
              </Card>

              {/* Metric Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-6">
                <MetricCard
                  title="Expenses on Boost"
                  amount="52,342"
                  trend="up"
                />
                <MetricCard
                  title="Expenses on Subscriptions"
                  amount="22,342"
                  trend="down"
                />
                
              </div>

             
              {/* List */}
              <ExpenseRevenueList/>
            </div>
          </div>

          {/*Popups */}
          {withdrawPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2">
              <div className="bg-popbg rounded-lg p-4 max-w-[57rem] w-full h-[44rem] backdrop-blur-sm text-white overflow-y-scroll scroll">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-lg">Withdraw Money</h1>
                  <button onClick={closeWithdrawPopup} className="text-white">
                    ✖
                  </button>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="space-y-1 flex flex-col items-center justify-center">
                    <p className="font-normal text-sm">Current Balance</p>
                    <h3 className="font-semibold text-6xl">$ 112,224.00</h3>
                    <p className="font-normal text-sm">
                      Min: USD 500 | Max: USD 5,00,000
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                  <Input
                    placeholder="Enter Amount for Withdrawal"
                    className="w-full py-5 rounded-md border border-whitecolor outline-none focus:!outline-none focus:!ring-0 placeholder:text-white"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <div>
                    <h2 className="font-semibold text-base mb-2">
                      Select Account or card for Withdrawl
                    </h2>

                    <div className="space-y-3">
                      <div>
                        <div className="py-2">
                          <p className="text-xs font-medium">FREQUENTLY USED</p>
                        </div>
                        <RadioGroup
                          value={selectedMethod}
                          onValueChange={setSelectedMethod}
                        >
                          <div className="p-4 bg-white border border-lightblue rounded-md text-blackcolor">
                            <div className="flex items-center gap-3 justify-between">
                              <div className="flex items-center gap-3">
                                <RadioGroupItem
                                  value="credit-card"
                                  id="credit-card"
                                />
                                <div className="flex-1">
                                  <Label
                                    htmlFor="credit-card"
                                    className="font-semibold text-base"
                                  >
                                    Amazon pay ICICI bank credit card
                                  </Label>
                                  <p className="text-xs font-semibold text-mediumgray2 py-1">
                                    **3425 | Gaurav Yadav
                                  </p>
                                </div>
                              </div>
                              <Trash2 className="text-red w-6 h-6 cursor-pointer" />
                            </div>
                          </div>

                          <div className="py-2">
                            <p className="text-xs font-medium">UPI</p>
                          </div>

                          <div className="p-4 bg-white border border-lightblue rounded-md text-blackcolor">
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="upi" id="upi" />
                              <div className="flex-1">
                                <Label
                                  htmlFor="upi"
                                  className="font-semibold text-base"
                                >
                                  UPI
                                </Label>
                              </div>
                            </div>
                          </div>

                          <div className="py-2">
                            <p className="text-xs font-medium">
                              CREDIT & DEBIT CARDS
                            </p>
                          </div>

                          <div className="p-4 bg-white border border-lightblue rounded-md text-blackcolor">
                            <Button
                              variant="ghost"
                              className="w-full justify-start p-0 h-auto font-semibold text-base focus:!outline-none focus:!ring-0"
                            >
                              + Add a new credit or debit card
                            </Button>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <div className="py-2">
                          <p className="text-xs font-medium">
                            MORE WAYS TO PAY
                          </p>
                        </div>
                        <RadioGroup
                          value={selectedMethod}
                          onValueChange={setSelectedMethod}
                        >
                          <div className="p-4 border-b-2 bg-white border border-lightblue rounded-md text-blackcolor">
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="emi" id="emi" />
                              <Label htmlFor="emi">EMI</Label>
                            </div>
                          </div>

                          <div className="p-4 border-b-2 bg-white border border-lightblue rounded-md text-blackcolor">
                            <div className="flex items-center gap-3">
                              <RadioGroupItem
                                value="net-banking"
                                id="net-banking"
                              />
                              <Label htmlFor="net-banking">Net Banking</Label>
                            </div>
                          </div>

                          <div className="p-4 border-b-2 bg-white border border-lightblue rounded-md text-blackcolor">
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="cod" id="cod" />
                              <Label htmlFor="cod">
                                Cash on delivery/Pay on delivery
                              </Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="flex justify-center">
                        <Button
                          className="px-20 bg-secondarycolor text-white h-12 text-base hover:bg-secondarycolor hover:text-white"
                          onClick={handleSubmit}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {isWithdrawalSuccessfullOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-popbg p-4 rounded-lg max-w-[44rem] w-full h-[35rem] text-white backdrop-blur-sm flex flex-col items-start justify-center">
            <div className="flex flex-col items-center py-4 px-3 w-full">
              <div className="w-full flex justify-end">
                <button
                  onClick={() => setIsWithdrawalSuccessfullOpen(false)}
                  className="text-white"
                >
                  ✖
                </button>
              </div>
              <div className="my-8">
                <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center">
                  <Image
                    src="/payment-success.gif"
                    alt="success"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Withdrawal Successful
              </h2>
            </div>

            <div className="w-full">
              <h2 className="text-base mb-2">Withdrawal details</h2>

              <div className="space-y-3">
                <div>
                  <div className="py-2">
                    <p className="text-xs font-medium">PAYMENT METHOD</p>
                  </div>

                  <div className="p-4 bg-white border border-lightblue rounded-md text-blackcolor">
                    <div className="flex items-center gap-3 ">
                      <div className="flex-1">
                        <Label
                          htmlFor="credit-card"
                          className="font-semibold text-base"
                        >
                          Amazon pay ICICI bank credit card
                        </Label>
                        <p className="text-xs font-semibold text-mediumgray2 py-1">
                          **3425 | Gaurav Yadav
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-white text-sm mt-2 flex justify-between">
                  <span className="mr-10 ">Order ID</span>
                  <span className="ml-10 ">ID12345574324324</span>
                </div>

                <div className="text-white  mt-2 flex justify-between">
                  <span className="mr-10 text-sm">Total Amount</span>
                  <span className="ml-10 text-lg   font-semibold">$243</span>
                </div>

                <div className="flex justify-center">
                  <Button className="px-32 bg-secondarycolor text-white h-12 text-base hover:bg-secondarycolor hover:text-white">
                    Done
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
  return (
    <div className="p-4">
    {activeTab === "revenue" && <RevenueContent />}
    {activeTab === "expenses" && <ExpensesContent />}
  </div>
  );
}

function MetricCard({ title, amount, trend }: MetricCardProps) {
  return (
    <Card className="px-6 py-3 bg-custom-gradient text-white h-36 rounded-2xl shadow-lg">
      <div className="flex flex-col items-start justify-between h-full">
        <p className="text-sm lg:text-base font-normal">{title}</p>
        <div className="flex items-end justify-between gap-10 w-full">
          <h3 className="text-3xl xl:text-5xl font-bold">${amount}</h3>
          {trend === "up" ? (
            <TrendingUp className="h-8 w-8 text-lightGreen" />
          ) : (
            <TrendingDown className="h-8 w-8 text-red" />
          )}
        </div>
      </div>
    </Card>
  );
}
