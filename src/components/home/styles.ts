import { StyleSheet, Dimensions } from 'react-native'
import { theme } from '../../theme/theme'

const IMAGE_HEIGHT = 100
const SPACING = 5



export const styles = StyleSheet.create({

    homeScreen: {
        height: Dimensions.get('screen').height - 50,
        bottom: 0,
    },
    pageTitle: {
        marginTop: 60,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    infoText: {
        marginBottom: 5,
    },
    myItemsContainer: {
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        flex: 1,
        flexGrow: 1,
    },
    myItemButtonContainer: {
        backgroundColor: theme.colors.primary.dark,
        borderRadius: 6,
        marginTop: SPACING,
        paddingTop: SPACING,
        paddingLeft: SPACING,
        paddingBottom: SPACING,
        flexDirection: 'row',
        alignContent: 'flex-start'
    },
    itemImageButton: {
        backgroundColor: theme.colors.primary.dark,
        width: IMAGE_HEIGHT,
        height: IMAGE_HEIGHT
    },
    imageView: {
        width: IMAGE_HEIGHT,
        height: IMAGE_HEIGHT,
        borderRadius: 8,
    },
    iconView: {
        backgroundColor: theme.colors.primary.dark,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center' 
    },
    itemDetailsContainer: {
        flexDirection: 'column',
        alignContent: 'flex-start',
        marginLeft: 12,

    },
    myItemTitle: {
        fontWeight: 'bold',
        marginBottom: 8,
        color: theme.colors.primary.contrast,
    },
    matchText: {
        fontWeight: 'bold',
        color: theme.colors.primary.contrast,
    },
    text: {
        color: theme.colors.primary.contrast,
    },
    scrollView: {
        flex: 1,
        flexGrow: 1,
    }

})
