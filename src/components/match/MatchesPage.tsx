import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { Button } from 'react-native-paper'
import { theme } from '../../theme/theme'
import { matchToHandleVar } from '../../apollo/cache'
import {  useNavigation } from '@react-navigation/native'
import { CompositeNavigationPropHomeType, CompositeNavigationPropBrowseType } from '../../types/routes/CompositeNavigationPropTypes'
import { ItemImageButtonActionType } from '../common-components/handle-matches/ItemImageButtonsRow'
// import { MyItemToHandleType } from '../../types/match/MyItemToHandleType'
import ItemImageButtonsRow from '../common-components/handle-matches/ItemImageButtonsRow'
import { MatchToHandleType } from '../../types/match/MatchToHandleType'
import { MyItemsInCacheForMatchingType } from './Match'
import { MatchItemDataType } from '../../types/match/MatchToHandleType'


const myItemsAvailableToMatch = (myItemsInCache: MyItemsInCacheForMatchingType[], mathes: MatchItemDataType[], matchedFrom: MatchItemDataType[], matchedTo: MatchItemDataType[]) => {
    let itemsAvailable: MyItemsInCacheForMatchingType[] = []

    myItemsInCache.forEach(itemInCache => {
        if (mathes.every(bothWaysItem => bothWaysItem.id !== itemInCache.id)
        && matchedFrom.every(fromItem => fromItem.id !== itemInCache.id)
        && matchedTo.every(toItem => toItem.id !== itemInCache.id)) {
            itemsAvailable.push(itemInCache)
        }
    })
    
    return itemsAvailable
}


type MatchesPagePropsType = {
    matchToHandle: MatchToHandleType,
    setAction: (action: ItemImageButtonActionType) => void,
    myItemsInCache: MyItemsInCacheForMatchingType[],
}



const MatchesPage: React.FC<MatchesPagePropsType> = ({ matchToHandle, setAction, myItemsInCache }) => {


    const { mode, item, matches, matchedFrom, matchedTo } = matchToHandle
    const navigation = useNavigation<CompositeNavigationPropHomeType | CompositeNavigationPropBrowseType>()

    const myItemsStillAvailable = myItemsAvailableToMatch(myItemsInCache, matches, matchedFrom, matchedTo)

    const cancelHandleMatch = () => {
        matchToHandleVar(undefined)
        if (mode === 'MY') navigation.navigate('Home')
        else navigation.navigate('Browse')
    }


    return (
        <>
            <Text style={styles.itemTitle}>{item.title.toLocaleUpperCase()}</Text>
            <Image 
                source={{uri: item.imageSecureUrl}}
                style={styles.image} 
            /> 

            <ItemImageButtonsRow
                mode={matchToHandle.mode}
                type='BOTH'
                itemsForButtons={matches}
                mainItem={item}
                setAction={setAction}
            />
            <ItemImageButtonsRow
                mode={matchToHandle.mode}
                type='TO'
                mainItem={item}
                itemsForButtons={matchedTo}
                setAction={setAction}
            />            
            <ItemImageButtonsRow
                mode={matchToHandle.mode}
                type='FROM'
                mainItem={item}
                itemsForButtons={matchedFrom}
                setAction={setAction}
            /> 
            {mode === 'BROWSE' &&
                <ItemImageButtonsRow
                    mode={matchToHandle.mode}
                    type='AVAILABLE'
                    mainItem={item}
                    itemsForButtons={myItemsStillAvailable}
                    setAction={setAction}
                />  
            }           

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

export default MatchesPage


