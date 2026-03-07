import { mockPayments } from "@/store/Mockdata"
import { columns } from "./columns"
import { DataTable } from "./data-table"

export default function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={mockPayments} />
    </div>
  )
}