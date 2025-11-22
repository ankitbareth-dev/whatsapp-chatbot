import { MessageSquare, Inbox, Bot, TrendingUp } from "lucide-react";

export default function Cards() {
  const cards = [
    {
      title: "Messages Sent",
      value: "1.1k",
      icon: <MessageSquare className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Messages Received",
      value: "4",
      icon: <Inbox className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Templates Used",
      value: "156",
      icon: <Bot className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Response Rate",
      value: "0%",
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-[#0F1F2C] border border-[#1A2A35] px-5 py-6 rounded-2xl shadow-lg flex items-center justify-between"
        >
          <div className="flex flex-col">
            <p className="text-sm text-gray-300">{card.title}</p>
            <h2 className="text-2xl font-bold text-white mt-1">{card.value}</h2>
          </div>

          <div className="p-3 bg-[#0D1720] rounded-xl border border-[#1A2A35]">
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
