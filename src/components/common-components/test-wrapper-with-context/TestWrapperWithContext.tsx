import React from 'react'
// import { Provider as PaperProvider } from 'react-native-paper'
import { initialState } from '../../../app-state/initialState'
import AppContext from '../../../app-state/AppContext'
import { ReactNode } from 'react'


// Jest tests do not work properly, if Context is wrapped in PaperProvider.

const TestWrapperWithContext: React.FC<{ 
    dispatchMock: jest.Mock<any, any>, 
    children: ReactNode 
}> = ({ dispatchMock, children }) => {

    const state = initialState
    const dispatch = dispatchMock

    return (
        // <PaperProvider>
            <AppContext.Provider value={{ state, dispatch }}>
                {children}
            </AppContext.Provider>
        // </PaperProvider>
    )
}


export default TestWrapperWithContext


