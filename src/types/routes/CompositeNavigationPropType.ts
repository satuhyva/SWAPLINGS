import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RootStackType } from './RootStackType'
import { ScreensWithVisibleTabBarStackType } from './ScreensWithVisibleTabBarStackType'


export type CompositeNavigationPropType = CompositeNavigationProp<    
    StackNavigationProp<RootStackType, 'Imaging'>,
    BottomTabNavigationProp<ScreensWithVisibleTabBarStackType, 'Add'>
>



