"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Video } from "@/types/video";

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
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{video.title}</DialogTitle>
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
