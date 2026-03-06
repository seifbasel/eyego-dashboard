"use client";

import { Button } from "@/components/ui/button";
import { TableIcon } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  const handleSignup = () => {
    router.push("/signup");
  };
  

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-black">
      <Navbar />

      <div className="flex min-h-[calc(100vh-73px)] w-full items-center justify-center px-4">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="relative z-10 mx-auto max-w-5xl text-center text-3xl font-bold text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
            {"Explore my responsive modern dashboard using React, Next, Tailwind CSS"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative z-10 mx-auto max-w-2xl mt-6 text-center text-xl text-gray-600 dark:text-gray-400"
          >
            see a glimpse of what we offer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button onClick={handleLogin} variant="default" size="2xl">
              Login
            </Button>
            <Button onClick={handleSignup} variant="outline" size="2xl">
              Sign up
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-200 px-8 py-5 dark:border-gray-800">
      <div className="flex items-center gap-3">
        <TableIcon className="w-8 h-8 text-gray-900 dark:text-white" />
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Eyego Platform
        </h1>
      </div>
    </nav>
  );
};
