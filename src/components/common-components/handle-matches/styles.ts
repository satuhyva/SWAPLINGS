import { StyleSheet, Dimensions } from 'react-native'
import { theme } from '../../../theme/theme'


export const styles = StyleSheet.create({

    pageTitle: {
        marginTop: 60,
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 5,
        // marginTop: 5,
        borderRadius: 8,
        // backgroundColor: 'orange'
    },
    matchImage: {
        width: 120,
        height: 120,
        margin: 10,
        borderRadius: 8,
        // backgroundColor: 'orange'
    },
    imageRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    myItemImage: {
        width: 80,
        height: 80,
        marginLeft: 3,
        marginRight: 3,
        borderRadius: 3,
        backgroundColor: 'orange'
    },

    itemTitle: {
        // marginTop: 20,
        // marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    matchButtonView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },

    pageContentContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    itemImageButton: {
        backgroundColor: theme.colors.primary.dark,
    },
    iconContainer: {
        backgroundColor: theme.colors.primary.dark,
        borderRadius: 3
    },
    matchImageRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary.dark,
        borderRadius: 6,
        marginBottom: 10,
    },
    matchImageCentralIconsContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 8,
    },
    iconBackgroundCircle: {
        backgroundColor: theme.colors.primary.light,
        width: 50,
        height: 50,
        borderRadius: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    newPostContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 8,
        // marginRight: 8,
        width: '100%',
        // backgroundColor: 'orange',
    },
    postIconBackgroundCircle: {
        backgroundColor: theme.colors.primary.light,
        width: 45,
        height: 45,
        borderRadius: 45,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 5,
    },
    manageMatchPageContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'orange',
        width: Dimensions.get('window').width,

    },
    chatContainer: {
        // backgroundColor: 'rosybrown',
        height: Dimensions.get('window').height * 0.45,
        width: Dimensions.get('window').width,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // marginTop: 10
    },
    chatPostContainer: {
        width: Dimensions.get('window').width * 0.9,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
        // backgroundColor: theme.colors.primary.veryLight,
        borderRadius: 6,
    },
    dateTimeText: {
        fontStyle: 'italic',
        fontSize: 12,
        color: theme.colors.primary.light
    },
    contentContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: 'powderblue',
        width: Dimensions.get('window').width * 0.9 - 2 * 35,
    },
    avatarContainer: {
        width: 35,
        height: 35,
        // backgroundColor: 'powderblue',
    },
    scrollView: {
        flex: 1,
        flexGrow: 1,
    }
})
