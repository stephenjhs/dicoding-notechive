import { BasicCard, Button, Input, Textarea } from "@/components/atoms"

import { twclsx } from "@/utils"

import { useCallback, useEffect, useState } from "react"

export default function CreateNote({ addNote }) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [maxLength, setMaxLength] = useState(50)
  const [isError, setIsError] = useState(false)

  const handleTitleChange = (e) => {
    if (e.target.value.length > 50) return
    setTitle(e.target.value)
  }

  const handleBodyChange = useCallback((e) => setBody(e.target.value), [body])

  const clearInputValue = () => {
    setTitle("")
    setBody("")
  }

  const handleSubmit = () => {
    if (title.length === 0 || body.length === 0) {
      setIsError(true)
      return
    }

    setIsError(false)
    addNote({
      id: new Date().toISOString(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false
    })

    clearInputValue()
  }

  useEffect(() => {
    setMaxLength(50 - title.length)
  }, [title])

  return (
    <BasicCard headline="Buat catatan">
      <div className="flex flex-col gap-1">
        <Input
          placeholder="Judul catatan"
          onChange={handleTitleChange}
          value={title}
          className={isError && title.length === 0 && "border-error "}
        />
        <span className={twclsx("text-xs", maxLength === 0 && "text-error")}>
          {maxLength === 0 ? "Judul terlalu panjang!" : `Karakter tersisa: ${maxLength}`}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Textarea
          placeholder="Tulis catatanmu..."
          value={body}
          onChange={handleBodyChange}
          className={isError && body.length === 0 && "border-error "}
        />
      </div>
      <Button className="rounded" onClick={handleSubmit}>
        Tambahkan!
      </Button>
    </BasicCard>
  )
}
