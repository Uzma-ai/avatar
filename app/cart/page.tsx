"use client";

import { useState } from "react";
import { MoveLeft, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import type { CartItem, WishlistItem } from "@/types/cart";
import { useRouter } from "next/navigation";

export default function Cart() {
    const router = useRouter();
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
      price: 400,
      image: "/nike.svg",
    },
    {
      id: "3",
      name: "Nike Jordan",
      type: "Nike Sneakers",
      price: 500,
      image: "/nike.svg",
    },
    {
      id: "4",
      name: "Nike Jordan",
      type: "Nike Sneakers",
      price: 300,
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
      <>
        <div className="max-w-3xl mx-auto bg-primarycolor min-h-screen md:hidden">
          {/* Header */}
          <header className="p-4">
            <div className="flex items-center justify-center relative border-b pb-4 border-secondarycolor">
              <span className="absolute left-0" onClick={() => router.back()}>
                <MoveLeft className="h-7 w-7" />
              </span>

              <div className="flex items-center justify-center gap-1">
                <ShoppingCart />
                <h1 className="text-lg font-semibold">Cart</h1>
              </div>
            </div>
          </header>

          <div className="px-4 space-y-4">
            {/* Proceed to buy button */}
            <Button
              className="w-full bg-secondarycolor text-white h-12"
              onClick={() => router.push("/cart/payment-method")}
            >
              Proceed to buy ({cartItems.length} item
              {cartItems.length !== 1 ? "s" : ""})
            </Button>

            {/* Search bar */}
            <div className="relative">
              <Input
                type="search"
                placeholder="Search items in cart"
                className="w-full pl-4 pr-10 py-5 border border-borderColor1 rounded-md focus:!outline-none focus:!ring-0"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Items section */}
            {cartItems.length > 0 && (
              <div>
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
                        className="flex-1 border border-secondarycolor text-secondarycolor py-5"
                        onClick={() => moveToWishlist(item)}
                      >
                        Move to wishlist
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-secondarycolor text-secondarycolor py-5"
                        onClick={() => deleteFromCart(item.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-secondarycolor text-secondarycolor py-5"
                      >
                        Share
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Order summary */}
            {cartItems.length > 0 && (
              <div className="space-y-2">
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
                <div className="flex justify-between font-semibold text-lg py-2 border-b border-secondarycolor">
                  <span>Order Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            )}

            {/* Wishlist */}
            {wishlistItems.length > 0 && (
              <div>
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
      </>
    );
}
 