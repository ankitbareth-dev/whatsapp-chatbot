import { Tag, ChevronDown } from "lucide-react";

export default function ChatTopbar() {
  return (
    <div className="w-full px-6 py-4 border-b border-[#1A2A35] bg-[#0F1F2C] flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-white">Chats</h1>

        <span className="px-3 py-1 rounded-full bg-[#102A25] text-green-400 text-sm">
          2 active
        </span>

        <div className="flex items-center gap-2 ml-4">
          <button className="px-3 py-1 rounded-full bg-[#132028] text-white/80 text-sm">
            All Chats
          </button>

          <button className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-[#132028] text-white/70">
            ● all
          </button>

          <button className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-[#132028] text-white/70">
            ● new
          </button>
        </div>
      </div>

      {/* Right Section */}
      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1720] border border-[#1A2A35] text-green-400 text-sm shadow">
        <Tag className="w-4 h-4" />
        Manage Tags
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
}
