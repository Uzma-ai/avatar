"use client";
import React, { useEffect, useState } from "react";
import CmsSidebar from "@/components/cms-sidebar";
import { ShoppingCart } from "lucide-react";
import { FaHeadset } from "react-icons/fa6";
import { GiSuitcase } from "react-icons/gi";
import { MdBarChart } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiTachometer } from "react-icons/bi";
import { IoInfinite } from "react-icons/io5";
import { LuMonitorOff } from "react-icons/lu";
import { TfiMedall } from "react-icons/tfi";
import { MdOutlineSave } from "react-icons/md";

const SubscriptionPage = () => {
  const [isPremiumSelected, setIsPremiumSelected] = useState(false);

  useEffect(() => {
    const sidebarItem = document.querySelector('[data-sidebar-item="Subscription"]');
    if (sidebarItem) {
      (sidebarItem as HTMLElement).click();
    }
  }, []);

  const handlePremiumClick = () => {
    setIsPremiumSelected(true);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <CmsSidebar isOpen={true} />
      <div className="flex-1 p-8 overflow-auto scrollbar-none bg-white">
        <div className="flex justify-between items-center mb-4 p-4 rounded-md sticky top-0 bg-white z-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <ShoppingCart className="mr-2 h-6 w-6 text-black" />
              <span>Subscription</span>
            </h2>
           
            <div className="flex items-center text-black" style={{ width: '100%' }}>
  <span>Subscription</span>
  <button
    className="px-10 py-2 bg-secondarycolor text-white rounded-md flex items-center"
    style={{ marginLeft: 'auto' }}
  >
    <FaHeadset className="mr-2 h-4 w-4" />
    Contact Support
  </button>
</div>

          

          </div>
        </div>
        <div className="bg-gray-100 p-4">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-2">Upgrade Your Experience</h1>
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Explore the best features tailored for you.
              </p>
              <p className="text-black">
                Contact Support for <a href="#" className="text-secondarycolor font-semibold">Business Plans</a>
              </p>
            </div>
            <hr className="border-t-2 border-secondarycolor mb-6" />

            <div className="flex justify-between items-start mb-4">
              {/* Current Plan Section */}
              {!isPremiumSelected && (
                <div className="w-1/2 mr-4">
                  <div className="flex items-center">
                    <ShoppingCart className="mr-2 h-6 w-6 text-secondarycolor text-4xl mt-4" />
                    <h2 className="text-xl font-bold mt-4">Current Plan: Free</h2>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Why Get Premium?</h3>
                    <div className="flex items-center mb-4">
                      <FaHeadset className="mr-2 text-secondarycolor text-xl" />
                      <h3 className="text-base">Get access to 24/7 priority customer support.</h3>
                    </div>
                    <div className="flex items-center mb-4">
                      <GiSuitcase className="mr-2 text-secondarycolor text-2xl" />
                      <h3 className="text-base">Unlock exclusive tools and capabilities.</h3>
                    </div>
                    <div className="flex items-center mb-4">
                      <MdBarChart className="mr-2 text-secondarycolor text-2xl" />
                      <h3 className="text-base">Detailed analytics and insights to help you maximize your results.</h3>
                    </div>
                    <div className="flex items-center">
                      <IoPersonCircleOutline className="mr-2 text-secondarycolor text-2xl" />
                      <h3 className="text-base">Personalize your experience with advanced avatar customization.</h3>
                    </div>
                  </div>
                  <div className="mt-48 ml-28">
                    <button className="px-20 py-2 bg-secondarycolor text-white rounded-md">Upgrade to Premium</button>
                  </div>
                  <div className="flex justify-between items-center mt-4 ml-20">
                    <h2>Enjoy unlimited access to all features for $10/month.</h2>
                  </div>
                </div>
              )}

              {/* Premium Plan Section */}
              <div className={`w-1/2 border border-secondarycolor p-4 rounded-lg ${isPremiumSelected ? "mr-4" : ""}`} onClick={handlePremiumClick}>
              <button className="flex items-center">
              <TfiMedall className="w-8 h-8 text-secondarycolor mr-2" />
              <h2 className="text-xl font-bold text-secondarycolor">Premium Plan</h2>
            </button>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Why Get Premium?</h3>
                  <div className="flex items-center mb-4">
                    <FaHeadset className="mr-2 text-secondarycolor text-xl" />
                    <h3 className="text-base">Get access to 24/7 priority customer support.</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <BiTachometer className="mr-2 text-secondarycolor text-2xl" />
                    <h3 className="text-base">Faster response times and optimized performance</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <GiSuitcase className="mr-2 text-secondarycolor text-2xl" />
                    <h3 className="text-base">Unlock exclusive tools and capabilities.</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <IoInfinite className="mr-2 text-secondarycolor text-2xl" />
                    <h3 className="text-base">Enjoy unlimited interactions and increased session durations.</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <MdBarChart className="mr-2 text-secondarycolor text-2xl" />
                    <h3 className="text-base">Detailed analytics and insights to help you maximize your results.</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <LuMonitorOff className="mr-2 text-secondarycolor text-xl" />
                    <h3 className="text-base">Enjoy an uninterrupted, ad-free experience while using the app.</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <IoPersonCircleOutline className="mr-2 text-secondarycolor text-2xl" />
                    <h3 className="text-base">Personalize your experience with advanced avatar customization.</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <TfiMedall className="mr-2 text-secondarycolor text-3xl" />
                    <h3 className="text-base">Access premium templates, designs, or pre-trained models.</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <MdOutlineSave className="mr-2 text-secondarycolor text-2xl" />
                    <h3 className="text-base">Save and sync your data across all devices seamlessly.</h3>
                  </div>
                  <div className="flex items-center">
                    <MdBarChart className="mr-2 text-secondarycolor text-2xl" />
                    <h3 className="text-base">Be the first to try out new features and updates before anyone else!</h3>
                  </div>
                </div>
              </div>

              {/* Thank You Message */}
              {isPremiumSelected && (
                <div className="w-1/2 flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center">
                    <h2 className="text-xl font-semibold text-black mr-64 mt-4">You're a Premium Member!</h2>
                  </div>
                  <div>
                    <p className="text-gray-600 mt-2 mr-40">Thank you for being part of our premium family!</p>
                  </div>
                  <div className="w-full border-t-2 border-secondarycolor mt-3 ml-6"></div>
                  <h3 className="text-lg font-semibold mt-4 text-black mr-80">Subscription Details</h3>
                  <div className="flex justify-between w-full">
                    <h3 className="text-base font-medium mt-4 text-black ml-6">Current Plan</h3>
                    <h3 className="text-base font-medium mt-4 text-gray-500">Premium</h3>
                  </div>
                  <div className="flex justify-between w-full">
                    <h3 className="text-base font-medium mt-4 text-black ml-6">Next billing date</h3>
                    <h3 className="text-base font-medium mt-4 text-gray-500">23rd Nov 2026</h3>
                  </div>
                  <div className="flex justify-between w-full">
                    <h3 className="text-base font-medium mt-4 text-black ml-6">Payment Method</h3>
                    <h3 className="text-base font-medium mt-4 text-gray-500">Visa ending in 1234</h3>
                  </div>
                  <div className="flex justify-between w-full mt-4">
                    <a href="#" className="text-sm font-medium text-secondarycolor ml-6 mt-40 underline">See Past Invoices</a>
                    <a href="#" className="text-sm font-medium text-secondarycolor ml-6 mt-40 underline">Update Payment Method</a>
                  </div>
                  
                
                  <div className="flex justify-center w-full mt-4">
                    <button className="px-6 py-2 bg-white border border-secondarycolor text-secondarycolor rounded-md mr-24">Cancel Subscription</button>
                    <button className="px-14 py-2 bg-secondarycolor text-white rounded-md ml-10">Change Plan</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;