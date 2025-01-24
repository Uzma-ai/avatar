"use client";
import React, { useState } from "react";
import { RiQuestionnaireLine, RiSearchLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
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
  ArrowLeft,
} from "lucide-react";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

const FAQPage: React.FC = () => {
 
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isGeneralQuestionsOpen, setIsGeneralQuestionsOpen] = useState(false);
  const [isAccountSubscriptionOpen, setIsAccountSubscriptionOpen] = useState(false);
  const [isAvatarCreationOpen, setIsAvatarCreationOpen] = useState(false);
  const [isTroubleshootingOpen, setIsTroubleshootingOpen] = useState(false);
  const [isBillingPaymentsOpen, setIsBillingPaymentsOpen] = useState(false);
  const [isSupportContactOpen, setIsSupportContactOpen] = useState(false);

  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);

  const handleChatClick = () => {
    setIsChatPopupOpen(true);
  };

  const handleCloseChatPopup = () => {
    setIsChatPopupOpen(false);
  };

  const toggleProfilePopup = () => {
    // Implement toggle profile popup logic
  };

  const toggleSubscriptionPopup = () => {
    // Implement toggle subscription popup logic
  };

  const toggleSettingPopup = () => {
    // Implement toggle setting popup logic
  };

  const toggleSupportPopup = () => {
    // Implement toggle support popup logic
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
    <div className="flex h-full  bg-gray-100 overflow-auto">
      <div className="w-full py-4 px-10 mt-6">
        <div className="flex items-center gap-4">
          <Link href="/support">
            <button className="flex items-center gap-4">
              <ArrowLeft className="h-4 w-4 text-blackcolor" />
            </button>
            
          </Link>
          <DropdownMenu
            open={isAvatarDropdownOpen}
            onOpenChange={setIsAvatarDropdownOpen}
          >
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-2 rounded-full bg-mediumWhite p-1 pr-3 shadow-sm hover:bg-gray-100/50 focus:!outline-none"
                aria-label="User menu"
              >
                <Avatar className="h-8 w-8 rounded-full">
                  <AvatarImage
                    src="/useravtar.jpeg"
                    alt="User avatar"
                    className="object-cover rounded-full"
                  />
                  <AvatarFallback>H</AvatarFallback>
                </Avatar>
                <ChevronDown
                  className={`h-4 w-4 text-blackcolor transition-transform ${
                    isAvatarDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                {isAvatarDropdownOpen && (
                  <span className="sr-only">
                    Menu is open, press escape to close
                  </span>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[200px] h-[330px] bg-gray-200 rounded-2xl border-none"
              align="start"
              alignOffset={1}
              sideOffset={5}
            >
              <div className="flex items-center gap-2 p-2 mb-1">
                <Avatar className="h-8 w-8 rounded-full">
                  <AvatarImage
                    src="/useravtar.jpeg"
                    alt="User avatar"
                    className="object-cover rounded-full"
                  />
                  <AvatarFallback>H</AvatarFallback>
                </Avatar>
                <span className="text-sm text-secondarycolor font-bold">
                  Hannah
                </span>
              </div>
              <DropdownMenuSeparator className="bg-dropdownBackground opacity-30" />
              <DropdownMenuItem className="py-2 flex items-center gap-2 ml-3">
                <div onClick={toggleProfilePopup} className="block md:hidden">
                  <button
                    className="flex items-center gap-2"
                    onClick={toggleProfilePopup}
                  >
                    <User className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>User Profile</span>
                  </button>
                </div>
                <Link href="/profile" className="hidden md:flex items-center gap-2">
                  <User className="mr-2 h-4 w-4 text-secondarycolor" />
                  <span>User Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-dropdownBackground opacity-30" />
              <DropdownMenuItem className="py-2 flex items-center gap-2 ml-3">
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
                <Link
                  href="/subscription"
                  className="hidden md:flex items-center gap-2"
                >
                  <ShoppingCart className="mr-2 h-4 w-4 text-secondarycolor" />
                  <span>Subscription</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-dropdownBackground opacity-30" />
              <DropdownMenuItem className="py-2 flex items-center gap-2 ml-3">
                <CircleUserRound className="mr-2 h-4 w-4 text-secondarycolor" />
                <span>My Avatar</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-dropdownBackground opacity-30" />
              <DropdownMenuItem className="py-2 flex items-center gap-2 ml-3">
                <Users className="mr-2 h-4 w-4 text-secondarycolor" />
                <span>Public Avatar</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-dropdownBackground opacity-30" />
              <DropdownMenuItem className="py-2 flex items-center gap-2 ml-3">
                <ShoppingBag className="mr-2 h-4 w-4 text-secondarycolor" />
                <span>Shopping</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-dropdownBackground opacity-30" />
              <DropdownMenuItem className="py-2 flex items-center gap-2 ml-2">
                <div onClick={toggleSettingPopup} className="block md:hidden">
                  <button
                    className="flex items-center gap-2"
                    onClick={toggleSettingPopup}
                  >
                    <Settings className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Settings</span>
                  </button>
                </div>
                <Link href="/settings" className="hidden md:flex items-center gap-2 ml-2">
                  <Settings className="mr-2 h-4 w-4 text-secondarycolor" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-dropdownBackground opacity-30" />
              <DropdownMenuItem className="py-2 flex items-center gap-2 ml-2">
                <div onClick={toggleSupportPopup} className="block md:hidden">
                  <button
                    className="flex items-center gap-2"
                    onClick={toggleSupportPopup}
                  >
                    <MessageCircleQuestion className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Support</span>
                  </button>
                </div>
                <Link href="/support" className="hidden md:flex items-center gap-2 ml-2">
                  <MessageCircleQuestion className="mr-2 h-4 w-4 text-secondarycolor" />
                  <span>Support</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <h1 className="text-xl font-semibold flex items-center mt-2 whitespace-nowrap">
            <RiQuestionnaireLine className="mr-2 h-6 w-6 text-black" />
            Frequently asked questions
          </h1>
        </div>
        <div className="mt-10 flex items-center border border-slate-400 rounded-md w-full">
          <input
            type="text"
            className="flex-grow px-4 py-2 text-black rounded-md"
            placeholder="Search by Ticket ID or Issue Type"
          />
          <button className="px-4 py-2  text-slate-300 bg-white rounded-md flex items-center gap-2">
            <RiSearchLine className="h-5 w-5" />
          </button>
        </div>
        <div className="bg-white mt-4 rounded-md w-full">
          <div className="flex items-center justify-between p-4 cursor-pointer" onClick={handleGeneralQuestionsClick}>
            <h2 className="text-2xl font-bold whitespace-nowrap">General Questions</h2>
            <ChevronDown className={`h-5 w-5 transition-transform ${isGeneralQuestionsOpen ? "rotate-180" : ""}`} />
          </div>
          {isGeneralQuestionsOpen && (
            <div className="p-4 ">
              <div className="mb-4">
                <h3 className="font-semibold">Q: What is the Avatar system?</h3>
                <p className="text-base">A:The Avatar system is a platform where users can create personalized avatars using video,photos,and voice.</p>
              </div>
              <div>
                <h3 className="font-semibold">Q: Is the Avatar service free?</h3>
                <p className="text-base">A:Yes,a free plan is available. However,advanced features require a subscription.</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white mt-4 rounded-md w-full">
          <div className="flex items-center justify-between p-4 cursor-pointer" onClick={handleAccountSubscriptionClick}>
            <h2 className="text-2xl font-bold whitespace-nowrap">Account & Subscription</h2>
            <ChevronDown className={`h-5 w-5 transition-transform ${isAccountSubscriptionOpen ? "rotate-180" : ""}`} />
          </div>
          {isAccountSubscriptionOpen && (
            <div className="p-4 ">
              <div className="mb-4">
                <h3 className="font-semibold">Q: How do I create an account?</h3>
                <p className="text-base">A: Click on &quot;Sign Up&quot; and follow the registration process by entering your details.</p>
              </div>
              <div>
                <h3 className="font-semibold">Q: How do I upgrade to a premium subscription?</h3>
                <p className="text-base">A: Go to the Subscription section under Settings and choose a plan.</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white mt-4 rounded-md w-full">
          <div className="flex items-center justify-between p-4 cursor-pointer" onClick={handleAvatarCreationClick}>
            <h2 className="text-2xl font-bold whitespace-nowrap">Avatar & Creation</h2>
            <ChevronDown className={`h-5 w-5 transition-transform ${isAvatarCreationOpen ? "rotate-180" : ""}`} />
          </div>
          {isAvatarCreationOpen && (
            <div className="p-4 ">
              <div className="mb-4">
                <h3 className="font-semibold">Q: What inputs are required to create an avatar?</h3>
                <p className="text-base">A: You need to upload a photo or take a live picture, provide a voice sample, and optionally a short video.</p>
              </div>
              <div>
                <h3 className="font-semibold">Q: How can I edit my avatar?</h3>
                <p className="text-base">A: Go to the My Avatar section and &quot;Edit Avatar&quot;.</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white mt-4 rounded-md w-full">
          <div className="flex items-center justify-between p-4 cursor-pointer" onClick={handleTroubleshootingClick}>
            <h2 className="text-2xl font-bold whitespace-nowrap">Troubleshooting</h2>
            <ChevronDown className={`h-5 w-5 transition-transform ${isTroubleshootingOpen ? "rotate-180" : ""}`} />
          </div>
          {isTroubleshootingOpen && (
            <div className="p-4 ">
              <div className="mb-4">
                <h3 className="font-semibold">Q: My avatar isn&apos;t syncing with my profile.What should I do?</h3>
                <p className="text-base">A: Ensure your account is verified. If the problem persists, contact support.</p>
              </div>
              <div>
                <h3 className="font-semibold">Q: Why is my avatar voice not accurate?</h3>
                <p className="text-base">A: Try re-uploading the voice sample or check the microphone settings during recording.</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white mt-4 rounded-md w-full">
          <div className="flex items-center justify-between p-4 cursor-pointer" onClick={handleBillingPaymentsClick}>
            <h2 className="text-2xl font-bold whitespace-nowrap">Billing & Payments</h2>
            <ChevronDown className={`h-5 w-5 transition-transform ${isBillingPaymentsOpen ? "rotate-180" : ""}`} />
          </div>
          {isBillingPaymentsOpen && (
            <div className="p-4 ">
              <div className="mb-4">
                <h3 className="font-semibold">Q: What payment methods are accepted??</h3>
                <p className="text-base">A: We accept credit/debit cards, PayPal, and other major payment gateways.</p>
              </div>
              <div>
                <h3 className="font-semibold">Q: I was charged twice. How can I get a refund?</h3>
                <p className="text-base">A: Contact Billing Support through the Support page and provide your payment receipt.</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white mt-4 rounded-md w-full mb-10">
          <div className="flex items-center justify-between p-4 cursor-pointer" onClick={handleSupportContactClick}>
            <h2 className="text-2xl font-bold whitespace-nowrap">Support & Contact</h2>
            <ChevronDown className={`h-5 w-5 transition-transform ${isSupportContactOpen ? "rotate-180" : ""}`} />
          </div>
          {isSupportContactOpen && (
            <div className="p-4">
              <div className="mb-4">
                <h3 className="font-semibold">Q: How do I contact support?</h3>
                <p className="text-base">A: Use the Email Support, Chat Support, or Phone Support options on the Support page.</p>
              </div>
              <div>
                <h3 className="font-semibold">Q: Where can I track my issue tickets?</h3>
                <p className="text-base">A: Go to the Ticket History section on the Support page.</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="bg-white mt-1 ml-4 rounded-md w-full md:w-[48%]">
            <div className="mb-6 items-center justify-between">
              <h2 className="text-base font-semibold flex items-center justify-center mt-2">
                <Mail className="h-6 w-6 text-secondarycolor mt-1" />
                <span>Email Support</span>
              </h2>
              <p className="text-gray-400 text-sm text-center mt-1 px-4 md:px-0">Send us a detailed email, and well get back to you within 24 hours.</p>
            </div>
            <button className="bg-secondarycolor text-white py-2 px-24 rounded-md mx-auto mb-6 block">Contact by Email</button>
          </div>

          <div className="bg-white mt-1 ml-4 rounded-md w-full md:w-[48%]">
            <div className="mb-6 items-center justify-between">
              <h2 className="text-base font-semibold flex items-center justify-center mt-2">
                <MdOutlineQuestionAnswer className="h-6 w-6 text-secondarycolor mt-1" />
                <span>Chat Support</span>
              </h2>
              <p className="text-gray-400 text-sm text-center mt-1 px-4 md:px-0">Connect with our support team in real-time.</p>
            </div>
            <button className="bg-secondarycolor text-white py-2 px-32 rounded-md mx-auto mb-6 block" onClick={handleChatClick}>Start Chat</button>
          </div>
        </div>
        {isChatPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-300 p-6 rounded-md shadow-md w-96 h-36">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Start the chat with</h2>
                <button onClick={handleCloseChatPopup} className="text-white hover:text-gray-700">&times;</button>
              </div>
              <hr className="border-t-2 border-secondarycolor mb-4" />
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col items-center">
                  <FaWhatsapp className="h-6 w-6 text-green-500" />
                  <span>WhatsApp</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaTelegramPlane className="h-6 w-6 text-blue-500" />
                  <span>Telegram</span>
                </div>
                <div className="flex flex-col items-center">
                  <MdOutlineQuestionAnswer className="h-6 w-6 text-black" />
                  <span>Support Chat</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
 
export default FAQPage;

