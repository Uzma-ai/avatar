"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Video } from "@/types/video";
import Image from "next/image";

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: Video | null;
}

export function VideoPlayerModal({
  isOpen,
  onClose,
  video,
}: VideoPlayerModalProps) {
  if (!video) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-mediumWhite backdrop-blur-sm px-2 py-3 rounded-lg">
        <DialogHeader>
          <div className="flex items-center gap-1">
            <Image
              src="/video-player.svg"
              alt="video player"
              width={20}
              height={20}
            />
            <DialogTitle className="text-sm text-whitecolor font-light">{video.title}</DialogTitle>
          </div>
        </DialogHeader>
        <div className="w-full aspect-video">
          <video controls className="w-full h-full">
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
}
