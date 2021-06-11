import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { MatchToHandleType } from '../../types/match/MatchToHandleType'
import { MyItemsInCacheForMatchingType } from './Match'
import ItemsRelevantToMatchPage from './ItemsRelevantToMatchPage'
import { ItemForCardType } from 'src/types/item/ItemForCardType'
import ManageMatchAction from './ManageMatchAction'



type HandleBrowseMatchPropsType = {
    matchToHandle: MatchToHandleType,
    myItemsInCache: MyItemsInCacheForMatchingType[],
}



export type MatchActionType = {
    currentState: 'BOTH' | 'TO' | 'FROM' | 'AVAILABLE',
    myItemId: string,
    myItemTitle: string,
    myItemUrl: string,
    cardData: ItemForCardType
}




const HandleBrowseMatch: React.FC<HandleBrowseMatchPropsType> = ({ matchToHandle, myItemsInCache }) => {

    const [matchAction, setMatchAction] = useState<MatchActionType | undefined>(undefined)
    

    return (
        <View style={styles.pageContentContainer}>
            <Text style={styles.pageTitle}>HANDLE MATCH</Text>
            {matchAction ?
                <ManageMatchAction matchAction={matchAction} cardData={matchAction.cardData}/>
                :
                <ItemsRelevantToMatchPage
                    matchToHandle={matchToHandle}
                    myItemsInCache={myItemsInCache}
                    setMatchAction={setMatchAction}
                />
            }
        </View>
    )
}

export default HandleBrowseMatch


