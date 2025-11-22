import { RefreshCcw, Zap } from "lucide-react";

export default function BulkMessagesTopBar() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white flex gap-2 items-center">
          📩 Bulk Messages
        </h1>
        <p className="text-gray-400 mt-1">
          Manage contacts, create templates, and run powerful campaigns
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 bg-[#0F1F2C] border border-[#1A2A35] px-4 py-2 rounded-xl text-gray-200 hover:bg-[#132733]">
          <RefreshCcw size={16} /> Refresh All
        </button>

        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl text-white">
          <Zap size={16} /> Quick Campaign
        </button>
      </div>
    </div>
  );
}
