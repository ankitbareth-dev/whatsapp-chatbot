"use client";

import { Sun } from "lucide-react";

export default function TopBar() {
  return (
    <div
      className="w-full bg-[#0F1F2C] p-4 sm:p-5 rounded-xl 
     flex flex-col sm:flex-row gap-3 sm:gap-0 
     items-start sm:items-center justify-between 
     border border-[#1A2A35] shadow-lg
     mt-16 sm:mt-0"
    >
      <h1 className="text-lg sm:text-xl font-semibold text-green-400 flex items-center gap-2">
        Good Morning! <Sun className="w-5 h-5 text-yellow-400" />
      </h1>

      <div className="bg-[#0D1720] px-4 py-2 rounded-xl border border-[#1A2A35] shadow w-full sm:w-auto text-center sm:text-left">
        <p className="text-sm font-medium text-gray-400">Welcome</p>
      </div>
    </div>
  );
}
