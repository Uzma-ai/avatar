"use client";

import { MoveLeft, Home, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Address {
  type: string;
  line1: string;
  line2: string;
  line3: string;
  state: string;
}

export default function Payment() {
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
      <div className="max-w-3xl mx-auto bg-primarycolor min-h-screen md:hidden">
        <header className="p-4">
          <div className="flex items-center justify-center relative border-b pb-4 border-secondarycolor">
            <span className="absolute left-0" onClick={() => router.back()}>
              <MoveLeft className="h-7 w-7" />
            </span>
            <div className="flex items-center justify-center gap-1">
              <h1 className="text-lg font-semibold">Payment Method</h1>
            </div>
          </div>
        </header>
        <div className="px-4 space-y-4 py-4">
          <div className="py-1 border-b border-secondarycolor">
            <div className="flex justify-between items-start mb-3">
              <h2 className="font-semibold text-sm">Shipping Address</h2>
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
                  <Pencil className="h-4 w-4 text-secondarycolor" />
                </Button>
              </div>
            )}
          </div>

          <Button
            className="w-full bg-secondarycolor text-white h-12 text-base"
            onClick={() => router.push("/cart/payment-method/payment-success")}
          >
            Continue
          </Button>

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
                  <div className="p-4 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
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

                  <div className="p-4 bg-white rounded-lg">
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

                  <div className="p-4 bg-white rounded-lg">
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
                <div className="py-2">
                  <p className="text-xs font-medium">MORE WAYS TO PAY</p>
                </div>
                <RadioGroup
                  value={selectedMethod}
                  onValueChange={setSelectedMethod}
                >
                  <div className="p-4 border-b-2 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="emi" id="emi" />
                      <Label htmlFor="emi">EMI</Label>
                    </div>
                  </div>

                  <div className="p-4 border-b-2 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="net-banking" id="net-banking" />
                      <Label htmlFor="net-banking">Net Banking</Label>
                    </div>
                  </div>

                  <div className="p-4 border-b-2 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod">
                        Cash on delivery/Pay on delivery
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
