export default {}
// import React, { useState } from 'react'
// import { View, Text  } from 'react-native'
// import { MyItemToHandleType } from '../../types/match/MyItemToHandleType'
// import { ItemImageButtonActionType } from '../common-components/handle-matches/ItemImageButtonsRow'
// import MyItemMatchesPage from './MyItemMatchesPage'
// import ManageAction from './ManageAction'
// import { styles } from './styles'


// type HandleMyItemPropsType = {
//     myItemtoHandle: MyItemToHandleType
// }


// const HandleMyItem: React.FC<HandleMyItemPropsType> = ({ myItemtoHandle }) => {

//     const [action, setAction] = useState<ItemImageButtonActionType | undefined>(undefined)
    

//     return (
//         <View style={styles.pageContentContainer}>
//             <Text style={styles.pageTitle}>HANDLE SWAP PROPOSALS</Text>
//             {action ?
//                 <ManageAction action={action}/>
//                 :
//                 <MyItemMatchesPage
//                     myItemtoHandle={myItemtoHandle}
//                     setAction={setAction}
//                 />
//             }
//         </View>
//     )

// }


// export default HandleMyItem