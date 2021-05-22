import { StyleSheet, Dimensions } from 'react-native'




export const styles = StyleSheet.create({

    cameraAndPreviewView: {
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    previewButtonsView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 70,
        position: 'absolute',
        left: '50%',
        right: '50%',
    }

})
