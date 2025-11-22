import { Search } from "lucide-react";

export default function BulkMessagesSearch() {
  return (
    <div className="flex items-center justify-between">
      {/* Search */}
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Search contacts..."
          className="w-full bg-[#0F1F2C] border border-[#1A2A35] px-4 py-2 pl-10 rounded-xl text-white outline-none"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      </div>

      {/* Dropdown */}
      <select className="bg-[#0F1F2C] border border-[#1A2A35] text-gray-300 px-4 py-2 rounded-xl ml-4">
        <option>All Sources</option>
      </select>
    </div>
  );
}
