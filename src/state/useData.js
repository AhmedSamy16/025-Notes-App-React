import { createContext, useContext } from "react"


export const appContext = createContext()

export const useData = () => useContext(appContext)