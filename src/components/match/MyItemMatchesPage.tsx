export default {}
// import React from 'react'
// import { View, Text, Image } from 'react-native'
// import { styles } from './styles'
// import { Button } from 'react-native-paper'
// import { theme } from '../../theme/theme'
// import { matchToHandleVar } from '../../apollo/cache'
// import {  useNavigation } from '@react-navigation/native'
// import { CompositeNavigationPropHomeType } from '../../types/routes/CompositeNavigationPropTypes'
// import { ItemImageButtonActionType } from '../common-components/handle-matches/ItemImageButtonsRow'
// import { MyItemToHandleType } from '../../types/match/MyItemToHandleType'
// import ItemImageButtonsRow from '../common-components/handle-matches/ItemImageButtonsRow'



// type MyItemMatchesPagePropsType = {
//     myItemtoHandle: MyItemToHandleType,
//     setAction: (action: ItemImageButtonActionType) => void,

// }



// const MyItemMatchesPage: React.FC<MyItemMatchesPagePropsType> = ({ myItemtoHandle, setAction }) => {


//     const { myItem, matches, matchedFrom, matchedTo } = myItemtoHandle
//     const navigation = useNavigation<CompositeNavigationPropHomeType>()


//     const cancelHandleMatch = () => {
//         matchToHandleVar(undefined)
//         navigation.navigate('Home')
//     }


//     return (
//         <>
//             <Text style={styles.itemTitle}>{myItem.title.toLocaleUpperCase()}</Text>
//             <Image 
//                 source={{uri: myItem.imageSecureUrl}}
//                 style={styles.image} 
//             /> 

//             <ItemImageButtonsRow
//                 mode='MY'
//                 type='BOTH'
//                 itemsForButtons={matches}
//                 mainItem={myItem}
//                 setAction={setAction}
//             />
//             <ItemImageButtonsRow
//                 mode='MY'
//                 type='TO'
//                 mainItem={myItem}
//                 itemsForButtons={matchedFrom}
//                 setAction={setAction}
//             />            
//             <ItemImageButtonsRow
//                 mode='MY'
//                 type='FROM'
//                 mainItem={myItem}
//                 itemsForButtons={matchedTo}
//                 setAction={setAction}
//             />            

//             <View style={styles.matchButtonView}>
//                 <Button 
//                     icon='keyboard-return' 
//                     mode='contained' 
//                     onPress={cancelHandleMatch}
//                     disabled={false}
//                     color={theme.colors.primary.main}
//                 >
//                     BACK
//                 </Button>
//             </View>
//         </>
//     )
// }

// export default MyItemMatchesPage


