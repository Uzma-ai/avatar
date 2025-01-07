import React, { ChangeEvent } from "react";
import { useState, useRef, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Pencil, Camera, Upload, Mic } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";

interface ProfilePopupProps {
  setIsMobileProfileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const Profilepopup: React.FC<ProfilePopupProps> = ({
  setIsMobileProfileOpen,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({
    name: "Gaurav Yadav",
    email: "gaurav.yadav@aibuzz.net",
    phone: "9000800009",
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const openCamera = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      alert("Camera opened successfully!");
    } catch (err) {
      console.error("Error accessing the camera", err);
      alert("Failed to access the camera.");
    }
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsMobileProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsMobileProfileOpen]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-xl px-4 py-6 max-w-[22rem] w-full relative h-[38rem] overflow-y-auto scroll"
      >
        <div className="flex items-center justify-between border-b border-secondarycolor pb-4">
          <h1 className="text-lg font-semibold">Personal Information</h1>
          <button
            className="w-8 h-8 bg-secondarycolor rounded-full flex items-center justify-center"
            onClick={handleEditClick}
          >
            {" "}
            <Pencil color="white" size={18} />
          </button>
        </div>

        {/* Edit Section Of User */}
        <div className="space-y-9 pt-4">
          <div className="flex items-center justify-between gap-4">
            <label className="block text-sm font-normal">Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full text-right shadow-sm outline-none"
              />
            ) : (
              <p className="text-mediumgray2 font-medium text-sm">
                {formData.name}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between gap-4">
            <label className="block text-sm font-normal">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full text-right shadow-sm outline-none"
              />
            ) : (
              <p className="text-mediumgray2 font-medium text-sm">
                {formData.email}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between gap-4">
            <label className="block text-sm font-normal">Phone</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full text-right shadow-sm outline-none"
              />
            ) : (
              <p className="text-mediumgray2 font-medium text-sm">
                {formData.phone}
              </p>
            )}
          </div>
        </div>

        <div className="pt-8">
          <div className="border-b border-secondarycolor pb-4">
            <h1 className="text-lg font-semibold">
              Personalize Your Experience
            </h1>
            <p className="font-normal text-sm pt-1 leading-4">
              Choose how you want to create your avatar. You can click a
              picture, upload an existing photo, and add your voice to make it
              uniquely yours!
            </p>
          </div>
        </div>

        {/* User Inputs */}
        <div className="pt-4 space-y-5">
          <div className="w-full h-56 rounded-lg relative overflow-hidden px-2">
            <Image
              src="/background.jpeg"
              alt="avatar"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 top-3 px-2">
              <div className="w-full h-12 bg-mediumWhite backdrop-blur-sm rounded-lg text-white flex flex-col justify-center px-3">
                <span className="text-sm font-semibold">Preview Area</span>
                <span className="text-xs font-normal">
                  See real-time changes here
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold text-sm">Realtime picture clicking</h2>
            <button
              className="w-full h-12 border-dashed border-2 border-secondarycolor rounded-md flex items-center justify-center gap-4"
              onClick={openCamera}
            >
              <Camera />
              <span className="font-normal text-sm">Take a Picture</span>
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
            <button className="w-full h-12 border-dashed border-2 border-secondarycolor rounded-md flex items-center justify-center gap-4">
              <Mic />
              <span className="font-normal text-sm">Record your voice</span>
            </button>
          </div>
        </div>

        {/* Modification Section */}
        <div className="pt-6 space-y-6">
          <h1 className="text-lg font-semibold">Advance Modification</h1>
          <div className="space-y-5">
            <label className="text-sm font-normal">Pose Style</label>
            <Slider defaultValue={[40]} max={100} step={1} />
          </div>
          <div className="space-y-5">
            <label className="text-sm font-normal">Expression Scale</label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-normal">Eye Blink</span>
            <Switch />
          </div>

