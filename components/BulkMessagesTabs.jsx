import { Users, FileText, Megaphone } from "lucide-react";

export default function BulkMessagesTabs() {
  return (
    <div className="flex items-center gap-4 bg-[#0F1F2C] p-3 rounded-xl border border-[#1A2A35]">
      <button className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg text-white">
        <Users size={16} /> Contacts{" "}
        <span className="bg-black/20 px-2 rounded">2</span>
      </button>

      <button className="flex items-center gap-2 text-gray-300 hover:text-white">
        <FileText size={16} /> Templates
        <span className="text-gray-400">5</span>
      </button>

      <button className="flex items-center gap-2 text-gray-300 hover:text-white">
        <Megaphone size={16} /> Campaigns
        <span className="text-gray-400">5</span>
      </button>
    </div>
  );
}
