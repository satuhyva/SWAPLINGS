import React, { useState } from 'react'
import { View } from 'react-native'
import TakePhoto from '../camera/TakePhoto'
import { UploadedImageType } from '../../types/item/UploadedImageType'
import { IconButton } from 'react-native-paper'


// @ts-ignore
const Add = ({ navigation }) => {

    const [uploadedImage, setUploadedImage] = useState<UploadedImageType | undefined>(undefined)
    const [isTakingPhoto, setIsTakingPhoto] = useState(true)

    console.log('uploadedImage', uploadedImage)

    return (
        <View>
            {/* {isTakingPhoto &&
                <TakePhoto
                    cancel={() => setIsTakingPhoto(false)}
                    setUploadedImage={setUploadedImage}
                />            
            } */}
        <IconButton
            icon='camera-switch'
            color='#FFFFFF'
            size={40}
            style={{ backgroundColor: '#000000' }}
            onPress={() => navigation.navigate('Imaging')}
        /> 
        </View>
    )
}

export default Add

