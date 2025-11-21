const SideNav = () => {
  return (
    <div className="w-64 h-screen bg-[#0E1A23] text-white flex flex-col justify-between py-4">
      <div>
        <div className="flex items-center gap-3 px-6 py-4">
          <div className="w-10 h-10 bg-[#1BBF89] rounded-xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3l7 5-7 5-7-5 7-5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l7 5 7-5"
              />
            </svg>
          </div>
          <div>
            <h1 className="font-semibold">RK Nutrition</h1>
            <p className="text-xs text-gray-400">WhatsApp Business</p>
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 bg-[#1BBF89] mx-4 px-4 py-3 rounded-xl font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7m-9 12V9m4 10v-6"
              />
            </svg>
            Dashboard
          </a>

          <a
            href="#"
            className="flex items-center gap-3 text-gray-300 hover:bg-[#122530] mx-4 px-4 py-3 rounded-xl transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-9 0a9 9 0 0118 0H3z"
              />
            </svg>
            Chats
          </a>

          <a
            href="#"
            className="flex items-center gap-3 text-gray-300 hover:bg-[#122530] mx-4 px-4 py-3 rounded-xl transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405M21 13V7a2 2 0 00-2-2h-3.586a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 0011.586 2H6a2 2 0 00-2 2v14a2 2 0 002 2h7"
              />
            </svg>
            Bulk Messages
          </a>

          <a
            href="#"
            className="flex items-center gap-3 text-gray-300 hover:bg-[#122530] mx-4 px-4 py-3 rounded-xl transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0-1.104.896-2 2-2h6M12 11c0 1.104.896 2 2 2h6m-8-2H6m6 0a2 2 0 100-4 2 2 0 000 4zm0 0a2 2 0 110 4 2 2 0 010-4z"
              />
            </svg>
            AI Agents
          </a>

          <a
            href="#"
            className="flex items-center gap-3 text-gray-300 hover:bg-[#122530] mx-4 px-4 py-3 rounded-xl transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 14l6-6m3 2a9 9 0 11-6.219-8.56"
              />
            </svg>
            Pricing
          </a>
        </div>
      </div>

      <div className="px-4">
        <div className="bg-[#1BBF89] px-4 py-3 rounded-xl flex items-center justify-between mb-4 cursor-pointer">
          <p className="font-medium">Need Help?</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7-7 7"
            />
          </svg>
        </div>

        <div className="bg-[#122530] px-4 py-3 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1BBF89] flex items-center justify-center">
              <span className="text-white font-semibold">R</span>
            </div>
            <div>
              <p className="font-medium">RK123</p>
              <p className="text-xs text-gray-400">Administrator</p>
            </div>
          </div>

          <button className="text-red-400 hover:text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
