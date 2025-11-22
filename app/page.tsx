"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import { motion } from "framer-motion";
import { Mail, Lock, Shield } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated, login, loading } = useAuth();

  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [btnLoading, setBtnLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, loading, router]);

  const handleLogin = async () => {
    setError("");
    setBtnLoading(true);

    await new Promise((res) => setTimeout(res, 2000));

    const success = login(userId, password);

    if (!success) {
      setError("Invalid credentials!");
      setBtnLoading(false);
    }
  };

  if (loading) return null;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0E1A23] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-[#122530] text-white rounded-3xl shadow-2xl border border-gray-700 overflow-hidden grid grid-cols-1 md:grid-cols-2"
      >
        {/* Left Section */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6 text-center text-[#1BBF89]">
            Login
          </h1>

          {/* Error message */}
          {error && (
            <div className="mb-4 text-red-400 text-center font-medium">
              {error}
            </div>
          )}

          {/* User ID */}
          <div className="mb-6">
            <label className="text-sm text-gray-300">User ID</label>
            <div className="flex items-center mt-2 bg-[#0E1A23] rounded-xl p-3 border border-gray-700">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter your user id"
                className="bg-transparent text-white outline-none w-full"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-sm text-gray-300">Password</label>
            <div className="flex items-center mt-2 bg-[#0E1A23] rounded-xl p-3 border border-gray-700">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent text-white outline-none w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#1BBF89] hover:bg-[#16a572] text-white font-semibold py-3 rounded-xl mt-2 shadow-md transition"
            onClick={handleLogin}
            disabled={btnLoading}
          >
            {btnLoading ? "Checking..." : "Login"}
          </motion.button>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex flex-col items-center justify-center bg-[#1BBF89] p-10">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 text-center shadow-xl flex flex-col items-center">
            <Shield className="w-14 h-14 text-white mb-6" />
            <h2 className="text-2xl font-semibold mb-3 tracking-wide text-white">
              MSMEAI Tools
            </h2>
            <p className="text-white/80 text-sm max-w-xs">
              Discover a new way to engage with your customers.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
