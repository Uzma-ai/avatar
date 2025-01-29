"use client";
import React, { useState, useEffect } from "react";
import ContactNumber from '@/components/ContactNumber';
import {
  User,
  Pencil,
  Plus,
  X,
} from "lucide-react";
import BrowserSidebar from "@/components/Browsersidebar";

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState("basicInfo"); // State to toggle sections
  const [selectedSidebarItem, setSelectedSidebarItem] = useState<"Profile" | "Personal Information" | "Create Avatar" | "Subscription" | "My Avatar" | "Public Avatar" | "Shopping" | "Settings" | "Support">("Profile"); // State to track selected sidebar item
  const [isEditing, setIsEditing] = useState(false); // State to track if editing mode is active
  const [shoppingPreferences, setShoppingPreferences] = useState(["Books", "Fashion", "Electronics"]);
  const [interests, setInterests] = useState(["Sports", "Music", "Technology"]);

  useEffect(() => {
    setSelectedSidebarItem("Personal Information");
  }, []);


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
    <div className="flex h-screen bg-white">
      <BrowserSidebar />

      {/* Main Content */}
      <main className="flex-1 h-full px-2 overflow-hidden">
        <div className="flex justify-between items-center h-28 py-4 px-7 rounded-md">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <User className="mr-2 h-6 w-6 text-black" />
              <span>Profile</span>
            </h2>
            <div className="text-black ml-4">
              Profile &gt;{" "}
              {selectedSidebarItem !== "Profile" && (
                <span className="text-black">{selectedSidebarItem}</span>
              )}
            </div>
          </div>
          <button
            className="px-4 py-2 bg-white text-black rounded-md flex items-center border border-black"
            onClick={handleEditClick}
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </button>
        </div>

        <div className="bg-gray-100 px-7 pt-7 pb-14 h-[calc(100vh-112px)] overflow-y-auto scroll">
          <div className="bg-white rounded-lg shadow-md p-8 mx-auto">
            <div className="flex space-x-4 mb-8">
              <button
                className={`px-4 py-2 rounded-md font-semibold relative ${
                  activeSection === "basicInfo" ? "text-black" : "text-gray-500"
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
              <h3 className="md:text-base lg:text-lg font-semibold">
                {activeSection === "basicInfo"
                  ? "Basic Information"
                  : "More Details"}
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
                  <input
                    type="email"
                    className="w-full border rounded-md p-2"
                  />
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
                  <label className="block text-sm font-medium mb-1">City</label>
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
                  <label className="block text-sm font-medium mb-1">
                    Gender
                  </label>
                  <select className="w-full border rounded-md p-2">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium mb-1">
                      Personality Type
                    </label>
                    <select className="w-full border rounded-md p-2">
                      <option>ISTJ</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                  <div className="text-xs text-blackcolor pt-5">
                    <p>Do know your Type?</p>
                    <span className="underline cursor-pointer">Click here to find out !</span>
                  </div>
                </div>

                {!isEditing && (
                  <>
                    <div className="col-span-2 flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <label className="block md:text-sm lg:text-lg font-bold mb-1">
                          Shopping Preferences:
                        </label>
                        <div className="flex space-x-2">
                          {shoppingPreferences.map((item) => (
                            <span
                              key={item}
                              className="px-2 py-1 bg-gray-200 md:text-sm lg:text-base rounded-md flex items-center"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <label className="block md:text-sm lg:text-lg font-bold mb-1">
                          Interests:
                        </label>
                        <div className="flex space-x-2">
                          {interests.map((item) => (
                            <span
                              key={item}
                              className="px-2 py-1 bg-gray-200 md:text-sm lg:text-base rounded-md flex items-center"
                            >
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
                    <div className="flex flex-col gap-4">
                      <label className="block text-lg font-bold mb-1">
                        Shopping Preferences:
                      </label>
                      <div className="flex space-x-2 flex-wrap gap-2">
                        <button
                          type="button"
                          className="px-2 py-1 bg-secondarycolor text-white rounded-md flex items-center"
                          onClick={() =>
                            handleAddItem(
                              shoppingPreferences,
                              setShoppingPreferences
                            )
                          }
                        >
                          Add <Plus className="ml-1 h-4 w-4" />
                        </button>
                        {shoppingPreferences.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="px-2 py-1 bg-gray-200 rounded-md flex items-center"
                          >
                            {item}
                            <X
                              className="ml-2 h-4 w-4 cursor-pointer"
                              onClick={() =>
                                handleRemoveItem(
                                  shoppingPreferences,
                                  setShoppingPreferences,
                                  item
                                )
                              }
                            />
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        {shoppingPreferences.slice(3).map((item) => (
                          <span
                            key={item}
                            className="px-2 py-1 bg-gray-200 rounded-md flex items-center"
                          >
                            {item}
                            <X
                              className="ml-2 h-4 w-4 cursor-pointer"
                              onClick={() =>
                                handleRemoveItem(
                                  shoppingPreferences,
                                  setShoppingPreferences,
                                  item
                                )
                              }
                            />
                          </span>
                        ))}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1"></label>
                        <input
                          type="text"
                          className="w-full border rounded-md p-2"
                          placeholder="Add categories"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <label className="block text-lg font-bold mb-1">
                        Interests:
                      </label>
                      <div className="flex space-x-2 flex-wrap gap-2">
                        <button
                          type="button"
                          className="px-2 py-1 bg-secondarycolor text-white rounded-md flex items-center"
                          onClick={() => handleAddItem(interests, setInterests)}
                        >
                          Add <Plus className="ml-1 h-4 w-4" />
                        </button>
                        {interests.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="px-2 py-1 bg-gray-200 rounded-md flex items-center"
                          >
                            {item}
                            <X
                              className="ml-2 h-4 w-4 cursor-pointer"
                              onClick={() =>
                                handleRemoveItem(interests, setInterests, item)
                              }
                            />
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        {interests.slice(3).map((item) => (
                          <span
                            key={item}
                            className="px-2 py-1 bg-gray-200 rounded-md flex items-center"
                          >
                            {item}
                            <X
                              className="ml-2 h-4 w-4 cursor-pointer"
                              onClick={() =>
                                handleRemoveItem(interests, setInterests, item)
                              }
                            />
                          </span>
                        ))}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1"></label>
                        <input
                          type="text"
                          className="w-full border rounded-md p-2"
                          placeholder="Add interests"
                        />
                      </div>
                    </div>
                  </>
                )}
                {isEditing && (
                  <div className="col-span-2 flex justify-end space-x-4 mt-8">
                    <button className="px-6 py-2 bg-white border border-secondarycolor text-secondarycolor rounded-md">
                      Discard
                    </button>
                    <button className="px-4 py-2 bg-secondarycolor text-white rounded-md">
                      Save Changes
                    </button>
                  </div>
                )}
              </form>
            )}

            {activeSection === "moreDetails" && (
              <form className="grid grid-cols-2 gap-6">
                {/* More Details Form */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Ethnicity
                  </label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Religion
                  </label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Highest Qualification
                  </label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Income Group
                  </label>
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
                    <button className="px-6 py-2 bg-white border border-secondarycolor text-secondarycolor rounded-md">
                      Discard
                    </button>
                    <button className="px-4 py-2 bg-secondarycolor text-white rounded-md">
                      Save Changes
                    </button>
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
