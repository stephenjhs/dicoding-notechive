import { Input } from "@/components/atoms"

import { BiSearch } from "react-icons/bi"

export default function SearchNote({ query }) {
  return (
    <div className="relative">
      <Input onChange={(e) => query(e.target.value)} placeholder="Catatan apa yang ingin anda cari?" />
      <div className="absolute right-0 inline-flex items-center justify-center w-10 h-full text-lg">
        <BiSearch />
      </div>
    </div>
  )
}
