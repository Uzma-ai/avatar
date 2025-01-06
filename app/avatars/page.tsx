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
              className="w-[200px] bg-lightWhite rounded-2xl border-none"
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
              <DropdownMenuSeparator className="bg-dropdownBackground" />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4 text-secondarycolor" />
                <span>User Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-dropdownBackground" />
              <DropdownMenuItem>
                <ShoppingCart className="mr-2 h-4 w-4 text-secondarycolor" />
                <span>Subscription</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-dropdownBackground" />
              <DropdownMenuItem>
                <CircleUserRound className="mr-2 h-4 w-4 text-secondarycolor" />
                <span>My Avatar</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-dropdownBackground" />
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4 text-secondarycolor" />
                <span>Public Avatar</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-dropdownBackground" />
              <DropdownMenuItem>
                <ShoppingBag className="mr-2 h-4 w-4 text-secondarycolor" />
                <span>Shopping</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-dropdownBackground" />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4 text-secondarycolor" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-dropdownBackground" />
              <DropdownMenuItem>
                <MessageCircleQuestion className="mr-2 h-4 w-4 text-secondarycolor" />
                <span>Support</span>
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
            <div className="absolute right-5 top-[60%] lg:right-10 lg:top-2/3 -translate-y-1/2 flex flex-col gap-6">
              <Link href="/chat">
                <div
                  className="relative flex items-center gap-5"
                  onClick={() => {
                    setIsAnimating(true);
                    changeAvatar(profile.imageUrl);
                    
                  }}
                >
                  <span className="relative group h-12 w-12 rounded-full flex items-center justify-center bg-iconBackground hover:bg-gray-500/70">
                    <UserRound size={22} className="text-black" />

                    {/* Tooltip */}
                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-iconBackground text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 lg:hidden">
                      Ask
                    </div>
                  </span>

                  {/* Text visible on larger screens */}
                  <span className="hidden lg:block text-whitecolor">Ask</span>
                </div>
              </Link>
              <div className="relative flex items-center gap-5">
                <span className="relative group h-12 w-12 rounded-full flex items-center justify-center bg-iconBackground hover:bg-gray-500/70">
                  <ThumbsUp size={22} className="text-black" />

                  {/* Tooltip */}
                  <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-iconBackground text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 lg:hidden">
                    Like
                  </div>
                </span>
                <span className="text-whitecolor hidden lg:block">Like</span>
              </div>
              <div className="relative flex items-center gap-5">
                <span className="relative group h-12 w-12 rounded-full flex items-center justify-center bg-iconBackground hover:bg-gray-500/70">
                  <MessageCircle size={22} className="text-black" />

                  {/* Tooltip */}
                  <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-iconBackground text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 lg:hidden">
                    Comment
                  </div>
                </span>
                <span className="text-whitecolor hidden lg:block">Comment</span>
              </div>
              <div className="relative flex items-center gap-5">
                <span className="relative group h-12 w-12 rounded-full flex items-center justify-center bg-iconBackground hover:bg-gray-500/70">
                  <Share2 size={22} className="text-black" />

                  {/* Tooltip */}
                  <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-iconBackground text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 lg:hidden">
                    Share
                  </div>
                </span>
                <span className="text-whitecolor hidden lg:block">Share</span>
              </div>
              <div className="relative flex items-center gap-5">
                <span className="relative group h-12 w-12 rounded-full flex items-center justify-center bg-iconBackground hover:bg-gray-500/70">
                  <MoreHorizontal size={22} className="text-black" />

                  {/* Tooltip */}
                  <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-iconBackground text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 lg:hidden">
                    More
                  </div>
                </span>
                <span className="text-whitecolor hidden lg:block">More</span>
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
    </div>
  );
}
