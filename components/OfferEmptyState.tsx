import { Tag } from "lucide-react";

export default function OfferEmptyState() {
  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-full bg-[#132633] mx-auto flex items-center justify-center mb-4 border border-[#1A2A35]">
        <Tag className="w-6 h-6 text-gray-300" />
      </div>
      <h4 className="text-lg font-semibold text-gray-200">
        No Offers Available
      </h4>
      <p className="text-sm text-gray-400 mt-2">
        Add your first offer to start promoting your business
      </p>
      <button className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
        + Add Your First Offer
      </button>
    </div>
  );
}
