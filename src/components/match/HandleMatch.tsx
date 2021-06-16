import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { MatchToHandleType } from '../../types/match/MatchToHandleType'
import { MyItemsInCacheForMatchingType } from './Match'
import ManageAction from './ManageAction'
import { ItemImageButtonActionType } from '../common-components/handle-matches/ItemImageButtonsRow'
import MatchesPage from './MatchesPage'


type HandleMatchPropsType = {
    matchToHandle: MatchToHandleType,
    myItemsInCache: MyItemsInCacheForMatchingType[],
}





const HandleMatch: React.FC<HandleMatchPropsType> = ({ matchToHandle, myItemsInCache }) => {

    const [action, setAction] = useState<ItemImageButtonActionType | undefined>(undefined)
    

    return (
        <View style={styles.pageContentContainer}>
            <Text style={styles.pageTitle}>HANDLE SWAP PROPOSALS</Text>
            {action ?
                <ManageAction action={action}/>
                :
                <MatchesPage
                    matchToHandle={matchToHandle}
                    myItemsInCache={myItemsInCache}
                    setAction={setAction}
                />
            }
        </View>
    )
}

export default HandleMatch


