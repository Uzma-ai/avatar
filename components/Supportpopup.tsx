import React from "react";
import { useRef, useEffect, useState } from "react";
import {
  Mail,
  MessagesSquare,
  Headset,
  MessageCircleQuestion,
  Info,
} from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";

interface SupportPopupProps {
  setIsMobileSupportOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const Supportpopup: React.FC<SupportPopupProps> = ({ setIsMobileSupportOpen }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);
 const [isDrawerOpen, setIsDrawerOpen] = useState(false);

   useEffect(() => {
     const handleClickOutside = (event: MouseEvent) => {
       if (
         popupRef.current &&
         !popupRef.current.contains(event.target as Node)
       ) {
         if (isDrawerOpen) {
           setIsDrawerOpen(false);
         } else {
           setIsMobileSupportOpen(false);
         }
       }
     };

     document.addEventListener("mousedown", handleClickOutside);
     return () => document.removeEventListener("mousedown", handleClickOutside);
   }, [setIsMobileSupportOpen, isDrawerOpen]);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <Drawer onOpenChange={(open) => setIsDrawerOpen(open)}>
        <div
          ref={popupRef}
          className="bg-white rounded-lg shadow-xl px-4 py-6 max-w-[22rem] w-full relative h-[35rem] overflow-y-auto scroll"
        >
          <div className="border-b border-secondarycolor pb-4">
            <h1 className="text-lg font-semibold">
              Need Help with Your Avatar?
            </h1>
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
              <a href="mailto:support@avatar.com">
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
              <DrawerTrigger asChild>
                <button className="w-full h-10 bg-secondarycolor rounded-md text-whitecolor text-sm font-normal mt-2">
                  Start Chat
                </button>
              </DrawerTrigger>
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
        <DrawerContent>
          <div className="mx-auto px-4 py-4 h-44 w-full max-w-md md:hidden">
            <div className="border-b border-secondarycolor pb-4 flex items-center justify-between">
              <h1 className="text-lg font-semibold">Start the chat with</h1>
              <Info />
            </div>
            <div className="flex items-center justify-center gap-7 py-6">
              <button>
                <Link
                  href="https://wa.me"
                  passHref
                  className="flex flex-col items-center gap-1"
                >
                  <Image
                    src="/whatsapp.svg"
                    alt="Whatsapp"
                    width={40}
                    height={40}
                  />
                  <span className="text-xs font-normal">Whatsapp</span>
                </Link>
              </button>
              <button>
                <Link
                  href="https://t.me"
                  passHref
                  className="flex flex-col items-center gap-1"
                >
                  <Image
                    src="/telegram.svg"
                    alt="Telegram"
                    width={40}
                    height={40}
                  />
                  <span className="text-xs font-normal">Telegram</span>
                </Link>
              </button>
              <button className="flex flex-col items-center gap-1">
                <Image
                  src="/support-chart.svg"
                  alt="Support"
                  width={40}
                  height={40}
                />
                <span className="text-xs font-normal">Support chat</span>
              </button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Supportpopup;