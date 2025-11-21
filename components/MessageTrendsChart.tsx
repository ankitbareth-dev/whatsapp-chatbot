"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { day: "Mon", sent: 38, received: 0 },
  { day: "Tue", sent: 29, received: 0 },
  { day: "Wed", sent: 33, received: 0 },
  { day: "Thu", sent: 39, received: 0 },
  { day: "Fri", sent: 30, received: 0 },
  { day: "Sat", sent: 36, received: 0 },
  { day: "Sun", sent: 32, received: 0 },
];

export default function MessageTrendsChart() {
  return (
    <div className="bg-[#0F1F2C] border border-[#1A2A35] p-6 rounded-2xl h-[350px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-semibold text-lg">
          Message Activity Trends
        </h2>
        <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg">
          LAST 7 DAYS
        </span>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid stroke="#1A2A35" />
          <XAxis dataKey="day" stroke="#708090" />
          <YAxis stroke="#708090" />
          <Tooltip
            contentStyle={{ backgroundColor: "#0D1720", borderRadius: "10px" }}
            labelStyle={{ color: "white" }}
          />
          <Legend wrapperStyle={{ color: "#ccc" }} />
          <Line
            type="monotone"
            dataKey="sent"
            name="Messages Sent"
            stroke="#93C5FD"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="received"
            name="Messages Received"
            stroke="#4ADE80"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
