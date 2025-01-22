"use client";
import React, { useEffect,useRef } from "react";
import CmsSidebar from "@/components/cms-sidebar";
import { Users, Pencil, Upload, Mic } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import Image from 'next/image';
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CreateAvatarPage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  

  useEffect(() => {
    const sidebarItem = document.querySelector('[data-sidebar-item="Create-Avatar"]');
    if (sidebarItem) {
      (sidebarItem as HTMLElement).click();
    }
  }, []);

 

  const openCamera = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.capture = "environment"; // Use "user" for front camera, "environment" for rear camera

    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        alert(`Photo selected: ${file.name}`);
      }
    };

    input.click();
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log("Uploaded file:", file.name);
      // Handle the uploaded file here (e.g., upload to server)
    }
  };

  const handleVoiceRecord = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "audio/*";
    input.capture = "microphone";

    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        alert(`Audio recorded: ${file.name}`);
      }
    };

    input.click();
  };

  return (
    <div className="flex h-full bg-white">
      <CmsSidebar isOpen={true} />
      <div className="flex-1 h-full p-8 overflow-hidden">
        <div className="flex justify-between items-center h-28 p-4 rounded-md">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              < Users className="mr-2 h-6 w-6 text-black" />
              <span>Profile</span>
            </h2>
            <div className="text-black ml-4">
              Profile &gt; Create Avatar
            </div>
          </div>
          <button className="px-4 py-2 border border-black text-black rounded-md flex items-center">
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </button>
        </div>

        <div className="bg-gray-100 p-4 h-[calc(100vh-112px)] overflow-y-auto scroll">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-6xl mx-auto">
            <div className="flex">
              <div className="w-1/2 max-w-[40%] border border-neutral-100 rounded-lg p-4">
                <h1 className="text-2xl font-bold mb-2">Personalize Your Experience</h1>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600">
                    Choose how you want to create your avatar. You can click a
                    picture, upload an existing photo, and add your voice to make it
                    uniquely yours!
                  </p>
                </div>
                <hr className="border-t-2 border-secondarycolor mb-6" />
                <div className="space-y-5">
                  <div className="space-y-3">
                    <h2 className="font-semibold text-sm">Upload Video</h2>
                    <button
                      className="w-full h-12 border-dashed border-2 border-secondarycolor rounded-md flex items-center justify-center gap-4"
                      onClick={openCamera}
                    >
                      <FaPlay />
                      <span className="font-normal text-sm">Video</span>
                    </button>
                  </div>
                  <div className="space-y-3">
                    <h2 className="font-semibold text-sm">Upload photo</h2>
                    <button
                      className="w-full h-12 border-dashed border-2 border-secondarycolor rounded-md flex items-center justify-center gap-4"
                      onClick={handleButtonClick}
                    >
                      <Upload />
                      <span className="font-normal text-sm">Upload a Photo</span>
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="space-y-3">
                    <h2 className="font-semibold text-sm">Add your voice</h2>
                    <button
                      className="w-full h-12 border-dashed border-2 border-secondarycolor rounded-md flex items-center justify-center gap-4"
                      onClick={handleVoiceRecord}
                    >
                      <Mic />
                      <span className="font-normal text-sm">Record your voice</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-3/5 h-128 rounded-lg relative overflow-hidden px-2 ml-10">
                <Image
                  src="/background.jpeg"
                  alt="avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-x-0 top-3 px-2">
                  <div className="w-full h-12 bg-mediumWhite backdrop-blur-sm rounded-lg text-white flex flex-col justify-center px-3">
                    <span className="text-sm font-semibold">Preview Area</span>
                    <span className="text-xs font-normal mt-2">
                      See real-time changes here
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-t-2 border-blue-100 mt-10" />

            <div className="pt-6 space-y-6">
              <h1 className="text-lg font-semibold">Advance Modification</h1>
              <div className="flex space-x-4">
                <div className="w-1/2 space-y-5">
                  <label className="text-sm font-normal">Pose Style</label>
                  <Slider defaultValue={[40]} max={100} step={1} />
                </div>
                <div className="w-1/2 space-y-5">
                  <label className="text-sm font-normal">Expression Scale</label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-normal">Eye Blink</span>
                <Switch style={{ marginRight: '87%' }} />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2 space-y-5">
                  <label className="text-sm font-normal">Face model resolution</label>
                  <RadioGroup className="flex items-center gap-6 pt-2">
                    <div className="w-24 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                      <RadioGroupItem value="256" id="256" />
                      <label htmlFor="option-1" className="text-sm font-normal">
                        256
                      </label>
                    </div>
                    <div className="w-24 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                      <RadioGroupItem value="512" id="512" />
                      <label htmlFor="option-2" className="text-sm font-normal">
                        512
                      </label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="w-1/2 space-y-5">
                  <label className="text-sm font-normal">Preprocess</label>
                  <RadioGroup className="flex items-center gap-3 pt-2 flex-wrap">
                    <div className="w-24 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                      <RadioGroupItem value="crop" id="crop" />
                      <label
                        htmlFor="option-1"
                        className="text-xs font-normal pb-0.5"
                      >
                        Crop
                      </label>
                    </div>
                    <div className="w-24 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                      <RadioGroupItem value="resize" id="resize" />
                      <label
                        htmlFor="option-2"
                        className="text-xs font-normal pb-0.5"
                      >
                        Resize
                      </label>
                    </div>
                    <div className="w-24 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                      <RadioGroupItem value="full" id="full" />
                      <label
                        htmlFor="option-3"
                        className="text-xs font-normal pb-0.5"
                      >
                        Full
                      </label>
                    </div>
                  </RadioGroup>
                  <RadioGroup className="flex items-center gap-3 pt-2 flex-wrap">
                    <div className="w-24 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                      <RadioGroupItem value="extcrop" id="extcrop" />
                      <label
                        htmlFor="option-4"
                        className="text-xs font-normal pb-0.5"
                      >
                        Extcrop
                      </label>
                    </div>
                    <div className="w-24 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                      <RadioGroupItem value="extfull" id="extfull" />
                      <label
                        htmlFor="option-5"
                        className="text-xs font-normal pb-0.5"
                      >
                        Extfull
                      </label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2 space-y-5">
                  <label className="text-sm font-normal">Face render</label>
                  <RadioGroup className="flex items-center gap-6 pt-2">
                    <div className="w-36 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                      <RadioGroupItem value="Face vid to vid" id="Face vid to vid" />
                      <label htmlFor="option-1" className="text-sm font-normal">
                       Face vid to vid
                      </label>
                    </div>
                    <div className="w-24 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                      <RadioGroupItem value="512" id="512" />
                      <label htmlFor="option-2" className="text-sm font-normal">
                        Pi render
                      </label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="w-1/2 space-y-5">
                  <label className="text-sm font-normal">
                    Batch size in generation
                  </label>
                  <Slider defaultValue={[20]} max={100} step={1} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-1/2 flex items-center">
                  <div>
                    <span className="text-sm font-normal">Still Mode</span>
                    <p className="text-xs font-light text-mediumgray2">
                      (Fewer head motion, works with preprocess &quot;Full&quot;)
                    </p>
                  </div>
                  <Switch className="ml-4" />
                </div>
                <div className="w-1/2 flex items-center">
                  <div>
                    <span className="text-sm font-normal">GFPGAN</span>
                    <p className="text-xs font-light text-mediumgray2">
                      as face enhancer
                    </p>
                  </div>
                  <Switch className="ml-4" />
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button className="w-32 text-whitecolor font-light h-10 bg-secondarycolor rounded-md">
                  Generate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAvatarPage;