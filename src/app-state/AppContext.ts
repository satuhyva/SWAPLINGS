import { createContext } from 'react'
import { initialState } from './initialState'
import { AppContextType } from '../types/app-state/AppContextType'

const AppContext = createContext<AppContextType>({
    state: initialState,
    dispatch: () => null
})

export default AppContext

