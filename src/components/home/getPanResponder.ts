import { useRef } from 'react'
import { PanResponderInstance } from 'react-native'
import { PanResponder, Animated } from 'react-native'



export const getPanResponder = (position: Animated.ValueXY, SWIPE_RELEASE_TRESHOLD: number, SCREEN_WIDTH: number, setShowingDelete: (newState: boolean) => void): PanResponderInstance => {
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (_event, _gestureState) => true,
            onPanResponderMove: (_event, gestureState) => {
                position.setValue({ x: gestureState.dx, y: 0 })
            },
            onPanResponderRelease: (_event, gestureState) => {
                if (-gestureState.dx > SWIPE_RELEASE_TRESHOLD) {
                    const animation = Animated.timing(position, {
                        toValue: -SCREEN_WIDTH,
                        useNativeDriver: true,
                        duration: 300
                    })
                    animation.start(() => {
                        setShowingDelete(true)
                    })                  
                } else {
                    const animation = Animated.timing(position, {
                        toValue: 0,
                        useNativeDriver: true,
                        duration: 300
                    })
                    animation.start()
                }
            }
        })
    ).current
    return panResponder
}