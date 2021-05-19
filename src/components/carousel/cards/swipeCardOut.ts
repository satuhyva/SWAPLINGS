import { Animated } from 'react-native'
import { CardOrigosType } from '../Carousel'
import { LEFT_CARD_ORIGO, SWIPE_OUT_DURATION, LEFTMOST_CARD_ORIGO, MIDDLE_CARD_ORIGO, 
    SCREEN_WIDTH, RIGHT_CARD_ORIGO, RIGHTMOST_CARD_ORIGO } from '../carouselConstants'



export const swipeCardOut = (cardOrigos: CardOrigosType, direction: 'left' | 'right', updateCards: (direction: 'left' | 'right') => void) => {

        const targetValues = [
            { origoName: 'middle', targetValue: direction === 'left' ? LEFT_CARD_ORIGO : RIGHT_CARD_ORIGO },
            { origoName: 'left', targetValue: direction === 'left' ? LEFTMOST_CARD_ORIGO: MIDDLE_CARD_ORIGO },
            { origoName: 'right', targetValue: direction === 'left' ? MIDDLE_CARD_ORIGO : RIGHTMOST_CARD_ORIGO },
            { origoName: 'leftmost', targetValue: direction === 'left' ? { x: -SCREEN_WIDTH * 3, y: 0 } : LEFT_CARD_ORIGO },
            { origoName: 'rightmost', targetValue: direction === 'left' ? RIGHT_CARD_ORIGO : { x: SCREEN_WIDTH * 3, y: 0 } },
        ]

        const origos = cardOrigos as Record<string, Animated.ValueXY>

        const animations = targetValues.map(({ origoName, targetValue }) => {
            return Animated.timing(origos[origoName], {
                toValue: { ...targetValue },
                useNativeDriver: true,
                duration: SWIPE_OUT_DURATION
            })
        })

        Animated.parallel(animations).start(() => {
            updateCards(direction)
        })

    }





