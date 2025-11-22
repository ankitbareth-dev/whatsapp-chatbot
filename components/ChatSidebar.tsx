export default function ChatSidebar() {
  const chats = [
    { number: "919860428960", last: "4d", hasMsg: true },
    { number: "919079003077", last: "No messages", hasMsg: false },
  ];

  return (
    <div className="w-1/3 max-w-[320px] h-full bg-[#0B1822] border-r border-[#1A2A35] flex flex-col">
      {/* Search */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search conversations..."
          className="w-full bg-[#ffffff] border border-[#1A2A35] px-4 py-2 rounded-xl text-sm focus:outline-none"
        />
      </div>

      {/* Chat List */}
      <div className="flex flex-col">
        {chats.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-4 border-b border-[#1A2A35] hover:bg-[#11232F] cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-green-500 text-green-400 font-semibold">
              91
            </div>

            <div>
              <p className="text-white font-medium">{item.number}</p>
              <p className="text-xs text-gray-400">
                {item.hasMsg ? "Hover to preview" : "No messages"}
              </p>
            </div>

            <p className="ml-auto text-sm text-gray-400">{item.last}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
