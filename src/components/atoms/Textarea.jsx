import { twclsx } from "@/utils"

export default function Textarea({ className, ...props }) {
  return (
    <textarea
      className={twclsx("border border-input rounded px-2 py-1.5 outline-none w-full resize-none h-40", className)}
      {...props}
    />
  )
}
