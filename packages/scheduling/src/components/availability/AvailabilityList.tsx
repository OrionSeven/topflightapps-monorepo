"use client";

import React, { useState } from "react";
import { Schedule, AvailabilityTimeSlot } from "@topflightapps/scheduling/src/types/availability";
import AvailabilityEntry from "./AvailabiltyEntry";

interface AvailabilityListProps {
  schedules: Schedule[];
}

export default function AvailabilityList({ schedules }: AvailabilityListProps) {
  const [selectedEntry, setSelectedEntry] = useState<AvailabilityTimeSlot | null>(null);

  const handleEdit = (entry: AvailabilityTimeSlot) => {
    setSelectedEntry(entry);
  };

  const handleDelete = (entry: AvailabilityTimeSlot) => {
    // TODO: Implement delete logic
    console.log("Delete entry:", entry);
  };

  return (
    <div className="flex flex-col">
      {schedules.map((entry, idx) => (
        <AvailabilityEntry
          key={idx}
          entry={entry}
          isFirst={idx === 0}
          isMiddle={idx !== 0 && idx !== schedules.length - 1}
          isLast={idx === schedules.length - 1}
          totalEntries={schedules.length}
          selectedEntry={selectedEntry}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}