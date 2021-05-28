import React from 'react'
import MainApp from './src/components/main-app/MainApp'
import AppContextWithState from './src/app-state/AppContextWithState'
import { Provider as PaperProvider } from 'react-native-paper'
// Next line is needed for gestures to function properly, even though it is not needed here!
import 'react-native-gesture-handler'
import CardContent from './src/components/carousel/cards/CardContent'


// import TakePhoto from './src/components/camera/TakePhoto'
// import { View, Text, StyleSheet } from 'react-native'
// import { useState } from 'react'
// import FormTextInput from './src/components/common-components/form-text-input/FormTextInput'
// import { Button } from 'react-native-paper'
// import { theme } from './src/theme/theme'
// import TogglePriceGroupButtons from './src/components/add/TogglePriceGroupButtons'
// import MyItemButton from './src/components/home/MyItemButton'
// import Browse from './src/components/browse/Browse'
// import TESTER from './TESTER'

// const myItem = {
//     brand: null,
//     id: "60ae4c5766e008426b1956a7",
//     imagePublicId: null,
//     imageSecureUrl: null,
//     priceGroup: "0-50",
//     title: "666aaaaabbbbb sdsdsdsd dsdsd s ds ds ds ds ds ds  rrrrrrr",
//     description: "drrrrruuuuuu",
//     matchedTo: [
//             { 
//                 brand: null,
//                 description: "drrrrruuuuuu",
//                 id: "60ae4c7e66e008426b1956a9",
//                 imagePublicId: null,
//                 imageSecureUrl: null,
//                 priceGroup: "0-50",
//                 title: "1233444",
//             },
//             {
//                 brand: null,
//                 description: "drrrrruuuuuu",
//                 id: "60ae4c8666e008426b1956aa",
//                 imagePublicId: null,
//                 imageSecureUrl: null,
//                 priceGroup: "0-50",
//                 title: "34343 rreetert",
//             },
//             {
//                 brand: null,
//                 description: "drrrrruuuuuu",
//                 id: "60ae4c8d66e008426b1956ab",
//                 imagePublicId: null,
//                 imageSecureUrl: null,
//                 priceGroup: "0-50",
//                 title: "34343 333",
//             }
//         ],
//         matchedFrom: [
//             {
//                 brand: null,
//                 description: "drrrrruuuuuu",
//                 id: "60ae4c8666e008426b1956aa",
//                 imagePublicId: null,
//                 imageSecureUrl: null,
//                 priceGroup: "0-50",
//                 title: "34343 rreetert",
//             }
//         ]
// }

// const card = {
//     brand: "Nokia",
//     description: "mustat, hyvä kunto, koko 43, dfdfsfds, dsfgdsfdsf yhththr   yjrryj ytj ryj ruyj j uyjr juy",
//     id: "60b0dce37e58b29f8b2ebed8",
//     imagePublicId: "items/xbc27xufbxwgoyokim6r",
//     imageSecureUrl: "https://res.cloudinary.com/swaplings/image/upload/v1622203617/items/xbc27xufbxwgoyokim6r.png",
//     priceGroup: "0-50",
//     title: "Kumisaappaat",
// }


const App = () => {
    console.log('HUHUU FROM SWAPLINGS')

    

    return (
        // <Browse/>
        // <TESTER/>
        // <CardContent cardData={card} />
        <PaperProvider>
            <AppContextWithState>
                <MainApp/>
            </AppContextWithState>
        </PaperProvider>
    )
}

export default App

