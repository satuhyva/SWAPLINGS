import React from 'react'
import { Animated, View, Text } from 'react-native'
import { MyItemType } from '../../types/item/MyItemType'
import MyItemButton from './MyItemButton'
import { useRef } from 'react'
import { PanResponderInstance } from 'react-native'
import { PanResponder } from 'react-native'



const SWIPE_TRESHOLD = -50


type SwipeableButtonPropsType = {
    myItem: MyItemType
}


const SwipeableButton: React.FC<SwipeableButtonPropsType> = ({ myItem }) => {

    const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current
console.log('position', position)

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (_event, _gestureState) => true,
            onPanResponderMove: (_event, gestureState) => {
                console.log(gestureState.dx)
                // performSetCardOrigoValues(gestureState, cardOrigos)
            },
            onPanResponderRelease: (_event, gestureState) => {
                console.log(gestureState.dx)
                // if (-gestureState.dx > SWIPE_LEFT_TRESHOLD) {
                //     swipeCardOut(cardOrigos, 'left', updateCards)
                // } else if (gestureState.dx > SWIPE_LEFT_TRESHOLD) {
                //     swipeCardOut(cardOrigos, 'right', updateCards)
                // } else {
                //     returnCardsToStartPosition(cardOrigos)
                // }
            }
        })
    ).current

    return (
        <View>
            <Animated.View 
                style={{ transform: [{ translateX: position.x }]}}
                { ...panResponder.panHandlers }
            >
                <MyItemButton myItem={myItem}/>
            </Animated.View>            
        </View>

    )
}

export default SwipeableButton


