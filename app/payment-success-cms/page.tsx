"use client";
import React, {useState} from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrowserSidebar from "@/components/Browsersidebar";
import { ShoppingBag,  } from "lucide-react";
import { useRouter } from "next/navigation";
import {Home, Pencil } from "lucide-react"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Address {
    type: string;
    line1: string;
    line2: string;
    line3: string;
    state: string;
  }
  


const PaymentSuccessCMSPage: React.FC = () => {
   const router = useRouter();
        
         const [isEditingAddress, setIsEditingAddress] = useState(false);
         const [address, setAddress] = useState<Address>({
           type: "Home",
           line1: "R12, Anand phase 1, Runwal Skylark",
           line2: "704, Floor 7th BKL Anand",
           line3: "Apartment, Pimpri Chinchwad",
           state: "Maharashtra",
         });

         const handleAddressChange = (field: keyof Address, value: string) => {
            setAddress((prev) => ({
              ...prev,
              [field]: value,
            }));
          };
        
          const handleSaveAddress = () => {
            setIsEditingAddress(false);
          };


  return (
    <div className="flex h-full bg-white">
      <BrowserSidebar />
      <div className="flex-1 h-full px-6 overflow-hidden">
        <div className="flex justify-between items-center h-28 p-4 rounded-md">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <ShoppingBag className="mr-2 h-6 w-6 text-black" />
              <span>Payment</span>
            </h2>
            <div className="text-black ml-4 flex items-center gap-3">
              <span
                onClick={() => router.push("/shopping")}
                className="cursor-pointer"
              >
                Shopping
              </span>
              <span>&gt;</span>
              <span
                className="cursor-pointer"
                onClick={() => router.push("/cart-cms")}
              >
                Cart
              </span>
              <span>&gt;</span>
              <span
                className="cursor-pointer"
                onClick={() => router.push("/payment-method-cms ")}
              >
                Payment
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 h-[calc(100vh-112px)] overflow-y-auto scroll">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center py-4 px-3">
              <div className="my-8">
                <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Payment Successful
              </h2>
            </div>
            <div className="py-1">
              <div className="flex justify-between items-start mb-3">
                <h2 className="font-semibold text-sm">Default Address</h2>
                {!isEditingAddress && (
                  <Button
                    variant="ghost"
                    className="text-secondarycolor text-xs h-auto p-0 underline"
                    onClick={() => setIsEditingAddress(true)}
                  >
                    Change address
                  </Button>
                )}
              </div>

              {isEditingAddress ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="type">Address Type</Label>
                    <Input
                      id="type"
                      value={address.type}
                      onChange={(e) =>
                        handleAddressChange("type", e.target.value)
                      }
                      className="mt-1 py-5 focus:!outline-none focus:!ring-0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="line1">Address Line 1</Label>
                    <Input
                      id="line1"
                      value={address.line1}
                      onChange={(e) =>
                        handleAddressChange("line1", e.target.value)
                      }
                      className="mt-1 py-5 focus:!outline-none focus:!ring-0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="line2">Address Line 2</Label>
                    <Input
                      id="line2"
                      value={address.line2}
                      onChange={(e) =>
                        handleAddressChange("line2", e.target.value)
                      }
                      className="mt-1 py-5 focus:!outline-none focus:!ring-0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="line3">Address Line 3</Label>
                    <Input
                      id="line3"
                      value={address.line3}
                      onChange={(e) =>
                        handleAddressChange("line3", e.target.value)
                      }
                      className="mt-1 py-5 focus:!outline-none focus:!ring-0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={address.state}
                      onChange={(e) =>
                        handleAddressChange("state", e.target.value)
                      }
                      className="mt-1 py-5 focus:!outline-none focus:!ring-0"
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button
                      className="flex-1 bg-transparent border border-secondarycolor text-secondarycolor py-5"
                      onClick={handleSaveAddress}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent border border-secondarycolor text-secondarycolor py-5"
                      onClick={() => setIsEditingAddress(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-5 pb-3">
                  <div className="w-12 h-12 rounded-md bg-inputbackground flex items-center justify-center">
                    <Home className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base">{address.type}</h3>
                    <p className="text-xs font-normal leading-5">
                      {address.line1},<br />
                      {address.line2},<br />
                      {address.line3},<br />
                      {address.state}
                    </p>
                  </div>
                  <span
                    className="h-8 w-8 cursor-pointer"
                    onClick={() => setIsEditingAddress(true)}
                  >
                    <Pencil className="h-4 w-4 text-secondarycolor mt-6" />
                  </span>
                </div>
              )}
            </div>

            <div className="w-full space-y-1">
              <h3 className="text-sm font-semibold uppercase">Order details</h3>

              <div className="space-y-2 border-b border-skycolor py-3">
                <div>
                  <p className="text-[9px] font-medium mb-1">PAYMENT METHOD</p>
                  <div className="font-semibold text-base bg-white p-4 border border-lightblue rounded-md">
                    Amazon pay ICICI bank credit card
                    <p className="text-xs font-semibold text-mediumgray2 py-1">
                      **3425 | Gaurav Yadav
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-mediumgray2 font-normal text-base">
                    Order ID
                  </p>
                  <p className="font-semibold text-base">ID12345574324324</p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-mediumgray2 font-normal text-base">
                    Total Amount
                  </p>
                  <p className="font-semibold text-base">$243</p>
                </div>
              </div>
              <div className="text-center">
                <Button
                  className="px-20 bg-secondarycolor text-white h-12 hover:bg-secondarycolor hover:text-white mt-3"
                  onClick={() => router.push("/shopping")}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessCMSPage;