"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useAuth() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

    if (token === "valid-user") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    setLoading(false);
  }, []);

  const login = (userId: string, password: string) => {
    if (userId === "Rk123" && password === "12345") {
      // Save to localStorage
      localStorage.setItem("authToken", "valid-user");

      // Save cookie for middleware
      document.cookie =
        "authToken=valid-user; path=/; max-age=86400; SameSite=Lax";

      router.push("/dashboard");
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("authToken");

    // delete cookie
    document.cookie = "authToken=; path=/; max-age=0; SameSite=Lax";

    router.push("/");
  };

  return {
    isAuthenticated,
    loading,
    login,
    logout,
  };
}
