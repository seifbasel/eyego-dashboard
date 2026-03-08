"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const data = {
  labels: ["Success", "Pending", "Processing", "Failed"],
  values: [12, 6, 5, 4],
  colors: ["#22c55e", "#eab308", "#0066FF", "#ef4444"],
};

export default function StatusChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const chart = new Chart(canvasRef.current, {
      type: "pie",
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.values,
            backgroundColor: data.colors,
            borderColor: "#fff",
            borderWidth: 2,
            hoverOffset: 10,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              padding: 12,
              usePointStyle: true,
              pointStyle: "circle",
              font: { size: 11 },
            },
          },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 p-4">
      <h2 className="text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-3">
        Transaction Status Breakdown
      </h2>
      <canvas ref={canvasRef} />
    </div>
  );
}