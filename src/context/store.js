import { createContext, useReducer } from 'react'
import { rootReducer, initialRootState } from 'context/reducer/'

export const Store = createContext()

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialRootState)
    const value = { state, dispatch }

    return <Store.Provider value={value}>{children}</Store.Provider>
}
