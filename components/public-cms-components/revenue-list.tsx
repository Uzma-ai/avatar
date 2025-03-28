"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Search,
  Trash2,
  CalendarClock,
  ArrowUpDown,
  MoveUp,
  X,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Video } from "@/types/boost-video";
import { DeleteVideoDialog } from "./delete-video-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Scan, Play, FastForward, Rewind } from "lucide-react";
type SortOption = "date" | "views" | "likes" | "comments";

const videoData = [
  {
    title: "Delicious Pasta Recipe",
    thumbnail: "/food-list.png",
    category: "Food",
  },
  {
    title: "Top 10 Coding Tips",
    thumbnail: "/food-list.png",
    category: "Education",
  },
  {
    title: "Traveling to Japan",
    thumbnail: "/food-list.png",
    category: "Travel",
  },
  {
    title: "Best Workout Routines",
    thumbnail: "/food-list.png",
    category: "Fitness",
  },
  {
    title: "How to Bake a Cake",
    thumbnail: "/food-list.png",
    category: "Food",
  },
  {
    title: "Mastering React.js",
    thumbnail: "/food-list.png",
    category: "Technology",
  },
  {
    title: "Exploring Space",
    thumbnail: "/food-list.png",
    category: "Science",
  },
  {
    title: "Yoga for Beginners",
    thumbnail: "/food-list.png",
    category: "Wellness",
  },
];

