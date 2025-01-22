"use client";

import Image from "next/image";
import { useState} from "react";
import { Label } from "@/components/ui/label";
import ChatComponent from "@/components/ChatComponent";
import { CustomToggle } from "@/components/ui/custom-toogle";
import {
  CircleUserRound,
  ShoppingBag,
  Users,
  Settings,
  ShoppingCart,
  MessageCircleQuestion,
  User,
  ChevronDown,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useAvatar } from "@/context/AvatarContext";
import { motion } from "framer-motion";
import Profilepopup from "@/components/Profilepopup";
import Subscriptionpopup from "@/components/Subscriptionpopup";
import Supportpopup from "@/components/Supportpopup";
import Settingpopup from "@/components/Settingpopup";
import Shoppingpopup from "@/components/Shoppingpopup";

export default function ChatAssistant() {
  const [isAvatarDropdownOpen, setIsAvatarDropdoenOpen] = useState(false);
  const [checked, setChecked] = useState(true);
  const [voicechecked, setVoiceChecked] = useState(false);
  const { selectedAvatar } = useAvatar();
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
    <div className="relative flex h-screen overflow-hidden lg:bg-primarycolor text-black">
      <div className="md:flex md:items-center md:justify-center w-full h-full">
        {/* Avatar Section */}
        {checked ? (
          <motion.div
            className="hidden md:block relative md:w-2/5 lg:w-1/3 h-full transition-all duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={selectedAvatar}
              alt="Avatar Image"
              fill
              className="object-cover"
            />
          </motion.div>
        ) : null}
        {/* Chat Section */}
        <div
          className={`${
            checked ? "lg:w-2/3 md:w-3/5" : "w-full"
          } h-screen flex flex-col justify-between transition-all duration-300 relative`}
        >
          {/* Mobile Avatar Section */}
          {checked ? (
            <div className="absolute inset-0 block md:hidden -z-10">
              <Image
                src={selectedAvatar}
                alt="Avatar Background"
                fill
                className="object-cover"
              />
            </div>
          ) : null}

          {/* Navbar section */}
          <div className="w-full h-20 flex items-center justify-between p-2 md:p-6">
            <div className="flex items-end gap-4">
              <DropdownMenu
                open={isAvatarDropdownOpen}
                onOpenChange={setIsAvatarDropdoenOpen}
              >
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-2 rounded-full bg-mediumWhite p-1 pr-3 shadow-sm hover:bg-gray-100/50 focus:!outline-none"
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
                  className="w-[200px] bg-blurwhite rounded-2xl "
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
                  <DropdownMenuSeparator className="opacity-30 md:opacity-1" />
                  <DropdownMenuItem>
                    {/* Mobile: Show Popup */}
                    <div
                      onClick={toggleProfilePopup}
                      className="block md:hidden"
                    >
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
                    <div
                      onClick={toggleSettingPopup}
                      className="block md:hidden"
                    >
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
                    <div
                      onClick={toggleSupportPopup}
                      className="block md:hidden"
                    >
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
              <div className="flex flex-col items-center gap-1">
                <h2
                  className={`${
                    checked ? "text-whitecolor md:text-black" : "text-black"
                  } text-sm md:text-base font-medium`}
                >
                  Voice Input
                </h2>
                <div className="flex items-center gap-2">
                  <Label
                    htmlFor="voice-mode"
                    className="text-xs md:text-sm text-muted-foreground"
                  >
                    Text
                  </Label>
                  <CustomToggle
                    id="voice-mode"
                    iconType="input"
                    checked={voicechecked}
                    onCheckedChange={setVoiceChecked}
                  />
                  <Label
                    htmlFor="voice-mode"
                    className="text-xs md:text-sm text-muted-foreground"
                  >
                    Voice
                  </Label>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <h2
                className={`${
                  checked ? "text-whitecolor md:text-black" : "text-black"
                } text-sm md:text-base font-medium`}
              >
                Avatar
              </h2>
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="avatar-mode"
                  className="text-xs md:text-sm text-muted-foreground"
                >
                  Off
                </Label>
                <CustomToggle
                  id="avatar-mode"
                  iconType="power"
                  checked={checked}
                  onCheckedChange={setChecked}
                />
                <Label
                  htmlFor="avatar-mode"
                  className="text-xs md:text-sm text-muted-foreground"
                >
                  On
                </Label>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="w-full h-1/2 lg:h-[calc(100vh-80px)] px-2 lg:px-6">
            <div className="relative z-10 h-full flex flex-col">
              <ChatComponent voicechecked={voicechecked} />
            </div>
          </div>
        </div>
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
