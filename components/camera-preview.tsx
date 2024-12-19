"use client";

import { useEffect, useRef} from "react";


export function CameraPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);
 
  useEffect(() => {
    let stream: MediaStream | null = null;

    async function setupCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    }

    setupCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

 

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="h-full w-full object-cover"
      />
      {/* <button
        onClick={capturePhoto}
        disabled={isCapturing}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white p-4 transition-opacity hover:opacity-90 disabled:opacity-50"
        aria-label="Take picture"
      >
        <Camera className="h-6 w-6 text-black" />
      </button> */}
    </div>
  );
}
