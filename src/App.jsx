import NotesList from "./components/Notes/NotesList"
import { useEffect, useReducer } from "react"
import { reducer, defaultState } from "./state/reducer"
import { appContext } from "./state/useData"
import Form from "./components/Form/Form"
import Header from "./components/Header/Header"
import { CLEAR_ALL } from "./state/actions"

function App() {
  const [data, dispatch] = useReducer(reducer, defaultState)
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(data.notes))
  }, [data.notes])
  return (
    <appContext.Provider value={ { data, dispatch } }>
      <div className={`${data.darkMode && 'dark-mode'}`}>
        <div className="container">
          <Header />
          <Form />
          <NotesList />
          {data.notes.length > 0 ? <button className="btn btn-clear" onClick={() => dispatch({ type: CLEAR_ALL })}>Clear All</button> : null}
        </div>
      </div>
    </appContext.Provider>
  )
}

export default App
