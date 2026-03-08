"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import RevenueChart from "@/sections/RevenueChart";
import ProfitChart from "@/sections/ProfitChart";
import StatusChart from "@/sections/StatusChart";
import StatCard from "@/components/ui/statCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Dashboard() {
  const user = useSelector((state: RootState) => state.auth.loggedInUser);
  const router = useRouter();

  return (
    <div className="p-4 md:p-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg md:text-3xl font-bold">Welcome {user?.name}</h1>
        <Button
          onClick={() => router.push("/data-table")}
          className="bg-muted text-text text-xs md:text-sm"
        >
          View Data Table →
        </Button>
      </div>

      {/* stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
        <StatCard title="Revenue" value="$24,300" trend="up" percent="12%" />
        <StatCard title="Orders" value="1,245" trend="up" percent="8%" />
        <StatCard title="Refunds" value="23" trend="down" percent="3%" />
        <StatCard title="Cancelled" value="500" trend="down" percent="16%" />
      </div>

      {/* top charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-sm md:text-lg text-accent mb-3">Revenue Overview</h3>
          <RevenueChart />
        </div>
        <div>
          <h3 className="text-sm md:text-lg text-accent mb-3">Profit Overview</h3>
          <ProfitChart />
        </div>
      </div>

      {/* bottom chart — pie smaller and centered */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <h3 className="text-sm md:text-lg text-accent mb-3">Transaction Status</h3>
          <StatusChart />
        </div>
      </div>
    </div>
  );
}