import React from 'react'
import MainApp from './src/components/main-app/MainApp'
import AppContextWithState from './src/app-state/AppContextWithState'
import { Provider as PaperProvider } from 'react-native-paper'
import 'react-native-gesture-handler'



const App = () => {

    console.log('HUHUU FROM SWAPLINGS')

    return (
        <PaperProvider>
            <AppContextWithState>
                <MainApp/>
            </AppContextWithState>
        </PaperProvider>
    )
}

export default App

