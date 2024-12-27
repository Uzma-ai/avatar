"use client";

import Image from "next/image";
import { useState } from "react";
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

export default function ChatAssistant() {

  const [isAvatarDropdownOpen, setIsAvatarDropdoenOpen] = useState(false);
  const [checked, setChecked] = useState(true);
  const [voicechecked, setVoiceChecked] = useState(false);


  return (
    <div className="relative flex h-screen overflow-hidden lg:bg-primarycolor text-black">
      <div className="md:flex md:items-center md:justify-center w-full h-full">
        {/* Avatar Section */}
        {checked ? (
          <div className="hidden lg:block relative w-1/3 h-full transition-all duration-300">
            <Image
              src="/background.jpeg"
              alt="Avatar Image"
              fill
              className="object-cover"
            />
          </div>
        ) : null}
        {/* Chat Section */}
        <div
          className={`${
            checked ? "lg:w-2/3 md:w-1/2" : "w-full"
          } h-screen flex flex-col justify-between transition-all duration-300 relative`}
        >
          {/* Mobile Avatar Section */}
          {checked ? (
            <div className="absolute inset-0 block lg:hidden -z-10">
              <Image
                src="/background.jpeg"
                alt="Avatar Background"
                fill
                className="object-cover"
              />
            </div>
          ) : null}

          {/* Navbar section */}
          <div className="w-full h-20 flex items-center justify-between p-2 md:p-6">
            <div className="flex items-center gap-4">
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
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>User Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <ShoppingCart className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Subscription</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <CircleUserRound className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>My Avatar</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <Link href="/avatars">
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4 text-secondarycolor" />
                      <span>Public Avatar</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <ShoppingBag className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Shopping</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <MessageCircleQuestion className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Support</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex flex-col items-center gap-1">
                <h2
                  className={`${
                    checked ? "text-whitecolor lg:text-black" : "text-black"
                  } text-md font-medium`}
                >
                  Voice Input
                </h2>
                <div className="flex items-center gap-2">
                  <Label
                    htmlFor="voice-mode"
                    className="text-sm text-muted-foreground"
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
                    className="text-sm text-muted-foreground"
                  >
                    Voice
                  </Label>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <h2
                className={`${
                  checked ? "text-whitecolor lg:text-black" : "text-black"
                } text-md font-medium`}
              >
                Avatar
              </h2>
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="avatar-mode"
                  className="text-sm text-muted-foreground"
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
                  className="text-sm text-muted-foreground"
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
    </div>
  );
}
