"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@topflightapps/scheduling/src/components/common/card";
import { Button } from "@topflightapps/scheduling/src/components/common/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@topflightapps/scheduling/src/components/common/tooltip";
import { Edit, Trash2 } from "lucide-react";
import {
  Schedule,
  AvailabilityTimeSlot,
  DayOfWeek,
} from "@topflightapps/scheduling/src/types/availability";
import { twMerge } from "tailwind-merge";
interface AvailabilityListProps {
  schedules: Schedule[];
}

// Helper to format time in a more user-friendly manner (HH:mm -> h:mm am/pm)
function formatTime(time: string): string {
  const [hourStr, minuteStr] = time.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = minuteStr || "00";
  const ampm = hour >= 12 ? "pm" : "am";
  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour = hour - 12;
  }
  return `${hour}:${minute}${ampm}`;
}

// Helper to display days
// If the days array includes Monday-Friday fully, and ONLY those days, show "Mon-Fri"
// Otherwise show each day name or abbreviation
function formatDays(days: DayOfWeek[]): string {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const weekends = ["Saturday", "Sunday"];

  const allWeekdays = weekdays.every((d) => days.includes(d as DayOfWeek));
  const hasWeekends = weekends.some((d) => days.includes(d as DayOfWeek));

  if (allWeekdays && !hasWeekends && days.length === 5) {
    return "Mon-Fri";
  } else {
    // Otherwise list days by abbreviated name: Mon, Tue, Wed...
    return days.map((d) => d.slice(0, 3)).join(", ");
  }
}

export default function AvailabilityList({ schedules }: AvailabilityListProps) {
  const [selectedEntry, setSelectedEntry] =
    useState<AvailabilityTimeSlot | null>(null);

  const handleEdit = (entry: AvailabilityTimeSlot) => {
    setSelectedEntry(entry);
  };

  const handleDelete = (entry: AvailabilityTimeSlot) => {
    // TODO: Implement delete logic
    console.log("Delete entry:", entry);
  };

  return (
    <div className="flex flex-col">
      {schedules.map((entry, idx) => {
        // Determine the position-based styling
        const isFirst = idx === 0;
        const isLast = idx === schedules.length - 1;
        const isMiddle = !isFirst && !isLast;

        return (
          <Card
            key={idx}
            variant="borderless"
            className={twMerge(
              "border border-gray-200 p-4 hover:bg-gray-100/50 transition-colors duration-200 flex flex-row justify-between",
              isFirst && "rounded-t-lg rounded-b-none border-b-0",
              isMiddle && "rounded-none border-b-0",
              isLast && "rounded-b-lg rounded-t-none",
              schedules.length === 1 && "rounded-lg" // If there's only one card
            )}
          >
            <div>
            <CardHeader className="flex flex-row items-center justify-between w-full p-0">
              <CardTitle className="text-md font-medium text-gray-800">
                {entry.name || "Unnamed Entry"}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col p-0 pt-0">
              <div className="text-gray-400">
                {formatDays(entry.availability[0].days)}, {" "}
                {formatTime(entry.availability[0].startTime)} -{" "}
                {formatTime(entry.availability[0].endTime)}
              </div>
              {entry.timeZone && (
                <div className="text-gray-400">
                  ({entry.timeZone})
                </div>
              )}
              </CardContent>
            </div>
            <div>
            <div className="flex flex-row">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(entry.availability[0])}
                      >
                        <Edit className="w-4 h-4 text-violet-900" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Edit Entry</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(entry.availability[0])}
                      >
                        <Trash2 className="w-4 h-4 text-violet-900" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Delete Entry</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {selectedEntry === entry.availability[0] && (
              <div className="mt-4 p-4 border-t border-gray-300">
                <p className="text-sm text-gray-700">
                  Editor Placeholder for "{entry.name}"
                </p>
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}