          {/* Face Modal Checkbox */}
          <div>
            <label className="text-sm font-normal">Face model resolution</label>
            <div className="flex items-center gap-6 pt-2">
              <div className="w-24 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                <input
                  type="radio"
                  id="option-1"
                  name="face-modal"
                  className="accent-secondarycolor scale-125"
                />
                <label htmlFor="option-1" className="text-sm font-normal pb-1">
                  256
                </label>
              </div>
              <div className="w-24 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                <input
                  type="radio"
                  id="option-2"
                  name="face-modal"
                  className="accent-secondarycolor scale-125"
                />
                <label htmlFor="option-2" className="text-sm font-normal pb-1">
                  512
                </label>
              </div>
            </div>
          </div>

          {/* Preprocess Checkbox */}
          <div>
            <label className="text-sm font-normal">Preprocess</label>
            <div className="flex items-center gap-6 pt-2 flex-wrap">
              <div className="w-20 px-4 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                <input
                  type="radio"
                  id="option-1"
                  name="option"
                  className="accent-secondarycolor scale-125"
                />
                <label
                  htmlFor="option-1"
                  className="text-xs font-normal pb-0.5"
                >
                  Crop
                </label>
              </div>
              <div className="w-20 px-4 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                <input
                  type="radio"
                  id="option-2"
                  name="option"
                  className="accent-secondarycolor scale-125"
                />
                <label
                  htmlFor="option-2"
                  className="text-xs font-normal pb-0.5"
                >
                  Resize
                </label>
              </div>
              <div className="w-20 px-4 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                <input
                  type="radio"
                  id="option-3"
                  name="option"
                  className="accent-secondarycolor scale-125"
                />
                <label
                  htmlFor="option-3"
                  className="text-xs font-normal pb-0.5"
                >
                  Full
                </label>
              </div>
              <div className="w-20 px-4 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                <input
                  type="radio"
                  id="option-4"
                  name="option"
                  className="accent-secondarycolor scale-125"
                />
                <label
                  htmlFor="option-4"
                  className="text-xs font-normal pb-0.5"
                >
                  Extcrop
                </label>
              </div>
              <div className="w-20 px-4 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                <input
                  type="radio"
                  id="option-5"
                  name="option"
                  className="accent-secondarycolor scale-125"
                />
                <label
                  htmlFor="option-5"
                  className="text-xs font-normal pb-0.5"
                >
                  Extfull
                </label>
              </div>
            </div>
          </div>

          {/* Face Render Checkbox */}
          <div>
            <label className="text-sm font-normal">Face render</label>
            <div className="flex items-center gap-6 pt-2">
              <div className="w-32 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                <input
                  type="radio"
                  id="option-1"
                  name="face-render"
                  className="accent-secondarycolor scale-125"
                />
                <label htmlFor="option-1" className="text-sm font-normal pb-1">
                  Face vid to vid
                </label>
              </div>
              <div className="w-24 h-10 border border-secondarycolor rounded flex items-center justify-center gap-2">
                <input
                  type="radio"
                  id="option-2"
                  name="face-render"
                  className="accent-secondarycolor scale-125"
                />
                <label htmlFor="option-2" className="text-sm font-normal pb-1">
                  Pi render
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <label className="text-sm font-normal">
              Batch size in generation
            </label>
            <Slider defaultValue={[20]} max={100} step={1} />
          </div>
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <span className="text-sm font-normal">Still Mode</span>
              <p className="text-xs font-light text-mediumgray2">
                (Fewer head motion, works with preprocess &quot;Full&quot;)
              </p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <span className="text-sm font-normal">GFPGAN</span>
              <p className="text-xs font-light text-mediumgray2">
                as face enhancer
              </p>
            </div>
            <Switch />
          </div>

          {/* Generate Button */}
          <div className="flex items-center justify-end">
            <button className="w-32 text-whitecolor font-light h-10 bg-secondarycolor rounded-md">
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilepopup;
