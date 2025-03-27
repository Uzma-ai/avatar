import React from "react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {X} from "lucide-react";

interface SubscriptionPopupProps {
  setIsMobileSubscriptionOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Plan {
  price: string;
  questions: string;
  prePostAds: string;
  organicAds: string;
  publicAvatars: string;
  premiumAvatars: string;
  liveStreams: string;
}

const plans: Record<"adFree" | "premium" | "yearly", Plan> = {
  adFree: {
    price: "$7",
    questions: "Unlimited",
    prePostAds: "No",
    organicAds: "No",
    publicAvatars: "Yes",
    premiumAvatars: "No",
    liveStreams: "No",
  },
  premium: {
    price: "$15",
    questions: "Unlimited",
    prePostAds: "No",
    organicAds: "No",
    publicAvatars: "Yes",
    premiumAvatars: "Yes",
    liveStreams: "Yes",
  },
  yearly: {
    price: "$77",
    questions: "Unlimited",
    prePostAds: "No",
    organicAds: "No",
    publicAvatars: "Yes",
    premiumAvatars: "Yes",
    liveStreams: "Yes",
  },
};
const Subscriptionpopup: React.FC<SubscriptionPopupProps> = ({
  setIsMobileSubscriptionOpen,
}) => {
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [selectedPlan, setSelectedPlan] =
    useState<keyof typeof plans>("adFree");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsMobileSubscriptionOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsMobileSubscriptionOpen]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 px-2">
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-xl px-4 py-6 max-w-[25rem] w-full relative h-[30rem]  scroll"
      >
        <div className="border-b border-secondarycolor pb-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">Your Current Subscription</h1>
            <X
              className="cursor-pointer"
              onClick={() => setIsMobileSubscriptionOpen(false)}
            />
          </div>
          <h2 className="text-sm font-semibold pt-1">
            Current Plan:{" "}
            <span className="text-sm font-normal">
              Freemium(Basic) - Ad Supported,access to 5 questions with
              interruptions.
            </span>
          </h2>
        </div>
        <div className="flex justify-between gap-2 pt-4">
          {Object.keys(plans).map((plan) => (
            <button
              key={plan}
              onClick={() => setSelectedPlan(plan as keyof typeof plans)}
              className={`border ${
                selectedPlan === plan ? "border-skycolor bg-skycolor text-white" : "border-transparentskycolor"
              } sm:px-5 w-28 rounded-lg flex flex-col items-center sm:items-start gap-1 `}
            >
              <Image
                src="/support_agent.svg"
                alt="Support"
                width={30}
                height={30}
                className={`${selectedPlan === plan ? "filter invert" : ""}`}
              />
              <span className="text-sm font-normal text-left capitalize pb-1">{plan}</span>
            </button>
          ))}
        </div>

        <div className="pt-4">
          <ul>
            {Object.entries(plans[selectedPlan]).map(
              ([key, value]: [string, string]) => (
                <li key={key} className="flex justify-between pt-2">
                  <span className="text-mediumgray2 font-normal text-sm capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>
                
                    <span className="text-blackcolor font-semibold text-sm transition duration-300 ease-in-out">
                      {value}
                    </span>
                 
                </li>
              )
            )}
          </ul>
        </div>
        <div className="space-y-2 pt-4">
          <button className="w-full h-10 bg-secondarycolor text-whitecolor font-normal rounded-md">
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscriptionpopup;
