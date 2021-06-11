import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { useReactiveVar, useApolloClient } from '@apollo/client'
import { matchToHandleVar, selectedMatchVar } from '../../apollo/cache'
import HandleBrowseMatch from './HandleBrowseMatch'
import { MY_ITEMS_IN_CACHE } from './queries'
import { PriceGroupEnum } from '../../types/item/PriceGroupEnum'
import ManageMatch from './ManageMatch'



export type MyItemsInCacheForMatchingType = {
    id: string,
    title: string,
    priceGroup: PriceGroupEnum, 
    imageSecureUrl: string
}


const Match = () => {

    const matchToHandle = useReactiveVar(matchToHandleVar)
    const selectedMatch = useReactiveVar(selectedMatchVar)

    const client = useApolloClient()
    const myItemsInCache: { myItems: MyItemsInCacheForMatchingType[] } | null | undefined = client.readQuery({
        query: MY_ITEMS_IN_CACHE
    })



    if (selectedMatch !== undefined) {
        return <ManageMatch/>
    }

    if (matchToHandle !== undefined) {
        return <HandleBrowseMatch matchToHandle={matchToHandle} myItemsInCache={myItemsInCache ? myItemsInCache.myItems : []}/>
    }

    return (
        <View style={styles.pageContentContainer}>
            <Text style={styles.pageTitle}>MATCH</Text>
        </View>
    )
}

export default Match




