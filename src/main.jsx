import "@/styles/tailwind.css"

import App from "@/app"

import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

const element = document.getElementById("root")

const root = createRoot(element)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
