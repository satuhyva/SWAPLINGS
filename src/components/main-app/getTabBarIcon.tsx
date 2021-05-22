import { RouteProp } from "@react-navigation/native"
import React from "react"
import { RoutesEnum } from "../../types/routes/RoutesEnum"
import { assertNever } from "../../utils/common-functions/assertNever"
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'




export const getTabBarIcon = (route: RouteProp<Record<string, object | undefined>, string>, size: number, color: string) => {
        switch (route.name) {
            case RoutesEnum.HOME:
                return <Ionicons name='home' size={size} color={color} />
            case RoutesEnum.BROWSE:
                return <MaterialIcons  name='view-carousel' size={size} color={color}/>                            
            case RoutesEnum.ADD:
                return <MaterialIcons  name='library-add' size={size} color={color}/>
            case RoutesEnum.SETTINGS:
                return <Ionicons  name='settings-sharp' size={size} color={color}/>
            case RoutesEnum.IMAGING:
                return <Ionicons  name='settings-sharp' size={size} color={color}/>
            default:
                return assertNever(route)
        }
    }