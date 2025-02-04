"use client";
import { useState, KeyboardEvent } from "react";
import PublicSidebar from "@/components/PublicSidebar";
import { useRouter } from "next/navigation";
import { User,X} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function ChannelManagement() {
  const router = useRouter();

  const [categories, setCategories] = useState<string[]>(["Books"]);
    const [inputValue, setInputValue] = useState("");

    const handleAddCategory = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputValue.trim()) {
          if (!categories.includes(inputValue.trim())) {
            setCategories([...categories, inputValue.trim()]);
            setInputValue("");
          }
        }
      };

    const handleRemoveCategory = (category: string) => {
        setCategories(categories.filter((c) => c !== category));
      };

     
     
    
     
    
     
    
    

  return (
    <>
      <div className="flex h-screen">
        <PublicSidebar />
        <div className="flex-1 h-full px-2 overflow-hidden">
          {/* Header */}
          <div className="flex items-center h-28 py-4 px-7 rounded-md">
            <div className="w-full">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <User className="mr-2 h-6 w-6 text-mediumblack" />
                <span>Content</span>
              </h2>
              <div className="flex items-center justify-between">
                <div className="text-black ml-4 flex items-center gap-3">
                  <span
                    onClick={() => router.push("/content-management")}
                    className="cursor-pointer"
                  >
                    Content
                  </span>
                  <span>&gt;</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => router.push("/content-management")}
                  >
                    Channel Management
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-100 py-7 px-7 h-[calc(100vh-112px)] overflow-y-auto scroll">
            <div className="bg-white rounded-lg shadow-md px-4 py-3 mx-auto">
              <div className="border-b border-secondarycolor pb-4">
                <h2 className="text-lg font-semibold">Channel Management</h2>
                <div className="flex justify-between">
                  <p className="font-normal text-sm">
                    Manage your Avatar content channels, organize videos, and
                    track performance.
                  </p>
                  
                </div>
              </div>
              <div className="flex items-center justify-center mt-6">
                <div className="relative w-32 h-32 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
                  <Image
                    src="/background.jpeg"
                    alt="avatar"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
               
               
              </div>

            <div className="flex justify-center mt-6">
                <Input
                    placeholder="Change Name"
                    className="w-full max-w-md py-5 border border-mediumgray outline-none focus:!outline-none focus:ring-0"
                />
            </div>
             

            <div className="mt-6">
                <h4 className="text-lg font-semibold ">Description:</h4>
                <div className="border border-borderColor1 p-4 rounded-lg">
                <p className="text-lg text-charcoalBlack mt-2 font-normal">
                  Welcome to <span className=" font-semibold"> UX Avatars,</span> your go-to channel for exploring the intersection of creativity,user experience, and Innovation! 
                </p>
                <p className="text-lg text-charcoalBlack mt-2 font-normal">
                Our channel is dedicated to:
                </p>
                <ul className="list-disc list-inside mt-2 text-charcoalBlack text-lg">
                    <li className="mt-1"><span className=" font-semibold"> Showcasing Avatars:</span> Dive into a world of interacting and visually stunning avatars designed to elevate digital experiences.</li>
                    <li className="mt-1"><span className=" font-semibold"> Educational Content:</span> Learn the principles of user eccentric-design and discover how avatars enhance engagement across various platforms.</li>
                    <li className="mt-1"><span className=" font-semibold"> Inspiration & Trends:</span> Stay ahead with the latest trends in UX,UI, and virtual avatar technology.</li>
                    <li className="mt-1"><span className=" font-semibold"> Interactive Demos:</span> Experience how avatars can transform interactions in business, gaming, and social media. </li>
                    
                </ul>
            </div>
            </div>
           
            <div className="mt-6">
            <p className="text-base text-charcoalBlack mt-2 font-normal">
                 <span className=" font-semibold text-lg text-black"> Added Categories</span> (Please add minimum 5 categories for proper channel management)
            </p>

            <div className="flex flex-wrap gap-2 my-3">
                  {categories.map((category, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="flex items-center gap-1 w-20 h-8 rounded-md bg-inputbackground text-sm"
                    >
                      {category}
                      <button
                        onClick={() => handleRemoveCategory(category)}
                        className="ml-1 hover:bg-muted rounded-full"
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">
                          Remove {category} category
                        </span>
                      </button>
                    </Badge>
                  ))}
                </div>
                <h1 className="text-lg font-semibold mt-4">Add Categories</h1>
                <Input
                  placeholder="Categories"
                  className="w-full py-2 border border-borderColor1 outline-none focus:!outline-none focus:ring-0"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleAddCategory}
                />
               
            </div>

          

               

               
                
                <div className="justify-end mt-10 flex">
                <button className="w-40 py-2 bg-neutral-300 text-neutral-400 rounded-md ml-auto">
                      Save Changes
                </button>
                </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}