"use client";

import { useEffect, useState } from "react";
import { Sun } from "lucide-react";

export default function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const formatted = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setTime(formatted);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0F1F2C] p-5 rounded-xl flex items-center justify-between border border-[#1A2A35] shadow-lg">
      <h1 className="text-xl font-semibold text-green-400 flex items-center gap-2">
        Good Morning! <Sun className="w-5 h-5 text-yellow-400" />
      </h1>

      <div className="bg-[#0D1720] px-4 py-2 rounded-xl border border-[#1A2A35] shadow">
        <p className="text-sm font-medium">{time}</p>
      </div>
    </div>
  );
}
