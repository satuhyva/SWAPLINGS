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
import { itemUnderConstructionImageVar } from '../../apollo/cache'
// import { View } from 'react-native'




enableScreens()




const MainApp = () => {

    const { state } = useContext(AppContext)
    const loggedInUser = state.loggedInUser

    const httpLink = createHttpLink({
        uri: LOCALHOST_GRAPHQL,
    })
    
    const authorizationLink = setContext((_, { headers}) => {
        let token: string | undefined 
            if (loggedInUser) {
                token = loggedInUser.jwtToken
            }
            return {
                headers: {
                    ...headers,
                    authorization: token ?? ''
                }
            }
    })

    const client = new ApolloClient({
        link: authorizationLink.concat(httpLink),
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        itemUnderConstruction: {
                            read() {
                                return itemUnderConstructionImageVar()
                            }
                        }
                    }
                }
            }
        })
    })


    if (!loggedInUser) return (
        <ApolloProvider client={client}>
            <SignUpLogin/>
        </ApolloProvider>
    )

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



