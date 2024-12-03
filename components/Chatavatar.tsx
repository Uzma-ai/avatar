"use client";

import Image from "next/image";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import ChatComponent from "@/components/ChatComponent";
import {
  CircleUserRound,
  History,
  Lock,
  MessageSquare,
  Shield,
  Upload,
  User,
  ChevronDown,
  Power,
  FileType2,
  Volume2 ,
  MonitorCog,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";

export default function ChatAssistant() {

  const [isAvatarDropdownOpen, setIsAvatarDropdoenOpen] = useState(false);
  const [checked, setChecked] = useState(true);


  return (
    <div className="relative flex h-screen overflow-hidden md:bg-primarycolor text-black">
      <div className="flex items-center justify-center w-full h-full">
        {/* Avatar Section */}
        {checked ? (
          <div className="hidden md:block relative w-3/12 h-full transition-all duration-300">
            <Image
              src="/avatar.png"
              alt="Avatar Image"
              fill
              className="object-cover"
            />
          </div>
        ) : null}
        {/* Chat Section */}
        <div
          className={`${
            checked ? "md:w-9/12" : "w-full"
          } h-screen flex flex-col justify-between transition-all duration-300 relative`}
        >
          {/* Mobile Avatar Section */}
          {checked ? (
            <div className="absolute inset-0 block md:hidden -z-10">
              <Image
                src="/avatar.png"
                alt="Avatar Background"
                fill
                className="object-cover"
              />
            </div>
          ) : null}

          {/* Navbar section */}
          <div className="w-full h-20 flex items-center justify-between p-2 md:p-6">
            <div>
              <DropdownMenu
                open={isAvatarDropdownOpen}
                onOpenChange={setIsAvatarDropdoenOpen}
              >
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-2 rounded-full bg-whitecolor p-1 shadow-sm hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
                      className={`h-4 w-4 text-gray-500 transition-transform ${
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
                  className="w-[200px]"
                  align="start"
                  alignOffset={-8}
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
                    <span className="text-sm font-medium">Hannah</span>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>User Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Shield className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Admin</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <CircleUserRound className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Avatar</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Lock className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Reset Password</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <MonitorCog className="mr-2 h-4 w-4 text-secondarycolor" />
                      Mode
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          {" "}
                          <FileType2 className="mr-2 h-4 w-4 text-secondarycolor" />
                          Text Mode
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          {" "}
                          <Volume2 className="mr-2 h-4 w-4 text-secondarycolor" />
                          Audio Mode
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Past Chats</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <History className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Reset History</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Upload className="mr-2 h-4 w-4 text-secondarycolor" />
                    <span>Uploads</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-md font-medium text-whitecolor md:text-black">
                Avatar
              </h2>
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="avatar-mode"
                  className="text-sm text-muted-foreground"
                >
                  Off
                </Label>
                <Switch
                  id="avatar-mode"
                  checked={checked}
                  onCheckedChange={setChecked}
                  className="h-6 w-10 data-[state=checked]:bg-secondarycolor"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full shadow-sm transition-transform duration-100 translate-x-0.5 data-[state=checked]:translate-x-6">
                    <Power className="h-3 w-3 text-black data-[state=checked]:text-[#5182E3]]" />
                  </div>
                </Switch>
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
          <div className="w-full h-1/2 md:h-[calc(100vh-80px)] px-2 md:px-6">
            <div className="relative z-10 h-full flex flex-col">
              <ChatComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
