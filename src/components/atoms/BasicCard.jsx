import { twclsx } from "@/utils"

export default function BasicCard({ children, className, headline }) {
  return (
    <div className={twclsx("border border-muted rounded p-4 space-y-4", className)}>
      <div className="space-y-2">
        <h2>{headline}</h2>
        <hr className="border-0 border-b border-primary border-dashed" />
      </div>
      {children}
    </div>
  )
}
