import React, { useContext } from 'react'
import AppContext from '../../app-state/AppContext'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import SignUpLogin from '../login/SignUpLogin'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { LOCALHOST_GRAPHQL } from '@env'
import ImagingScreen from '../camera/ImagingScreen'
import { createStackNavigator } from '@react-navigation/stack'
import ScreensWithVisibleTabBar from './ScreensWithVisibleTabBar'
import { RootStackType } from '../../types/routes/RootStackType'
import { itemUnderConstructionImageVar, matchToHandleVar } from '../../apollo/cache'
import { BrowseItemsByPageType } from '../../types/browse/BrowseItemsByPageType'
// import { View } from 'react-native'
// import TESTER from '../../../TESTER'




enableScreens()

// We need to store logged in user data.
// React Native local storage is not properly supported.
// Therefore, some other way needs to be used to store the logged in user data.
// For this, React Context was chosen.
// However, when Context state changes and a new Apollo Client is created
// as guided by Apollo Documents (via httpLink), the Apollo CACHE stops working.
// For this reason here the login and signup are performed using axios,
// and only after logged in user is known, an Apollo Client is created
// to be used with authorization for the rest of the app!






const MainApp = () => {

    const { state } = useContext(AppContext)
    const loggedInUser = state.loggedInUser


    if (!loggedInUser) {
        return (
            <SignUpLogin/>
        )
    }


    // Only after we have a logged in user, the Apollo Client is created 
    // with possibility to authorize the queries.


    console.log(loggedInUser)
    const httpLink = createHttpLink({
        uri: LOCALHOST_GRAPHQL,
    })
    
    const authorizationLink = setContext((_, { headers}) => {
        const token = loggedInUser.jwtToken
            return {
                headers: {
                    ...headers,
                    authorization: token ?? ''
                }
            }
    })

    const client = new ApolloClient({
        link: authorizationLink.concat(httpLink),
        connectToDevTools: true,
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        itemUnderConstruction: {
                            read() {
                                return itemUnderConstructionImageVar()
                            }
                        },
                        matchToHandle: {
                            read() {
                                return matchToHandleVar()
                            }
                        },
                        browseItemsByPage: {
                            keyArgs: false,
                            merge(existing = {}, incoming: BrowseItemsByPageType) {
                                if (!existing || !existing.pageInfo) return incoming
                                const existingBrowseItemsByPage = existing as BrowseItemsByPageType
                                const updatedEgdes = [...existingBrowseItemsByPage.edges, ...incoming.edges]
                                return {
                                        edges: updatedEgdes,
                                        pageInfo: { ...incoming.pageInfo }
                                    }
                            }
                        }
                    }
                }
            },
        })
    })


    const Stack = createStackNavigator<RootStackType>()

    return (

        <ApolloProvider client={client}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{ header: () => null }}
                >
                    <Stack.Screen name={'ScreensWithVisibleTabBar'} component={ScreensWithVisibleTabBar}/>
                    <Stack.Screen name={'Imaging'} component={ImagingScreen}/>
                </Stack.Navigator>
            </NavigationContainer>        
        </ApolloProvider>      
    )
}



export default MainApp



