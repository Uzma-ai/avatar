import React from "react";
import { useRef, useEffect } from "react";
import {
  Mail,
  MessagesSquare,
  Headset,
  MessageCircleQuestion,
} from "lucide-react";

interface SupportPopupProps {
  setIsMobileSupportOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const Supportpopup: React.FC<SupportPopupProps> = ({ setIsMobileSupportOpen }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsMobileSupportOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsMobileSupportOpen]);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-xl px-4 py-6 max-w-[22rem] w-full relative h-[35rem] overflow-y-auto scroll"
      >
        <div className="border-b border-secondarycolor pb-4">
          <h1 className="text-lg font-semibold">Need Help with Your Avatar?</h1>
          <h2 className="text-sm font-normal pt-1">
            Our customer support team is here to assist you with any issues or
            questions.
          </h2>
        </div>
        <div className="space-y-4 pt-4">
          <div>
            <div className="flex items-center gap-2">
              <Mail className="text-secondarycolor" />
              <span className="text-sm font-semibold">Email Support</span>
            </div>
            <p className="text-sm font-normal pt-1">
              Send us a detailed email, and we’ll get back to you within 24
              hours.
            </p>
            <a href="mailto:krunaldevtale79@email.com">
              <button className="w-full h-10 bg-secondarycolor rounded-md text-whitecolor text-sm font-normal mt-2">
                Contact by email
              </button>
            </a>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <MessagesSquare className="text-secondarycolor" />
              <span className="text-sm font-semibold">Chat Support</span>
            </div>
            <p className="text-sm font-normal pt-1">
              Connect with our support team in real-time.
            </p>
            <button className="w-full h-10 bg-secondarycolor rounded-md text-whitecolor text-sm font-normal mt-2">
              Start Chat
            </button>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Headset className="text-secondarycolor" />
              <span className="text-sm font-semibold">Phone Support</span>
            </div>
            <p className="text-sm font-normal pt-1">
              Connect with our support team in real-time.
            </p>
            <button className="w-full h-10 bg-secondarycolor rounded-md text-whitecolor text-sm font-normal mt-2">
              Call Us
            </button>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <MessageCircleQuestion className="text-secondarycolor" />
              <span className="text-sm font-semibold">FAQ & tranining</span>
            </div>
            <span className="text-xs text-secondarycolor underline cursor-pointer">
              Click to read more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supportpopup;