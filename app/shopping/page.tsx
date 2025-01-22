"use client";
import React, { useEffect, useState, KeyboardEvent } from "react";
import CmsSidebar from "@/components/cms-sidebar";
import { ShoppingBag, X, Home, Building2, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ShoppingPage = () => {
  const [] = useState(false);
  const [categories, setCategories] = useState<string[]>(["Books"]);
  const [inputValue, setInputValue] = useState("");
  const [wishlistItems] = useState([
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
  const [, setIsDialogOpen] = useState(false);

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
    setIsDialogOpen(true);
  };

  const handleEditAddress = (address: { id: string; type: string; details: string[] }) => {
    setEditingAddress(address);
    setIsDialogOpen(true);
  };


  const handleRemoveAddress = (id: string) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  return (
    <div className="flex h-full bg-white">
      <CmsSidebar isOpen={true} />
      <div className="flex-1 h-full p-8 overflow-hidden">
        <div className="flex justify-between items-center h-28 p-4 rounded-md">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <ShoppingBag className="mr-2 h-6 w-6 text-black" />
              <span>Shopping</span>
            </h2>
            <div className="text-black ml-4">Shopping</div>
          </div>
          <button className="px-6 py-2 border border-black text-black rounded-md flex items-center">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Cart
          </button>
        </div>

        <div className="bg-gray-100 p-4 h-[calc(100vh-112px)] overflow-y-auto scroll">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-6xl mx-auto">
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

             <div className="flex items-center justify-between mt-28">
              <h1 className="text-sm font-semibold">Wishlist</h1>
              <Link href="#">
                <span className="underline text-xs text-secondarycolor mr-2">
                  View All
                </span>
              </Link>
            </div>
            <div className="space-y-2 mt-3 h-60 overflow-y-auto custom-scrollbar mr-2" >
              {wishlistItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
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
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h1 className="text-base font-semibold">Past Purchases</h1>
                    <Link href="#">
                      <span className="underline text-xs text-secondarycolor mr-1">
                        View All
                      </span>
                    </Link>
                  </div>
                  <div className="space-y-2 mt-3 h-36 overflow-y-auto custom-scrollbar">
                    {wishlistItems.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
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
                            <p className="text-xs font-normal">{item.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p className="font-semibold text-base">{item.price}$</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-10">
                    <button className="mr-2 px-10 py-2 border border-secondarycolor text-secondarycolor rounded-md">
                      Cancel
                    </button>
                    <button className="px-4 py-2 bg-neutral-300 text-neutral-400 rounded-md">
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