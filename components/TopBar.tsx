"use client";

import { Sun } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-[#0F1F2C] p-5 rounded-xl flex items-center justify-between border border-[#1A2A35] shadow-lg">
      <h1 className="text-xl font-semibold text-green-400 flex items-center gap-2">
        Good Morning! <Sun className="w-5 h-5 text-yellow-400" />
      </h1>

      {/* Empty placeholder to keep layout aligned */}
      <div className="bg-[#0D1720] px-4 py-2 rounded-xl border border-[#1A2A35] shadow">
        <p className="text-sm font-medium text-gray-400">Welcome</p>
      </div>
    </div>
  );
}
