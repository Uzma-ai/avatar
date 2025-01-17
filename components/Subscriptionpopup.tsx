import React from "react";
import { useRef, useEffect } from "react";
import {
  Headset,
  Gauge,
  Inbox,
  Infinity,
  ChartNoAxesColumn,
  MonitorOff,
  CircleUserRound,
  Sparkles,
  Save,
} from "lucide-react";

interface SubscriptionPopupProps {
  setIsMobileSubscriptionOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Subscriptionpopup: React.FC<SubscriptionPopupProps> = ({ setIsMobileSubscriptionOpen }) => {
  
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
     if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
       setIsMobileSubscriptionOpen(false);
     }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsMobileSubscriptionOpen]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-xl px-4 py-6 max-w-[24rem] w-full relative h-[40rem] overflow-y-auto scroll"
      >
        <div className="border-b border-secondarycolor pb-4">
          <h1 className="text-lg font-semibold">Your Current Subscription</h1>
          <h2 className="text-sm font-semibold pt-1">
            Current Plan:{" "}
            <span className="text-sm font-normal">
              Free - Enjoy basic features with the Free Plan.
            </span>
          </h2>
        </div>
        <div className="space-y-2 pt-4">
          <h1 className="text-base font-semibold">Why get premium?</h1>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Headset size={20} className="text-secondarycolor" />
              <span className="text-sm font-normal">
                Get access to 24/7 priority customer support.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Gauge size={20} className="text-secondarycolor" />
              <span className="text-sm font-normal">
                Faster response times and optimized performance.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Inbox size={20} className="text-secondarycolor" />
              <span className="text-sm font-normal">
                Unlock exclusive tools and capabilities.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Infinity size={25} className="text-secondarycolor" />
              <span className="text-sm font-normal">
                Enjoy unlimited interactions and increased session durations.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ChartNoAxesColumn size={25} className="text-secondarycolor" />
              <span className="text-sm font-normal">
                Detailed analytics and insights to help you maximize your
                results.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MonitorOff size={25} className="text-secondarycolor" />
              <span className="text-sm font-normal">
                Enjoy an uninterrupted, ad-free experience while using the app.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CircleUserRound size={25} className="text-secondarycolor" />
              <span className="text-sm font-normal">
                Personalize your experience with advanced avatar customization.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkles size={25} className="text-secondarycolor" />
              <span className="text-sm font-normal">
                Access premium templates, designs, or pre-trained models.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Save size={25} className="text-secondarycolor" />
              <span className="text-sm font-normal">
                Save and sync your data across all devices seamlessly.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ChartNoAxesColumn size={25} className="text-secondarycolor" />
              <span className="text-sm font-normal">
                Be the first to try out new features and updates before anyone
                else!
              </span>
            </li>
          </ul>
          <button className="w-full h-10 bg-secondarycolor text-whitecolor font-normal rounded-md mt-2">
            Upgrade to Premium
          </button>
        </div>
        <div className="text-center pt-3">
          <p className="text-xs font-normal">
            Enjoy unlimited access to all features for $10/month.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Subscriptionpopup;