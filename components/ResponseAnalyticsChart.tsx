"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#4ADE80", "#94A3B8"];

const data = [
  { name: "Responded", value: 0 },
  { name: "Pending", value: 100 },
];

export default function ResponseAnalyticsChart() {
  return (
    <div className="bg-[#0F1F2C] border border-[#1A2A35] p-6 rounded-2xl h-[350px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-semibold text-lg">Response Analytics</h2>

        <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-lg">
          LIVE
        </span>
      </div>

      {/* Wrapper that ensures perfect relative centering */}
      <div className="relative flex items-center justify-center h-[260px]">
        <ResponsiveContainer width="80%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Legend wrapperStyle={{ color: "#ccc" }} />
          </PieChart>
        </ResponsiveContainer>

        {/* Absolutely centered and smooth */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl text-white font-bold">0%</p>
          <p className="text-gray-400 text-sm">Response Rate</p>
        </div>
      </div>
    </div>
  );
}
