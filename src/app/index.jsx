import AppLayout from "@/layouts/AppLayout"

import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"

const Home = lazy(() => import("@/pages/home"))

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
