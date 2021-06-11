import { StyleSheet } from 'react-native'
import { theme } from '../../theme/theme'


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
        backgroundColor: 'orange'
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
    // removeAccountButtonView: {
    //     marginTop: 5,
    //     justifyContent: 'center',
    //     marginBottom: 30,
    // },
    pageContentContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemImageButton: {
        backgroundColor: theme.colors.primary.dark,
    },
    iconContainer: {
        backgroundColor: theme.colors.primary.dark,
        borderRadius: 3
    },
    // waitSpinnerContainer: {
    //     height: 100,
    //     width: 300,
    // },
    // infoText: {
    //     textAlign: 'center',
    // },
})
