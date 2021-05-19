import React from 'react'
import { Animated } from 'react-native'
import { CardOrigosType } from '../Carousel'
import { getPanResponder } from './getPanResponder'
import CardContent from './CardContent'


type CarouselCardPropsType = {
    cardData: { title: string, imageUrl: string,}
    cardOrigos: CardOrigosType,
    updateCards: (direction: 'left' | 'right') => void,
    onlySwipeOutToLeftAllowed: boolean,
    onlySwipeOutToRightAllowed: boolean,
}


const CarouselMiddleCard: React.FC<CarouselCardPropsType> = ({ cardData, cardOrigos, updateCards, onlySwipeOutToLeftAllowed, onlySwipeOutToRightAllowed }) => {


    const panResponder = getPanResponder(cardOrigos, updateCards, onlySwipeOutToLeftAllowed, onlySwipeOutToRightAllowed)

    return (
            <Animated.View 
            style={{ transform: [{ translateX: cardOrigos.middle.x }]}}
                { ...panResponder.panHandlers }
            >
                <CardContent cardData={cardData} />
            </Animated.View>
    )
}

export default CarouselMiddleCard

