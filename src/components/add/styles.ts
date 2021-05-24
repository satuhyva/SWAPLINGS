import { StyleSheet } from 'react-native'




export const styles = StyleSheet.create({

    imageView: {
        width: 150,
        height: 150,
        borderRadius: 6
    },
    iconView: {
        backgroundColor: '#000000',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center' 
    },
    pageTitle: {
        marginTop: 60,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    // cameraAndPreviewView: {
    //     backgroundColor: 'transparent',
    //     width: Dimensions.get('window').width,
    //     height: Dimensions.get('window').height,
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'flex-end',
    //     alignItems: 'center'
    // },
    // buttonsView: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // previewButtonsView: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     bottom: 20,
    //     position: 'absolute',
    //     left: '50%',
    //     right: '50%',
    // }

})
