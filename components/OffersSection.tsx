import OfferEmptyState from "./OfferEmptyState";

export default function OffersSection() {
  return (
    <div className="bg-[#0F1F2C] border border-[#1A2A35] rounded-lg shadow p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-200">
            Current Offers
          </h3>
          <p className="text-sm text-gray-400">
            Manage your business offers and promotions
          </p>
        </div>

        <button className="px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">
          + Add Offer
        </button>
      </div>

      <div className="min-h-[180px] border border-dashed border-[#1A2A35] rounded-md p-6 flex items-center justify-center bg-[#0D1720]">
        <OfferEmptyState />
      </div>
    </div>
  );
}
