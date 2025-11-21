"use client";

import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden grid grid-cols-1 md:grid-cols-2"
      >
        {/* Left Section */}
        <div className="p-8 lg:p-12 flex flex-col justify-center bg-white rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-2 text-center text-black w-full">
            Login
          </h1>

          {/* User ID */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700">User Id</label>
            <div className="flex items-center mt-2 bg-gray-100 rounded-xl p-3 border border-gray-300">
              <Mail className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Enter your user id"
                className="bg-gray-100 text-black outline-none w-full placeholder-gray-500"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center mt-2 bg-gray-100 rounded-xl p-3 border border-gray-300">
              <Lock className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl mt-4 shadow-md"
          >
            Login
          </motion.button>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 text-center shadow-2xl flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-9-4.5-9 4.5m18 0l-9 4.5m9-4.5v9l-9 4.5m0-9l-9-4.5m9 4.5v9m-9-13.5v9l9 4.5"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-3 tracking-wide text-center">
              MSMEAI TOOLS
            </h2>
            <p className="text-sm text-white/80 leading-relaxed max-w-xs text-center mx-auto">
              Discover a new way to engage with your customers.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
