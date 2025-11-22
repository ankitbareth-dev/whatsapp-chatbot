import { Users, Upload, CheckCircle } from "lucide-react";

export default function BulkMessagesStats() {
  const stats = [
    {
      title: "Direct Contacts",
      value: 2,
      icon: <Users size={22} />,
      color: "bg-purple-600",
    },
    {
      title: "Imported Contacts",
      value: 0,
      icon: <Upload size={22} />,
      color: "bg-pink-600",
    },
    {
      title: "Total Contacts",
      value: 2,
      icon: <CheckCircle size={22} />,
      color: "bg-blue-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="bg-[#0F1F2C] border border-[#1A2A35] p-5 rounded-xl flex items-center gap-4"
        >
          <div className={`${item.color} p-3 rounded-xl text-white`}>
            {item.icon}
          </div>

          <div>
            <p className="text-gray-300">{item.title}</p>
            <h2 className="text-3xl font-bold text-white">{item.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
