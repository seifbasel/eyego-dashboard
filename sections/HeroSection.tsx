"use client";

import { Button } from "@/components/ui/button";
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
      <div className="flex min-h-[calc(100vh-73px)] w-full items-center justify-center px-4">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="relative z-10 mx-auto max-w-5xl text-center text-3xl font-sans text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
            {"Explore my responsive modern dashboard for Eyego"
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
            className="relative z-10 mx-auto font-sans max-w-2xl mt-6 text-center text-xl text-gray-600 dark:text-gray-400"
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