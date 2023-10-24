import { twclsx } from "@/utils"

export default function Input({ className, ...props }) {
  return (
    <input className={twclsx("border border-input rounded px-2 py-1.5 outline-none w-full", className)} {...props} />
  )
}
