import Availability from "@topflightapps/scheduling/src/components/availability";
import { Suspense } from "react";

export default function Home() {
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
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
            days: ["Saturday"],
            startTime: "08:00",
            endTime: "12:00"
          }
        ]
        },
    ],
  };

  return (
    <div className="p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-violet-950">Availability</h1>
          <p className="text-md text-gray-600">Configure times when you are available for bookings.</p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Availability schedules={schedules.data} />
        </Suspense>
      </main>
    </div>
  );
}