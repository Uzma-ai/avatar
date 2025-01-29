"use client";
import React, {useState } from "react";
import { ShoppingBag, Search } from "lucide-react";

import BrowserSidebar from "@/components/Browsersidebar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

interface CartItem {
  id: string;
  name: string;
  price: number;
  color: string;
  style: string;
  size: string;
  image: string;
}

interface WishlistItem {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
}

const CartCMSPage: React.FC = () => {
  
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Nike Jordan",
      price: 200,
      color: "Black/White/Red",
      style: "FQ1285-003",
      size: "8UK",
      image: "/nike.svg",
    },
  ]);

  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: "2",
      name: "Nike Jordan",
      type: "Nike Sneakers",
      price: 200,
      image: "/nike.svg",
    },
    {
      id: "3",
      name: "Nike Jordan",
      type: "Nike Sneakers",
      price: 200,
      image: "/nike.svg",
    },
    {
      id: "4",
      name: "Nike Jordan",
      type: "Nike Sneakers",
      price: 200,
      image: "/nike.svg",
    },
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const delivery = 43;
  const total = subtotal + delivery;

  // Handle moving item to wishlist
  const moveToWishlist = (item: CartItem) => {
    // Remove from cart
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));

    // Add to wishlist
    const wishlistItem: WishlistItem = {
      id: item.id,
      name: item.name,
      type: "Nike Sneakers",
      price: item.price,
      image: item.image,
    };
    setWishlistItems([...wishlistItems, wishlistItem]);
  };

  // Handle moving item to cart
  const moveToCart = (item: WishlistItem) => {
    // Remove from wishlist
    setWishlistItems(
      wishlistItems.filter((wishlistItem) => wishlistItem.id !== item.id)
    );

    // Add to cart
    const cartItem: CartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      color: "Black/White/Red",
      style: "FQ1285-003",
      size: "8UK",
      image: item.image,
    };
    setCartItems([...cartItems, cartItem]);
  };

  // Handle deleting item from cart
  const deleteFromCart = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="flex h-full bg-white">
      <BrowserSidebar />
      <div className="flex-1 h-full px-6 overflow-hidden">
        <div className="flex justify-between items-center h-28 p-4 rounded-md">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <ShoppingBag className="mr-2 h-6 w-6 text-black" />
              <span>Cart</span>
            </h2>
            <div className="text-black ml-4">Shopping &gt; Cart</div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 h-[calc(100vh-112px)] overflow-y-auto scroll">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-6xl mx-auto">
            <div className="relative mb-4">
              <input
                type="text"
                className="w-full px-4 py-2 border border-borderColor1 rounded-md"
                placeholder="Search items in cart"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-borderColor1 h-4 w-4" />
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between mt-10">
              <div className="rounded-lg border border-lightblue w-full lg:max-w-[75%] p-1 mb-6 lg:mb-0">
                <h2 className="font-semibold text-base mb-4">Items</h2>
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white p-4 rounded-lg">
                    <div className="flex gap-4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={154}
                        height={154}
                        className="object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-normal text-sm">{item.name}</h3>
                        <p className="text-xl font-semibold my-1.5">
                          {item.price}$
                        </p>
                        <p className="text-xs text-blackcolor mb-0.5">
                          Colour: {item.color}
                        </p>
                        <p className="text-xs text-blackcolor">
                          Style: {item.style}
                        </p>
                        <Select defaultValue={item.size}>
                          <SelectTrigger className="w-20 mt-2 py-5 rounded-md border border-borderColor1 focus:!outline-none focus:!ring-0">
                            <SelectValue placeholder="Size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="6UK">6UK</SelectItem>
                            <SelectItem value="7UK">7UK</SelectItem>
                            <SelectItem value="8UK">8UK</SelectItem>
                            <SelectItem value="9UK">9UK</SelectItem>
                            <SelectItem value="10UK">10UK</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button
                        variant="outline"
                        className="flex-1 border border-secondarycolor text-secondarycolor py-2 "
                        onClick={() => moveToWishlist(item)}
                      >
                        Move to wishlist
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-secondarycolor text-secondarycolor py-2 px-6 "
                        onClick={() => deleteFromCart(item.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-secondarycolor text-secondarycolor py-2 px-6 "
                      >
                        Share
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Order summary */}
              {cartItems.length > 0 && (
                <div className="space-y-2 mt-1 rounded-lg border border-lightblue w-full lg:max-w-[24%] p-2">
                  <div className="flex justify-between">
                    <span className="text-blackcolor text-sm font-normal">
                      Items:
                    </span>
                    <span className="text-blackcolor text-sm font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blackcolor text-sm font-normal">
                      Delivery:
                    </span>
                    <span className="text-blackcolor text-sm font-semibold">
                      ${delivery.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg py-2">
                    <span>Order Total</span>
                    <span className="">${total.toFixed(2)}</span>
                  </div>
                  <div className="mt-4 lg:mt-6">
                   

                    <Link href="/payment-method-cms">
                   <Button 
                    variant="outline"
                   className="w-full bg-secondarycolor text-white py-2 hover:bg-secondarycolor hover:text-white">
                    Proceed to buy (1 item)
                     
                    </Button>
                   </Link>
                  </div>
                </div>
              )}
            </div>

            <hr className="border-t-1 border-secondarycolor mb-5 mt-6" />

            {/* Wishlist */}
            {wishlistItems.length > 0 && (
              <div className="mt-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-base">Wishlist</h2>
                  <Button
                    variant="link"
                    className="text-secondarycolor underline text-sm p-0"
                  >
                    View All
                  </Button>
                </div>
                <div className="space-y-1">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 py-1">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-normal text-sm">{item.name}</h3>
                        <p className="text-xs text-blackcolor">{item.type}</p>
                      </div>
                      <div className="text-right flex items-center gap-2">
                        <p className="font-semibold text-sm">{item.price}$</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-1 text-secondarycolor border border-secondarycolor py-4 bg-transparent"
                          onClick={() => moveToCart(item)}
                        >
                          Move to cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty state messages */}
            {cartItems.length === 0 && (
              <div className="text-center py-8 text-blackcolor">
                Your cart is empty
              </div>
            )}
            {wishlistItems.length === 0 && (
              <div className="text-center py-8 text-blackcolor">
                Your wishlist is empty
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCMSPage;