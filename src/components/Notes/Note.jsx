import { MdDeleteForever } from "react-icons/md"
import { DELETE_NOTE } from "../../state/actions"
import { useData } from "../../state/useData"

const Note = ({ id, title, date }) => {
    const { dispatch } = useData()
    const deleteNote = (id) => {
        dispatch({ type: DELETE_NOTE, payload: { id } })
    }
    return (
        <div className="note">
            <span>{title}</span>
            <div className="notes-footer">
                <small>{date}</small>
                <MdDeleteForever 
                    className="delete-icon" 
                    size="1.3em" 
                    onClick={() => deleteNote(id)} 
                />
            </div>
        </div>
    )
}

export default Note