import { StyleSheet } from 'react-native'
import { CARD_WIDTH, CARD_HEIGHT } from '../carouselConstants'



export const styles = StyleSheet.create({
    cardBoard: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: 'orange',
        borderRadius: 10,
        position: 'absolute',
        alignItems: 'center',
        paddingTop: 10
    },
    image: {
        width: CARD_WIDTH * 0.8,
        height: CARD_WIDTH * 0.8
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
})
