import React from 'react'
import { Animated } from 'react-native'
import CardContent from './CardContent'



type CarouselSideCardPropsType = {
    cardData: { title: string, imageUrl: string,}
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

