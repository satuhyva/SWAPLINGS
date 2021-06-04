import React, { useState, useRef } from 'react'
import { View, Animated, Text } from 'react-native'
import CarouselMiddleCard from './cards/CarouselMiddleCard'
import { styles } from './styles'
import { MIDDLE_CARD_ORIGO, LEFT_CARD_ORIGO, RIGHT_CARD_ORIGO, LEFTMOST_CARD_ORIGO, RIGHTMOST_CARD_ORIGO
 } from './carouselConstants'
import CarouselSideCard from './cards/CarouselSideCard'
import { ItemForCardType } from '../../types/item/ItemForCardType'
import { MyItemForCarouselType } from '../../types/item/MyItemType'



export type CardOrigosType = {
    leftmost: Animated.ValueXY,
    left: Animated.ValueXY,
    middle: Animated.ValueXY,
    right: Animated.ValueXY,
    rightmost: Animated.ValueXY,
}

type CarouselPropsType = {
    itemCards: ItemForCardType[],
    myItems: MyItemForCarouselType[]
}


const Carousel: React.FC<CarouselPropsType> = ({ itemCards, myItems }) => {

    const cardOrigos = {
        leftmost: useRef(new Animated.ValueXY({ ...LEFTMOST_CARD_ORIGO })).current,
        left: useRef(new Animated.ValueXY({ ...LEFT_CARD_ORIGO })).current,
        middle: useRef(new Animated.ValueXY({ ...MIDDLE_CARD_ORIGO })).current,
        right: useRef(new Animated.ValueXY({ ...RIGHT_CARD_ORIGO })).current,
        rightmost: useRef(new Animated.ValueXY({ ...RIGHTMOST_CARD_ORIGO })).current,
    }


    const [middleCardIndex, setMiddleCardIndex] = useState(0)

    const updateCards = (direction: 'left' | 'right') => {
        const change = direction === 'left' ? 1 : -1
        setMiddleCardIndex(middleCardIndex => {
            return middleCardIndex + change
        })
        cardOrigos.leftmost.setValue({ ...LEFTMOST_CARD_ORIGO })
        cardOrigos.left.setValue({ ...LEFT_CARD_ORIGO })
        cardOrigos.middle.setValue({ ...MIDDLE_CARD_ORIGO })
        cardOrigos.right.setValue({ ...RIGHT_CARD_ORIGO })
        cardOrigos.rightmost.setValue({ ...RIGHTMOST_CARD_ORIGO })
    }

    if (itemCards.length === 0) return (
        <View>
            <Text>There are no items</Text>
        </View>
    )

    return (
        <View style={styles.carouselRow}>
            {middleCardIndex >= 2 &&
                <CarouselSideCard
                    cardData={itemCards[middleCardIndex - 2]} 
                    sideCardOrigo={cardOrigos.leftmost}
                    myItems={myItems}
                />            
            }
            {middleCardIndex >= 1 &&
                <CarouselSideCard
                    cardData={itemCards[middleCardIndex - 1]} 
                    sideCardOrigo={cardOrigos.left}
                    myItems={myItems}
                />            
            }
            {middleCardIndex >= 0 &&
                <CarouselMiddleCard 
                    cardData={itemCards[middleCardIndex]} 
                    cardOrigos={cardOrigos}
                    updateCards={updateCards}
                    onlySwipeOutToLeftAllowed={middleCardIndex === 0}
                    onlySwipeOutToRightAllowed={middleCardIndex === itemCards.length - 1}
                    isAnOnlyCard={itemCards.length === 1}
                    myItems={myItems}
                />      
            }
            {middleCardIndex >= 0 && itemCards.length > middleCardIndex + 1 &&
                <CarouselSideCard
                    cardData={itemCards[middleCardIndex + 1]} 
                    sideCardOrigo={cardOrigos.right}
                    myItems={myItems}
                />            
            }
            {middleCardIndex >= 0 && itemCards.length > middleCardIndex + 2 &&
                <CarouselSideCard
                    cardData={itemCards[middleCardIndex + 2]} 
                    sideCardOrigo={cardOrigos.rightmost}
                    myItems={myItems}
                />            
            }
        </View>
    )
}

export default Carousel

