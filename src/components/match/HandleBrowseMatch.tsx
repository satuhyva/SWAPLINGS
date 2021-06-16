export default {}
// import React, { useState } from 'react'
// import { View, Text } from 'react-native'
// import { styles } from './styles'
// import { MatchToHandleType } from '../../types/match/MatchToHandleType'
// import { MyItemsInCacheForMatchingType } from './Match'
// import ItemsRelevantToMatchPage from './ItemsRelevantToMatchPage'
// import { ItemForCardType } from 'src/types/item/ItemForCardType'
// import ManageAction from './ManageAction'
// import { ItemImageButtonActionType } from '../common-components/handle-matches/ItemImageButtonsRow'



// type HandleBrowseMatchPropsType = {
//     matchToHandle: MatchToHandleType,
//     myItemsInCache: MyItemsInCacheForMatchingType[],
// }



// export type MatchActionType = {
//     currentState: 'BOTH' | 'TO' | 'FROM' | 'AVAILABLE',
//     myItemId: string,
//     myItemTitle: string,
//     myItemUrl: string,
//     cardData: ItemForCardType
// }




// const HandleBrowseMatch: React.FC<HandleBrowseMatchPropsType> = ({ matchToHandle, myItemsInCache }) => {

//     const [action, setAction] = useState<ItemImageButtonActionType | undefined>(undefined)
    

//     return (
//         <View style={styles.pageContentContainer}>
//             <Text style={styles.pageTitle}>HANDLE SWAP PROPOSALS</Text>
//             {action ?
//                 <ManageAction action={action}/>
//                 :
//                 <ItemsRelevantToMatchPage
//                     matchToHandle={matchToHandle}
//                     myItemsInCache={myItemsInCache}
//                     setAction={setAction}
//                 />
//             }
//         </View>
//     )
// }

// export default HandleBrowseMatch


