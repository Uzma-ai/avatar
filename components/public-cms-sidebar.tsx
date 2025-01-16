"use client";
import React, { useState } from "react";
import {
  CircleUserRound,
  ShoppingBag,
  Users,
  Settings,
  ShoppingCart,
  MessageCircleQuestion,
  User,
} from "lucide-react";

interface PublicCmsSidebarProps {
  isOpen: boolean;
}

const PublicCmsSidebar: React.FC<PublicCmsSidebarProps> = ({ isOpen }) => {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState<
    "Profile" | "Dashboard" | "Content" | "Public Avatar" | "Shopping" | "Settings" | "Support" | "Personal Information" | "Create Avatar" | "Subscription" | "My Avatar"
  >("Profile");

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleSidebarClick = (
    item: "Profile" | "Dashboard" | "Content" | "Public Avatar" | "Shopping" | "Settings" | "Support" | "Subscription" | "My Avatar"
  ): void => {
    if (item === "Profile") {
      setIsProfileDropdownOpen(!isProfileDropdownOpen);
    } else {
      setSelectedSidebarItem(item);
    }
  };

  return (
    <aside className={`w-1/6 bg-white shadow-lg p-5 relative ${isOpen ? "block" : "hidden"}`}>
      <div className="absolute left-0 top-0 flex flex-col items-center">
        {selectedSidebarItem === "Dashboard" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '12rem' }}></div>}
        {selectedSidebarItem === "Content" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '15.5rem' }}></div>}
        {selectedSidebarItem === "My Avatar" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '19rem' }}></div>}
        {selectedSidebarItem === "Public Avatar" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '23rem' }}></div>}
        {selectedSidebarItem === "Shopping" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '27rem' }}></div>}
        {selectedSidebarItem === "Settings" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '31rem' }}></div>}
        {selectedSidebarItem === "Support" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '35rem' }}></div>}
      </div>
      <div className="mb-8">
        <img src="/Avatar4.png" alt="Logo" className="w-2/4 ml-4" />
      </div>
      <nav>
        <ul className="space-y-6">
          <li>
            <a
              href="#"
              data-sidebar-item="Dashboard"
              className={`flex items-center p-2 ${selectedSidebarItem === "Dashboard" ? "bg-secondarycolor text-white" : "bg-white text-black"}`}
              onClick={() => handleSidebarClick("Dashboard")}
            >
              <ShoppingCart className={`mr-2 h-6 w-6 ${selectedSidebarItem === "Dashboard" ? "text-white" : "text-black"}`} />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              data-sidebar-item="Content"
              className={`flex items-center p-2 ${selectedSidebarItem === "Content" ? "bg-secondarycolor text-white" : "bg-white text-black"}`}
              onClick={() => handleSidebarClick("Subscription")}
            >
              <ShoppingCart className={`mr-2 h-6 w-6 ${selectedSidebarItem === "Content" ? "text-white" : "text-black"}`} />
              <span>Content</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              data-sidebar-item="My Avatar"
              className={`flex items-center p-2 bg-white text-black`}
              onClick={() => handleSidebarClick("My Avatar")}
            >
              <CircleUserRound className={`mr-2 h-6 w-6 ${selectedSidebarItem === "My Avatar" ? "text-white" : "text-black"}`} />
              <span>My Avatar</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              data-sidebar-item="Public Avatar"
              className={`flex items-center p-2 ${selectedSidebarItem === "Public Avatar" ? "bg-secondarycolor text-white" : "bg-white text-black"}`}
              onClick={() => handleSidebarClick("Public Avatar")}
            >
              <Users className={`mr-2 h-6 w-6 ${selectedSidebarItem === "Public Avatar" ? "text-white" : "text-black"}`} />
              <span>Public Avatar</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              data-sidebar-item="Shopping"
              className={`flex items-center p-2 ${selectedSidebarItem === "Shopping" ? "bg-secondarycolor text-white" : "bg-white text-black"}`}
              onClick={() => handleSidebarClick("Shopping")}
            >
              <ShoppingBag className={`mr-2 h-6 w-6 ${selectedSidebarItem === "Shopping" ? "text-white" : "text-black"}`} />
              <span>Shopping</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              data-sidebar-item="Settings"
              className={`flex items-center p-2 ${selectedSidebarItem === "Settings" ? "bg-secondarycolor text-white" : "bg-white text-black"}`}
              onClick={() => handleSidebarClick("Settings")}
            >
              <Settings className={`mr-2 h-6 w-6 ${selectedSidebarItem === "Settings" ? "text-white" : "text-black"}`} />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              data-sidebar-item="Support"
              className={`flex items-center p-2 ${selectedSidebarItem === "Support" ? "bg-secondarycolor text-white" : "bg-white text-black"}`}
              onClick={() => handleSidebarClick("Support")}
            >
              <MessageCircleQuestion className={`mr-2 h-6 w-6 ${selectedSidebarItem === "Support" ? "text-white" : "text-black"}`} />
              <span>Support</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default PublicCmsSidebar;
