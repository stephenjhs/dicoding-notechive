import { BasicCard } from "@/components/atoms"
import { NoteCard } from "@/components/molecules"

import { sortNotes } from "@/utils"

export default function ArchivedNoteList({ deleteNote, toggleArchiveNote, notes, query }) {
  return (
    <BasicCard headline="Arsip">
      <div className="flex flex-col gap-2">
        {notes.filter((n) => n.archived).length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {notes
              .filter((n) => n.archived) 
              .sort(sortNotes)
              .map((note) => (
                <NoteCard key={note.id} deleteNote={deleteNote} toggleArchiveNote={toggleArchiveNote} {...note} />
              ))}
          </div>
        ) : (
          <div className="text-center">
            <div className="text-center">
              {query.length === 0 ? (
                <p>Tidak ada arsip!</p>
              ) : (
                <p>
                  Tidak ada arsip yang berjudul <b>{query}</b>
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </BasicCard>
  )
}
