"use client";

import React, { useState, ComponentType } from "react";
import { Schedule, AvailabilityTimeSlot } from "@topflightapps/scheduling/src/types/availability";
import AvailabilityEntry from "./AvailabiltyEntry";

interface AvailabilityEntryProps {
  entry: Schedule;
  isFirst: boolean;
  isMiddle: boolean;
  isLast: boolean;
  totalEntries: number;
  selectedEntry: AvailabilityTimeSlot | null;
  onEdit: (entry: AvailabilityTimeSlot) => void;
  onDelete: (entry: AvailabilityTimeSlot) => void;
}

interface AvailabilityListProps {
  schedules: Schedule[];
  AvailabilityEntryComponent?: ComponentType<AvailabilityEntryProps>;
}

export default function AvailabilityList({
  schedules,
  AvailabilityEntryComponent = AvailabilityEntry
}: AvailabilityListProps) {
  const [selectedEntry, setSelectedEntry] = useState<AvailabilityTimeSlot | null>(null);

  const handleEdit = (entry: AvailabilityTimeSlot) => {
    setSelectedEntry(entry);
  };

  const handleDelete = (entry: AvailabilityTimeSlot) => {
    console.log("Delete entry:", entry);
    // Implement your delete logic here
  };

  return (
    <div className="flex flex-col">
      {schedules.map((entry, idx) => (
        <AvailabilityEntryComponent
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
