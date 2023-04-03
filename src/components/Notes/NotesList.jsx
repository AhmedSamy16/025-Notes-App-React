import Note from "./Note"
import AddNote from "./AddNote"
import "./notes.css"
import { useData } from "../../state/useData"

const NotesList = () => {
    const { data } = useData()
    const notes = data.notes?.filter(item => item.title.toLowerCase().includes(data.searchText.toLowerCase())) || []
    return (
        <div className="notes-list">
            {notes.map((item) => {
                return <Note key={item.id} {...item} />
            })}
            <AddNote />
        </div>
    )
}

export default NotesList