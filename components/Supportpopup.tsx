import React from "react";
import { useRef, useEffect, useState } from "react";
import {
  Mail,
  MessagesSquare,
  Headset,
  MessageCircleQuestion,
  Info,
  X,
  Search,
} from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SupportPopupProps {
  setIsMobileSupportOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Supportpopup: React.FC<SupportPopupProps> = ({
  setIsMobileSupportOpen,
}) => {
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 px-2">
      {isFAQOpen ? (
        <div
          ref={popupRef}
          className="bg-mediumWhite backdrop-blur-sm rounded-lg shadow-xl px-4 py-3 max-w-[22rem] w-full relative h-[40rem] overflow-y-auto scroll"
        >
          <div className="flex items-center justify-between text-white">
            <h1 className="font-semibold text-lg">
              Frequently asked questions
            </h1>
            <X onClick={() => setIsFAQOpen(false)} />
          </div>
          <div className="relative mt-4">
            <Input
              type="search"
              placeholder="Search by Ticket ID or Issue Type"
              className="w-full pl-4 pr-10 py-5 border border-mediumgray2 rounded-md focus:!outline-none focus:!ring-0"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
          </div>
          <div className="mt-3">
            <Accordion
              type="single"
              collapsible
              className="w-full flex flex-col gap-4"
            >
              <AccordionItem
                className="bg-white rounded-lg px-3"
                value="item-1"
              >
                <AccordionTrigger className="font-semibold text-base">
                  General Questions
                </AccordionTrigger>
                <AccordionContent>
                  <h1 className="font-semibold text-base">
                    Q: What is the Avatar system?
                  </h1>
                  <p className="font-normal text-base leading-5">
                    A: The Avatar system is a platform where users can create
                    personalized avatars using video, photos, and voice.
                  </p>
                </AccordionContent>
                <AccordionContent>
                  <h1 className="font-semibold text-base">
                    Q: What is the Avatar system?
                  </h1>
                  <p className="font-normal text-base leading-5">
                    A: The Avatar system is a platform where users can create
                    personalized avatars using video, photos, and voice.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="bg-white rounded-lg px-3"
                value="item-2"
              >
                <AccordionTrigger className="font-semibold text-base">
                  Account & Subscription
                </AccordionTrigger>
                <AccordionContent>
                  <h1 className="font-semibold text-base">
                    Q: What is the Avatar system?
                  </h1>
                  <p className="font-normal text-base leading-5">
                    A: The Avatar system is a platform where users can create
                    personalized avatars using video, photos, and voice.
                  </p>
                </AccordionContent>
                <AccordionContent>
                  <h1 className="font-semibold text-base">
                    Q: What is the Avatar system?
                  </h1>
                  <p className="font-normal text-base leading-5">
                    A: The Avatar system is a platform where users can create
                    personalized avatars using video, photos, and voice.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="bg-white rounded-lg px-3"
                value="item-3"
              >
                <AccordionTrigger className="font-semibold text-base">
                  Avatar Creation
                </AccordionTrigger>
                <AccordionContent>
                  <h1 className="font-semibold text-base">
                    Q: What is the Avatar system?
                  </h1>
                  <p className="font-normal text-base leading-5">
                    A: The Avatar system is a platform where users can create
                    personalized avatars using video, photos, and voice.
                  </p>
                </AccordionContent>
                <AccordionContent>
                  <h1 className="font-semibold text-base">
                    Q: What is the Avatar system?
                  </h1>
                  <p className="font-normal text-base leading-5">
                    A: The Avatar system is a platform where users can create
                    personalized avatars using video, photos, and voice.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="bg-white rounded-lg px-3"
                value="item-4"
              >
                <AccordionTrigger className="font-semibold text-base">
                  Troubleshooting
                </AccordionTrigger>
                <AccordionContent>
                  <h1 className="font-semibold text-base">
                    Q: What is the Avatar system?
                  </h1>
                  <p className="font-normal text-base leading-5">
                    A: The Avatar system is a platform where users can create
                    personalized avatars using video, photos, and voice.
                  </p>
                </AccordionContent>
                <AccordionContent>
                  <h1 className="font-semibold text-base">
                    Q: What is the Avatar system?
                  </h1>
                  <p className="font-normal text-base leading-5">
                    A: The Avatar system is a platform where users can create
                    personalized avatars using video, photos, and voice.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="bg-white rounded-lg px-3"
                value="item-5"
              >
                <AccordionTrigger className="font-semibold text-base">
                  Billing & Payments
                </AccordionTrigger>
                <AccordionContent>
                  <h1 className="font-semibold text-base">
                    Q: What is the Avatar system?
                  </h1>
                  <p className="font-normal text-base leading-5">
                    A: The Avatar system is a platform where users can create
                    personalized avatars using video, photos, and voice.
                  </p>
                </AccordionContent>
                <AccordionContent>
                  <h1 className="font-semibold text-base">
                    Q: What is the Avatar system?
                  </h1>
                  <p className="font-normal text-base leading-5">
                    A: The Avatar system is a platform where users can create
                    personalized avatars using video, photos, and voice.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="bg-white rounded-lg px-3"
                value="item-6"
              >
                <AccordionTrigger className="font-semibold text-base">
                  Support & Contact
                </AccordionTrigger>
                <AccordionContent>
                  <h1 className="font-semibold text-base">
                    Q: What is the Avatar system?
                  </h1>
                  <p className="font-normal text-base leading-5">
                    A: The Avatar system is a platform where users can create
                    personalized avatars using video, photos, and voice.
                  </p>
                </AccordionContent>
                <AccordionContent>
                  <h1 className="font-semibold text-base">
                    Q: What is the Avatar system?
                  </h1>
                  <p className="font-normal text-base leading-5">
                    A: The Avatar system is a platform where users can create
                    personalized avatars using video, photos, and voice.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="max-w-44 h-40 bg-white rounded-lg py-4 px-2 space-y-3 flex flex-col items-center">
              <div className="flex items-center justify-center gap-2">
                <Mail size={20} className="text-secondarycolor" />
                <h1 className="font-semibold text-xs">Email Support</h1>
              </div>
              <p className="text-[10px] font-normal text-mediumgray2 text-center">
                Send us a detailed email, and we’ll get back to you within 24
                hours.
              </p>
              <button className="bg-secondarycolor text-white w-32 py-3 rounded-md text-xs">
                Contact by Email
              </button>
            </div>
            <div className="max-w-44 h-40 bg-white rounded-lg py-4 px-2 space-y-5 flex flex-col items-center">
              <div className="flex items-center justify-center gap-2">
                <MessagesSquare size={20} className="text-secondarycolor" />
                <h1 className="font-semibold text-xs">Chat Support</h1>
              </div>
              <p className="text-[10px] font-normal text-mediumgray2 text-center">
                Connect with our support team in real-time.
              </p>
              <button className="bg-secondarycolor text-white w-32 py-3 rounded-md text-xs ">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Drawer onOpenChange={(open) => setIsDrawerOpen(open)}>
          <div
            ref={popupRef}
            className="bg-white rounded-lg shadow-xl px-4 py-6 max-w-[22rem] w-full relative h-[35rem] overflow-y-auto scroll"
          >
            <div className="border-b border-secondarycolor pb-4">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold">
                  Need Help with Your Avatar?
                </h1>
                <X
                  className="cursor-pointer"
                  onClick={() => setIsMobileSupportOpen(false)}
                />
              </div>
              <h2 className="text-sm font-normal pt-1">
                Our customer support team is here to assist you with any issues
                or questions.
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
                <span
                  className="text-xs text-secondarycolor underline cursor-pointer"
                  onClick={() => setIsFAQOpen(true)}
                >
                  Click to read more
                </span>
              </div>
            </div>
          </div>
          <DrawerContent>
            <div className="mx-auto px-4 py-4 h-auto w-full max-w-md md:hidden">
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
      )}
    </div>
  );
};

export default Supportpopup;
