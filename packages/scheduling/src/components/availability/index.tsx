import React from "react";
import ViewSelector from "./ViewSelector";
import TimezoneSelector from "./TimezoneSelector";
import AvailabilityList from "./AvailabilityList";
import { Schedule } from "@topflightapps/scheduling/src/types/availability";

interface AvailabilityProps {
  schedules: Schedule[];
}

export default function Availability({ schedules }: AvailabilityProps) {

  return (
    <div>
      <div className="flex flex-row justify-between">
        <ViewSelector />
        <TimezoneSelector />
      </div>
      <div className="mt-4">
        <AvailabilityList schedules={schedules} />
      </div>
    </div>
  );
}
