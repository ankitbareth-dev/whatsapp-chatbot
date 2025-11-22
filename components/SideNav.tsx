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
  Menu,
  X,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

const SideNav = () => {
  const pathname = usePathname();
  const { logout } = useAuth();

  // Mobile sidebar toggle
  const [open, setOpen] = useState(false);

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
    <>
      {/* Mobile Topbar */}
      <div className="md:hidden fixed top-0 left-0 w-full h-14 bg-[#0E1A23] flex items-center px-4 z-40 border-b border-gray-700">
        <button onClick={() => setOpen(true)}>
          <Menu size={26} className="text-white" />
        </button>
        <h1 className="text-white text-lg font-semibold mx-auto">
          RK Nutrition
        </h1>
      </div>

      {/* Background Overlay When Sidebar Open */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-[#0E1A23] text-white flex flex-col justify-between py-4 z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
      >
        {/* Mobile close button */}
        <div className="md:hidden flex justify-end px-4">
          <button onClick={() => setOpen(false)}>
            <X size={26} className="text-white" />
          </button>
        </div>

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

          <div className="border-b border-gray-700 mx-4 my-3"></div>

          <div className="mt-4 space-y-1">
            {menu.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
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

            <button
              className="text-red-400 hover:text-red-500"
              onClick={() => {
                logout();
                setOpen(false);
              }}
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
