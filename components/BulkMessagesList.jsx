import { Edit, Trash } from "lucide-react";

export default function BulkMessagesList() {
  const contacts = [
    { name: "Unknown", phone: "919860428960", source: "Direct" },
    { name: "Unknown", phone: "919079003077", source: "Direct" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {contacts.map((c, index) => (
        <div
          key={index}
          className="bg-[#0F1F2C] border border-[#1A2A35] p-4 rounded-xl flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
              {c.name[0]}
            </div>

            <div>
              <h3 className="text-white font-semibold">{c.name}</h3>
              <p className="text-gray-400 text-sm">{c.phone}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="bg-[#132733] p-2 rounded-lg border border-[#1A2A35] text-gray-300 hover:text-white">
              <Edit size={16} />
            </button>

            <button className="bg-red-600 p-2 rounded-lg text-white">
              <Trash size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
