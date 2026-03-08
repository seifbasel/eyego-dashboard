"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  values: [1200, 3100, 2400, 4800, 3900, 5600],
};

export default function ProfitChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const chart = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "Profit",
            data: data.values,
            borderColor: "#0066FF",
            backgroundColor: "rgba(0, 102, 255, 0.1)",
            fill: true,
            tension: 0.4,
            pointStyle: "star",
            pointRadius: 8,
            pointHoverRadius: 12,
            pointBackgroundColor: "#0066FF",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
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
      <h2 className="text-base font-semibold text-gray-700 dark:text-zinc-300 mb-4">
        Profit Overview
      </h2>
      <canvas ref={canvasRef} />
    </div>
  );
}