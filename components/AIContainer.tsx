"use client";

import TopSection from "./TopSection";
import UploadBox from "./UploadBox";
import OffersSection from "./OffersSection";

export default function AIContainer() {
  return (
    <div className="min-h-screen bg-[#0a1014] p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <TopSection />

        {/* Greeting Box */}
        <div className="bg-[#0F1F2C] border border-[#1A2A35] rounded-lg shadow p-6">
          <h3 className="text-sm font-semibold text-gray-200 mb-1">
            First Message / Greeting
          </h3>
          <p className="text-xs text-gray-400 mb-4">
            Upload an image and set a caption for your agent’s first message
          </p>

          <UploadBox />
        </div>

        <OffersSection />
      </div>
    </div>
  );
}
