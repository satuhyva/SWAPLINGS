import { StyleSheet } from 'react-native'
import { CARD_WIDTH, CARD_HEIGHT } from '../carouselConstants'
import { theme } from '../../../theme/theme'



export const styles = StyleSheet.create({
    cardBoard: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: theme.colors.primary.dark,
        borderRadius: 10,
        position: 'absolute',
        alignItems: 'center',
        paddingTop: 10
    },
    image: {
        width: CARD_WIDTH * 0.6,
        height: CARD_WIDTH * 0.6,
        marginBottom: 5,
    },
    itemTitle: {
        color: theme.colors.primary.contrast,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5
    },
    descriptionText: {
        color: theme.colors.primary.contrast,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 5
    },
    priceGroupText: {
        color: theme.colors.primary.contrast,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    subtitle: {
        color: theme.colors.primary.contrast,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5
    },
    matchDataButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    matchButton: {
        margin: 3
    },
    imageAndMatchDataIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    matchDataNumber: {
        color: theme.colors.primary.contrast,
        fontSize: 18,
        fontWeight: 'bold',
    },
    matchDataView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center', 
        marginLeft: 10,    
        marginRight: 10
    },
    matchIconButtonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBackgroundCircle: {
        backgroundColor: theme.colors.primary.light,
        width: 70,
        height: 70,
        borderRadius: 70,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noItemsTextContainer: {
        marginTop: 20
    },

})
