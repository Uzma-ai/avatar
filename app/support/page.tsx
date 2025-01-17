"use client";
import React, { useEffect, useState } from "react";
import CmsSidebar from "@/components/cms-sidebar";
import { MessageCircleQuestion, Mail, Image, Search,Pencil } from "lucide-react";
import { FaHeadset } from "react-icons/fa6";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { RiQuestionnaireLine } from "react-icons/ri";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const SupportPage = () => {
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);
  const [isTicketPopupOpen, setIsTicketPopupOpen] = useState(false);
  const [isThankYouPopupOpen, setIsThankYouPopupOpen] = useState(false);

  useEffect(() => {
    const sidebarItem = document.querySelector('[data-sidebar-item="Support"]');
    if (sidebarItem) {
      (sidebarItem as HTMLElement).click();
    }
  }, []);

  const handleChatClick = () => {
    setIsChatPopupOpen(true);
  };

  const handleCloseChatPopup = () => {
    setIsChatPopupOpen(false);
  };

  const handleTicketClick = () => {
    setIsTicketPopupOpen(true);
  };

  const handleCloseTicketPopup = () => {
    setIsTicketPopupOpen(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsThankYouPopupOpen(true);
  };

 
  return (
    <div className="flex h-full bg-white">
      <CmsSidebar isOpen={true} />
      <div className={`flex-1 p-8 overflow-auto scrollbar-none bg-white ${isChatPopupOpen || isTicketPopupOpen || isThankYouPopupOpen ? 'opacity-50' : ''}`}>
        <div className="flex justify-between items-center mb-4 p-4 rounded-md sticky top-0 bg-white z-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <MessageCircleQuestion className="mr-2 h-6 w-6 text-black" />
              <span>Support</span>
            </h2>
            <div className="text-black ml-4 font-medium">
              Support <span className="text-black"></span>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 h-[calc(100vh-112px)] overflow-y-auto scroll">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-6xl mx-auto">
            <h1 className="text-xl font-semibold mb-2">Need Help with Your Avatar?</h1>
            <div className="mb-6">
              <p className="text-black text-sm">
                Get assistant with issues, find answers to common questions, or report a problem.
              </p>
            </div>
            <hr className="border-t-2 border-secondarycolor mb-5" />
            <div className="mb-6 flex items-center justify-between">
              <div className="flex flex-col w-1/2">
                <h2 className="text-base font-semibold flex items-center">
                  <Mail className="mr-2 h-6 w-6 text-secondarycolor" />
                  <span>Email Support</span>
                </h2>
                <p className="text-gray-400 text-sm">Send us a detailed email, and we&;ll get back to you within 24 hours.</p>
              </div>
              <button className="bg-secondarycolor text-white py-2 px-14 rounded-md">Contact by Email</button>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex flex-col w-1/2">
                <h2 className="text-base font-semibold flex items-center">
                  <MdOutlineQuestionAnswer className="mr-2 h-6 w-6 text-secondarycolor" />
                  <span>Chat Support</span>
                </h2>
                <p className="text-gray-400 text-sm">Connect with our support team in real-time.</p>
              </div>
              <button className="bg-secondarycolor text-white py-2 px-20 rounded-md" onClick={handleChatClick}>
                Start Chat
              </button>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex flex-col w-1/2">
                <h2 className="text-base font-semibold flex items-center">
                  <FaHeadset className="mr-2 h-5 w-5 text-secondarycolor" />
                  <span>Phone Support</span>
                </h2>
                <p className="text-gray-400 text-sm">Connect with our support team in real-time.</p>
              </div>
              <button className="bg-secondarycolor text-white py-2 px-24 rounded-md">Call us</button>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex flex-col w-1/2">
                <h2 className="text-base font-semibold flex items-center">
                  <RiQuestionnaireLine className="mr-2 h-6 w-6 text-secondarycolor" />
                  <span>FAQ Section</span>
                </h2>
                <p className="text-gray-400 text-sm">Quick Answers</p>
              </div>
              <div className="flex flex-col items-center">
                
                <button className="text-secondarycolor py-2 px-4 underline" onClick={() => window.location.href = '/faq'}>
                  Click to read More
                </button>
              </div>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex flex-col w-1/2">
                <h2 className="text-lg font-semibold mb-4">Track or Report an Issue</h2>
              </div>
              <div className="flex flex-col items-center">
                <button className="text-secondarycolor py-2 px-4 ml-20 underline" onClick={handleTicketClick}>Ticket History</button>
              </div>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <select
                    id="issue-type"
                    className="w-full border border-secondarycolor rounded-md p-2 text-gray-500"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Issue Type
                    </option>
                    <option value="technical">Technical Issue</option>
                    <option value="billing">Billing Issue</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div className="flex-1">
                  <div className="w-full h-9 border-dashed border-2 border-secondarycolor rounded-md flex items-center justify-center gap-4">
                    <input type="file" className="hidden" id="upload-image" />
                    <label htmlFor="upload-image" className="cursor-pointer flex items-center gap-4">
                      <Image className="h-5 w-5 text-black" />
                      <span className="font-normal text-sm">Upload Image of the issue</span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="issue-description" className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  id="issue-description"
                  className="w-full border border-gray-300 rounded-md p-2"
                  rows={4}
                  placeholder="Please enter description for issue"
                ></textarea>
              </div>
              <div className="col-span-2 flex justify-end space-x-4 mt-8">
                <button type="submit" className="px-10 py-2 bg-secondarycolor text-white rounded-md">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isChatPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-300 p-6 rounded-md shadow-md w-96 h-36">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Start the chat with</h2>
              <button onClick={handleCloseChatPopup} className="text-gray-500 hover:text-gray-700">&times;</button>
            </div>
            <hr className="border-t-2 border-secondarycolor mb-4" />
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col items-center">
                <FaWhatsapp className="h-6 w-6 text-green-500" />
                <span>WhatsApp</span>
              </div>
              <div className="flex flex-col items-center">
                <FaTelegramPlane className="h-6 w-6 text-blue-500" />
                <span>Telegram</span>
              </div>
              <div className="flex flex-col items-center">
                <MdOutlineQuestionAnswer className="h-6 w-6 text-black" />
                <span>Support Chat</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {isTicketPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-neutral-400 p-6 rounded-md shadow-md w-[50rem]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-white">Ticket History</h2>
              <button onClick={handleCloseTicketPopup} className="text-white text-2xl">&times;</button>
            </div>
            <div className="mb-4 flex items-center space-x-2">
              <div className="relative flex-1">
                <input type="text" placeholder="Search by Ticket ID or Issue Type" className="w-full border border-gray-500 bg-neutral-300 rounded-md p-2 pr-10" />
                
                <Search className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white w-4 h-4" />
                
              </div>
              
              <button className="px-10 py-2 border border-white text-white rounded-md flex items-center gap-2">
                <Pencil className="w-4 h-4" />
                Filter
              </button>
            </div>
            <table className="w-full border-collapse text-sm text-white">
              <thead>
                <tr className="space-x-4">
                  <th className="p-2 text-left">Ticket ID</th>
                  <th className="p-2 text-left">Issue Type</th>
                  <th className="p-2 text-left">Date and Time</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>

              <tr className="space-x-4">
                  <td className="p-2">#34234212</td>
                  <td className="p-2">Avatar Issue</td>
                  <td className="p-2">3rd Jan 2025</td>
                  <td className="p-2">Open</td>
                </tr>
              
                <tr className="space-x-4">
                  <td className="p-2">#34234212</td>
                  <td className="p-2">Avatar Issue</td>
                  <td className="p-2">3rd Jan 2025</td>
                  <td className="p-2">In-Progress</td>
                </tr>

                <tr className="space-x-4">
                  <td className="p-2">#34234212</td>
                  <td className="p-2">Avatar Issue</td>
                  <td className="p-2">3rd Jan 2025</td>
                  <td className="p-2">Resolved</td>
                </tr>

                <tr className="space-x-4">
                  <td className="p-2">#34234212</td>
                  <td className="p-2">Avatar Issue</td>
                  <td className="p-2">3rd Jan 2025</td>
                  <td className="p-2">Closed</td>
                </tr>

                <tr className="space-x-4">
                  <td className="p-2">#34234212</td>
                  <td className="p-2">Avatar Issue</td>
                  <td className="p-2">3rd Jan 2025</td>
                  <td className="p-2">Open</td>
                </tr>

                <tr className="space-x-4">
                  <td className="p-2">#34234212</td>
                  <td className="p-2">Avatar Issue</td>
                  <td className="p-2">3rd Jan 2025</td>
                  <td className="p-2">In-Progress</td>
                </tr>

                <tr className="space-x-4">
                  <td className="p-2">#34234212</td>
                  <td className="p-2">Avatar Issue</td>
                  <td className="p-2">3rd Jan 2025</td>
                  <td className="p-2">Resolved</td>
                </tr>

                <tr className="space-x-4">
                  <td className="p-2">#34234212</td>
                  <td className="p-2">Avatar Issue</td>
                  <td className="p-2">3rd Jan 2025</td>
                  <td className="p-2">Closed</td>
                </tr>

               
               
              </tbody>
            </table>
          </div>
        </div>
      )}
      {isThankYouPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-neutral-400 p-6 rounded-lg shadow-md w-80 flex flex-col items-center justify-center">
            <IoMdCheckmarkCircleOutline className="text-white h-20 w-20 mb-2" />
            <h2 className="text-lg font-semibold text-white">Ticket Submitted</h2>
            <div className="text-white text-sm mt-6">
              <span className="mr-10 text-sm">Time</span>
              <span className="ml-10 text-sm">12:30 PM 4th Jan 2025</span>
            </div>
            <div className="text-white text-sm mt-2">
              <span className="mr-10 ">Ticket ID</span>
              <span className="ml-10 ">ID12345574324324</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportPage;