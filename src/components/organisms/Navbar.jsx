import { SearchNote } from "@/components/molecules"
import { Container } from "@/components/templates"

export default function Navbar() {
  return (
    <header className="w-full border-b border-muted fixed bg-white z-10">
      <Container>
        <div className="flex items-center justify-center py-4">
          <p className="font-bold text-lg">
            NOTE<span className="text-primary">CHIVE</span>
          </p>
        </div>
      </Container>
    </header>
  )
}
