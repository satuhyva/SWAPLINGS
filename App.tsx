import React from 'react'
import MainApp from './src/components/main-app/MainApp'
import AppContextWithState from './src/app-state/AppContextWithState'
import { Provider as PaperProvider } from 'react-native-paper'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
// Next line is needed for gestures to function properly, even though it is not needed here!
import 'react-native-gesture-handler'



const App = () => {
  console.log('HUHUU FROM SWAPLINGS')

  // TODO: .env REACT_APP_...
  const client = new ApolloClient({
      uri: 'http://localhost:4000/graphql',
      cache: new InMemoryCache()
  })


  return (
      <ApolloProvider client={client}>
          <PaperProvider>
              <AppContextWithState>
                  <MainApp/>
              </AppContextWithState>
          </PaperProvider>
      </ApolloProvider>
      
      
  )
}

export default App
