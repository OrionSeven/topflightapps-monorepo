import Availability from "@topflightapps/scheduling/src/components/availability";
import { Suspense } from "react";

export default function Home() {
 

  return (
    <div className="p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-violet-950">Availability</h1>
          <p className="text-md text-gray-600">Configure times when you are available for bookings.</p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Availability userId={1} />
        </Suspense>
      </main>
    </div>
  );
}