import { StyleSheet, Dimensions } from 'react-native'




export const styles = StyleSheet.create({



    cameraView: {
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    cameraButtonsView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    previewImageView: {
        backgroundColor: 'transparent',
        width: Math.min(Dimensions.get('window').width, Dimensions.get('window').height),
        height: Math.min(Dimensions.get('window').width, Dimensions.get('window').height),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },    
    previewButtonsView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // bottom: 20,
        // position: 'absolute',
        // left: '50%',
        // right: '50%',
    },
    previewImageViewContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        backgroundColor: '#000000',
    }

})
