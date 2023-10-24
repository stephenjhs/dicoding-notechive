import { Navbar } from "@/components/organisms"

import { Outlet } from "react-router-dom"

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1920px] overflow-hidden mx-auto">
        <Outlet />
      </main>
    </>
  )
}
