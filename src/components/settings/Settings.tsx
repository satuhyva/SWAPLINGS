import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import RemoveAccount from './RemoveAccount'
// import { useApolloClient, gql } from '@apollo/client'


// const MY_ITEMS_IN_CACHE = gql`
//             query MyItemsInCache {
//                 myItems {
//                     title
//                 }
//             }
//         `

// const BROWSE_ITEMS_IN_CACHE = gql`
//     query BrowseItemsInCache {
//         browseItemsByPage {
//             edges {
//                 node {
//                     title
//                 }
//             }
//         }
//     }
// `

const Settings = () => {

    const [showConfirmRemoveAccount, setShowConfirmRemoveAccount] = useState(false)

    // const client = useApolloClient()

    // const resultMyItems = client.readQuery({
    //     query: MY_ITEMS_IN_CACHE
    // })

    // console.log(resultMyItems)
    
    // const resultBrowseItems = client.readQuery({
    //     query: BROWSE_ITEMS_IN_CACHE
    // })

    // console.log(resultBrowseItems)

    return (
        <View style={styles.pageContentContainer}>
            <Text style={styles.pageTitle}>SETTINGS</Text>

            <RemoveAccount
                showConfirmRemoveAccount={showConfirmRemoveAccount}
                setShowConfirmRemoveAccount={setShowConfirmRemoveAccount}
            />

        </View>
    )
}

export default Settings




