"use client";

import { TableIcon, Moon, Sun, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { logout } from "@/store/authSlice";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state: RootState) => state.auth.loggedInUser);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  const home = () => {
    router.push("/");
  };

  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-200 px-8 py-5 dark:border-gray-800">
      <div className="flex items-center gap-3 cursor-pointer" onClick={home}>
        <TableIcon className="w-8 h-8 text-gray-900 dark:text-white" />
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Eyego
        </h1>
      </div>

      <div className="flex items-center gap-3">
        {mounted && (
          <Button onClick={toggleTheme} variant="ghost" size="icon" className="rounded-full">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        )}

        {user && (
          <Button onClick={handleLogout} variant="ghost" size="sm" className="flex items-center gap-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
}