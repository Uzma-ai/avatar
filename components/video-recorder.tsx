"use client";

import { useEffect, useRef} from "react";


interface VideoRecorderProps {
  onRecordingComplete: (videoBlob: string) => void;
}

export function VideoRecorder({ onRecordingComplete }: VideoRecorderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  // const [isRecording, setIsRecording] = useState(false);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    let stream: MediaStream | null = null;

    async function setupCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            chunksRef.current.push(event.data);
          }
        };
        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(chunksRef.current, { type: "video/webm" });
          const videoUrl = URL.createObjectURL(blob);
          onRecordingComplete(videoUrl);
          chunksRef.current = [];
        };
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
  }, [onRecordingComplete]);

  // const startRecording = () => {
  //   if (mediaRecorderRef.current && !isRecording) {
  //     mediaRecorderRef.current.start();
  //     setIsRecording(true);
  //     setTimeout(() => {
  //       if (mediaRecorderRef.current && isRecording) {
  //         mediaRecorderRef.current.stop();
  //         setIsRecording(false);
  //       }
  //     }, 5000);
  //   }
  // };

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
        onClick={startRecording}
        disabled={isRecording}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white p-4 transition-opacity hover:opacity-90 disabled:opacity-50"
        aria-label="Start recording"
      >
        <Camera className="h-6 w-6 text-black" />
      </button> */}
      {/* {isRecording && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-2xl font-bold text-white">Recording...</div>
        </div>
      )} */}
    </div>
  );
}