export function RevenueList() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenPopup = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleClosePopup = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState<Video[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("date");
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    videoId: string | null;
    videoTitle: string;
  }>({
    open: false,
    videoId: null,
    videoTitle: "",
  });

  const [boostedVideos, setBoostedVideos] = useState<Record<string, boolean>>(
    {}
  );

  const toggleBoost = (videoId: string) => {
    setBoostedVideos((prev) => ({
      ...prev,
      [videoId]: !prev[videoId], // Toggle only for this video
    }));
  };

  useEffect(() => {
    const generatedVideos: Video[] = videoData.map((video, index) => ({
      id: `video-${index + 1}`,
      title: video.title,
      category: video.category,
      times: Math.floor(Math.random() * 5) + 1,
      publish: "Published",
      likes: Math.floor(Math.random() * 500),
      impressions: Math.floor(Math.random() * 500),
      comments: Math.floor(Math.random() * 500),
      publishDate: new Date(
        Date.now() - Math.floor(Math.random() * 10000000000)
      ).toISOString(),
      thumbnail: video.thumbnail,
      status: "published",
    }));

    setVideos(generatedVideos);
  }, []);

  const filteredAndSortedVideos = useMemo(() => {
    let result = videos;

    // Filter videos based on search query
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter(
        (video) =>
          video.title.toLowerCase().includes(lowerCaseQuery) ||
          video.category.toLowerCase().includes(lowerCaseQuery)
      );
    }

    // Sort videos
    result.sort((a, b) => {
      switch (sortBy) {
        case "date":
          return (
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
          );
        case "likes":
          return b.likes - a.likes;
        default:
          return 0;
      }
    });

    return result;
  }, [videos, searchQuery, sortBy]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (value: string) => {
    setSortBy(value as SortOption);
  };

  const handleDeleteClick = (video: Video) => {
    setDeleteDialog({
      open: true,
      videoId: video.id,
      videoTitle: video.title,
    });
  };

  const handleDeleteConfirm = () => {
    if (deleteDialog.videoId) {
      // Filter out the deleted video
      const updatedVideos = videos.filter(
        (video) => video.id !== deleteDialog.videoId
      );
      setVideos(updatedVideos);

      // Show success toast
      //   toast({
      //     title: "Video deleted",
      //     description: "The video has been permanently deleted.",
      //   });
    }
    setDeleteDialog({ open: false, videoId: null, videoTitle: "" });
  };

  return (
    <div className="w-full pb-2 pt-10">
      <div className="flex items-center justify-end pb-6">
        {" "}
        <button className="text-secondarycolor text-sm font-bold cursor-pointer flex items-center gap-1">
          See All
          <ChevronRight size={16} />
        </button>
        {isModalOpen && selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center z-50">
            <div className=" w-[80%] max-w-4xl flex items-center justify-between bg-white bg-opacity-50 backdrop-blur-md p-3 rounded-t-lg">
              <span className="text-white text-lg font-semibold">
                Schedule Video
              </span>
              <button onClick={handleClosePopup} className="text-white">
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="relative w-[80%] max-w-4xl p-8 bg-white bg-opacity-20 backdrop-blur-md rounded-b-lg shadow-lg flex flex-col items-center">
              {/* Video Section */}
              <div className="w-[30rem] h-[18rem] bg-black rounded-md relative flex items-center justify-center">
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Progress Bar */}
              <div className="flex flex-row items-center justify-center gap-2 mt-4 text-blue-700">
                <button className="p-2">
                  <Rewind size={24} />
                </button>
                <button className="p-2">
                  <Play size={24} />
                </button>
                <button className="p-2">
                  <FastForward size={24} />
                </button>

                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-[23rem] h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />

                <button className="p-2">
                  <Scan size={24} />
                </button>
              </div>

              {/* Input Fields */}
              <div className="text-white w-full pt-2">
                <span className="text-start">
                  Schedule Video and Edit Details
                </span>
                <div className="mt-6 grid grid-cols-2 gap-4 w-full">
                  {[
                    "Video Title",
                    "Description",
                    "Add Tags",
                    "Content Type",
                  ].map((placeholder, index) => (
                    <div key={index} className="relative w-full">
                      <input
                        type="text"
                        id={`field-${index}`}
                        className="peer border border-white p-2 rounded-md w-full bg-black bg-opacity-60 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={placeholder}
                      />
                      <label
                        htmlFor={`field-${index}`}
                        className="absolute left-3 top-[-10px] text-gray-300 text-xs transition-all   px-1 
                      peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                      peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-blue-500 peer-focus:bg-white"
                      >
                        {placeholder}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <h2 className="text-lg font-semibold">Boost Uploaded Video’s</h2>
        <div className="flex gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start">
          <div className="relative w-full sm:w-[65%] md:w-80 lg:w-96">
            <Search className="absolute right-2 top-4 h-4 w-4" />
            <Input
              placeholder="Search by title or category"
              value={searchQuery}
              onChange={handleSearch}
              className="border border-borderColor1 w-full h-12 focus:!outline-none focus:!ring-0 rounded-md"
            />
          </div>

          <Select onValueChange={handleSort} defaultValue="date">
            <SelectTrigger className="w-[90px] sm:w-[110px] md:w-[120px] h-12 border border-borderColor1 rounded-md focus:!outline-none focus:!ring-0">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="views">Views</SelectItem>
              <SelectItem value="likes">Likes</SelectItem>
              <SelectItem value="comments">Comments</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Table className="w-full overflow-x-auto">
          <TableHeader>
            <TableRow className="border-b border-secondarycolor">
              <TableHead className="w-[150px] text-blackcolor flex items-center justify-center gap-5">
                <ArrowUpDown size={18} />
                <Search size={18} />
              </TableHead>
              <TableHead className="w-[200px] text-left text-blackcolor font-semibold">
                Name
              </TableHead>
              <TableHead className="w-[200px] text-center text-blackcolor font-semibold">
                Times Published
              </TableHead>
              <TableHead className="w-[200px] text-blackcolor text-center font-semibold">
                Status
              </TableHead>
              <TableHead className="w-[200px] text-center text-blackcolor font-semibold">
                Likes
              </TableHead>
              <TableHead className="w-[220px] text-blackcolor font-semibold text-center">
                Date
              </TableHead>
              <TableHead className="w-[200px] text-center text-blackcolor font-semibold">
                Actions
              </TableHead>
              <TableHead className="w-[100px] text-center text-blackcolor font-semibold">
                Boost
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedVideos.map((video) => (
              <TableRow key={video.id} className="border-none">
                <TableCell className="w-[100px]">
                  {/* Thumbnail Image */}
                  <div className="w-40 h-24 rounded-lg overflow-hidden">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </TableCell>

                <TableCell>
                  {/* Video Info */}
                  <h3 className="font-normal text-base truncate w-full">
                    {video.title}
                  </h3>
                  <p className="text-base font-normal text-mediumgray2">
                    {video.category}
                  </p>
                </TableCell>

                <TableCell className="text-center">
                  <span>{video.times}</span>
                </TableCell>
                <TableCell className="text-center">
                  <span className=" text-success font-semibold">
                    {video.publish}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <span>{video.likes}</span>
                </TableCell>
                <TableCell className="text-center">
                  <span>
                    {new Date(video.publishDate).toISOString().split("T")[0]}
                  </span>
                </TableCell>

                <TableCell className="">
                  {/* Action Buttons - Stack on small screens */}
                  <div className="flex items-center justify-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleOpenPopup(video)}
                    >
                      <CalendarClock className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive"
                      onClick={() => handleDeleteClick(video)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <button
                    className={`w-24 h-11 rounded-md flex items-center justify-center gap-2 text-whitecolor ${
                      boostedVideos[video.id] ? "bg-redcolor" : "bg-skycolor"
                    }`}
                    onClick={() => toggleBoost(video.id)}
                  >
                    {boostedVideos[video.id] ? (
                      <X size={15} />
                    ) : (
                      <MoveUp size={15} />
                    )}
                    {boostedVideos[video.id] ? "Stop" : "Boost"}
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {filteredAndSortedVideos.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">
          No videos found.
        </p>
      )}
      <DeleteVideoDialog
        open={deleteDialog.open}
        onOpenChange={(open) => setDeleteDialog((prev) => ({ ...prev, open }))}
        onConfirm={handleDeleteConfirm}
        videoTitle={deleteDialog.videoTitle}
      />
    </div>
  );
}
