"use client"

import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/store/store"
import { loadUser } from "@/store/authSlice"
import { useRouter } from "next/navigation"

export default function DataTableLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch()
  const router = useRouter()
  const [checked, setChecked] = useState(false)
  const user = useSelector((state: RootState) => state.auth.loggedInUser)

  useEffect(() => {
    dispatch(loadUser() as any)
    setChecked(true)
  }, [dispatch])

  useEffect(() => {
    if (checked && !user) router.push("/login")
  }, [checked, user, router])

  if (!checked || !user) return null

  return <>{children}</>
}