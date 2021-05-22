import React, { useContext } from 'react'
import AppContext from '../../app-state/AppContext'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'
import SignUpLogin from '../login/SignUpLogin'
import Home from '../home/Home'
import Browse from '../browse/Browse'
import Settings from '../settings/Settings'
import Add from '../add/Add'
import { theme } from '../../theme/theme'
import { RoutesEnum } from '../../types/routes/RoutesEnum'
import { getTabBarIcon } from './getTabBarIcon'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { LOCALHOST_GRAPHQL } from '@env'
import ImagingScreen from '../camera/ImagingScreen'
import { createStackNavigator } from '@react-navigation/stack';


enableScreens()


const TABBAR_HEIGHT = 50




const ScreensWithVisibleTabs = () => {
    const Tab = createBottomTabNavigator()
    // const Stack = createStackNavigator()
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => getTabBarIcon(route, size, color)
        })}
        tabBarOptions={{
            activeTintColor: theme.colors.primary.dark,
            inactiveTintColor: theme.colors.primary.light,
            style: { height: TABBAR_HEIGHT },
        }
        
    }
    >
        {/* <Tab.Screen name={RoutesEnum.HOME} component={Home} />
        <Tab.Screen name={RoutesEnum.ADD} component={Add} />
        <Tab.Screen name={RoutesEnum.BROWSE} component={Browse} />
        <Tab.Screen name={RoutesEnum.SETTINGS} component={Settings} /> */}
        <Tab.Screen name={RoutesEnum.HOME} component={Home} />
        <Tab.Screen name={RoutesEnum.ADD} component={Add} />
        <Tab.Screen name={RoutesEnum.BROWSE} component={Browse} />
        <Tab.Screen name={RoutesEnum.SETTINGS} component={Settings} />
    </Tab.Navigator>
        // <Stack.Navigator
        //     screenOptions={{ header: () => null }}
        // >
        //     <Stack.Screen name={RoutesEnum.ADD} component={Add}/>
        //     <Stack.Screen name={'Imaging'} component={ImagingScreen} options={{ }}/>
        // </Stack.Navigator>
    )
}


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
        cache: new InMemoryCache()
    })


    if (!loggedInUser) return (
        <ApolloProvider client={client}>
            <SignUpLogin/>
        </ApolloProvider>
    )

    
    // const Tab = createBottomTabNavigator()
    const Stack = createStackNavigator()

    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ header: () => null }}
            >
                <Stack.Screen name={RoutesEnum.ADD} component={ScreensWithVisibleTabs}/>
                <Stack.Screen name={'Imaging'} component={ImagingScreen} options={{ }}/>
            </Stack.Navigator>
                {/* <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => getTabBarIcon(route, size, color)
                    })}
                    tabBarOptions={{
                        activeTintColor: theme.colors.primary.dark,
                        inactiveTintColor: theme.colors.primary.light,
                        style: { height: TABBAR_HEIGHT },
                    }
                    
                }
                >
                    {/* <Tab.Screen name={RoutesEnum.HOME} component={Home} />
                    <Tab.Screen name={RoutesEnum.ADD} component={Add} />
                    <Tab.Screen name={RoutesEnum.BROWSE} component={Browse} />
                    <Tab.Screen name={RoutesEnum.SETTINGS} component={Settings} /> */}
                    {/* <Tab.Screen name={RoutesEnum.HOME} component={Home} />
                    <Tab.Screen name={RoutesEnum.ADD} component={AddScreenWithImagingScreen} />
                    <Tab.Screen name={RoutesEnum.BROWSE} component={Browse} />
                    <Tab.Screen name={RoutesEnum.SETTINGS} component={Settings} />
                </Tab.Navigator> */} 
            </NavigationContainer>        
        </ApolloProvider>      
    )
}

export default MainApp



