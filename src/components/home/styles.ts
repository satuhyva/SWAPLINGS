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
        textAlign: 'center',
        marginBottom: 5,
    },
    subtitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    infoText: {
        textAlign: 'center'
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
        // marginTop: SPACING,
        padding: SPACING,
        // paddingLeft: SPACING,
        // paddingBottom: SPACING,
        flexDirection: 'row',
        // alignContent: 'space-between',
        justifyContent: 'space-between',
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
    myItemTitleDelete: {
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#FFFFFF',
    },
    matchText: {
        fontWeight: 'bold',
        color: theme.colors.primary.contrast,
    },
    text: {
        color: theme.colors.primary.contrast,
    },
    scrollView: {
        marginTop: 10,
        flex: 1,
        flexGrow: 1,
    },
    deleteButtonContainer: {
        // height: IMAGE_HEIGHT,
        width: 85,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'orange',
    },
    deleteIconsContainer: {
        borderRadius: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary.light,
        padding: 10,
    },
    deleteButton: {
        height: 40,
        width: 40,
        backgroundColor: theme.colors.error,  
        borderRadius: 6
    },

    deleteView: {
        backgroundColor: theme.colors.error,
        position: 'absolute',
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: SPACING,
    },
    deleteIconContainer: {
        borderRadius: 30,
        height: 30,
        width: 30,
        margin: 5,
    }

})


