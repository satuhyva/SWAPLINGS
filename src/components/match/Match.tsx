import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { useReactiveVar, useApolloClient } from '@apollo/client'
import { matchToHandleVar, selectedMatchVar } from '../../apollo/cache'
import { MY_ITEMS_IN_CACHE } from './queries'
import { PriceGroupEnum } from '../../types/item/PriceGroupEnum'
import ManageMatch from './ManageMatch'
import HandleMatch from './HandleMatch'
import { useNavigation } from '@react-navigation/native'
import { CompositeNavigationPropHomeType, CompositeNavigationPropBrowseType } from '../../types/routes/CompositeNavigationPropTypes'
import MoveToPage from '../common-components/move-to-page/MoveToPage'




export type MyItemsInCacheForMatchingType = {
    id: string,
    title: string,
    priceGroup: PriceGroupEnum, 
    imageSecureUrl: string
}


const Match = () => {

    const matchToHandle = useReactiveVar(matchToHandleVar)
    const selectedMatch = useReactiveVar(selectedMatchVar)
    const navigation = useNavigation<CompositeNavigationPropHomeType>()

    const client = useApolloClient()
    const myItemsInCache: { myItems: MyItemsInCacheForMatchingType[] } | null | undefined = client.readQuery({
        query: MY_ITEMS_IN_CACHE
    })

    if (selectedMatch !== undefined) {
        return <ManageMatch/>
    }    

    if (matchToHandle !== undefined) {
        return <HandleMatch matchToHandle={matchToHandle} myItemsInCache={myItemsInCache ? myItemsInCache.myItems : []}/>
    }


    return (
        <View style={styles.pageContentContainer}>
            <Text style={styles.pageTitle}>MATCH</Text>
            <Text>
                An item needs to be selected to view its' matching status.
            </Text>

            <MoveToPage
                infoText='Either select one of your own items:'
                underlinedText='my items >>>'
                moveAction={() => navigation.navigate('Home') }
            />
            <MoveToPage
                infoText='Or browse items by other people:'
                underlinedText='browse items >>>'
                moveAction={() => navigation.navigate('Browse') }
            />
        </View>
    )
}

export default Match




