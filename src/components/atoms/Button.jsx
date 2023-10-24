import { twclsx } from "@/utils"

export default function Button({ className, children, ...props }) {
  return (
    <button
      className={twclsx("px-4 py-2 bg-primary text-white text-sm font-semibold text-center", className)}
      {...props}
    >
      {children}
    </button>
  )
}
