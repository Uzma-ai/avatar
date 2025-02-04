"use client";

import { useState, useEffect } from "react";
import PublicSidebar from "@/components/PublicSidebar";
import { User, Pencil, Upload, X, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { VideoFormData } from "@/types/video";
import { VideoList } from "@/components/public-cms-components/video-list";
import { useRouter } from "next/navigation";

export default function ContentManagement() {
   const router = useRouter();
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("video/")) {
      await handleFileUpload(file);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await handleFileUpload(file);
    }
  };

  const handleFileUpload = async (file: File) => {
    setSelectedFile(file);
    setUploadProgress(0);
    setUploadError(null);
    setUploadSuccess(false);

    // Simulate file upload progress
    let progress = 0;

    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setUploadSuccess(true); // Ensure this runs properly
        }, 500);
      }
    }, 500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: VideoFormData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      tags: formData.get("tags") as string,
      contentType: formData.get("contentType") as string,
      language: formData.get("language") as string,
      region: formData.get("region") as string,
    };
    console.log("Form submitted:", data);
  };

  useEffect(() => {
    console.log("Upload Success:", uploadSuccess);
  }, [uploadSuccess]);

  return (
    <>
      <div className="flex h-screen">
        <PublicSidebar />
        <div className="flex-1 h-full px-2 overflow-hidden">
          {/* Header */}
          <div className="flex items-center h-28 py-4 px-7 rounded-md">
            <div className="w-full">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <User className="mr-2 h-6 w-6 text-mediumblack" />
                <span>Content</span>
              </h2>
              <div className="flex items-center justify-between">
                <div className="text-black ml-4 flex items-center gap-3">
                  <span
                    onClick={() => router.push("/content-management")}
                    className="cursor-pointer"
                  >
                    Content
                  </span>
                  <span>&gt;</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => router.push("/content-management")}
                  >
                    Management
                  </span>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <button className="w-[5.8rem] h-10 rounded-md border border-black flex items-center justify-center gap-2">
                    <Pencil />
                    Filter
                  </button>
                  <button className="w-[5.8rem] h-10 rounded-md border border-black flex items-center justify-center gap-2">
                    <Pencil />
                    Sort
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-100 py-7 px-7 h-[calc(100vh-112px)] overflow-y-auto scroll">
            <div className="bg-white rounded-lg shadow-md px-4 py-3 mx-auto">
              {/* Upload Section */}
              <div className="relative h-52 border border-inputbackground rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-3">Upload new video</h2>
                <div
                  className={`border-2 border-dashed rounded-lg px-8 h-28 text-center ${
                    dragActive
                      ? "border-secondarycolor"
                      : "border-secondarycolor"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() =>
                    document.getElementById("video-upload")?.click()
                  }
                >
                  {!selectedFile ? (
                    <>
                      <div className="flex items-center justify-center gap-2 py-11">
                        {uploadSuccess ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : uploadError ? (
                          <X className="w-5 h-5 text-red-500" />
                        ) : (
                          <Upload className="w-5 h-5" />
                        )}
                        <p className="text-sm font-normal">
                          {uploadSuccess
                            ? "Video uploaded successfully"
                            : uploadError
                            ? "Upload failed, try again"
                            : "Drag and drop your video here or click to upload"}
                        </p>
                        <Input
                          type="file"
                          accept="video/*"
                          className="hidden"
                          onChange={handleFileSelect}
                          id="video-upload"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="space-y-1 absolute top-4 right-2">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-medium">
                          {selectedFile.name}
                        </span>
                        {uploadSuccess ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : uploadError ? (
                          <X className="w-5 h-5 text-red-500" />
                        ) : null}
                      </div>
                      {uploadProgress !== null &&
                        !uploadSuccess &&
                        !uploadError && (
                          <Progress value={uploadProgress} className="w-full" />
                        )}
                      {uploadError && (
                        <p className="text-sm text-red-500">{uploadError}</p>
                      )}
                    </div>
                  )}
                </div>
                <p className="text-xs font-normal text-mediumgray2 py-3">
                  File format must be in MP4/AVI with max file size 100MB
                </p>
              </div>

              {/* Video Details */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-3">
                <h2 className="text-lg font-semibold mb-3">
                  Add Video Details
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-8">
                    <Input
                      name="title"
                      placeholder="Video Title"
                      className="py-6 border border-borderColor1 rounded-md focus:!outline-none focus:!ring-0"
                    />
                    <Input
                      name="description"
                      placeholder="Description"
                      className="py-6 border border-borderColor1 rounded-md focus:!outline-none focus:!ring-0"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-8">
                    <Input
                      name="tags"
                      placeholder="Add Tags"
                      className="py-6 border border-borderColor1 rounded-md focus:!outline-none focus:!ring-0"
                    />
                    <Select name="contentType">
                      <SelectTrigger className="py-6 border border-borderColor1 rounded-md focus:!outline-none focus:!ring-0">
                        <SelectValue placeholder="Content Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entertainment">
                          Entertainment
                        </SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="gaming">Gaming</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-center gap-8">
                    <Select name="language">
                      <SelectTrigger className="py-6 border border-borderColor1 rounded-md focus:!outline-none focus:!ring-0">
                        <SelectValue placeholder="Language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select name="region">
                      <SelectTrigger className="py-6 border border-borderColor1 rounded-md focus:!outline-none focus:!ring-0">
                        <SelectValue placeholder="Region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="global">Global</SelectItem>
                        <SelectItem value="na">North America</SelectItem>
                        <SelectItem value="eu">Europe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-secondarycolor px-10 py-2 rounded-sm text-white"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </form>

              <VideoList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
