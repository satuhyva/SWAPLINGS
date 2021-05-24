import React, { useState } from 'react'
import { View } from 'react-native'
import { UploadedImageType } from '../../types/item/UploadedImageType'
import { CameraCapturedPicture } from 'expo-camera'
import ExpoCamera from './ExpoCamera'
import PhotoPreviewView from './PhotoPreviewView'
import { useUploadPhoto } from './useUploadPhoto'
import { useNavigation } from '@react-navigation/native'
import { CompositeNavigationPropType } from '../../types/routes/CompositeNavigationPropType'
import { itemUnderConstructionImageVar } from '../../apollo/cache'



const ImagingScreen = () => {
    
    const navigation = useNavigation<CompositeNavigationPropType>()
    const [image, setImage] = useState<CameraCapturedPicture | undefined>(undefined)
    const { uploadPhoto } = useUploadPhoto()

    const setUploadedImage = (uploadedImage: UploadedImageType): void => {
        itemUnderConstructionImageVar(uploadedImage)
        navigation.navigate('Add')
    }
    const cancel = () => {
        navigation.navigate('Add')
    }
    const savePhoto = async () => {
        if (image && image.uri) {
            const uploadedImage = await uploadPhoto(image)
            if (uploadedImage) {
                setUploadedImage(uploadedImage)
            }
        }
    }
    
    return (
        <View>
            {image ?
                <PhotoPreviewView 
                    photo={image} 
                    declinePhoto={() => setImage(undefined)} 
                    cancelTakingPhoto={cancel} 
                    savePhoto={savePhoto}
                />
                :
                <ExpoCamera 
                    setPhoto={setImage}
                />
            }
        </View>
    )
}


export default ImagingScreen


