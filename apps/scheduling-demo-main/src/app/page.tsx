import Test from "@topflightapps/scheduling/src/components/test";

export default function Home() {
  return (
    <div className="p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <h1 className="text-4xl font-medium text-gray-700">Scheduling Demo</h1>
        <Test />
      </main>
    </div>
  );
}
