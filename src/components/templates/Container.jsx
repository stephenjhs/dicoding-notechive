import { twclsx } from "@/utils"

export default function Container({ children, className, ...props }) {
  return (
    <div className={twclsx("max-w-[1280px] mx-auto px-4 lg:px-10", className)} {...props}>
      {children}
    </div>
  )
}
