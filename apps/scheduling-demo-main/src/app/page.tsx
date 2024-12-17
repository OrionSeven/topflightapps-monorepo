import Availability from "@topflightapps/scheduling/src/components/availability";
import AvailabilityEntry from "./components/AvailabilityEntry";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <div className="mb-8">
          <h2 className="text-3xl font-medium text-violet-950">
            Availability Demo
          </h2>
          <p className="text-md text-gray-600">
            Configure times when you are available for bookings.
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Availability userId={1} />
          <div className="my-16 border-t border-gray-200">
            <h2 className="text-3xl font-medium text-sky-950 mt-16">
              Custom Availability Entry
            </h2>
            <p className="text-md text-gray-600">
              Notice the custom entry component is used. This example simply updates the color scheme. But new functionality could be added.
            </p>
          </div>
          <Availability userId={2} AvailabilityEntryComponent={AvailabilityEntry} />
        </Suspense>
      </main>
    </div>
  );
}
