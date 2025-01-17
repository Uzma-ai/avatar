"use client";
import React, { useState, useEffect } from "react";
import {
  CircleUserRound,
  ShoppingBag,
  Users,
  Settings,
  ShoppingCart,
  MessageCircleQuestion,
  User,
} from "lucide-react";

interface CmsSidebarProps {
  isOpen: boolean;
}

const CmsSidebar: React.FC<CmsSidebarProps> = ({ isOpen }) => {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState<
    "Profile" | "Personal Information" | "Create Avatar" | "Subscription" | "My Avatar" | "Public Avatar" | "Shopping" | "Settings" | "Support"
  >("Profile");

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const pathToItemMap: Record<string, typeof selectedSidebarItem> = {
      "/subscription": "Subscription",
      "/chat": "My Avatar",
      "/settings": "Settings",
      "/support": "Support",
    };

    setSelectedSidebarItem(pathToItemMap[currentPath] || "Profile");
  }, []);

  const handleSidebarClick = (
    item: typeof selectedSidebarItem
  ): void => {
    if (item === "Profile") {
      setIsProfileDropdownOpen(!isProfileDropdownOpen);
    } else {
      setSelectedSidebarItem(item);
      setIsProfileDropdownOpen(false); // Close dropdown when selecting other items
    }
  };

  return (
    <aside className={`w-1/6 bg-white shadow-lg p-5 relative ${isOpen ? "block" : "hidden"}`}>
      <div className="absolute left-0 top-0 flex flex-col items-center">
        {selectedSidebarItem === "Profile" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '12rem' }}></div>}
        {selectedSidebarItem === "Personal Information" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '14rem' }}></div>}
        {selectedSidebarItem === "Create Avatar" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '16rem' }}></div>}
        {selectedSidebarItem === "Subscription" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '15.5rem' }}></div>}
        {selectedSidebarItem === "My Avatar" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '19.5rem' }}></div>}
        {selectedSidebarItem === "Public Avatar" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '23.5rem' }}></div>}
        {selectedSidebarItem === "Shopping" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '27.5rem' }}></div>}
        {selectedSidebarItem === "Settings" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '31.5rem' }}></div>}
        {selectedSidebarItem === "Support" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '35.5rem' }}></div>}
      </div>
      <div className="mb-8">
        <img src="/Avatar4.png" alt="Logo" className="w-2/4 ml-4" />
      </div>
      <nav>
        <ul className="space-y-6">
          <li>
            <div className="mt-2 rounded-md overflow-hidden relative">
              <a
                href="/profile"
                className={`flex items-center p-2 ${["Profile", "Personal Information", "Create Avatar"].includes(selectedSidebarItem) ? "bg-secondarycolor text-white" : "bg-white text-black"}`}
                onClick={() => handleSidebarClick("Profile")}
              >
                {["Profile", "Personal Information", "Create Avatar"].includes(selectedSidebarItem) && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
                <User className={`mr-2 h-6 w-6 ${["Profile", "Personal Information", "Create Avatar"].includes(selectedSidebarItem) ? "text-white" : "text-black"}`} />
                <span>Profile</span>
              </a>
              {isProfileDropdownOpen && (
                <div className="p-2 bg-blue-100">
                  <a
                    href="#"
                    className="text-black flex items-center"
                    onClick={() => handleSidebarClick("Personal Information")}
                  >
                    {selectedSidebarItem === "Personal Information" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
                    Personal Information
                  </a>
                  <a
                    href="#"
                    className="text-black mt-2 flex items-center"
                    onClick={() => handleSidebarClick("Create Avatar")}
                  >
                    {selectedSidebarItem === "Create Avatar" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
                    Create Avatar
                  </a>
                </div>
              )}
            </div>
          </li>
          <li>
            <a
              href="/subscription"
              className={`flex items-center p-2 ${selectedSidebarItem === "Subscription" ? "bg-secondarycolor text-white" : "bg-white text-black"}`}
              onClick={() => handleSidebarClick("Subscription")}
            >
              {selectedSidebarItem === "Subscription" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
              <ShoppingCart className={`mr-2 h-6 w-6 ${selectedSidebarItem === "Subscription" ? "text-white" : "text-black"}`} />
              <span>Subscription</span>
            </a>
          </li>
          <li>
            <a
              href="/chat"
              className={`flex items-center p-2 ${selectedSidebarItem === "My Avatar" ? "bg-secondarycolor text-white" : "bg-white text-black"}`}
              onClick={() => handleSidebarClick("My Avatar")}
            >
              {selectedSidebarItem === "My Avatar" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
              <CircleUserRound className={`mr-2 h-6 w-6 ${selectedSidebarItem === "My Avatar" ? "text-white" : "text-black"}`} />
              <span>My Avatar</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center p-2 ${selectedSidebarItem === "Public Avatar" ? "bg-secondarycolor text-white" : "bg-white text-black"}`}
              onClick={() => handleSidebarClick("Public Avatar")}
            >
              {selectedSidebarItem === "Public Avatar" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
              <Users className={`mr-2 h-6 w-6 ${selectedSidebarItem === "Public Avatar" ? "text-white" : "text-black"}`} />
              <span>Public Avatar</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center p-2 ${selectedSidebarItem === "Shopping" ? "bg-secondarycolor text-white" : "bg-white text-black"}`}
              onClick={() => handleSidebarClick("Shopping")}
            >
              {selectedSidebarItem === "Shopping" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
              <ShoppingBag className={`mr-2 h-6 w-6 ${selectedSidebarItem === "Shopping" ? "text-white" : "text-black"}`} />
              <span>Shopping</span>
            </a>
          </li>
          <li>
            <a
              href="/settings"
              className={`flex items-center p-2 ${selectedSidebarItem === "Settings" ? "bg-secondarycolor text-white" : "bg-white text-black"}`}
              onClick={() => handleSidebarClick("Settings")}
            >
              {selectedSidebarItem === "Settings" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
              <Settings className={`mr-2 h-6 w-6 ${selectedSidebarItem === "Settings" ? "text-white" : "text-black"}`} />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a
              href="/support"
              className={`flex items-center p-2 ${selectedSidebarItem === "Support" ? "bg-secondarycolor text-white" : "bg-white text-black"}`}
              onClick={() => handleSidebarClick("Support")}
            >
              {selectedSidebarItem === "Support" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
              <MessageCircleQuestion className={`mr-2 h-6 w-6 ${selectedSidebarItem === "Support" ? "text-white" : "text-black"}`} />
              <span>Support</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default CmsSidebar;
