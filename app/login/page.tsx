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
      <div className="relative flex h-screen overflow-hidden lg:bg-primarycolor text-black">
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
          <div className="lg:w-2/3 w-full h-screen flex items-center justify-center transition-all duration-300 bg-primarycolor">
            <div className="w-full px-4 md:w-3/4 h-4/6 space-y-8 xl:px-12 ">
              <div className="text-center">
                <h1 className="text-secondarycolor text-2xl md:text-4xl font-medium tracking-wide">
                  Welcome to Avatar
                </h1>
                <p className="text-xs sm:text-base mt-2">
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
                              <legend className="text-sm font-medium">
                                Email or Username
                              </legend>
                              <Input
                                type="email"
                                placeholder="Please enter email address or username"
                                className="py-4 border-none focus:!border-none focus:!ring-0 focus:!outline-none shadow-none"
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
                              <legend className="text-sm font-medium">
                                Password
                              </legend>
                              <div className="relative">
                                <Input
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Please enter password"
                                  className="py-4 border-none focus:!border-none focus:!ring-0 focus:!outline-none shadow-none"
                                  {...field}
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <EyeOffIcon className="h-4 w-4" />
                                  ) : (
                                    <EyeIcon className="h-4 w-4" />
                                  )}
                                </Button>
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
                      Login
                    </Button>
                  </form>
                </Form>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don&apos;t have an account?{" "}
                    <a href="#" className="text-secondarycolor hover:underline">
                      Sign up
                    </a>
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-secondarycolor" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">or</span>
                  </div>
                </div>

                <div className="space-y-3">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
