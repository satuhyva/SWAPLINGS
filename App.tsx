import React from 'react'
import MainApp from './src/components/main-app/MainApp'
import AppContextWithState from './src/app-state/AppContextWithState'
import { Provider as PaperProvider } from 'react-native-paper'
// Next line is needed for gestures to function properly, even though it is not needed here!
import 'react-native-gesture-handler'
// import TakePhoto from './src/components/camera/TakePhoto'
// import { View } from 'react-native'
// import { useState } from 'react'
// import { UploadedImageType } from './src/types/item/UploadedImageType'

const App = () => {
    console.log('HUHUU FROM SWAPLINGS')

    // const [uploadedImage, setUploadedImage] = useState<UploadedImageType | undefined>(undefined)
    // const [isTakingPhoto, setIsTakingPhoto] = useState(true)

    return (
        // <View style={{ backgroundColor: 'orange', width: 150, height: 150}}>

        // </View>
        // <View>
        //     <TakePhoto
        //             cancel={() => setIsTakingPhoto(false)}
        //             setUploadedImage={setUploadedImage}
        //     />
        // </View>
        <PaperProvider>
            <AppContextWithState>
                <MainApp/>
            </AppContextWithState>
        </PaperProvider>
    )
}

export default App
