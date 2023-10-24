import { Button } from "@/components/atoms"

import { formatDate } from "@/utils"

export default function NoteCard({ deleteNote, toggleArchiveNote, id, title, body, createdAt, archived }) {
  return (
    <div className="border border-muted p-4 space-y-3 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="space-y-1">
          <h3>{title}</h3>
          <p className="text-xs text-muted-500">{formatDate(createdAt)}</p>
        </div>
        <p className="font-desc leading-relaxed">{body}</p>
      </div>
      <div className="grid grid-cols-2">
        <Button className="px-0 bg-error-100 text-error" onClick={() => deleteNote(id)}>
          Delete
        </Button>
        {archived ? (
          <Button className="px-0 bg-primary" onClick={() => toggleArchiveNote(id)}>Pindahkan</Button>
        ) : (
          <Button className="px-0 bg-archived" onClick={() => toggleArchiveNote(id)}>Arsipkan</Button>
        )}
      </div>
    </div>
  )
}
