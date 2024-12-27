"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

const formSchema = z.object({
  emailOrUsername: z
    .string()
    .min(1, "Email or username is required")
    .max(100, "Email or username is too long"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password is too long"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission here
    console.log(values);
  }

  return (
    <>
      <div className="relative flex h-screen overflow-hidden text-black">
        <div className="flex items-center justify-center w-full h-full">
          <div className="hidden lg:block relative w-1/3 h-full transition-all duration-300">
            <Image
              src="/avatar.png"
              alt="Avatar Image"
              fill
              className="object-cover"
            />
          </div>

          {/* Login Section */}
          <div className="lg:w-2/3 relative w-full h-screen flex items-center justify-center transition-all duration-300  bg-black/50 sm:bg-primarycolor">
            <div className="absolute inset-0 block lg:hidden -z-10">
              <Image
                src="/avatar.png"
                alt="Avatar Background"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full px-4 md:w-3/4 space-y-8 xl:px-12 ">
              <div className="text-center">
                <h1 className="text-whitecolor sm:text-black text-2xl md:text-4xl font-medium tracking-wide">
                  Welcome to <span className="text-secondarycolor">Avatar</span>
                </h1>
                <p className="text-xs sm:text-base text-whitecolor sm:text-black mt-2">
                  Your personalized AI companion is ready to assist you. Log in
                  to begin the conversation!
                </p>
              </div>
              <div className="px-2 xl:px-12 flex flex-col gap-5">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {/* Email or Username Field */}
                    <FormField
                      control={form.control}
                      name="emailOrUsername"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <fieldset className="border border-gray-300 py-0.5 px-1.5 rounded-md">
                              <legend className="text-xs text-legendText sm:text-black font-medium">
                                Email/Username
                              </legend>
                              <Input
                                type="email"
                                placeholder="Please enter email address or username"
                                className="pb-2.5 border-none focus:!border-none focus:!ring-0 focus:!outline-none shadow-none placeholder:text-whitecolor text-whitecolor sm:placeholder:text-gray-500 sm:text-black"
                                {...field}
                              />
                            </fieldset>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Password Field */}
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <fieldset className="border border-gray-300 py-0.5 px-1.5 rounded-md">
                              <legend className="text-xs font-medium text-legendText sm:text-black">
                                Password
                              </legend>
                              <div className="relative">
                                <Input
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Please enter password"
                                  className="pb-2.5 border-none focus:!border-none focus:!ring-0 focus:!outline-none shadow-none placeholder:text-whitecolor text-whitecolor sm:placeholder:text-gray-500 sm:text-black"
                                  {...field}
                                />
                                <span
                                  className="absolute right-2 top-2"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <EyeOffIcon className="h-4 w-4 text-whitecolor sm:text-black" />
                                  ) : (
                                    <EyeIcon className="h-4 w-4 text-whitecolor sm:text-black" />
                                  )}
                                </span>
                              </div>
                            </fieldset>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-secondarycolor hover:bg-secondarycolor py-6"
                    >
                      <Link href="/chat" className="w-full">
                        Login
                      </Link>
                    </Button>
                  </form>
                </Form>

                <div className="text-center">
                  <p className="text-sm text-whitecolor sm:text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link
                      className="text-secondarycolor hover:underline"
                      href="/signup"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-1/2 border-t border-[#5182E399]" />
                    <span className="px-6 text-legendText sm:text-blackcolor">or</span>
                    <div className="w-1/2 border-t border-[#5182E399]" />
                  </div>
                </div>

                <div className="space-y-4 mt-1">
                  <Button
                    variant="outline"
                    className="w-full py-6"
                    onClick={() => console.log("Google login")}
                  >
                    <img
                      src="/google.png"
                      alt="Google"
                      className="w-8 h-8 mr-2"
                    />
                    Continue With Google
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full py-6"
                    onClick={() => console.log("Apple login")}
                  >
                    <img
                      src="/apple.png"
                      alt="Apple"
                      className="w-7 h-8 mr-2"
                    />
                    Continue With Apple
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full py-6"
                    onClick={() => console.log("Email login")}
                  >
                    <img src="/mail.png" alt="Mail" className="w-8 h-8 mr-2" />
                    Continue With Company Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
