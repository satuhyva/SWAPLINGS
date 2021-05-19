import { PanResponderGestureState } from 'react-native'
import { CardOrigosType } from '../Carousel'
import { MIDDLE_CARD_ORIGO, LEFT_CARD_ORIGO, RIGHT_CARD_ORIGO, LEFTMOST_CARD_ORIGO, RIGHTMOST_CARD_ORIGO } from '../carouselConstants'


export const performSetCardOrigoValues = (gestureState: PanResponderGestureState, cardOrigos: CardOrigosType) => {
    cardOrigos.middle.setValue({ x: MIDDLE_CARD_ORIGO.x + gestureState.dx, y: MIDDLE_CARD_ORIGO.y + gestureState.dy })
    cardOrigos.left.setValue({ x: LEFT_CARD_ORIGO.x + gestureState.dx, y: LEFT_CARD_ORIGO.y + gestureState.dy })
    cardOrigos.right.setValue({ x: RIGHT_CARD_ORIGO.x + gestureState.dx, y: RIGHT_CARD_ORIGO.y + gestureState.dy })
    cardOrigos.leftmost.setValue({ x: LEFTMOST_CARD_ORIGO.x + gestureState.dx, y: LEFTMOST_CARD_ORIGO.y + gestureState.dy })
    cardOrigos.rightmost.setValue({ x: RIGHTMOST_CARD_ORIGO.x + gestureState.dx, y: RIGHTMOST_CARD_ORIGO.y + gestureState.dy })
}