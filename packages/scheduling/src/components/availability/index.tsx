import React from "react";
import ViewSelector from "./ViewSelector";
import TimezoneSelector from "./TimezoneSelector";
import AvailabilityList from "./AvailabilityList";
import { Schedule, DayOfWeek } from "@topflightapps/scheduling/src/types/availability";

interface AvailabilityProps {
  userId: number;
}

export default function Availability({ userId }: AvailabilityProps) {

  const schedules = {
    status: "success",
    data: [
      {
      id: 1,
      ownerId: 1,
      name: "Weekdays",
      timeZone: "America/Los_Angeles",
      availability: [
        {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as DayOfWeek[],
          startTime: "08:00",
          endTime: "20:00"
        }
      ]
      },
      {
        id: 1,
        ownerId: 1,
        name: "Weekends",
        timeZone: "America/Los_Angeles",
        availability: [
          {
            days: ["Saturday"] as DayOfWeek[],
            startTime: "08:00",
            endTime: "12:00"
          }
        ]
        },
    ],
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <ViewSelector />
        <TimezoneSelector />
      </div>
      <div className="mt-4">
        <AvailabilityList schedules={schedules.data} />
      </div>
    </div>
  );
}
