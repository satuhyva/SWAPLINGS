export default {}
// import React from 'react'
// import { View, Text, Image } from 'react-native'
// import { styles } from './styles'
// import { MatchToHandleType } from '../../types/match/MatchToHandleType'
// import { MyItemsInCacheForMatchingType } from './Match'
// import { ItemImageButtonActionType } from '../common-components/handle-matches/ItemImageButtonsRow'
// import { Button } from 'react-native-paper'
// import { theme } from '../../theme/theme'
// import { matchToHandleVar } from '../../apollo/cache'
// import {  useNavigation } from '@react-navigation/native'
// import { CompositeNavigationPropBrowseType } from '../../types/routes/CompositeNavigationPropTypes'
// import ItemImageButtonsRow from '../common-components/handle-matches/ItemImageButtonsRow'



// type ItemsRelevantToMatchPagePropsType = {
//     matchToHandle: MatchToHandleType,
//     myItemsInCache: MyItemsInCacheForMatchingType[],
//     setAction: (action: ItemImageButtonActionType) => void,

// }



// const ItemsRelevantToMatchPage: React.FC<ItemsRelevantToMatchPagePropsType> = ({ matchToHandle, myItemsInCache, setAction }) => {


//     const { cardData, matchData } = matchToHandle
//     const navigation = useNavigation<CompositeNavigationPropBrowseType>()

//     const myItemsAvailableToMatch = () => {
//         let itemsAvailable: MyItemsInCacheForMatchingType[] = []
//         myItemsInCache.forEach(itemInCache => {
//             if (matchData.myItemsMatchedWithThis.every(bothWaysItem => bothWaysItem.id !== itemInCache.id)
//             && matchData.myItemsMatchedFromThis.every(fromItem => fromItem.id !== itemInCache.id)
//             && matchData.myItemsMatchedToThis.every(toItem => toItem.id !== itemInCache.id)
//             ) {
//                 itemsAvailable.push(itemInCache)
//             }
//         })
//         return itemsAvailable
//     }

//     const myItemsStillAvailable = myItemsAvailableToMatch()

//     const cancelHandleMatch = () => {
//         matchToHandleVar(undefined)
//         navigation.navigate('Browse')
//     }

//     const mainItem = {
//         id: matchToHandle.cardData.id,
//         title: matchToHandle.cardData.title,
//         imageSecureUrl: matchToHandle.cardData.imageSecureUrl
//     }


//     return (
//         <>
//             <Text style={styles.itemTitle}>{cardData.title.toLocaleUpperCase()}</Text>
//             <Image 
//                 source={{uri: cardData.imageSecureUrl}}
//                 style={styles.image} 
//             /> 

//             <ItemImageButtonsRow
//                 mode='BROWSE'
//                 type='BOTH'
//                 itemsForButtons={matchData.myItemsMatchedWithThis}
//                 mainItem={mainItem}
//                 setAction={setAction}
//             />
//             <ItemImageButtonsRow
//                 mode='BROWSE'
//                 type='TO'
//                 itemsForButtons={matchData.myItemsMatchedToThis}
//                 mainItem={mainItem}
//                 setAction={setAction}
//             />            
//             <ItemImageButtonsRow
//                 mode='BROWSE'
//                 type='FROM'
//                 itemsForButtons={matchData.myItemsMatchedFromThis}
//                 mainItem={mainItem}
//                 setAction={setAction}
//             />            
//             <ItemImageButtonsRow
//                 mode='BROWSE'
//                 type='AVAILABLE'
//                 itemsForButtons={myItemsStillAvailable}
//                 mainItem={mainItem}
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

// export default ItemsRelevantToMatchPage


