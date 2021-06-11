import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { MatchToHandleType } from '../../types/match/MatchToHandleType'
import { MyItemsInCacheForMatchingType } from './Match'
import ItemsImageButtonsRow from './ItemsImageButtonsRow'
import { MatchActionType } from './HandleBrowseMatch'
import { Button } from 'react-native-paper'
import { theme } from '../../theme/theme'
import { matchToHandleVar } from '../../apollo/cache'



type ItemsRelevantToMatchPagePropsType = {
    matchToHandle: MatchToHandleType,
    myItemsInCache: MyItemsInCacheForMatchingType[],
    setMatchAction: (actionType: MatchActionType) => void,

}



const ItemsRelevantToMatchPage: React.FC<ItemsRelevantToMatchPagePropsType> = ({ matchToHandle, myItemsInCache, setMatchAction }) => {


    const { cardData, matchData } = matchToHandle

    const myItemsAvailableToMatch = () => {
        let itemsAvailable: MyItemsInCacheForMatchingType[] = []
        myItemsInCache.forEach(itemInCache => {
            if (matchData.myItemsMatchedWithThis.every(bothWaysItem => bothWaysItem.id !== itemInCache.id)
            || matchData.myItemsMatchedFromThis.every(fromItem => fromItem.id !== itemInCache.id)
            || matchData.myItemsMatchedToThis.every(toItem => toItem.id !== itemInCache.id)
            ) {
                itemsAvailable.push(itemInCache)
            }
        })
        return itemsAvailable
    }

    const myItemsStillAvailable = myItemsAvailableToMatch()

    const cancelHandleMatch = () => {
        matchToHandleVar(undefined)
    }


    return (
        <>
            <Text style={styles.itemTitle}>{cardData.title.toLocaleUpperCase()}</Text>
            <Image 
                source={{uri: cardData.imageSecureUrl}}
                style={styles.image} 
            /> 

            <ItemsImageButtonsRow
                type='BOTH'
                itemsForButtons={matchData.myItemsMatchedWithThis}
                cardData={cardData}
                setMatchAction={setMatchAction}
            />
            <ItemsImageButtonsRow
                type='TO'
                cardData={cardData}
                itemsForButtons={matchData.myItemsMatchedToThis}
                setMatchAction={setMatchAction}
            />            
            <ItemsImageButtonsRow
                type='FROM'
                cardData={cardData}
                itemsForButtons={matchData.myItemsMatchedFromThis}
                setMatchAction={setMatchAction}
            />            
            <ItemsImageButtonsRow
                type='AVAILABLE'
                cardData={cardData}
                itemsForButtons={myItemsStillAvailable}
                setMatchAction={setMatchAction}
            />

            <View style={styles.matchButtonView}>
                <Button 
                    icon='keyboard-return' 
                    mode='contained' 
                    onPress={cancelHandleMatch}
                    disabled={false}
                    color={theme.colors.primary.main}
                >
                    BACK
                </Button>
            </View>
        </>
    )
}

export default ItemsRelevantToMatchPage


