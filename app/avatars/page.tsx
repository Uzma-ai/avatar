"use client";

import {
  CircleUserRound,
  ShoppingBag,
  Users,
  Settings,
  ShoppingCart,
  MessageCircleQuestion,
  User,
  ChevronDown,
  MessageCircle,
  ThumbsUp,
  Share2,
  MoreHorizontal,
  UserRound,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import Link from "next/link";
import { useAvatar } from "@/context/AvatarContext";
import { motion } from "framer-motion";
import Profilepopup from "@/components/Profilepopup";
import Subscriptionpopup from "@/components/Subscriptionpopup";
import Supportpopup from "@/components/Supportpopup";
import Settingpopup from "@/components/Settingpopup";
import Shoppingpopup from "@/components/Shoppingpopup";

interface Profile {
  id: number;
  name: string;
  channel: string;
  description: string;
  imageUrl: string;
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "Avatar 1",
    channel: "Law",
    description: "Lawyer",
    imageUrl: "/Psychiatrist.jpeg",
  },
  {
    id: 2,
    name: "Avatar 2",
    channel: "Medical",
    description: "Doctor",
    imageUrl: "/doctor.jpeg",
  },
  {
    id: 3,
    name: "Avatar 3",
    channel: "Education",
    description: "Teacher",
    imageUrl: "/teacher.jpeg",
  },
];

export default function Avatars() {
  const [isAvatarDropdownOpen, setIsAvatarDropdoenOpen] = useState(false);
  const { changeAvatar } = useAvatar();
  const [isAnimating, setIsAnimating] = useState(false);
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

  

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="absolute w-full h-20 flex items-center justify-between p-2 md:p-6 z-10 ">
        <div className="flex items-center gap-4">
          <DropdownMenu
            open={isAvatarDropdownOpen}
            onOpenChange={setIsAvatarDropdoenOpen}
          >
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-2 rounded-full bg-mediumWhite p-1 pr-3 shadow-sm hover:bg-gray-100/50 focus:!outline-none focus:ring-0"
                aria-label="User menu"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/useravtar.jpeg"
                    alt="User avatar"
                    className="object-cover"
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
              className="w-[200px] bg-dropdownlightgray rounded-2xl border-none"
              align="start"
              alignOffset={1}
              sideOffset={5}
            >
              <div className="flex items-center gap-2 p-2 mb-1">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/useravtar.jpeg"
                    alt="User avatar"
                    className="object-cover"
                  />
                  <AvatarFallback>H</AvatarFallback>
                </Avatar>
                <span className="text-sm text-secondarycolor font-bold">
                  Hannah
                </span>
              </div>
              <DropdownMenuSeparator className="bg-dropdownBackground opacity-30" />
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
              <DropdownMenuSeparator className="bg-dropdownBackground opacity-30" />
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
              <DropdownMenuSeparator className="bg-dropdownBackground opacity-30" />
              <DropdownMenuItem>
                <Link href="/chat" className="flex items-center gap-2">
                  <CircleUserRound className="mr-2 h-4 w-4 text-secondarycolor" />
                  <span>My Avatar</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-dropdownBackground opacity-30" />
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4 text-secondarycolor" />
                <span>Public Avatar</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-dropdownBackground opacity-30" />
              <DropdownMenuItem>
                {/* Mobile: Show Popup */}
                <div onClick={toggleShoopingPopup} className="block md:hidden">
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
              <DropdownMenuSeparator className="bg-dropdownBackground opacity-30" />
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
              <DropdownMenuSeparator className="bg-dropdownBackground opacity-30" />
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
      </div>
      <div className="h-screen w-full overflow-y-scroll scroll snap-y snap-mandatory">
        {profiles.map((profile) => (
          <motion.section
            key={profile.id}
            className="relative h-screen w-full snap-start snap-always"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.img
                src={profile.imageUrl}
                alt={profile.name}
                className="h-full w-full object-cover"
                initial={{ opacity: 1, scaleX: 1 }}
                animate={{
                  opacity: isAnimating ? 0 : 1,
                  scaleX: isAnimating ? 0.5 : 1,
                }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>

            {/* Action buttons */}
            <div className="absolute right-5 bottom-20 lg:right-10  flex flex-col gap-4">
              <Link href="/chat">
                <div
                  className="relative flex flex-col items-center gap-1"
                  onClick={() => {
                    setIsAnimating(true);
                    changeAvatar(profile.imageUrl);
                  }}
                >
                  <span className="relative group h-10 w-10 rounded-full flex items-center justify-center bg-iconBackground hover:bg-gray-500/70">
                    <UserRound size={22} className="text-black" />

                    {/* Tooltip */}
                    {/* <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-iconBackground text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 lg:hidden">
                      Ask
                    </div> */}
                  </span>

                  {/* Text visible on larger screens */}
                  <span className="text-whitecolor text-sm">Ask</span>
                </div>
              </Link>
              <div className="relative flex flex-col items-center gap-1">
                <span className="relative group h-10 w-10 rounded-full flex items-center justify-center bg-iconBackground hover:bg-gray-500/70">
                  <ThumbsUp size={22} className="text-black" />

                  {/* Tooltip */}
                  {/* <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-iconBackground text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 lg:hidden">
                    Like
                  </div> */}
                </span>
                <span className="text-whitecolor text-sm">Like</span>
              </div>
              <div className="relative flex flex-col items-center gap-1">
                <span className="relative group h-10 w-10 rounded-full flex items-center justify-center bg-iconBackground hover:bg-gray-500/70">
                  <MessageCircle size={22} className="text-black" />

                  {/* Tooltip */}
                  {/* <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-iconBackground text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 lg:hidden">
                    Comment
                  </div> */}
                </span>
                <span className="text-whitecolor text-sm">Comment</span>
              </div>
              <div className="relative flex flex-col items-center gap-1">
                <span className="relative group h-10 w-10 rounded-full flex items-center justify-center bg-iconBackground hover:bg-gray-500/70">
                  <Share2 size={22} className="text-black" />

                  {/* Tooltip */}
                  {/* <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-iconBackground text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 lg:hidden">
                    Share
                  </div> */}
                </span>
                <span className="text-whitecolor text-sm">Share</span>
              </div>
              <div className="relative flex flex-col items-center gap-1">
                <span className="relative group h-10 w-10 rounded-full flex items-center justify-center bg-iconBackground hover:bg-gray-500/70">
                  <MoreHorizontal size={22} className="text-black" />

                  {/* Tooltip */}
                  {/* <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-iconBackground text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 lg:hidden">
                    More
                  </div> */}
                </span>
                <span className="text-whitecolor text-sm">More</span>
              </div>
            </div>

            {/* Profile info */}
            <div className="w-full absolute bottom-3 justify-center flex items-center px-6 lg:px-0">
              <div className="flex items-center justify-between w-full lg:w-1/3 bg-mediumWhite p-4 text-white rounded-lg">
                <h2 className="text-xs xl:text-base font-normal">
                  Channel: {profile.channel}
                </h2>
                <p className="text-xs xl:text-base font-medium">
                  {profile.name}
                </p>
                <p className="text-xs xl:text-base font-normal">
                  Description: {profile.description}
                </p>
              </div>
            </div>
          </motion.section>
        ))}
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
}
