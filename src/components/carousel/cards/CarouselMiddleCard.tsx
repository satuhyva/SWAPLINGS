import React from 'react'
import { Animated } from 'react-native'
import { CardOrigosType } from '../Carousel'
import { getPanResponder } from './getPanResponder'
import CardContent from './CardContent'
import { ItemForCardType } from '../../../types/item/ItemForCardType'
import { MyItemForCarouselType } from '../../../types/item/MyItemType'
import { getMatchData } from './getMatchData'


type CarouselCardPropsType = {
    cardData: ItemForCardType,
    cardOrigos: CardOrigosType,
    updateCards: (direction: 'left' | 'right') => void,
    onlySwipeOutToLeftAllowed: boolean,
    onlySwipeOutToRightAllowed: boolean,
    isAnOnlyCard: boolean,
    myItems: MyItemForCarouselType[]
}


const CarouselMiddleCard: React.FC<CarouselCardPropsType> = ({ 
    cardData, 
    cardOrigos, 
    updateCards, 
    onlySwipeOutToLeftAllowed, 
    onlySwipeOutToRightAllowed,
    isAnOnlyCard,
    myItems
 }) => {


    const matchData = getMatchData(myItems, cardData)


    if (isAnOnlyCard) {
        return (
            <Animated.View 
                style={{ transform: [{ translateX: cardOrigos.middle.x }]}}
            >
                    <CardContent cardData={cardData} matchData={matchData}/>
            </Animated.View> 
        )
    }

    const panResponder = getPanResponder(cardOrigos, updateCards, onlySwipeOutToLeftAllowed, onlySwipeOutToRightAllowed)

    return (
            <Animated.View 
                style={{ transform: [{ translateX: cardOrigos.middle.x }]}}
                    { ...panResponder.panHandlers }
            >
                <CardContent cardData={cardData} matchData={matchData}/>
            </Animated.View>
    )
}

export default CarouselMiddleCard






