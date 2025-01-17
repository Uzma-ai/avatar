"use client";
import React, { useEffect } from "react";
import CmsSidebar from "@/components/cms-sidebar";
import { Settings } from "lucide-react";

const SettingsPage = () => {
  useEffect(() => {
    const sidebarItem = document.querySelector('[data-sidebar-item="Settings"]');
    if (sidebarItem) {
      (sidebarItem as HTMLElement).click();
    }
  }, []);

  return (
    <div className="flex h-full bg-white">
      <CmsSidebar isOpen={true} />
      <div className="flex-1 h-full p-8 overflow-hidden">
        <div className="flex justify-between items-center h-28 p-4 rounded-md">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Settings className="mr-2 h-6 w-6 text-black" />
              <span>Settings</span>
            </h2>
            <div className="text-black ml-4">
              Settings
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 h-[calc(100vh-112px)] overflow-y-auto scroll">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-6xl mx-auto">
            <h1 className="text-xl font-semibold mb-2">Quick Settings</h1>
            <div className="mb-6">
              <p className="text-black">
                Manage your preferences, notifications, and content visibility from one place.
              </p>
            </div>
            <hr className="border-t-2 border-secondarycolor mb-5" />

            <div className="mb-6">
              <p className="text-black">
                Language
              </p>
              <div>
                <label className="block text-sm font-medium mb-1"></label>
                <div>
                  <select className="w-full border border-gray-300 rounded-md p-2 text-gray-500">
                    <option value="" disabled selected className="text-gray-400">
                      Choose Language
                    </option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="zh">Chinese</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-black">
                Currency
              </p>
              <div>
                <label className="block text-sm font-medium mb-1"></label>
                <div>
                  <select className="w-full border border-gray-300 rounded-md p-2 text-gray-500">
                    <option value="" disabled selected className="text-gray-400">
                      INR
                    </option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                    <option value="jpy">JPY</option>
                    <option value="aud">AUD</option>
                    <option value="cad">CAD</option>
                    <option value="chf">CHF</option>
                    <option value="cny">CNY</option>
                    <option value="inr">INR</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-medium">Profile Visibility</h2>
              <div className="flex items-center">
                <span className="mr-2 text-base font-medium">Private</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondarycolor"></div>
                </label>
                <span className="ml-2 text-base font-medium">Public</span>
              </div>
            </div>

            <h1 className="text-lg font-semibold mb-2">Manage Notifications</h1>

            <div className="mb-6 flex items-center justify-between mt-1">
              <h2 className="text-base font-medium">Email Notification</h2>
              <div className="flex items-center">
                <span className="mr-2 text-base font-medium text-gray-400">Manage email updates</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondarycolor"></div>
                </label>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between mt-1">
              <h2 className="text-base font-medium">Voice Notification</h2>
              <div className="flex items-center">
                <span className="mr-2 text-base font-medium text-gray-400">Enable/disable Voice alerts.</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondarycolor"></div>
                </label>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between mt-1">
              <h2 className="text-base font-medium">Push Notification</h2>
              <div className="flex items-center">
                <span className="mr-2 text-base font-medium text-gray-400">Enable/disable app alerts.</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondarycolor"></div>
                </label>
              </div>
            </div>

            <h1 className="text-lg font-semibold mb-2">Notification Type</h1>
            <div className="mb-6 flex items-center justify-between mt-1">
              <h2 className="text-base font-medium">Promotional Updates</h2>
              <div className="flex items-center">
                <span className="mr-2 text-base font-medium text-gray-400">Opt-in/out of promotional updates.</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondarycolor"></div>
                </label>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between mt-1">
              <h2 className="text-base font-medium">Important Alerts</h2>
              <div className="flex items-center">
                <span className="mr-2 text-base font-medium text-gray-400">Critical notifications only.</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondarycolor"></div>
                </label>
              </div>
            </div>

            <h1 className="text-lg font-semibold mb-2">Data Sharing Preferences</h1>
            <div className="mb-6 flex items-center justify-between mt-1">
              <h2 className="text-base font-medium">Share Data for Analytics</h2>
              <div className="flex items-center">
                <span className="mr-2 text-base font-medium text-gray-400">Opt-in/out of sharing analytics.</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondarycolor"></div>
                </label>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between mt-1">
              <h2 className="text-base font-medium">Share Data for Marketing</h2>
              <div className="flex items-center">
                <span className="mr-2 text-base font-medium text-gray-400">Opt-in/out of marketing sharing.</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondarycolor"></div>
                </label>
              </div>
            </div>

            <div className="col-span-2 flex justify-end space-x-4 mt-8">
              <button className="px-10 py-2 bg-white border border-secondarycolor text-secondarycolor rounded-md">Cancel</button>
              <button className="px-4 py-2 bg-secondarycolor text-white rounded-md">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;