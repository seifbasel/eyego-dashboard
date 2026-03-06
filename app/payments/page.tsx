import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  //TODO Fetch data from my API here.
  return [
  {
    "id": "txn_a1b2c3d4",
    "amount": 78.50,
    "status": "processing",
    "email": "oliver.james.harper@gmail.com"
  },
  {
    "id": "txn_e5f6g7h8",
    "amount": 34.99,
    "status": "pending",
    "email": "sophie.marie.clarke@outlook.com"
  },
  {
    "id": "txn_i9j0k1l2",
    "amount": 142.00,
    "status": "processing",
    "email": "benjamin.lee.kwon@yahoo.com"
  },
  {
    "id": "txn_m3n4o5p6",
    "amount": 9.99,
    "status": "failed",
    "email": "isabella.rose.mendez@proton.me"
  },
  {
    "id": "txn_q7r8s9t0",
    "amount": 215.75,
    "status": "pending",
    "email": "ethan.michael.ng@hey.com"
  },
  {
    "id": "txn_u1v2w3x4",
    "amount": 57.20,
    "status": "pending",
    "email": "amelia.grace.sullivan@gmail.com"
  },
  {
    "id": "txn_y5z6a7b8",
    "amount": 299.00,
    "status": "failed",
    "email": "noah.liam.chen@icloud.com"
  },
  {
    "id": "txn_c9d0e1f2",
    "amount": 18.45,
    "status": "failed",
    "email": "mia.elizabeth.vargas@live.com"
  },
  {
    "id": "txn_g3h4i5j6",
    "amount": 89.90,
    "status": "success",
    "email": "lucas.henry.fernandez@gmail.com"
  },
  {
    "id": "txn_k7l8m9n0",
    "amount": 124.30,
    "status": "pending",
    "email": "charlotte.zoe.patel@fastmail.fm"
  },
  {
    "id": "txn_o1p2q3r4",
    "amount": 45.00,
    "status": "success",
    "email": "alexander.jayden.torres@yahoo.com"
  },
  {
    "id": "txn_s5t6u7v8",
    "amount": 6.99,
    "status": "failed",
    "email": "harper.evelyn.ramos@outlook.com"
  }
]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}