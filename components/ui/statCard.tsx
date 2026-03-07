type StatCardProps = {
  title: string
  value: string
  trend: "up" | "down"
  percent: string
  description?: string
}

export default function StatCard({
  title,
  value,
  trend,
  percent,
  description = "vs last month",
}: StatCardProps) {
  const isUp = trend === "up"

  return (
    <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm">

      <p className="text-xs font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wide">
        {title}
      </p>

      <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
        {value}
      </p>

      <div className="flex items-center gap-1 mt-2">
        <span
          className={`text-xs font-semibold px-1.5 py-0.5 rounded ${
            isUp
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
          }`}
        >
          {isUp ? "↑" : "↓"} {percent}
        </span>
        <span className="text-xs text-gray-400 dark:text-zinc-500">
          {description}
        </span>
      </div>

    </div>
  )
}