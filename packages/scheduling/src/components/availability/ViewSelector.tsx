"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@topflightapps/scheduling/src/components/common/tabs";

export default function ViewSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "list");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && (tab === "list" || tab === "calendar")) {
      setActiveTab(tab);
    } else {
      setActiveTab("list");
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    router.push(`?tab=${value}`, { scroll: false });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-auto bg-gray-200 rounded-lg"
      >
        <TabsList>
          <TabsTrigger value="list" className="bg-gray-200 rounded-lg text-gray-400">List view</TabsTrigger>
          <TabsTrigger value="calendar" className="bg-gray-200 rounded-lg text-gray-400">Calendar view</TabsTrigger>
        </TabsList>
      </Tabs>
    </Suspense>
  );
}
