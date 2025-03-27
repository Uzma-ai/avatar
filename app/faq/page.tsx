"use client";

import React, { useState } from "react";
import { RiQuestionnaireLine, RiSearchLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronDown,
  User,
  ShoppingCart,
  CircleUserRound,
  Users,
  ShoppingBag,
  Settings,
  MessageCircleQuestion,
  Mail,
  MoveLeft,
} from "lucide-react";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import Profilepopup from "@/components/Profilepopup";
import Subscriptionpopup from "@/components/Subscriptionpopup";
import Supportpopup from "@/components/Supportpopup";
import Settingpopup from "@/components/Settingpopup";
import Shoppingpopup from "@/components/Shoppingpopup";

const FAQPage: React.FC = () => {
 
  const [isAvatarDropdownOpen, setIsAvatarDropdoenOpen] = useState(false);
  const [isGeneralQuestionsOpen, setIsGeneralQuestionsOpen] = useState(false);
  const [isAccountSubscriptionOpen, setIsAccountSubscriptionOpen] = useState(false);
  const [isAvatarCreationOpen, setIsAvatarCreationOpen] = useState(false);
  const [isTroubleshootingOpen, setIsTroubleshootingOpen] = useState(false);
  const [isBillingPaymentsOpen, setIsBillingPaymentsOpen] = useState(false);
  const [isSupportContactOpen, setIsSupportContactOpen] = useState(false);
  const [isMobileProfileOpen, setIsMobileProfileOpen] =
    useState<boolean>(false);
  const [isMobileSubscriptionOpen, setIsMobileSubscriptionOpen] =
    useState<boolean>(false);
  const [isMobileSupportOpen, setIsMobileSupportOpen] =
    useState<boolean>(false);
  const [isMobileSettingOpen, setIsMobileSettingOpen] =
    useState<boolean>(false);
  const [isMobileShoppingOpen, setIsMobileShoppingOpen] =
    useState<boolean>(false);

  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);

  const handleChatClick = () => {
    setIsChatPopupOpen(true);
  };

  const handleCloseChatPopup = () => {
    setIsChatPopupOpen(false);
  };

   const toggleProfilePopup = () => {
     setIsMobileProfileOpen(!isMobileProfileOpen);
   };

   const toggleSubscriptionPopup = () => {
     setIsMobileSubscriptionOpen(!isMobileSubscriptionOpen);
   };

   const toggleSupportPopup = () => {
     setIsMobileSupportOpen(!isMobileSupportOpen);
   };

   const toggleSettingPopup = () => {
     setIsMobileSettingOpen(!isMobileSettingOpen);
   };

   const toggleShoopingPopup = () => {
     setIsMobileShoppingOpen(!isMobileShoppingOpen);
   };

  const handleGeneralQuestionsClick = () => {
    setIsGeneralQuestionsOpen(!isGeneralQuestionsOpen);
    setIsAccountSubscriptionOpen(false);
    setIsAvatarCreationOpen(false);
    setIsTroubleshootingOpen(false);
    setIsBillingPaymentsOpen(false);
    setIsSupportContactOpen(false);
  };

  const handleAccountSubscriptionClick = () => {
    setIsAccountSubscriptionOpen(!isAccountSubscriptionOpen);
    setIsGeneralQuestionsOpen(false);
    setIsAvatarCreationOpen(false);
    setIsTroubleshootingOpen(false);
    setIsBillingPaymentsOpen(false);
    setIsSupportContactOpen(false);
  };

  const handleAvatarCreationClick = () => {
    setIsAvatarCreationOpen(!isAvatarCreationOpen);
    setIsGeneralQuestionsOpen(false);
    setIsAccountSubscriptionOpen(false);
    setIsTroubleshootingOpen(false);
    setIsBillingPaymentsOpen(false);
    setIsSupportContactOpen(false);
  };

  const handleTroubleshootingClick = () => {
    setIsTroubleshootingOpen(!isTroubleshootingOpen);
    setIsGeneralQuestionsOpen(false);
    setIsAccountSubscriptionOpen(false);
    setIsAvatarCreationOpen(false);
    setIsBillingPaymentsOpen(false);
    setIsSupportContactOpen(false);
  };

  const handleBillingPaymentsClick = () => {
    setIsBillingPaymentsOpen(!isBillingPaymentsOpen);
    setIsGeneralQuestionsOpen(false);
    setIsAccountSubscriptionOpen(false);
    setIsAvatarCreationOpen(false);
    setIsTroubleshootingOpen(false);
    setIsSupportContactOpen(false);
  };

  const handleSupportContactClick = () => {
    setIsSupportContactOpen(!isSupportContactOpen);
    setIsGeneralQuestionsOpen(false);
    setIsAccountSubscriptionOpen(false);
    setIsAvatarCreationOpen(false);
    setIsTroubleshootingOpen(false);
    setIsBillingPaymentsOpen(false);
  };

  return (
    <div className="relative flex h-screen bg-gray-100 overflow-auto">
      <div className="w-full py-4 px-32 mt-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/support" className="absolute top-8.5 left-4">
              <button className="flex items-center gap-4">
                <MoveLeft className="h-7 w-7" />
              </button>
            </Link>
            <DropdownMenu
              open={isAvatarDropdownOpen}
              onOpenChange={setIsAvatarDropdoenOpen}
            >
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center justify-between gap-2 bg-blurwhite/60 sm:bg-blurwhite/10 backdrop-blur-sm p-1 pr-3 shadow-sm focus:!outline-none  ${
                    isAvatarDropdownOpen
                      ? "rounded-t-2xl rounded-b-none w-[170px]"
                      : "rounded-full"
                  }`}
                  aria-label="User menu"
                >
                  {" "}
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/useravtar.jpeg"
                        alt="User avatar"
                        className="object-cover"
                      />
                      <AvatarFallback>HN</AvatarFallback>
                    </Avatar>
                    {isAvatarDropdownOpen && (
                      <span className="ml-2 text-secondarycolor font-bold">
                        Hannah
                      </span>
                    )}
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-blackcolor transition-transform ${
                      isAvatarDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[170px] bg-blurwhite/60 sm:bg-blurwhite/10 rounded-b-2xl rounded-t-none backdrop-blur-lg border border-white/10 shadow-xl animate-in fade-in-80 data-[side=bottom]:slide-in-from-top-2 "
                align="start"
                alignOffset={0}
                sideOffset={0}
              >
                <DropdownMenuItem>
                  {/* Mobile: Show Popup */}
                  <div onClick={toggleProfilePopup} className="block md:hidden">
                    <button
                      className="flex items-center gap-2"
                      onClick={toggleProfilePopup}
                    >
                      <User className="mr-2 h-4 w-4 text-secondarycolor" />
                      <span>User Profile</span>
                    </button>
                  </div>

                  {/* Desktop: Navigate with Link */}
                  <Link
                    href="/profile"
                    className="hidden md:flex items-center gap-2"
                  >
                    <User className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>User Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="opacity-30 md:opacity-1" />
                <DropdownMenuItem>
                  {/* Mobile: Show Popup */}
                  <div
                    onClick={toggleSubscriptionPopup}
                    className="block md:hidden"
                  >
                    <button
                      className="flex items-center gap-2"
                      onClick={toggleSubscriptionPopup}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4 text-secondarycolor" />
                      <span>Subscription</span>
                    </button>
                  </div>

                  {/* Desktop: Navigate with Link */}
                  <Link
                    href="/subscription"
                    className="hidden md:flex items-center gap-2"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Subscription</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="opacity-30 md:opacity-1" />
                <DropdownMenuItem>
                  <Link href="/chat" className="flex items-center gap-2">
                    <CircleUserRound className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>My Avatar</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="opacity-30 md:opacity-1" />
                <Link href="/avatars">
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Public Avatar</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator className="opacity-30 md:opacity-1" />
                <DropdownMenuItem>
                  {/* Mobile: Show Popup */}
                  <div
                    onClick={toggleShoopingPopup}
                    className="block md:hidden"
                  >
                    <button
                      className="flex items-center gap-2"
                      onClick={toggleShoopingPopup}
                    >
                      <ShoppingBag className="mr-2 h-4 w-4 text-secondarycolor" />
                      <span>Shopping</span>
                    </button>
                  </div>

                  {/* Desktop: Navigate with Link */}
                  <Link
                    href="/shopping"
                    className="hidden md:flex items-center gap-2"
                  >
                    <ShoppingBag className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Shopping</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="opacity-30 md:opacity-1" />
                <DropdownMenuItem>
                  {/* Mobile: Show Popup */}
                  <div onClick={toggleSettingPopup} className="block md:hidden">
                    <button
                      className="flex items-center gap-2"
                      onClick={toggleSettingPopup}
                    >
                      <Settings className="mr-2 h-4 w-4 text-secondarycolor" />
                      <span>Settings</span>
                    </button>
                  </div>

                  {/* Desktop: Navigate with Link */}
                  <Link
                    href="/settings"
                    className="hidden md:flex items-center gap-2"
                  >
                    <Settings className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="opacity-30 md:opacity-1" />
                <DropdownMenuItem>
                  {/* Mobile: Show Popup */}
                  <div onClick={toggleSupportPopup} className="block md:hidden">
                    <button
                      className="flex items-center gap-2"
                      onClick={toggleSupportPopup}
                    >
                      <MessageCircleQuestion className="mr-2 h-4 w-4 text-secondarycolor" />
                      <span>Support</span>
                    </button>
                  </div>

                  {/* Desktop: Navigate with Link */}
                  <Link
                    href="/support"
                    className="hidden md:flex items-center gap-2"
                  >
                    <MessageCircleQuestion className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Support</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <h1 className="text-xl font-semibold flex items-center mt-2 whitespace-nowrap">
            <RiQuestionnaireLine className="mr-2 h-6 w-6 text-black" />
            Frequently asked questions
          </h1>
          <span></span>
        </div>
        <div className="mt-6 flex items-center border border-slate-400 rounded-md w-full">
          <input
            type="text"
            className="flex-grow px-4 py-2 bg-gray-100 rounded-md"
            placeholder="Search by Ticket ID or Issue Type"
          />
          <button className="px-4 py-2  text-slate-300 bg-gray-100 rounded-md flex items-center gap-2">
            <RiSearchLine className="h-5 w-5" />
          </button>
        </div>
        <div className="bg-white mt-4 rounded-md w-full">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={handleGeneralQuestionsClick}
          >
            <h2 className="text-2xl font-bold whitespace-nowrap">
              General Questions
            </h2>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                isGeneralQuestionsOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isGeneralQuestionsOpen && (
            <div className="p-4 ">
              <div className="mb-4">
                <h3 className="font-semibold">Q: What is the Avatar system?</h3>
                <p className="text-base">
                  A:The Avatar system is a platform where users can create
                  personalized avatars using video,photos,and voice.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Q: Is the Avatar service free?
                </h3>
                <p className="text-base">
                  A:Yes,a free plan is available. However,advanced features
                  require a subscription.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white mt-4 rounded-md w-full">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={handleAccountSubscriptionClick}
          >
            <h2 className="text-2xl font-bold whitespace-nowrap">
              Account & Subscription
            </h2>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                isAccountSubscriptionOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isAccountSubscriptionOpen && (
            <div className="p-4 ">
              <div className="mb-4">
                <h3 className="font-semibold">
                  Q: How do I create an account?
                </h3>
                <p className="text-base">
                  A: Click on &quot;Sign Up&quot; and follow the registration
                  process by entering your details.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Q: How do I upgrade to a premium subscription?
                </h3>
                <p className="text-base">
                  A: Go to the Subscription section under Settings and choose a
                  plan.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white mt-4 rounded-md w-full">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={handleAvatarCreationClick}
          >
            <h2 className="text-2xl font-bold whitespace-nowrap">
              Avatar & Creation
            </h2>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                isAvatarCreationOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isAvatarCreationOpen && (
            <div className="p-4 ">
              <div className="mb-4">
                <h3 className="font-semibold">
                  Q: What inputs are required to create an avatar?
                </h3>
                <p className="text-base">
                  A: You need to upload a photo or take a live picture, provide
                  a voice sample, and optionally a short video.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Q: How can I edit my avatar?</h3>
                <p className="text-base">
                  A: Go to the My Avatar section and &quot;Edit Avatar&quot;.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white mt-4 rounded-md w-full">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={handleTroubleshootingClick}
          >
            <h2 className="text-2xl font-bold whitespace-nowrap">
              Troubleshooting
            </h2>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                isTroubleshootingOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isTroubleshootingOpen && (
            <div className="p-4 ">
              <div className="mb-4">
                <h3 className="font-semibold">
                  Q: My avatar isn&apos;t syncing with my profile.What should I
                  do?
                </h3>
                <p className="text-base">
                  A: Ensure your account is verified. If the problem persists,
                  contact support.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Q: Why is my avatar voice not accurate?
                </h3>
                <p className="text-base">
                  A: Try re-uploading the voice sample or check the microphone
                  settings during recording.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white mt-4 rounded-md w-full">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={handleBillingPaymentsClick}
          >
            <h2 className="text-2xl font-bold whitespace-nowrap">
              Billing & Payments
            </h2>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                isBillingPaymentsOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isBillingPaymentsOpen && (
            <div className="p-4 ">
              <div className="mb-4">
                <h3 className="font-semibold">
                  Q: What payment methods are accepted??
                </h3>
                <p className="text-base">
                  A: We accept credit/debit cards, PayPal, and other major
                  payment gateways.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Q: I was charged twice. How can I get a refund?
                </h3>
                <p className="text-base">
                  A: Contact Billing Support through the Support page and
                  provide your payment receipt.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white mt-4 rounded-md w-full mb-10">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={handleSupportContactClick}
          >
            <h2 className="text-2xl font-bold whitespace-nowrap">
              Support & Contact
            </h2>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                isSupportContactOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isSupportContactOpen && (
            <div className="p-4">
              <div className="mb-4">
                <h3 className="font-semibold">Q: How do I contact support?</h3>
                <p className="text-base">
                  A: Use the Email Support, Chat Support, or Phone Support
                  options on the Support page.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Q: Where can I track my issue tickets?
                </h3>
                <p className="text-base">
                  A: Go to the Ticket History section on the Support page.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 pb-8">
          <div className="bg-white rounded-md flex flex-col items-center px-6 py-4 space-y-2 w-full lg:w-[40rem] h-[9rem]">
            <div className="flex items-center gap-2">
              <Mail className=" h-6 w-6 text-secondarycolor" />
              <h2 className="text-base font-semibold">Email Support</h2>
            </div>
            <p className="text-gray-400 text-xs lg:text-sm text-center">
              Send us a detailed email, and well get back to you within 24
              hours.
            </p>
            <button className="bg-secondarycolor text-white py-2 w-60 rounded-md">
              Contact by Email
            </button>
          </div>

          <div className="bg-white rounded-md flex flex-col items-center px-6 py-4 space-y-2 w-full lg:w-[40rem] h-[9rem]">
            <div className="flex items-center gap-2">
              <MdOutlineQuestionAnswer className=" h-6 w-6 text-secondarycolor" />
              <h2 className="text-base font-semibold">Chat Support</h2>
            </div>
            <p className="text-gray-400 text-xs lg:text-sm text-center">
              Connect with our support team in real-time.
            </p>
            <button
              className="bg-secondarycolor text-white py-2 w-60 rounded-md"
              onClick={handleChatClick}
            >
              Start Chat
            </button>
          </div>
        </div>
        {isChatPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-mediumWhite p-6 rounded-md shadow-md w-96 h-40">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Start the chat with</h2>
                <button
                  onClick={handleCloseChatPopup}
                  className="text-white text-2xl"
                >
                  &times;
                </button>
              </div>
              <hr className="border-t-2 border-secondarycolor mb-4" />
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col items-center gap-2">
                  <FaWhatsapp className="h-6 w-6 text-green-500" />
                  <span>WhatsApp</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <FaTelegramPlane className="h-6 w-6 text-blue-500" />
                  <span>Telegram</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MdOutlineQuestionAnswer className="h-6 w-6 text-black" />
                  <span>Support Chat</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile CMS View */}
      <div className="flex items-center justify-center h-screen md:hidden">
        {isMobileProfileOpen && (
          <Profilepopup setIsMobileProfileOpen={setIsMobileProfileOpen} />
        )}

        {isMobileSubscriptionOpen && (
          <Subscriptionpopup
            setIsMobileSubscriptionOpen={setIsMobileSubscriptionOpen}
          />
        )}

        {isMobileSupportOpen && (
          <Supportpopup setIsMobileSupportOpen={setIsMobileSupportOpen} />
        )}

        {isMobileSettingOpen && (
          <Settingpopup setIsMobileSettingOpen={setIsMobileSettingOpen} />
        )}

        {isMobileShoppingOpen && (
          <Shoppingpopup setIsMobileShoppingOpen={setIsMobileShoppingOpen} />
        )}
      </div>
    </div>
  );
};
 
export default FAQPage;

