import React, { useReducer } from 'react'
import { reducer } from './reducer'
import { initialState } from './initialState'
import AppContext from './AppContext'


const AppContextWithState: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextWithState

