import React, { useRef, useEffect, useState, KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, Home, Building2, Pencil, Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ProgressTracker } from "@/components/Progresstracker";
import { AddressDialog } from "@/components/Addressdialog";

interface ShoppingPopupProps {
  setIsMobileShoppingOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ShoppingItem {
  name: string;
  category: string;
  price: number;
  image: string;
}

interface Address {
  id: string;
  type: "Home" | "Work";
  details: string[];
}

const Shoppingpopup: React.FC<ShoppingPopupProps> = ({
  setIsMobileShoppingOpen,
}) => {
  const router = useRouter();
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [categories, setCategories] = useState<string[]>(["Books"]);
  const [inputValue, setInputValue] = useState("");
  const [selectedPurchaseItem, setSelectedPurchaseItem] = useState<ShoppingItem | null>(null);
  const [selectedWishlistItem, setSelectedWishlistItem] =
    useState<ShoppingItem | null>(null);
  const [orderAddress, setOrderAddress] = useState(
    "123 Main St, Apt 4B, New York, NY 10001"
  );
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      type: "Home",
      details: [
        "RKL Anand phase 1, Runwal Skylark,",
        "704, Floor 7th RKL Anand",
        "Apartment, Pimpri Chinchwad,",
        "Maharashtra",
      ],
    },
    {
      id: "2",
      type: "Work",
      details: ["Office address"],
    },
  ]);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false); 
   const steps = [
     { label: "Shipped", status: "completed" as const },
     { label: "In Transit", status: "completed" as const },
     { label: "Arrived at nearby Location", status: "current" as const },
     { label: "Out for delivery", status: "upcoming" as const },
     { label: "Delivered", status: "upcoming" as const },
   ];

  const handleAddCategory = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      if (!categories.includes(inputValue.trim())) {
        setCategories([...categories, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const handleRemoveCategory = (category: string) => {
    setCategories(categories.filter((c) => c !== category));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (
          popupRef.current &&
          !popupRef.current.contains(event.target as Node) &&
          !document
            .querySelector(".dialog-content")
            ?.contains(event.target as Node)
        ) {
          setIsDialogOpen(false);
          setEditingAddress(null);
          setIsMobileShoppingOpen(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsMobileShoppingOpen , isDialogOpen]);

   const handleAddAddress = () => {
     const newAddress: Address = {
       id: Date.now().toString(),
       type: "Home",
       details: ["New address"],
     };
     setAddresses([...addresses, newAddress]);
     setEditingAddress(newAddress);
     setIsDialogOpen(true);
     
   };

   const handleEditAddress = (address: Address) => {
     setEditingAddress(address);
     setIsDialogOpen(true);
   };

   const handleSaveAddress = (editedAddress: Address) => {
     setAddresses(
       addresses.map((addr) =>
         addr.id === editedAddress.id ? editedAddress : addr
       )
     );
     setEditingAddress(null);
     setIsDialogOpen(false);
   };

   const handleRemoveAddress = (id: string) => {
     setAddresses(addresses.filter((addr) => addr.id !== id));
  };
  

  const wishlistItems: ShoppingItem[] = [
    {
      name: "Nike Jordan",
      category: "Nike Sneakers",
      price: 200,
      image:
        "/nike-shoes.png",
    },
    {
      name: "Nike Jordan",
      category: "Nike Sneakers",
      price: 200,
      image:
        "/nike-shoes.png",
    },
    {
      name: "Nike Jordan",
      category: "Nike Sneakers",
      price: 200,
      image:
        "/nike-shoes.png",
    },
  ];

  const pastPurchases: ShoppingItem[] = [
    {
      name: "Nike Jordan",
      category: "Nike Sneakers",
      price: 200,
      image:
        "/nike.svg",
    },
    {
      name: "Nike Jordan",
      category: "Nike Sneakers",
      price: 300,
      image:
        "/nike.svg",
    },
  ];

   const handlePurchaseItemClick = (item: ShoppingItem) => {
     setSelectedPurchaseItem(item);
  };

  const handleWishlistItemClick = (item: ShoppingItem) => {
    setSelectedWishlistItem(item);
  };
  
  const closeProductPopup = () => {
    setSelectedWishlistItem(null);
  };

   const closeOrderPopup = () => {
     setSelectedPurchaseItem(null);
   };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-xl px-4 py-6 max-w-[24rem] w-full relative h-[40rem] overflow-y-auto scroll"
      >
        <div className="border-b border-secondarycolor pb-4 flex items-center">
          <div>
            <h1 className="text-lg font-semibold">Shopping Preferences</h1>
            <h2 className="text-sm font-normal pt-1">
              Manage your shopping preference and history easily.
            </h2>
          </div>
          <div>
            <button
              className="flex items-center justify-center gap-2 w-20 h-9 border border-black rounded-md"
              onClick={() => router.push("/cart")}
            >
              <ShoppingBag />
              <span className="text-sm font-normal">Cart</span>
            </button>
          </div>
        </div>
        <div className="space-y-4 pt-4">
          {/* Title Info */}
          <div>
            <h1 className="text-sm font-semibold">Add Catagories</h1>
            <div className="flex flex-wrap gap-2 my-3">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={`flex items-center gap-1 rounded-md bg-inputbackground ${
                    category === "Books" ? "w-24 h-10" : "w-20 h-8"
                  }`}
                >
                  {category}
                  <button
                    onClick={() => handleRemoveCategory(category)}
                    className="ml-1 hover:bg-muted rounded-full"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove {category} category</span>
                  </button>
                </Badge>
              ))}
            </div>
            <Input
              placeholder="Categories"
              className="w-full py-2 border border-borderColor1 outline-none focus:!outline-none focus:ring-0"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleAddCategory}
            />
          </div>
          {/* Wishlist Section */}
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-sm font-semibold">Wishlist</h1>
              <Link href="#">
                {" "}
                <span className="underline text-xs text-secondarycolor">
                  View All
                </span>
              </Link>
            </div>
            <div className="space-y-2 mt-3 h-44 overflow-y-scroll">
              {wishlistItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                  onClick={() => handleWishlistItemClick(item)}
                >
                  <div className="flex items-center jus gap-3">
                    <div className="h-14 w-14 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-normal text-sm">{item.name}</h3>
                      <p className="text-xs font-normal">{item.category}</p>
                    </div>
                  </div>
                  <p className="font-semibold text-base">{item.price}$</p>
                </div>
              ))}
              {selectedWishlistItem && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
                  <div className="bg-mediumWhite rounded-lg p-4 max-w-sm w-full h-[41rem] backdrop-blur-sm text-white">
                    <div className="flex items-center justify-between">
                      <h1 className="font-bold text-lg">Product Details</h1>
                      <button
                        onClick={closeProductPopup}
                        className="text-gray-600 hover:text-black"
                      >
                        ✖
                      </button>
                    </div>
                    <div className="space-y-6 mt-4">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-sm">
                          Order Tracking
                        </h3>
                        <div className="px-3">
                          <ProgressTracker steps={steps} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-sm">
                          Default Address
                        </h3>
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-12 h-12 rounded-md bg-inputbackground flex items-center justify-center">
                            <Home color="black" className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-sm">
                                Home
                              </span>
                              <AddressDialog
                                currentAddress={orderAddress}
                                onAddressChange={setOrderAddress}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <h3 className="font-semibold text-sm mt-2">
                        Order details
                      </h3>
                      <div className="space-y-2">
                        <div>
                          <div className="text-[9px] font-semibold">
                            PAYMENT METHOD
                          </div>
                          <div className="mt-1 bg-white text-blackcolor px-3 py-2 rounded-lg font-semibold text-sm">
                            Amazon pay ICICI bank credit card
                            <p className="text-[9px] text-mediumgray2">
                              *3425 VISA | Gaurav Yadav
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-1 text-sm font-semibold">
                          <div>Order ID</div>
                          <div>ID12345574324324</div>
                        </div>
                        <div className="flex items-center justify-between text-sm font-semibold">
                          <div>Total Amount</div>
                          <div className="text-lg">$243</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <h3 className="font-semibold text-sm mt-3">Items</h3>
                      <div className="flex gap-4">
                        <div className="h-32 w-32 rounded-lg overflow-hidden">
                          <Image
                            src={selectedWishlistItem.image}
                            alt={selectedWishlistItem.name}
                            width={120}
                            height={120}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h1 className="font-normal text-sm">
                            {selectedWishlistItem.name}
                          </h1>
                          <p className="text-lg font-semibold">
                            {selectedWishlistItem.price}$
                          </p>
                          <p className="text-xs font-normal">
                            Colour: Black/White/Red
                            <br />
                            Style: FQ1285-003
                          </p>
                          <div className="mt-2 border border-white rounded-md w-20 px-3 py-1.5 text-sm flex items-center justify-center">
                            8UK
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Past Purchase Section */}
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-sm font-semibold">Past Purchases</h1>
              <Link href="#">
                {" "}
                <span className="underline text-xs text-secondarycolor">
                  View All
                </span>
              </Link>
            </div>
            <div className="space-y-2 mt-3 h-28 overflow-y-scroll">
              {pastPurchases.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handlePurchaseItemClick(item)}
                >
                  <div className="flex items-center jus gap-3">
                    <div className="h-14 w-14 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-normal text-sm">{item.name}</h3>
                      <p className="text-xs font-normal">{item.category}</p>
                    </div>
                  </div>
                  <p className="font-semibold text-base">{item.price}$</p>
                </div>
              ))}
              {selectedPurchaseItem && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
                  <div className="bg-mediumWhite rounded-lg p-4 max-w-sm w-full h-[41rem] backdrop-blur-sm text-white">
                    <div className="flex items-center justify-between">
                      <h1 className="font-bold text-lg">Order Details</h1>
                      <button
                        onClick={closeOrderPopup}
                        className="text-gray-600 hover:text-black"
                      >
                        ✖
                      </button>
                    </div>
                    <div className="space-y-6 mt-4">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-sm">
                          Order Tracking
                        </h3>
                        <div className="px-3">
                          <ProgressTracker steps={steps} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-sm">
                          Default Address
                        </h3>
                        <div className="flex items-center gap-3 py-2">
                          <div className="w-12 h-12 rounded-md bg-inputbackground flex items-center justify-center">
                            <Home color="black" className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-sm">
                                Home
                              </span>
                              <AddressDialog
                                currentAddress={orderAddress}
                                onAddressChange={setOrderAddress}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <h3 className="font-semibold text-sm mt-2">
                        Order details
                      </h3>
                      <div className="space-y-2">
                        <div>
                          <div className="text-[9px] font-semibold">
                            PAYMENT METHOD
                          </div>
                          <div className="mt-1 bg-white text-blackcolor px-3 py-2 rounded-lg font-semibold text-sm">
                            Amazon pay ICICI bank credit card
                            <p className="text-[9px] text-mediumgray2">
                              *3425 VISA | Gaurav Yadav
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-1 text-sm font-semibold">
                          <div>Order ID</div>
                          <div>ID12345574324324</div>
                        </div>
                        <div className="flex items-center justify-between text-sm font-semibold">
                          <div>Total Amount</div>
                          <div className="text-lg">$243</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <h3 className="font-semibold text-sm mt-3">Items</h3>
                      <div className="flex gap-4">
                        <div className="h-32 w-32 rounded-lg overflow-hidden">
                          <Image
                            src={selectedPurchaseItem.image}
                            alt={selectedPurchaseItem.name}
                            width={120}
                            height={120}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h1 className="font-normal text-sm">
                            {selectedPurchaseItem.name}
                          </h1>
                          <p className="text-lg font-semibold">
                            {selectedPurchaseItem.price}$
                          </p>
                          <p className="text-xs font-normal">
                            Colour: Black/White/Red
                            <br />
                            Style: FQ1285-003
                          </p>
                          <div className="mt-2 border border-white rounded-md w-20 px-3 py-1.5 text-sm flex items-center justify-center">
                            8UK
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Shipping Address */}
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-semibold">Shipping Address</h1>
                <Badge variant="secondary" className="rounded-full">
                  {addresses.length}
                </Badge>
              </div>
              <span
                onClick={handleAddAddress}
                className="text-secondarycolor underline text-xs"
              >
                Add Address
              </span>
            </div>
            <div className="space-y-4">
              {addresses.map((address) => (
                <Card key={address.id} className="py-4 border-0 shadow-none">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      {address.type === "Home" ? (
                        <div className="w-12 h-12 rounded-md bg-inputbackground flex items-center justify-center">
                          <Home className="h-5 w-5" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-md bg-inputbackground flex items-center justify-center">
                          <Building2 className="h-5 w-5" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-semibold text-base">
                          {address.type}
                        </h3>
                        {address.details.map((line, i) => (
                          <p key={i} className="text-xs font-normal leading-5">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="flex">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditAddress(address)}
                      >
                        <Pencil className="h-4 w-4 text-secondarycolor" />
                        <span className="sr-only">Edit address</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveAddress(address.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-400" />
                        <span className="sr-only">Delete address</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <footer className=" py-2">
          <div className="mx-auto max-w-2xl flex gap-4">
            <Button
              variant="outline"
              className="flex-1 border border-secondarycolor text-secondarycolor h-12"
            >
              Cancel
            </Button>
            <Button className="flex-1 h-12 text-textMedium bg-mediumgray3">
              Save Changes
            </Button>
          </div>
        </footer>
      </div>

      <Dialog
        open={!!editingAddress}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setEditingAddress(null);
          }
        }}
      >
        <DialogContent className="dialog-content">
          <DialogHeader>
            <DialogTitle>
              {editingAddress?.id ? "Edit Address" : "Add Address"}
            </DialogTitle>
          </DialogHeader>
          {editingAddress && (
            <div className="space-y-4 ">
              <div>
                <label
                  htmlFor="addressType"
                  className="block text-sm font-medium"
                >
                  Address Type
                </label>
                <select
                  id="addressType"
                  value={editingAddress.type}
                  onChange={(e) =>
                    setEditingAddress({
                      ...editingAddress,
                      type: e.target.value as "Home" | "Work",
                    })
                  }
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-mediumgray2 focus:!outline-none focus:!ring-0 sm:text-sm rounded-md"
                >
                  <option value="Home">Home</option>
                  <option value="Work">Work</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="addressDetails"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address Details
                </label>
                <textarea
                  id="addressDetails"
                  rows={4}
                  value={editingAddress.details.join("\n")}
                  onChange={(e) =>
                    setEditingAddress({
                      ...editingAddress,
                      details: e.target.value.split("\n"),
                    })
                  }
                  className="mt-1 block w-full border border-mediumgray2 rounded-md shadow-sm py-2 px-3 focus:!outline-none focus:!ring-0 sm:text-sm"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  className="border border-secondarycolor text-secondarycolor"
                  variant="outline"
                  onClick={() => setEditingAddress(null)}
                >
                  Cancel
                </Button>
                <Button onClick={() => handleSaveAddress(editingAddress)}>
                  Save
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Shoppingpopup;
