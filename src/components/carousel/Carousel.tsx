import React, { useState, useRef } from 'react'
import { View, Animated, Text } from 'react-native'
import CarouselMiddleCard from './cards/CarouselMiddleCard'
import { styles } from './styles'
import { MIDDLE_CARD_ORIGO, LEFT_CARD_ORIGO, RIGHT_CARD_ORIGO, LEFTMOST_CARD_ORIGO, RIGHTMOST_CARD_ORIGO
 } from './carouselConstants'
import CarouselSideCard from './cards/CarouselSideCard'



const CARDS = [
    { title: 'CARD 1', imageUrl: 'https://res.cloudinary.com/swaplings/image/upload/v1619778415/items/piilfwliodjdbhqlrkyc.gif' },
    { title: 'CARD 3', imageUrl: 'https://res.cloudinary.com/swaplings/image/upload/v1619792320/sample.jpg' },
    { title: 'CARD 4', imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
    { title: 'CARD 5', imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png' },
    { title: 'CARD 6', imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/zelda.png' },
    { title: 'CARD 7', imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/watch.png' },
    { title: 'CARD 8', imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png' },
    { title: 'CARD 9', imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/goldhill.png' },
    { title: 'CARD 10', imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png' },
]


export type CardOrigosType = {
    leftmost: Animated.ValueXY,
    left: Animated.ValueXY,
    middle: Animated.ValueXY,
    right: Animated.ValueXY,
    rightmost: Animated.ValueXY,
}


const Carousel = () => {

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

    if (CARDS.length === 0) return (
        <View>
            <Text>There are no items</Text>
        </View>
    )

    return (
        <View style={styles.carouselRow}>
            {middleCardIndex >= 2 &&
                <CarouselSideCard
                    cardData={CARDS[middleCardIndex - 2]} 
                    sideCardOrigo={cardOrigos.leftmost}
                />            
            }
            {middleCardIndex >= 1 &&
                <CarouselSideCard
                    cardData={CARDS[middleCardIndex - 1]} 
                    sideCardOrigo={cardOrigos.left}
                />            
            }
            {middleCardIndex >= 0 &&
                <CarouselMiddleCard 
                    cardData={CARDS[middleCardIndex]} 
                    cardOrigos={cardOrigos}
                    updateCards={updateCards}
                    onlySwipeOutToLeftAllowed={middleCardIndex === 0}
                    onlySwipeOutToRightAllowed={middleCardIndex === CARDS.length - 1}
                />      
            }
            {middleCardIndex >= 0 && CARDS.length > middleCardIndex + 1 &&
                <CarouselSideCard
                    cardData={CARDS[middleCardIndex + 1]} 
                    sideCardOrigo={cardOrigos.right}
                />            
            }
            {middleCardIndex >= 0 && CARDS.length > middleCardIndex + 2 &&
                <CarouselSideCard
                    cardData={CARDS[middleCardIndex + 2]} 
                    sideCardOrigo={cardOrigos.rightmost}
                />            
            }
        </View>
    )
}

export default Carousel

