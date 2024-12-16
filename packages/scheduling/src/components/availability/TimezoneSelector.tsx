import React from "react";
import { Globe, ChevronDown } from "lucide-react"

export default function TimezoneSelector() {
  return (
    <div className="rounded-lg border-gray-300 border p-2">
      <div className="flex flex-row items-center gap-2">
        <Globe className="w-4 h-4 text-violet-900" />
        <p className="text-sm text-violet-900">Timezone</p>
        <ChevronDown className="w-4 h-4 text-violet-900" />
      </div>
    </div>
  )
}