import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({

    pageTitle: {
        marginTop: 60,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 5,
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: 'orange'
    },
    imageRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    myItemImage: {
        width: 50,
        height: 50,
        marginLeft: 3,
        marginRight: 3,
        borderRadius: 3,
        backgroundColor: 'orange'
    },
    // subtitle: {
    //     marginTop: 20,
    //     marginBottom: 10,
    //     fontSize: 20,
    //     fontWeight: 'bold',
    //     textAlign: 'center'
    // },
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
    // waitSpinnerContainer: {
    //     height: 100,
    //     width: 300,
    // },
    // infoText: {
    //     textAlign: 'center',
    // },
})
