import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'
import Home from '../home/Home'
import Browse from '../browse/Browse'
import Settings from '../settings/Settings'
import Add from '../add/Add'
import Match from '../match/Match'
import { theme } from '../../theme/theme'
import { RoutesEnum } from '../../types/routes/RoutesEnum'
import { getTabBarIcon } from './getTabBarIcon'
import { ScreensWithVisibleTabBarStackType } from '../../types/routes/ScreensWithVisibleTabBarStackType'


enableScreens()

const TABBAR_HEIGHT = 50



const ScreensWithVisibleTabBar = () => {

    const Tab = createBottomTabNavigator<ScreensWithVisibleTabBarStackType>()

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
            <Tab.Screen name={RoutesEnum.HOME} component={Home} />
            <Tab.Screen name={RoutesEnum.ADD} component={Add} />
            <Tab.Screen name={RoutesEnum.BROWSE} component={Browse} />
            <Tab.Screen name={RoutesEnum.MATCH} component={Match} />
            <Tab.Screen name={RoutesEnum.SETTINGS} component={Settings} />
    </Tab.Navigator>
    )
}


export default ScreensWithVisibleTabBar



