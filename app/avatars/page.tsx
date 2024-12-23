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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface Profile {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "Avatar 1",
    description: "Lawyer",
    imageUrl: "/lawyer.png",
  },
  {
    id: 2,
    name: "Avatar 2",
    description: "Business Analyst",
    imageUrl: "/background.jpeg",
  },
  {
    id: 3,
    name: "Avatar 3",
    description: "Doctor",
    imageUrl: "/avatar-3.jpeg",
  },
  {
    id: 4,
    name: "Avatar 4",
    description: "Teacher",
    imageUrl: "/teacher.jpeg",
  },
  {
    id: 5,
    name: "Avatar 5",
    description: "Psychiatrist",
    imageUrl: "/Psychiatrist.jpeg",
  },
];

export default function Avatars() {
  const [isAvatarDropdownOpen, setIsAvatarDropdoenOpen] = useState(false);
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="absolute w-full h-20 flex items-center justify-between p-2 md:p-6 z-10">
        <div className="flex items-center gap-4">
          <DropdownMenu
            open={isAvatarDropdownOpen}
            onOpenChange={setIsAvatarDropdoenOpen}
          >
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-2 rounded-full bg-mediumWhite  p-1 shadow-sm hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
              className="w-[200px] bg-lightWhite rounded-2xl"
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
                <span className="text-sm text-secondarycolor font-medium">
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
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4 text-secondarycolor" />
                <span>Public Avatar</span>
              </DropdownMenuItem>
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
        </div>
      </div>
      <div className="h-screen w-full overflow-y-scroll scroll snap-y snap-mandatory">
        {profiles.map((profile) => (
          <section
            key={profile.id}
            className="relative h-screen w-full snap-start snap-always"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={profile.imageUrl}
                alt={profile.name}
                className="max-h-full w-full object-cover"
              />
            </div>

            {/* Action buttons */}
            <div className="absolute right-5 top-[60%] lg:right-10 lg:top-2/3 -translate-y-1/2 flex flex-col gap-4">
              <div className="flex items-center gap-5">
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-iconBackground hover:bg-gray-500/70"
                >
                  <UserRound className="h-8 w-8 text-black" />
                </Button>
                <span className="hidden lg:block text-whitecolor">Ask</span>
              </div>
              <div className="flex items-center gap-5">
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-iconBackground hover:bg-gray-500/70"
                >
                  <ThumbsUp className="h-8 w-8 text-black" />
                </Button>
                <span className="text-whitecolor hidden lg:block">Like</span>
              </div>
              <div className="flex items-center gap-5">
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-iconBackground hover:bg-gray-500/70"
                >
                  <MessageCircle className="h-8 w-8 text-black" />
                </Button>
                <span className="text-whitecolor hidden lg:block">Comment</span>
              </div>
              <div className="flex items-center gap-5">
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-iconBackground hover:bg-gray-500/70"
                >
                  <Share2 className="h-8 w-8 text-black" />
                </Button>
                <span className="text-whitecolor hidden lg:block">Share</span>
              </div>
              <div className="flex items-center gap-5">
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-iconBackground hover:bg-gray-500/70"
                >
                  <MoreHorizontal className="h-8 w-8 text-black" />
                </Button>
                <span className="text-whitecolor hidden lg:block">More</span>
              </div>
            </div>

            {/* Profile info */}
            <div className="w-full absolute bottom-8 justify-center flex items-center px-6 lg:px-0">
              <div className="flex items-center justify-between w-full lg:w-1/4 bg-mediumWhite p-4 text-white rounded-lg">
                <h2 className="text-sm xl:text-base font-medium">
                  Name: {profile.name}
                </h2>
                <p className="text-sm xl:text-base font-medium">
                  Description: {profile.description}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
