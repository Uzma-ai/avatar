"use client";
import React, {useState} from "react";
import { ShoppingBag,  } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Home, Pencil } from "lucide-react"

import BrowserSidebar from "@/components/Browsersidebar";

import { useRouter } from "next/navigation";

interface Address {
    type: string;
    line1: string;
    line2: string;
    line3: string;
    state: string;
  }
  





const PaymentCMSPage: React.FC = () => {

     const router = useRouter();
      const [selectedMethod, setSelectedMethod] = useState("credit-card");
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
            <div className="text-black ml-4">Shopping  &gt; Cart  &gt;  Payment</div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 h-[calc(100vh-112px)] overflow-y-auto scroll">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-6xl mx-auto">
          <div className="px-4 space-y-4 py-4">
          <div className="py-1 border-b border-secondarycolor">
            <div className="flex justify-between items-start mb-3">
              <h2 className="font-semibold text-sm">Default Address</h2>
              {!isEditingAddress && (
                <Button
                  variant="ghost"
                  className="text-secondarycolor text-xs h-auto p-0"
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
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setIsEditingAddress(true)}
                >
                  <Pencil className="h-4 w-4 text-secondarycolor mt-6" />
                </Button>
              </div>
            )}
          </div>

         
          <div>
            <h2 className="font-semibold text-base mb-4">
              Select Payment Method
            </h2>

            <div className="space-y-4">
              <div>
                <div className="py-2">
                  <p className="text-xs font-medium">FREQUENTLY USED</p>
                </div>
                <RadioGroup
                  value={selectedMethod}
                  onValueChange={setSelectedMethod}
                >
                  <div className="p-4 bg-white rounded-lg border border-lightblue rounded-md">
                    <div className="flex items-center gap-3 ">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <div className="flex-1">
                        <Label
                          htmlFor="credit-card"
                          className="font-semibold text-base"
                        >
                          Amazon pay ICICI bank credit card
                        </Label>
                        <p className="text-xs font-semibold text-mediumgray2 py-1">
                          **3425 | Gaurav Yadav
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="py-2">
                    <p className="text-xs font-medium">UPI</p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-lightblue rounded-md">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="upi" id="upi" />
                      <div className="flex-1">
                        <Label
                          htmlFor="upi"
                          className="font-semibold text-base"
                        >
                          UPI
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="py-2">
                    <p className="text-xs font-medium">CREDIT & DEBIT CARDS</p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-lightblue rounded-md">
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-0 h-auto font-semibold text-base focus:!outline-none focus:!ring-0"
                    >
                      + Add a new credit or debit card
                    </Button>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <div className="py-2 ">
                  <p className="text-xs font-medium">MORE WAYS TO PAY</p>
                </div>
                <RadioGroup
                  value={selectedMethod}
                  onValueChange={setSelectedMethod}
                >
                  <div className="p-4 border-b-2 bg-white rounded-lg border border-lightblue rounded-md">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="emi" id="emi" />
                      <Label htmlFor="emi">EMI</Label>
                    </div>
                  </div>

                  <div className="p-4 border-b-2 bg-white rounded-lg border border-lightblue rounded-md">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="net-banking" id="net-banking" />
                      <Label htmlFor="net-banking">Net Banking</Label>
                    </div>
                  </div>

                  <div className="p-4 border-b-2 bg-white rounded-lg border border-lightblue rounded-md">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod">
                        Cash on delivery/Pay on delivery
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

            
        <div className="flex justify-end">
            <Button
                className="px-20 bg-secondarycolor text-white h-12 text-base hover:bg-secondarycolor hover:text-white"
                onClick={() => router.push("/payment-success-cms")}
            >
                Continue
            </Button>
        </div>
            </div>
          </div>
        </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCMSPage;