import React from 'react'
import { View, Image } from 'react-native'
import { CameraCapturedPicture } from 'expo-camera'
import { styles } from './styles'
import ExpoCameraButton from './ExpoCameraButton'




type PhotoPreviewViewProps = {
    photo: CameraCapturedPicture,
    declinePhoto: () => void,
    cancelTakingPhoto: () => void,
    savePhoto: () => void
}



const PhotoPreviewView: React.FC<PhotoPreviewViewProps> = ({ photo, declinePhoto, cancelTakingPhoto, savePhoto }) => {

    return (
        <View style={styles.previewImageViewContainer}>
            <Image
                style={styles.previewImageView}
                source={{ uri: photo.uri }}
            /> 
            <View style={styles.previewButtonsView}>
                <ExpoCameraButton
                    action={declinePhoto}
                    type='remove'
                />
                <ExpoCameraButton
                    action={cancelTakingPhoto}
                    type='cancel'
                />
                <ExpoCameraButton
                    action={savePhoto}
                    type='save'
                />
            </View>           
        </View>
    )

}


export default PhotoPreviewView