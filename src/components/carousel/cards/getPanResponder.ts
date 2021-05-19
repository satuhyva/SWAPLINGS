import { useRef } from 'react'
import { PanResponderInstance } from 'react-native'
import { PanResponder } from 'react-native'
import { CardOrigosType } from '../Carousel'
import { SWIPE_LEFT_TRESHOLD } from '../carouselConstants'
import { performSetCardOrigoValues } from './performSetCardOrigoValues'
import { returnCardsToStartPosition } from './returnCardsToStartPosition'
import { swipeCardOut } from './swipeCardOut'


export const getPanResponder = (
        cardOrigos: CardOrigosType, 
        updateCards: (direction: 'left' | 'right', ) => void,
        onlySwipeOutToLeftAllowed: boolean,
        onlySwipeOutToRightAllowed: boolean
    ): PanResponderInstance => {




    const panResponderBoth = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (_event, _gestureState) => true,
            onPanResponderMove: (_event, gestureState) => {
                performSetCardOrigoValues(gestureState, cardOrigos)
            },
            onPanResponderRelease: (_event, gestureState) => {
                if (-gestureState.dx > SWIPE_LEFT_TRESHOLD) {
                    swipeCardOut(cardOrigos, 'left', updateCards)
                } else if (gestureState.dx > SWIPE_LEFT_TRESHOLD) {
                    swipeCardOut(cardOrigos, 'right', updateCards)
                } else {
                    returnCardsToStartPosition(cardOrigos)
                }
            }
        })
    ).current

    const panResponderOnlySwipeOutToLeft = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (_event, _gestureState) => true,
            onPanResponderMove: (_event, gestureState) => {
                    if (gestureState.dx < 0) {
                        performSetCardOrigoValues(gestureState, cardOrigos)
                    }
            },
            onPanResponderRelease: (_event, gestureState) => {
                if (-gestureState.dx > SWIPE_LEFT_TRESHOLD) {
                    swipeCardOut(cardOrigos, 'left', updateCards)
                } else {
                    returnCardsToStartPosition(cardOrigos)
                }
            }
        })
    ).current

    const panResponderOnlySwipeOutToRight = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (_event, _gestureState) => true,
            onPanResponderMove: (_event, gestureState) => {
                    if (gestureState.dx > 0) {
                        performSetCardOrigoValues(gestureState, cardOrigos)
                    }
            },
            onPanResponderRelease: (_event, gestureState) => {
                if (gestureState.dx > SWIPE_LEFT_TRESHOLD) {
                    swipeCardOut(cardOrigos, 'right', updateCards)
                }else {
                    returnCardsToStartPosition(cardOrigos)
                }
            }
        })
    ).current

    const selectedPanResponder = onlySwipeOutToLeftAllowed ? panResponderOnlySwipeOutToLeft :
    onlySwipeOutToRightAllowed ? panResponderOnlySwipeOutToRight : panResponderBoth

    return selectedPanResponder

}