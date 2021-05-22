import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Camera, CameraCapturedPicture } from 'expo-camera'
import WaitSpinner from '../common-components/wait-spinner/WaitSpinner'
import { styles } from './styles'
import ExpoCameraButton from './ExpoCameraButton'


type ExpoCameraPropsType = {
    setPhoto: (photo: CameraCapturedPicture | undefined) => void,
}



const ExpoCamera: React.FC<ExpoCameraPropsType> = ({ setPhoto }) => {

    const [hasPermission, setHasPermission] = useState<boolean | undefined>(undefined)
    const [type, setType] = useState(Camera.Constants.Type.front)
    const [cameraRef, setCameraRef] = useState<Camera | null>(null)

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status === 'granted')
        })()
    }, [])

    if (hasPermission === undefined) {
        return <WaitSpinner/>
    }
    
    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }

    const flipView = () => {
        const newType = Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
        setType(newType)
    }

    const takePhoto = async () => {
        if (cameraRef) {
            let photo = await cameraRef.takePictureAsync()
            console.log('photo', photo)
            setPhoto(photo)
        }
    }

  
    return (
            <Camera style={{ flex: 1 }} type={type} ref={ref => setCameraRef(ref)}>
                <View style={styles.cameraAndPreviewView}>
                    <View style={styles.buttonsView}>
                        <ExpoCameraButton
                            action={flipView}
                            type='flip'
                        />
                        <ExpoCameraButton
                            action={takePhoto}
                            type='snap'
                        />
                    </View>
                </View>
            </Camera>
    )
}


export default ExpoCamera


