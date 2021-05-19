import React, { useContext } from 'react'
import AppContext from '../../app-state/AppContext'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'
import SignUpLogin from '../login/SignUpLogin'
import Home from '../home/Home'
import Browse from '../browse/Browse'
import Add from '../add/Add'
import { theme } from '../../theme/theme'
import { RoutesEnum } from '../../types/routes/RoutesEnum'
import { getTabBarIcon } from './getTabBarIcon'


enableScreens()



const MainApp = () => {

    const { state } = useContext(AppContext)
    const loggedInUser = state.loggedInUser

    if (!loggedInUser) return (
        <SignUpLogin/>
    )

    
    const Tab = createBottomTabNavigator()


    return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => getTabBarIcon(route, size, color)
                    })}
                    tabBarOptions={{
                        activeTintColor: theme.colors.primary.dark,
                        inactiveTintColor: theme.colors.primary.light,
                    }}
                >
                    <Tab.Screen name={RoutesEnum.HOME} component={Home} />
                    <Tab.Screen name={RoutesEnum.ADD} component={Add} />
                    <Tab.Screen name={RoutesEnum.BROWSE} component={Browse} />
                </Tab.Navigator>
            </NavigationContainer>              
    )
}

export default MainApp



