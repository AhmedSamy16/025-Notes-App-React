import { useState } from "react"
import { useData } from "../../state/useData"
import { ADD_NOTE } from "../../state/actions"

const AddNote = () => {
    const { dispatch } = useData()
    const [text, setText] = useState('')
    const handleChange = (e) => {
        if (text.length < 200) {
            setText(e.target.value)
        }
    }
    const saveNote = () => {
        if (text.trim().length) {
            dispatch({ type: ADD_NOTE, payload: {
                note: text
            }})
            setText('')
        }
    }
    return (
        <div className="note new">
            <textarea 
                rows="8" 
                cols="10" 
                placeholder="Type to add a note ..."
                value={text}
                onChange={handleChange}
            >
            </textarea>
            <div className="notes-footer">
                <small>{200 - text.length} charachters remaining</small>
                <button className="btn" onClick={saveNote}>Save</button>
            </div>
        </div>
    )
}

export default AddNote