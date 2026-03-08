"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import RevenueChart from "@/sections/RevenueChart";
import StatCard from "@/components/ui/statCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
export default function Dashboard() {
  const user = useSelector((state: RootState) => state.auth.loggedInUser);
  const router = useRouter();

  return (
    <div className="p-10 ">
      <div className="flex items-center  justify-between mb-6">
        <h1 className="text-xl md:text-3xl font-bold">Welcome {user?.name}</h1>
        <Button
          onClick={() => router.push("/data-table")}
          className="bg-muted text-text"
        >
          View Data Table →
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm md:text-xl text-accent mb-4">Revenue Overview</h3>
          <RevenueChart />
        </div>

        <div className="space-y-4">
          <StatCard title="Revenue" value="$24,300" trend="up" percent="12%" />
          <StatCard title="Orders" value="1,245" trend="up" percent="8%" />
          <StatCard title="Refunds" value="23" trend="down" percent="3%" />
          <StatCard title="Cancelled" value="500" trend="down" percent="16%" />
        </div>
      </div>
    </div>
  );
}
