"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  MessageCircle,
  Megaphone,
  Bot,
  CreditCard,
  LogOut,
  ChevronRight,
} from "lucide-react";

const SideNav = () => {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/dashboard", icon: <Home size={18} /> },
    { name: "Chats", href: "/chats", icon: <MessageCircle size={18} /> },
    {
      name: "Bulk",
      label: "Bulk Messages",
      href: "/bulk",
      icon: <Megaphone size={18} />,
    },
    {
      name: "Agents",
      label: "AI Agents",
      href: "/agents",
      icon: <Bot size={18} />,
    },
    { name: "Pricing", href: "/pricing", icon: <CreditCard size={18} /> },
  ];

  return (
    <div className="w-64 h-screen bg-[#0E1A23] text-white flex flex-col justify-between py-4">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 px-6 py-4">
          <div className="w-10 h-10 bg-[#1BBF89] rounded-xl flex items-center justify-center">
            <Home size={22} stroke="white" />
          </div>
          <div>
            <h1 className="font-semibold">RK Nutrition</h1>
            <p className="text-xs text-gray-400">WhatsApp Business</p>
          </div>
        </div>

        {/* Separator */}
        <div className="border-b border-gray-700 mx-4 my-3"></div>

        {/* Menu */}
        <div className="mt-4 space-y-1">
          {menu.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 mx-4 px-4 py-3 rounded-xl transition
                  ${
                    isActive
                      ? "bg-[#1BBF89] text-white"
                      : "text-gray-300 hover:bg-[#122530]"
                  }
                `}
              >
                <span>{item.icon}</span>
                <span>{item.label || item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4">
        <div className="bg-[#1BBF89] px-4 py-3 rounded-xl flex items-center justify-between mb-4 cursor-pointer">
          <p className="font-medium">Need Help?</p>
          <ChevronRight size={18} stroke="white" />
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
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
