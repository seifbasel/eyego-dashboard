"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { monthlyRevenue } from "@/store/Mockdata";

export default function RevenueChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const chart = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: monthlyRevenue.map((d) => d.month),
        datasets: [
          {
            label: "Revenue",
            data: monthlyRevenue.map((d) => d.revenue),
            backgroundColor: "#0066FF",
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: {
            ticks: {
              callback: (val) => `$${val}`,
            },
          },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return (
    <div className="bg-card dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 p-5">
      <h2 className="text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-4">
        Monthly Revenue
      </h2>
      <canvas ref={canvasRef} />
    </div>
  );
}
