import { MessageCircle } from "lucide-react";

export default function ChatMain() {
  return (
    <div className="flex-1 h-full flex flex-col items-center justify-center bg-[#08141C]">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-[#1B2732] flex items-center justify-center">
          <MessageCircle className="w-10 h-10 text-gray-400" />
        </div>

        <h2 className="text-2xl font-semibold text-white mt-4">
          WhatsApp Business Hub
        </h2>
        <p className="text-gray-400 mt-1 text-center">
          Select a conversation to start messaging
          <br />
          with your customers
        </p>
      </div>
    </div>
  );
}
