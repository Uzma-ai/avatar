"use client";

import { cn } from "@/lib/utils";

interface ProgressStep {
  label: string;
  status: "completed" | "current" | "upcoming";
}

interface ProgressTrackerProps {
  steps: ProgressStep[];
}

export function ProgressTracker({ steps }: ProgressTrackerProps) {
  return (
    <div className="relative flex w-full justify-between">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={cn(
              "z-10 flex h-4 w-4 items-center justify-center rounded-full border-2",
              step.status === "completed" &&
                "border-secondarycolor bg-secondarycolor",
              step.status === "current" &&
                "border-secondarycolor bg-secondarycolor",
              step.status === "upcoming" && "border-mediumgray2 bg-mediumgray2"
            )}
          ></div>
          <span className="mt-2 text-center text-[10px] text-blackcolor max-w-[80px]">
            {step.label}
          </span>
        </div>
      ))}
      <div className="absolute top-1.5 left-7 z-0 h-[3.5px] w-[calc(100%-45px)] bg-mediumgray2">
        <div
          className="h-full bg-blue-500 transition-all duration-500"
          style={{
            width: `${
              (steps.filter((step) => step.status === "completed").length /
                (steps.length - 1)) *
              100
            }%`,
          }}
        />
      </div>
    </div>
  );
}
