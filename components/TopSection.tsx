import { RefreshCw, PlusCircle } from "lucide-react";

export default function TopSection() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          🤖 AI Agents
        </h1>
        <p className="text-sm text-gray-400">
          Manage greeting messages and offers for your WhatsApp agent
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-3 py-2 rounded-md border border-[#1A2A35] bg-[#0F1F2C] text-gray-200 shadow hover:bg-[#132633] flex items-center gap-2">
          <RefreshCw className="w-4 h-4" /> Refresh
        </button>

        <button className="px-3 py-2 rounded-md bg-emerald-600 text-white shadow hover:bg-emerald-700 flex items-center gap-2">
          <PlusCircle className="w-4 h-4" /> Add Offer
        </button>
      </div>
    </div>
  );
}
