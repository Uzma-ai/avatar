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
              "z-10 flex h-3 w-3 rounded-full",
              step.status === "completed" && "bg-secondarycolor",
              step.status === "current" && "bg-secondarycolor",
              step.status === "upcoming" && "bg-mediumgray2"
            )}
          />
          <span className="mt-2 text-[9px] text-white font-semibold">
            {step.label}
          </span>
        </div>
      ))}
      <div className="absolute top-1.5 z-0 h-[2.5px] w-full px-3 bg-mediumgray2">
        <div
          className="h-full bg-secondarycolor transition-all duration-500"
          style={{
            width: `${
              ((steps.filter((step) => step.status === "completed").length -
                1) /
                (steps.length - 1)) *
              100
            }%`,
          }}
        />
      </div>
    </div>
  );
}
