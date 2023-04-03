import { ADD_NOTE, CLEAR_ALL, DELETE_NOTE, INPUT_TEXT, TOGGLE_MODE } from "./actions"

const allNotes = localStorage.getItem('notes') || []

export const defaultState = {
    notes: JSON.parse(allNotes),
    searchText: '',
    darkMode: false
}
export const reducer = (state, action) => {
    switch(action.type) {
        case ADD_NOTE :
            const title = action.payload.note
            const newNote = {
                id: new Date().getTime(),
                title,
                date: new Date().toLocaleString()
            }
            return {...state, notes: [...state.notes, newNote]}
        case DELETE_NOTE :
            const newNotes = state.notes.filter(item => item.id !== action.payload.id)
            return {...state, notes: newNotes}
        case INPUT_TEXT :
            return { ...state, searchText: action.payload.text }
        case TOGGLE_MODE :
            return { ...state, darkMode: !state.darkMode }
        case CLEAR_ALL :
            return { ...state, notes: [] }
        default:
            return state
    }
}