"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CameraPreview } from "@/components/camera-preview";
import { VideoRecorder } from "@/components/video-recorder";
import Link from "next/link";
import { ChevronLeft, Camera, RotateCcw, Mic } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Signup() {
  const [step, setStep] = useState<
    "intro" | "camera" | "video" | "voice" | "manual-login"
  >("intro");
  // const [, setCapturedImage] = useState<string | null>(null);
  const [, setCapturedVideo] = useState<string | null>(null);
  // const [, setIsCapturing] = useState(false);
  // const videoRef = useRef<HTMLVideoElement>(null);

  const transitionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  // const capturePhoto = () => {
  //   setIsCapturing(true);
  //   setTimeout(() => {
  //     if (videoRef.current) {
  //       const canvas = document.createElement("canvas");
  //       canvas.width = videoRef.current.videoWidth;
  //       canvas.height = videoRef.current.videoHeight;
  //       const ctx = canvas.getContext("2d");
  //       if (ctx) {
  //         ctx.drawImage(videoRef.current, 0, 0);
  //         const imageData = canvas.toDataURL("image/jpeg");
  //         handlePhotoCapture(imageData);
  //       }
  //     }
  //     setIsCapturing(false);
  //   }, 3000);
  // };

  // const handlePhotoCapture = (image: string) => {
  //   setCapturedImage(image);
  //   setStep("video");
  // };

  return (
    <>
      <div className="w-full h-screen overflow-hidden bg-[url('/background.jpeg')] bg-center bg-cover">
        <div className="flex items-center justify-center h-full w-full bg-black/50">
          {/* Intro Popup */}
          {step === "intro" && (
            <motion.div
              variants={transitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex items-center h-full w-full justify-center"
            >
              <div className="w-[90%] sm:w-[400px] md:w-[500px] rounded-lg bg-mediumWhite p-4 sm:p-6 md:p-8 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-6">
                  {/* Avatar Logo */}
                  <div className="text-center">
                    <Image
                      src="/avatar-logo.png"
                      alt="Logo"
                      width={150}
                      height={150}
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h1 className="mb-1 text-lg font-semibold text-whitecolor">
                      Let&apos;s get started
                    </h1>
                    <p className="mb-5 text-sm font-light text-whitecolor">
                      Follow these steps to create your avatar.
                    </p>

                    {/* Steps */}
                    <div className="space-y-2 text-sm text-white">
                      <div className="flex items-center justify-center gap-2">
                        <span className="px-2 py-0.5">1.</span>
                        Take a Picture.
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="px-2 py-0.5">2.</span>
                        Record a Short Video.
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="px-2 py-0.5">3.</span>
                        Provide a Voice Sample.
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => setStep("camera")}
                    className="w-full rounded-sm bg-secondarycolor px-4 py-2.5 text-sm font-normal text-whitecolor transition-color"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Picture Popup */}
          {step === "camera" && (
            <div className="w-full h-full flex items-center justify-center">
              <button
                onClick={() => setStep("intro")}
                className="absolute left-10 sm:left-20 top-10 text-whitecolor bg-secondarycolor rounded-full w-8 h-8 flex items-center justify-center hover:opacity-80"
                aria-label="Go back"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <Link href="/">
                <button className="absolute right-10 sm:right-20 top-10 text-lg underline text-whitecolor hover:underline">
                  Skip
                </button>
              </Link>

              <motion.div
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-[90%] sm:w-[400px] md:w-[500px] rounded-lg bg-mediumWhite p-4 sm:p-6 md:px-8 md:py-4 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="text-center flex flex-col items-center justify-center">
                  <h2 className="mb-1 text-xl font-semibold text-whitecolor">
                    Capture Picture
                  </h2>
                  <p className="mb-6 text-sm text-whitecolor font-light">
                    Take a live photo or upload a clear photo of you
                  </p>
                  <div className="aspect-[4/3] w-3/4 overflow-hidden rounded-lg bg-[#1F1F1F]">
                    <CameraPreview />
                  </div>
                  <button className="mt-4 mb-2 text-sm text-whitecolor underline">
                    <label
                      htmlFor="upload"
                      className="text-sm text-whitecolor underline cursor-pointer"
                    >
                      Upload from device
                    </label>
                    <Input id="upload" type="file" className="hidden" />
                  </button>
                  <div className="flex items-center gap-x-6 mt-3">
                    <button className="w-32 sm:w-40 md:w-56 py-2 text-whitecolor text-xs sm:text-sm bg-transparent border rounded flex items-center justify-center gap-3">
                      <RotateCcw size={20} />
                      Retake
                    </button>
                    <button
                      onClick={() => setStep("video")}
                      className="w-32 sm:w-40 md:w-56 py-2 text-whitecolor text-xs sm:text-sm bg-secondarycolor rounded flex items-center justify-center gap-3"
                    >
                      <Camera size={20} />
                      Take Picture
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Video Popup */}
          {step === "video" && (
            <div className="flex items-center justify-center">
              <button
                onClick={() => setStep("camera")}
                className="absolute z-10 left-5 top-1 sm:left-20 sm:top-10 text-whitecolor bg-secondarycolor rounded-full w-8 h-8 flex items-center justify-center hover:opacity-80"
                aria-label="Go back"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <Link href="/">
                <button className="absolute z-10 right-5 sm:right-20 top-1 sm:top-10 text-lg underline text-whitecolor hover:underline">
                  Skip
                </button>
              </Link>
              <motion.div
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-[90%] sm:w-[400px] md:w-[500px] rounded-lg bg-mediumWhite p-4 sm:p-6 md:p-8 backdrop-blur-sm "
              >
                <div className="text-center flex flex-col items-center justify-center">
                  <h2 className="mb-2 text-xl font-medium text-white">
                    Record a Video
                  </h2>
                  <div className="aspect-[4/3] w-3/4 overflow-hidden rounded-lg bg-[#1F1F1F]">
                    <VideoRecorder onRecordingComplete={setCapturedVideo} />
                  </div>
                  <div className="mt-3 space-y-2 text-left text-xs">
                    <h3 className="text-center text-sm font-medium text-white">
                      Instructions
                    </h3>
                    <ol className="list-decimal space-y-2 pl-5 text-whitecolor font-light">
                      <li>
                        Stand or sit in a well-lit environment. Ensure your
                        entire face and upper body are clearly visible.
                      </li>
                      <li>
                        Start by looking straight into the camera. Hold this
                        position for 3-5 seconds.
                      </li>
                      <li>
                        Slowly turn to your left or right until your back is
                        facing the camera. Continue rotating until you&apos;re
                        back to facing the camera again.
                      </li>
                      <li>
                        Smile naturally and hold it for a moment. Briefly show a
                        neutral (serious) expression.
                      </li>
                      <li>
                        Say, &quot;Hi, I&apos;m [Your Name], and I&apos;m ready
                        to create my avatar!&quot; Ensure you speak clearly and
                        audibly.
                      </li>
                      <li>
                        Move slowly and naturally to ensure we capture accurate
                        details.
                      </li>
                    </ol>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <button
                      onClick={() => setCapturedVideo(null)}
                      className="w-36 sm:w-40 md:w-56 py-2 text-whitecolor text-xs lg:text-sm bg-transparent border rounded flex items-center justify-center gap-3"
                    >
                      <RotateCcw size={20} />
                      Retake
                    </button>
                    <button
                      onClick={() => setStep("voice")}
                      className="w-36 sm:w-40 md:w-56 py-2 text-whitecolor text-xs lg:text-sm bg-secondarycolor rounded flex items-center justify-center gap-2 px-3"
                    >
                      <Camera size={20} />
                      Take Video (5 seconds)
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Voice Popup */}
          {step === "voice" && (
            <div className="flex items-center justify-center">
              <button
                onClick={() => setStep("video")}
                className="absolute left-10 sm:left-20 top-10 text-whitecolor bg-secondarycolor rounded-full w-8 h-8 flex items-center justify-center hover:opacity-80"
                aria-label="Go back"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <Link href="/">
                <button className="absolute right-10 sm:right-20 top-10 text-lg underline text-whitecolor hover:underline">
                  Skip
                </button>
              </Link>
              <motion.div
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-[90%] sm:w-[400px] md:w-[500px] rounded-lg bg-white/30 p-4 sm:p-6 md:p-8 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="mt-1 text-center flex flex-col items-center justify-center relative">
                  <h2 className="text-xl mb-3 font-semibold text-whitecolor">
                    Read Below
                  </h2>
                  <p className="text-sm text-whitecolor">
                    Speak a short phrase clearly to train your avatar&#8217;s
                    voice.
                  </p>
                  <p className="text-sm mb-3 text-whitecolor">
                    Example Prompt: Hello, my name is [Your Name]. I’m excited
                    to create my avatar. Let’s get started with this amazing
                    journey together!
                  </p>
                  <div className="group h-32 w-32 sm:h-40 sm:w-40 overflow-hidden flex items-center justify-center rounded-full bg-gradient-to-b from-[#5182E3] via-[#5182E3] to-[#FFFFFF]">
                    <Mic className="text-whitecolor w-10 h-10 md:w-20 md:h-20" />
                    {/* Tooltip */}
                    <div className="absolute top-44 left-2/3 mb-2 hidden group-hover:flex flex-row-reverse items-center ">
                      <div className="bg-gray-600 text-white text-xs px-3 py-2 rounded-sm shadow-lg">
                        Click to record
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-6 mt-4">
                    <button className="w-28 sm:w-40 md:w-56 py-2 text-whitecolor text-sm bg-transparent border rounded flex items-center justify-center gap-3">
                      <RotateCcw size={20} />
                      Re-record
                    </button>
                    <Link href="/chat">
                      <button className="w-28 sm:w-40 md:w-56 py-2 text-whitecolor text-sm bg-secondarycolor rounded flex items-center justify-center gap-3">
                        Submit
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
