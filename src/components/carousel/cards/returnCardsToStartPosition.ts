import { Animated } from 'react-native'
import { CardOrigosType } from '../Carousel'
import { MIDDLE_CARD_ORIGO, LEFT_CARD_ORIGO, RIGHT_CARD_ORIGO, LEFTMOST_CARD_ORIGO, RIGHTMOST_CARD_ORIGO } from '../carouselConstants'
    

export const returnCardsToStartPosition = (cardOrigos: CardOrigosType) => {

    const targetValuesForOrigos = [
        { origoName: 'middle', targetValue: MIDDLE_CARD_ORIGO },
        { origoName: 'left', targetValue: LEFT_CARD_ORIGO },
        { origoName: 'right', targetValue: RIGHT_CARD_ORIGO },
        { origoName: 'leftmost', targetValue: LEFTMOST_CARD_ORIGO },
        { origoName: 'rightmost', targetValue: RIGHTMOST_CARD_ORIGO },
    ]

    const origos = cardOrigos as Record<string, Animated.ValueXY>

    const animations = targetValuesForOrigos.map(({ origoName, targetValue }) => {
        return Animated.spring(origos[origoName], {
            toValue: { ...targetValue },
            useNativeDriver: true
        })
    })

    Animated.parallel(animations).start()

    }