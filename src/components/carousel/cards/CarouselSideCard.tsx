import React from 'react'
import { Animated } from 'react-native'
import CardContent from './CardContent'
import { ItemForCardType } from '../../../types/item/ItemForCardType'


type CarouselSideCardPropsType = {
    cardData: ItemForCardType,
    sideCardOrigo: Animated.ValueXY | undefined,
}


const CarouselSideCard: React.FC<CarouselSideCardPropsType> = ({ cardData, sideCardOrigo }) => {

    if (!sideCardOrigo) return null

    return (
            <Animated.View 
                style={{ transform: [{ translateX: (sideCardOrigo.x) }]}}
            >
                <CardContent cardData={cardData} />
            </Animated.View>
    )
}

export default CarouselSideCard

