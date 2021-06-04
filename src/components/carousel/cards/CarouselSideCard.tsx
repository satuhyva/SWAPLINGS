import React from 'react'
import { Animated } from 'react-native'
import CardContent from './CardContent'
import { ItemForCardType } from '../../../types/item/ItemForCardType'
import { MyItemForCarouselType } from '../../../types/item/MyItemType'
import { getMatchData } from './getMatchData'


type CarouselSideCardPropsType = {
    cardData: ItemForCardType,
    sideCardOrigo: Animated.ValueXY | undefined,
    myItems: MyItemForCarouselType[]
}


const CarouselSideCard: React.FC<CarouselSideCardPropsType> = ({ cardData, sideCardOrigo, myItems }) => {

    if (!sideCardOrigo) return null

    const matchData = getMatchData(myItems, cardData)

    return (
            <Animated.View 
                style={{ transform: [{ translateX: (sideCardOrigo.x) }]}}
            >
                <CardContent cardData={cardData} matchData={matchData}/>
            </Animated.View>
    )
}

export default CarouselSideCard

