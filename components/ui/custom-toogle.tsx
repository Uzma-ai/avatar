"use client";

import * as React from "react";
import { Keyboard, Power, Mic, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomToggleProps {
  id: string;
  iconType?: "input" | "power";
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
  className?: string;
}

export function CustomToggle({
  iconType,
  checked,
  onCheckedChange,
  className,
}: CustomToggleProps) {
  const getIcon = () => {
    if (!iconType) return null;

    if (iconType === "input") {
      return checked ? (
        <Mic className="h-4 w-4" />
      ) : (
        <Keyboard className="h-4 w-4" />
      );
    }

   if (iconType === "power") {
     return checked ? (
       <Power className="h-4 w-4" />
     ) : (
       <X className="h-4 w-4" />
     );
   }
  };

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="flex items-center gap-2">
        <button
          role="switch"
          aria-checked={checked}
          onClick={() => onCheckedChange(!checked)}
          className={cn(
            "group relative inline-flex h-8 w-14 items-center rounded-full bg-zinc-600/20 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            "focus-visible:ring-zinc-500 focus-visible:ring-offset-black",
            checked && "bg-secondarycolor"
          )}
        >
          {iconType && (
            <span
              className={cn(
                "absolute left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-zinc-500 transition-transform",
                "group-hover:bg-zinc-50",
                checked && "translate-x-6 text-blue-500"
              )}
            >
              {getIcon()}
            </span>
          )}
          {!iconType && (
            <span
              className={cn(
                "h-6 w-6 rounded-full bg-white transition-transform",
                "group-hover:bg-zinc-50",
                checked && "translate-x-6"
              )}
            />
          )}
        </button>
      </div>
    </div>
  );
}
