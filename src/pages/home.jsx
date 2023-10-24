import { SearchNote } from "@/components/molecules"
import { ArchivedNoteList, CreateNote, NoteList } from "@/components/organisms"
import { Container, Head } from "@/components/templates"

import { getInitialNotes } from "@/utils"

import { useState } from "react"

export default function Home() {
  const [notes, setNotes] = useState(getInitialNotes)

  const [query, setQuery] = useState("")

  const addNote = (newNote) => setNotes([...notes, newNote])

  const deleteNote = (id) => setNotes(notes.filter((note) => note.id !== id))

  const toggleArchiveNote = (id) => setNotes((notes) => notes.map((n) => (n.id === id ? { ...n, archived: !n.archived } : n)))

  return (
    <Head title="Notechive &ndash; Simpan catatanmu!">
      <div className="py-4 pt-20">
        <Container>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 lg:col-span-3 h-[fit-content]">
              <CreateNote addNote={addNote} />
            </div>
            <div className="flex flex-col col-span-12 md:col-span-6 lg:col-span-9 space-y-4">
              <div className="w-full">
                <SearchNote query={setQuery} /> 
              </div>
              <NoteList
                deleteNote={deleteNote}
                notes={notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase()))}
                query={query}
                toggleArchiveNote={toggleArchiveNote}
              />
              <ArchivedNoteList
                deleteNote={deleteNote}
                notes={notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase()))}
                query={query}
                toggleArchiveNote={toggleArchiveNote}
              />
            </div>
          </div>
        </Container>
      </div>
    </Head>
  )
}
