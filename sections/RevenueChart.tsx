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
    <div className="bg-white dark:bg-zinc-900 rounded-xl border p-5">
      <h2 className="text-base font-semibold text-text dark:text-zinc-300 mb-4">
        Monthly Revenue
      </h2>
      <canvas ref={canvasRef} />
    </div>
  );
}
