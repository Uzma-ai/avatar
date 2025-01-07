"use client";
import React, { useState } from "react";
import ContactNumber from '@/components/ContactNumber'
import {
  CircleUserRound,
  ShoppingBag,
  Users,
  Settings,
  ShoppingCart,
  MessageCircleQuestion,
  User,
  Pencil,
  Plus,
  X,
  Contact,
} from "lucide-react";

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState("basicInfo"); // State to toggle sections
  const [selectedSidebarItem, setSelectedSidebarItem] = useState("Profile"); // State to track selected sidebar item
  const [isEditing, setIsEditing] = useState(false); // State to track if editing mode is active
  const [shoppingPreferences, setShoppingPreferences] = useState(["Books", "Fashion", "Electronics", "Groceries"]);
  const [interests, setInterests] = useState(["Sports", "Music", "Technology"]);

  interface SidebarItem {
    item: string;
  }

  const handleSidebarClick = (item: SidebarItem['item']): void => {
    setSelectedSidebarItem(item);
  };

  const handleEditClick = (): void => {
    setIsEditing(!isEditing);
  };

  const handleRemoveItem = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, item: string): void => {
    setList(list.filter(i => i !== item));
  };

  const handleAddItem = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>): void => {
    const newItem = prompt("Enter new item:");
    if (newItem) {
      setList([...list, newItem]);
    }
  };
  

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/6 bg-white shadow-lg p-5 relative">
        <div className="absolute left-0 top-0 flex flex-col items-center">
          
        
          {selectedSidebarItem === "Profile" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '12rem' }}></div>}
         
          {selectedSidebarItem === "Personal Information" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '14rem' }}></div>}
          {selectedSidebarItem === "Create Avatar" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '16rem' }}></div>}
          {selectedSidebarItem === "Subscription" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '20rem' }}></div>}
          {selectedSidebarItem === "My Avatar" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '22rem' }}></div>}
          {selectedSidebarItem === "Public Avatar" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '25rem' }}></div>}
          {selectedSidebarItem === "Shopping" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '29rem' }}></div>}
          {selectedSidebarItem === "Settings" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '31rem' }}></div>}
          {selectedSidebarItem === "Support" && <div className="h-8 w-1 bg-secondarycolor ml-2" style={{ marginTop: '34rem' }}></div>}
           
        </div>
        <div className="mb-8">
          <img src="/Avatar4.png" alt="Logo" className="w-2/4 ml-4" />
        </div>
        <nav>
          <ul className="space-y-6">
            <li>
              <div className="mt-2 rounded-md overflow-hidden relative">
                <a href="#" className="flex items-center bg-secondarycolor p-2" onClick={() => handleSidebarClick("Profile")}>
                  {selectedSidebarItem === "Profile" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
                  <User className="mr-2 h-6 w-6 text-white" />
                  <span className="text-white">Profile</span>
                </a>
                <div className="p-2 bg-blue-100">
                  <a href="#" className="text-black flex items-center" onClick={() => handleSidebarClick("Personal Information")}>
                    {selectedSidebarItem === "Personal Information" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
                    Personal Information
                  </a>
                  <div className="text-black mt-2">
                    Create Avatar
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="flex items-center" onClick={() => handleSidebarClick("Subscription")}>
                {selectedSidebarItem === "Subscription" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
                <ShoppingCart className="mr-2 h-6 w-6 text-black" />
                <span>Subscription</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center" onClick={() => handleSidebarClick("My Avatar")}>
                {selectedSidebarItem === "My Avatar" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
                <CircleUserRound className="mr-2 h-6 w-6 text-black" />
                <span>My Avatar</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center" onClick={() => handleSidebarClick("Public Avatar")}>
                {selectedSidebarItem === "Public Avatar" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
                <Users className="mr-2 h-6 w-6 text-black" />
                <span>Public Avatar</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center" onClick={() => handleSidebarClick("Shopping")}>
                {selectedSidebarItem === "Shopping" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
                <ShoppingBag className="mr-2 h-6 w-6 text-black" />
                <span>Shopping</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center" onClick={() => handleSidebarClick("Settings")}>
                {selectedSidebarItem === "Settings" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
                <Settings className="mr-2 h-6 w-6 text-black" />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="#" className={`flex items-center ${selectedSidebarItem === "Support" ? "font-bold" : ""}`} onClick={() => handleSidebarClick("Support")}>
                {selectedSidebarItem === "Support" && <span className="mr-2 text-secondarycolor text-3xl">•</span>}
                <MessageCircleQuestion className="mr-2 h-6 w-6 text-black" />
                <span>Support</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto scrollbar-none bg-white">
        
        <div className="flex justify-between items-center mb-4 p-4 rounded-md sticky top-0 bg-white z-10">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <User className="mr-2 h-6 w-6 text-black" />
              <span>Profile</span>
            </h2>
            <div className="text-black ml-4">
              Profile &gt; <span className="text-black ">{selectedSidebarItem}</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-white text-black rounded-md flex items-center border border-black" onClick={handleEditClick}>
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </button>
        </div>

        <div className="bg-gray-100 p-4">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-6xl mx-auto">
            <div className="flex space-x-4 mb-8">
              <button
                className={`px-4 py-2 rounded-md font-semibold relative ${
                  activeSection === "basicInfo"
                    ? "text-black"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveSection("basicInfo")}
              >
                Basic Information
                {activeSection === "basicInfo" && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-secondarycolor"></span>
                )}
              </button>
              <button
                className={`px-4 py-2 rounded-md font-semibold relative ${
                  activeSection === "moreDetails"
                    ? "text-black"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveSection("moreDetails")}
              >
                More Details
                {activeSection === "moreDetails" && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-secondarycolor"></span>
                )}
              </button>
            </div>

            <div className="mb-8 p-4 bg-blue-100 rounded-md">
              <h3 className="text-lg font-semibold">
                {activeSection === "basicInfo" ? "Basic Information" : "More Details"}
              </h3>
            </div>

            {activeSection === "basicInfo" && (
              <form className="grid grid-cols-2 gap-6">
                {/* Basic Information Form */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input type="email" className="w-full border rounded-md p-2" />
                </div>
                <ContactNumber />
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Pincode
                  </label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    City
                  </label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    State
                  </label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Country
                  </label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Date of Birth
                  </label>
                  <input type="date" className="w-full border rounded-md p-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Gender</label>
                  <select className="w-full border rounded-md p-2">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Age
                  </label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>

                {!isEditing && (
                  <>
                    <div className="col-span-2 flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <label className="block text-lg font-bold mb-1">
                          Shopping Preferences:
                        </label>
                        <div className="flex space-x-2">
                          {shoppingPreferences.map((item) => (
                            <span key={item} className="px-2 py-1 bg-gray-200 rounded-md flex items-center">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <label className="block text-lg font-bold mb-1">
                          Interests:
                        </label>
                        <div className="flex space-x-2">
                          {interests.map((item) => (
                            <span key={item} className="px-2 py-1 bg-gray-200 rounded-md flex items-center">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {isEditing && (
                  <>
                    <div className="col-span-2 flex items-center space-x-4">
                      <label className="block text-lg font-bold mb-1">
                        Shopping Preferences:
                      </label>
                      <label className="block text-lg font-bold mb-1" style={{ marginLeft: '34%' }}>
                        Interests:
                      </label>
                    </div>
                    <div className="col-span-2 flex items-center space-x-4">
                      <div className="flex space-x-2">
                        <button type="button" className="px-2 py-1 bg-secondarycolor text-white rounded-md flex items-center" onClick={() => handleAddItem(shoppingPreferences, setShoppingPreferences)}>
                          Add <Plus className="ml-1 h-4 w-4" />
                        </button>
                        {shoppingPreferences.slice(0, 3).map((item) => (
                          <span key={item} className="px-2 py-1 bg-gray-200 rounded-md flex items-center">
                            {item}
                            <X className="ml-2 h-4 w-4 cursor-pointer" onClick={() => handleRemoveItem(shoppingPreferences, setShoppingPreferences, item)} />
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2" style={{ marginLeft: '16%' }}>
                        <button type="button" className="px-2 py-1 bg-secondarycolor  text-white rounded-md flex items-center" onClick={() => handleAddItem(interests, setInterests)}>
                          Add <Plus className="ml-1 h-4 w-4" />
                        </button>
                        {interests.slice(0, 3).map((item) => (
                          <span key={item} className="px-2 py-1 bg-gray-200 rounded-md flex items-center">
                            {item}
                            <X className="ml-2 h-4 w-4 cursor-pointer" onClick={() => handleRemoveItem(interests, setInterests, item)} />
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center space-x-4">
                      <div className="flex space-x-2">
                        {shoppingPreferences.slice(3).map((item) => (
                          <span key={item} className="px-2 py-1 bg-gray-200 rounded-md flex items-center">
                            {item}
                            <X className="ml-2 h-4 w-4 cursor-pointer" onClick={() => handleRemoveItem(shoppingPreferences, setShoppingPreferences, item)} />
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2" style={{ marginLeft: '10%' }}>
                        {interests.slice(3).map((item) => (
                          <span key={item} className="px-2 py-1 bg-gray-200 rounded-md flex items-center">
                            {item}
                            <X className="ml-2 h-4 w-4 cursor-pointer" onClick={() => handleRemoveItem(interests, setInterests, item)} />
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                  <label className="block text-sm font-medium mb-1">
                    
                  </label>
                  <input type="text" className="w-full border rounded-md p-2" placeholder="Add categories" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    
                  </label>
                  <input type="text" className="w-full border rounded-md p-2" placeholder="Add interests" />
                </div>
                  
                  </>
                )}
                {isEditing && (
                  <div className="col-span-2 flex justify-end space-x-4 mt-8">
                    <button className="px-6 py-2 bg-white border border-secondarycolor text-secondarycolor rounded-md">Discard</button>
                    <button className="px-4 py-2 bg-secondarycolor text-white rounded-md">Save Changes</button>
                  </div>
                )}
              </form>
            )}

            {activeSection === "moreDetails" && (
              <form className="grid grid-cols-2 gap-6">
                {/* More Details Form */}
                <div>
                  <label className="block text-sm font-medium mb-1">Ethnicity</label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Religion</label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Highest Qualification</label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Income Group</label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Marital Status
                  </label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Children
                  </label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>

                {isEditing && (
                  <div className="col-span-2 flex justify-end space-x-4 mt-8">
                    <button className="px-6 py-2 bg-white border border-secondarycolor text-secondarycolor rounded-md">Discard</button>
                    <button className="px-4 py-2 bg-secondarycolor text-white rounded-md">Save Changes</button>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
