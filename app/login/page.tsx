"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/authSlice";
import { useRouter } from "next/navigation";
import { RootState, AppDispatch } from "@/store/store";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await dispatch(login({ email, password }));
    if (result.meta.requestStatus === "fulfilled") {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2">
          <div className="w-full">
            {/* <Image
              src="/design-stats-animate.svg"
              alt="Business illustration"
              width={800}
              height={800}
              className="w-full h-40 md:h-auto scale-120 md:scale-125"
              priority
            /> */}
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="bg-white dark:bg-black shadow-input md:border-2 border-b-cyan-400 rounded-none p-6 md:rounded-2xl md:p-8">
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Login to your account to continue
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="you@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-8">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                />
              </LabelInputContainer>

              {error && (
                <p className="text-red-500 text-sm text-center mb-4">{error}</p>
              )}

              <Button
                className="group/btn relative block h-10 w-full rounded-md bg-linear-to-br from-black to-neutral-600 font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login →"}
              </Button>

              <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 mt-4">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-cyan-500 hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
