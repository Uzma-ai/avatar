"use client";
import React, { useEffect, useState, KeyboardEvent } from "react";
import { ShoppingBag, X, Home, Building2, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BrowserSidebar from "@/components/Browsersidebar";
import { motion, AnimatePresence } from "framer-motion";
import { AddressDialog } from "@/components/Addressdialog";
import { ProgressTracker } from "@/components/Progresstracker";

interface ShoppingItem {
  name: string;
  category: string;
  price: number;
  image: string;
}

interface Product {
  name: string;
  category: string;
  price: number;
  image: string;
}

const ShoppingPage = () => {
  
    const [selectedPurchaseItem, setSelectedPurchaseItem] = useState<ShoppingItem | null>(null);
     const [selectedWishlistItem, setSelectedWishlistItem] =
       useState<ShoppingItem | null>(null);
     const [orderAddress, setOrderAddress] = useState(
       "123 Main St, Apt 4B, New York, NY 10001"
     );
  
  const [categories, setCategories] = useState<string[]>(["Books"]);
  const [inputValue, setInputValue] = useState("");
  const [wishlistItems] = useState<Product[]>([
    {
      name: "Nike Jordan",
      category: "Nike Sneakers",
      price: 200,
      image: "/nike-shoes.png",
    },
    {
      name: "Nike Jordan",
      category: "Nike Sneakers",
      price: 200,
      image: "/nike-shoes.png",
    },
    {
      name: "Nike Jordan",
      category: "Nike Sneakers",
      price: 200,
      image: "/nike-shoes.png",
    },
    {
      name: "Nike Jordan",
      category: "Nike Sneakers",
      price: 200,
      image: "/nike-shoes.png",
    },
    {
      name: "Nike Jordan",
      category: "Nike Sneakers",
      price: 200,
      image: "/nike-shoes.png",
    },
    {
      name: "Nike Jordan",
      category: "Nike Sneakers",
      price: 200,
      image: "/nike-shoes.png",
    },
    {
      name: "Nike Jordan",
      category: "Nike Sneakers",
      price: 200,
      image: "/nike-shoes.png",
    },
    {
      name: "Nike Jordan",
      category: "Nike Sneakers",
      price: 200,
      image: "/nike-shoes.png",
    },
  ]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addresses, setAddresses] = useState([
    
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
      details: [ "RKL Anand phase 1, Runwal Skylark,",
        "704, Floor 7th RKL Anand",
        "Apartment, Pimpri Chinchwad,",
        "Maharashtra",],
    },
  ]);
  const [, setEditingAddress] = useState<{ id: string; type: string; details: string[] } | null>(null);

  useEffect(() => {
    const sidebarItem = document.querySelector('[data-sidebar-item="Shopping"]');
    if (sidebarItem) {
      (sidebarItem as HTMLElement).click();
    }
  }, []);

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

  const handleAddAddress = () => {
    const newAddress = {
      id: Date.now().toString(),
      type: "Home",
      details: ["New address"],
    };
    setAddresses([...addresses, newAddress]);
    setEditingAddress(newAddress);
  };

  const handleEditAddress = (address: { id: string; type: string; details: string[] }) => {
    setEditingAddress(address);
  };

  const handleRemoveAddress = (id: string) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

 

  
 const product = {
   name: "Air Jordan 1 Low",
   description:
     "Shift your game into high gear with the lightest Luka yet. Designed to help you create space through acceleration, the Luka 3 features full-length Cushlon 3.0 foam for a smooth heel-to-toe transition.",
   price: 200,
   color: "Black/White/Red",
   style: "FQ1285-003",
   origin: "Vietnam",
   images: [
     {
       src: "/main-view.svg",
       alt: "Air Jordan 1 Low - Main View",
     },
     {
       src: "/front-view.svg",
       alt: "Air Jordan 1 Low - Front View",
     },
     {
       src: "bottom-view.svg",
       alt: "Air Jordan 1 Low - Bottom View",
     },
     {
       src: "top-view.svg",
       alt: "Air Jordan 1 Low - Top View",
     },
   ],
 };

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
      price: 200,
      image:
        "/nike.svg",
    },
  ];

  const steps = [
    { label: "Shipped", status: "completed" as const },
    { label: "In Transit", status: "completed" as const },
    { label: "Arrived at nearby Location", status: "current" as const },
    { label: "Out for delivery", status: "upcoming" as const },
    { label: "Delivered", status: "upcoming" as const },
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
    <div className="flex h-full bg-white">
      <BrowserSidebar />
      <div className="flex-1 h-full px-2 overflow-hidden">
        <div className="flex justify-between items-center h-28 py-4 px-7 rounded-md">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <ShoppingBag className="mr-2 h-6 w-6 text-black" />
              <span>Shopping</span>
            </h2>
            <div className="text-black ml-4">Shopping</div>
          </div>

          <Link href="/cart-cms">
            <button className="px-6 py-2 border border-black text-black rounded-md flex items-center">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Cart
            </button>
          </Link>
        </div>

        <div className="bg-gray-100 py-7 px-7 h-[calc(100vh-112px)] overflow-y-auto scroll">
          <div className="bg-white rounded-lg shadow-md p-8 mx-auto">
            <h1 className="text-2xl font-bold mb-2">Shopping Preferences</h1>
            <p className="text-gray-600 mb-4">
              Manage your shopping preferences and history easily.
            </p>
            <hr className="border-t-2 border-secondarycolor mb-6" />

            <div className="flex justify-between">
              <div className="w-1/2 pr-4">
                <h1 className="text-base font-semibold">Add Categories</h1>
                <div className="flex flex-wrap gap-2 my-3">
                  {categories.map((category, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="flex items-center gap-1 w-20 h-8 rounded-md bg-inputbackground text-sm"
                    >
                      {category}
                      <button
                        onClick={() => handleRemoveCategory(category)}
                        className="ml-1 hover:bg-muted rounded-full"
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">
                          Remove {category} category
                        </span>
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

                <div className="flex items-center justify-between mt-16">
                  <h1 className="text-sm font-semibold">Wishlist</h1>
                  <Link href="#">
                    <span className="underline text-xs text-secondarycolor mr-2">
                      View All
                    </span>
                  </Link>
                </div>
                <div className="space-y-2 mt-3 h-60 overflow-y-auto custom-scrollbar mr-2">
                  {wishlistItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between cursor-pointer"
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
                      <div className="flex items-center">
                        <p className="font-semibold text-base">{item.price}$</p>
                        {index < 4 && (
                          <button className="ml-2 hover:bg-muted rounded-full">
                            <X className="h-4 w-4 text-red-500" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  {selectedWishlistItem && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2"
                      >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="bg-mediumWhite p-4 max-w-[43rem] w-full h-[28rem] rounded-2xl backdrop-blur-sm text-white"
                        >
                          <div className="flex items-center justify-between">
                            <h1 className="font-bold text-lg">
                              Product Details
                            </h1>
                            <button
                              onClick={closeProductPopup}
                              className="text-white"
                            >
                              ✖
                            </button>
                          </div>
                          <div className="grid gap-6 sm:grid-cols-2">
                            <div className="flex gap-4">
                              <div className="flex flex-col gap-2 mt-20">
                                {product.images.map((image, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative min-w-[48px] overflow-hidden ${
                                      selectedImage === index
                                        ? "transform scale-110"
                                        : ""
                                    }`}
                                  >
                                    <Image
                                      src={image.src || "/placeholder.svg"}
                                      alt={image.alt}
                                      width={45}
                                      height={45}
                                      className="aspect-square object-cover"
                                    />
                                  </button>
                                ))}
                              </div>
                              <div className="overflow-hidden w-[400px] h-[250px] mt-20">
                                <Image
                                  src={
                                    product.images[selectedImage].src ||
                                    "/placeholder.svg"
                                  }
                                  alt={product.images[selectedImage].alt}
                                  width={400}
                                  height={400}
                                  className="aspect-square object-cover"
                                />
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div>
                                <h2 className="text-2xl font-bold tracking-tight text-secondarycolor">
                                  Air Jordan 1 Low
                                </h2>
                                <p className="text-xs mt-2 text-white">
                                  Shift your game into high gear with the
                                  lightest Luka yet. Designed to help you create
                                  space through acceleration, the Luka 3
                                  features full-length Cushlon 3.0 foam for a
                                  smooth heel-to-toe transition.
                                </p>
                              </div>
                              <div>
                                <div className="flex items-center text-xs text-white gap-1">
                                  <span className="flex items-center">
                                    <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                    Colour Shown:
                                  </span>
                                  <span>Black/White/Red</span>
                                </div>
                                <div className="flex items-center text-xs text-white gap-1">
                                  <span className="flex items-center">
                                    <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                    Style:
                                  </span>
                                  <span>FO1285-003</span>
                                </div>
                                <div className="flex items-center text-xs text-white gap-1">
                                  <span className="flex items-center">
                                    <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                    Country/Region of Origin:
                                  </span>
                                  <span>Vietnam</span>
                                </div>
                              </div>
                              <div>
                                <div className="text-xl font-semibold text-white">
                                  MRP: 200$
                                </div>
                                <div className="text-xs text-white">
                                  Inclusive of all taxes
                                </div>
                                <div className="text-xs text-white">
                                  (Also includes all applicable duties)
                                </div>
                              </div>
                              <div className="space-y-4 pt-2 text-white">
                                <div>
                                  <div className="text-xs font-medium mb-2">
                                    Size Selected
                                  </div>
                                  <button className="h-8 px-7 text-xs rounded border">
                                    8UK
                                  </button>
                                </div>

                                <button className="w-full h-9 bg-secondarycolor text-white rounded-md transition-colors">
                                  Add to cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              </div>

              <div className="w-1/2 pl-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold">Shipping Address</h1>
                  <span
                    onClick={handleAddAddress}
                    className="text-secondarycolor underline text-xs"
                  >
                    Add Address
                  </span>
                </div>
                <div className="space-y-4 mt-3">
                  {addresses.map((address) => (
                    <Card
                      key={address.id}
                      className="py-4 border-0 shadow-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-start gap-4">
                          {address.type === "Home" ? (
                            <div className="w-12 h-8 lg:h-12 rounded-md bg-inputbackground flex items-center justify-center">
                              <Home className="md:h-4 lg:h-5 md:w-4 lg:w-5" />
                            </div>
                          ) : (
                            <div className="w-12 h-8 lg:h-12 rounded-md bg-inputbackground flex items-center justify-center">
                              <Building2 className="md:h-4 lg:h-5 md:w-4 lg:w-5" />
                            </div>
                          )}
                          <div>
                            <h3 className="font-semibold text-base">
                              {address.type}
                            </h3>
                            {address.details.map((line, i) => (
                              <p
                                key={i}
                                className="text-[10px] lg:text-xs font-normal leading-5"
                              >
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
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h1 className="text-base font-semibold">Past Purchases</h1>
                    <Link href="#">
                      <span className="underline text-xs text-secondarycolor mr-1">
                        View All
                      </span>
                    </Link>
                  </div>
                  <div className=" mt-3 h-36 overflow-y-auto custom-scrollbar">
                    {pastPurchases.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => handlePurchaseItemClick(item)}
                      >
                        <div className="flex items-center gap-3">
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
                            <p className="text-xs font-normal">
                              {item.category}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p className="font-semibold text-base">
                            {item.price}$
                          </p>
                        </div>
                      </div>
                    ))}

                    {selectedPurchaseItem && (
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2"
                        >
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="bg-mediumWhite rounded-xl px-6 py-6 max-w-[40rem] w-full h-[42rem] backdrop-blur-sm text-white"
                          >
                            <div className="flex items-center justify-between">
                              <h1 className="font-bold text-xl text-blackcolor">
                                Order Details
                              </h1>
                              <button
                                onClick={closeOrderPopup}
                                className="text-gray-600 hover:text-black"
                              >
                                ✖
                              </button>
                            </div>
                            <div className="space-y-6 mt-4">
                              <div className="space-y-4">
                                <h3 className="font-semibold text-xs text-blackcolor">
                                  Order Tracking
                                </h3>
                                <div className="px-3">
                                  <ProgressTracker steps={steps} />
                                </div>
                              </div>
                              <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                  <h3 className="font-semibold text-sm text-blackcolor">
                                    Default Address
                                  </h3>
                                  <AddressDialog
                                    currentAddress={orderAddress}
                                    onAddressChange={setOrderAddress}
                                  />
                                </div>
                                <div className="flex items-center gap-3 py-2">
                                  <div className="w-12 h-12 rounded-md bg-inputbackground flex items-center justify-center">
                                    <Home color="black" className="h-5 w-5" />
                                  </div>
                                  <div className="flex-1">
                                    <span className="font-semibold text-sm text-blackcolor">
                                      Home
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-5">
                              <h3 className="font-semibold text-sm mt-2 text-blackcolor">
                                Order details
                              </h3>
                              <div className="space-y-2">
                                <div>
                                  <div className="text-[9px] font-semibold text-blackcolor">
                                    PAYMENT METHOD
                                  </div>
                                  <div className="mt-1 bg-white text-blackcolor px-3 py-2 rounded-lg font-semibold text-sm">
                                    Amazon pay ICICI bank credit card
                                    <p className="text-[9px] text-mediumgray2">
                                      *3425 VISA | Gaurav Yadav
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between pt-1 text-sm font-semibold text-blackcolor">
                                  <div>Order ID</div>
                                  <div>ID12345574324324</div>
                                </div>
                                <div className="flex items-center justify-between text-sm font-semibold text-blackcolor">
                                  <div>Total Amount</div>
                                  <div className="text-lg">$243</div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-5">
                              <h3 className="font-semibold text-sm mt-3 text-blackcolor">
                                Items
                              </h3>
                              <div className="flex gap-4">
                                <div className="h-32 w-32 rounded-lg overflow-hidden ">
                                  <Image
                                    src={selectedPurchaseItem.image}
                                    alt={selectedPurchaseItem.name}
                                    width={120}
                                    height={120}
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h1 className="font-normal text-sm text-blackcolor">
                                    {selectedPurchaseItem.name}
                                  </h1>
                                  <p className="text-lg font-semibold text-blackcolor">
                                    {selectedPurchaseItem.price}$
                                  </p>
                                  <p className="text-xs font-normal text-blackcolor">
                                    Colour: Black/White/Red
                                    <br />
                                    Style: FQ1285-003
                                  </p>
                                  <div className="mt-2 border border-blackcolor text-blackcolor rounded-md w-20 px-3 py-1.5 text-sm flex items-center justify-center">
                                    8UK
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                  <div className="flex justify-end mt-10 gap-4">
                    <button className="w-40 py-2 border border-secondarycolor text-secondarycolor rounded-md">
                      Cancel
                    </button>
                    <button className="w-40 py-2 bg-neutral-300 text-neutral-400 rounded-md">
                      Save Changes
                    </button>
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

export default ShoppingPage;