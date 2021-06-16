import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RootStackType } from './RootStackType'
import { ScreensWithVisibleTabBarStackType } from './ScreensWithVisibleTabBarStackType'


export type CompositeNavigationPropAddType = CompositeNavigationProp<    
    StackNavigationProp<RootStackType, 'Imaging'>,
    BottomTabNavigationProp<ScreensWithVisibleTabBarStackType, 'Add'>
>

export type CompositeNavigationPropMatchType = CompositeNavigationProp<    
    StackNavigationProp<RootStackType, 'Imaging'>,
    BottomTabNavigationProp<ScreensWithVisibleTabBarStackType, 'Match'>
>

export type CompositeNavigationPropBrowseType = CompositeNavigationProp<    
    StackNavigationProp<RootStackType, 'Imaging'>,
    BottomTabNavigationProp<ScreensWithVisibleTabBarStackType, 'Browse'>
>

export type CompositeNavigationPropHomeType = CompositeNavigationProp<    
    StackNavigationProp<RootStackType, 'Imaging'>,
    BottomTabNavigationProp<ScreensWithVisibleTabBarStackType, 'Home'>
>

