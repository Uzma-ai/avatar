"use client";
import { useState, useEffect,  KeyboardEvent } from "react";
import PublicSidebar from "@/components/PublicSidebar";
import { useRouter } from "next/navigation";
import { User, X } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function ChannelManagementEdit() {
  const router = useRouter();

  const [categories, setCategories] = useState<string[]>(["Books"]);
  const [inputValue, setInputValue] = useState("");
   const [image, setImage] = useState<string | null>(null);



  useEffect(() => {
    const storedImage = localStorage.getItem("channelImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const file = event.target.files?.[0];
     if (file) {
       const reader = new FileReader();
       reader.onloadend = () => {
         const base64Image = reader.result as string;
         setImage(base64Image);
         localStorage.setItem("channelImage", base64Image); // Save to localStorage
       };
       reader.readAsDataURL(file);
     }
   };

   const handleAddCategory = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const newCategory = inputValue.trim();
      if (!categories.includes(newCategory)) {
        const updatedCategories = [...categories, newCategory];
        setCategories(updatedCategories);
        localStorage.setItem("categories", JSON.stringify(updatedCategories)); // Save to localStorage
        setInputValue("");
      }
    }
  };
  
  const handleRemoveCategory = (category: string) => {
    const updatedCategories = categories.filter((c) => c !== category);
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories)); // Update localStorage
  };

  useEffect(() => {
    const storedCategories = localStorage.getItem("categories");
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    }
  }, []);


  const [description, setDescription] = useState("");

useEffect(() => {
  // Load saved description from localStorage OR use default text
  const storedDescription = localStorage.getItem("channelDescription");
  setDescription(
    storedDescription ||
      `Welcome to UX Avatars, your go-to channel for exploring the intersection of creativity, user experience, and innovation!
      
      Our channel is dedicated to:
      - Showcasing Avatars: Dive into a world of interacting and visually stunning avatars designed to elevate digital experiences.
      - Educational Content: Learn the principles of user-centric design and discover how avatars enhance engagement across various platforms.
      - Inspiration & Trends: Stay ahead with the latest trends in UX, UI, and virtual avatar technology.
      - Interactive Demos: Experience how avatars can transform interactions in business, gaming, and social media.`
  );
}, []);

  

  
  

  return (
    <>
      <div className="flex h-screen">
        <PublicSidebar />
        <div className="flex-1 h-full px-2 overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center h-32 pt-5 px-7 rounded-md">
            <div className="flex flex-col items-start gap-1">
              <h2 className="text-2xl font-semibold mb-2 flex items-center">
                <User className="mr-2 h-6 w-6 text-black" />
                <span>Content</span>
              </h2>
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
                  onClick={() => router.push("/channel-management")}
                >
                  Channel management
                </span>
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
              <div className="flex flex-col items-center justify-center mt-6">
                <label htmlFor="imageUpload" className="cursor-pointer">
                  <div className="w-28 h-28 rounded-full overflow-hidden relative flex items-center justify-center">
                    <Image
                      src={image || "/background.jpeg"}
                      alt="avatar"
                      className="object-cover w-full h-full"
                      width={112}
                      height={112}
                    />
                    <p className="absolute bg-black w-full h-full flex items-center justify-center text-white text-sm font-semibold  bg-opacity-30 px-2 py-1 rounded-md">
                      Change Image
                    </p>
                  </div>
                </label>
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <span className="text-secondarycolor underline text-sm cursor-pointer py-2">Remove Current Photo</span>
              </div>

              <div className="flex justify-center mt-3">
                <Input
                  placeholder="Change Name"
                  className="w-full max-w-md py-5 border border-mediumgray outline-none focus:!outline-none focus:!ring-0"
                />
              </div>

              <div className="mt-6 px-2 border-b border-secondarycolor pb-6">
             <h4 className="text-base font-semibold">Description:</h4>
            <textarea
             value={description}
            onChange={(e) => {
            setDescription(e.target.value);
           localStorage.setItem("channelDescription", e.target.value);
            }}
       className="w-full h-52 p-3 border rounded-lg border-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-base text-charcoalBlack"
       style={{ minHeight: "100px", overflow: "hidden" }} // Auto-resize
       onInput={(e) => {
      const target = e.target as HTMLTextAreaElement;
      target.style.height = "auto"; // Reset height
      target.style.height = `${target.scrollHeight}px`; // Adjust height dynamically
    }}
  />
</div>




              <div className="mt-6">
                <p className="text-sm text-charcoalBlack mt-2 font-normal">
                  <span className=" font-semibold text-lg text-black">
                    {" "}
                    Added Categories
                  </span>{" "}
                  (Please add minimum 5 categories for proper channel
                  management)``

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
                <h1 className="text-lg font-semibold py-2 ">Add Custom Categories</h1>
                <Input
                  placeholder="Add Categories"
                  className="w-full py-5 border border-borderColor1 outline-none focus:!outline-none focus:ring-0"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleAddCategory}
                />
              </div>

              <div className=" flex justify-end mt-10 flex ">
                <button className="w-40 py-2 border border-secondarycolor text-secondarycolor rounded-md ">
                Cancel
                </button>
                <button className="w-40 py-2 bg-neutral-300 text-neutral-400 rounded-md ml-2 ">
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
