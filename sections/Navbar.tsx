"use client";

import { TableIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-200 px-8 py-5 dark:border-gray-800">
      <div className="flex items-center gap-3">
        <TableIcon className="w-8 h-8 text-gray-900 dark:text-white" />
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Eyego Platform
        </h1>
      </div>
      
      <div className="flex items-center">
        {mounted && (
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        )}
      </div>
    </nav>
  );
}