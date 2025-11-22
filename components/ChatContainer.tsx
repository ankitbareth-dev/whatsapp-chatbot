import ChatSidebar from "./ChatSidebar";
import ChatMain from "./ChatMain";
import ChatTopbar from "./ChatTopbar";

export default function ChatContainer() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Top Bar */}
      <ChatTopbar />

      <div className="flex w-full h-[calc(100vh-40px)]">
        {/* Left Chat List */}
        <ChatSidebar />

        {/* Right Main Chat Window */}
        <ChatMain />
      </div>
    </div>
  );
}
