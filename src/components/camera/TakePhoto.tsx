import { CameraCapturedPicture } from 'expo-camera'
import React, { useState } from 'react'
import { View } from 'react-native'
import ExpoCamera from './ExpoCamera'
import PhotoPreviewView from './PhotoPreviewView'
import { useUploadPhoto } from './useUploadPhoto'
import { UploadedImageType } from '../../types/item/UploadedImageType'



type TakePhotoPropsType = {
    cancel: () => void,
    setUploadedImage: (uploadedImage: UploadedImageType) => void,
}


const TakePhoto: React.FC<TakePhotoPropsType> = ({ cancel, setUploadedImage }) => {

    const [photo, setPhoto] = useState<CameraCapturedPicture | undefined>(undefined)
    const { uploadPhoto } = useUploadPhoto()


    const declinePhoto = () => {
        setPhoto(undefined)
    }

    const cancelTakingPhoto = async () => {
        cancel()
    }
    
    const savePhoto = async () => {
        if (photo && photo.uri) {
            const uploadedImage = await uploadPhoto(photo)
            if (uploadedImage) {
                setUploadedImage(uploadedImage)
            }
        }
    }

    return (
        <View>
            {photo ?
                <PhotoPreviewView photo={photo} declinePhoto={declinePhoto} cancelTakingPhoto={cancelTakingPhoto} savePhoto={savePhoto}/>
                :
                <ExpoCamera setPhoto={setPhoto}/>
            }
        </View>
    )

}


export default TakePhoto



