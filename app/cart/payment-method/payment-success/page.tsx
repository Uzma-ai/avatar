"use client";

import { MoveLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PaymentSuccess() {
      const router = useRouter();
  return (
    <>
      {" "}
      <div className="max-w-3xl mx-auto bg-primarycolor min-h-screen relative md:hidden">
        <header className="p-4">
          <div className="flex items-center justify-center relative border-b pb-4 border-secondarycolor">
            <span className="absolute left-0" onClick={() => router.back()}>
              <MoveLeft className="h-7 w-7" />
            </span>
            <div className="flex items-center justify-center gap-1">
              <h1 className="text-lg font-semibold">Payment Successful</h1>
            </div>
          </div>
        </header>

        <div className="py-4 px-3 flex flex-col items-center ">
          <div className="my-8">
            <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-2">Payment Successful</h2>
          <p className="font-semibold text-sm text-center mb-8">
            Your Invoice has been mailed to your registered email
          </p>

          <div className="w-full p-4 space-y-1">
            <h3 className="text-base font-semibold uppercase">Order details</h3>

            <div className="space-y-2">
              <div>
                <p className="text-[9px] font-medium mb-1">PAYMENT METHOD</p>
                <div className="font-semibold text-base bg-white rounded-lg p-4">
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
          </div>

          <Button
            className="w-11/12 bg-secondarycolor text-white h-12 absolute bottom-2"
            onClick={() => router.push("/cart/payment-method")}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </>
  );
}
