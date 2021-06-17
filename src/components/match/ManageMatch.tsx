import React, {  useState } from 'react'
import { View, Text } from 'react-native'
import { useReactiveVar } from '@apollo/client'
import { selectedMatchVar } from '../../apollo/cache'
import { styles } from './styles'
import { ITEMS_CHAT, ItemsChatResponseType } from './queries'
import { useQuery } from '@apollo/client'
import Notification from '../common-components/notification/Notification'
import WaitSpinner from '../common-components/wait-spinner/WaitSpinner'
import { ChatPostType } from '../../types/chat/ChatPostType'
import { useHandleMatch } from './useHandleMatch'
import RemoveMatch from './RemoveMatch'
import MatchedItemsImages from './MatchedItemsImages'
import ChatPostList from './ChatPostList'
import NewChatPost from './NewChatPost'
import { useNavigation } from '@react-navigation/native'
import { CompositeNavigationPropHomeType } from '../../types/routes/CompositeNavigationPropTypes'


const ManageMatch = () => {

    const selectedMatch = useReactiveVar(selectedMatchVar)
    const [showRemoveWarning, setShowRemoveWarning] = useState(false)
    const { submitting, notification, submitRemoveMatch } = useHandleMatch()
    const navigation = useNavigation<CompositeNavigationPropHomeType>()

    const { loading, error, data, refetch } = useQuery<
            ItemsChatResponseType, 
            { itemsChatInput: { itemIdA: string, itemIdB: string }}
        >(ITEMS_CHAT, 
            { 
                variables: { itemsChatInput: { itemIdA: selectedMatch?.myItem.id ?? '', itemIdB: selectedMatch?.otherItem.id ?? '' } },
                pollInterval: 3000,
            }
        )


    if (!selectedMatch) return null

    const removeMatch = async () => {
        const successInRemoveMatch = await submitRemoveMatch({
            mode: 'MY',
            currentState: 'BOTH',
            myItem: { id: selectedMatch.myItem.id, title: selectedMatch.myItem.title, imageSecureUrl: selectedMatch.myItem.imageSecureUrl ?? '' },
            otherItem: { id: selectedMatch.otherItem.id, title: selectedMatch.otherItem.title, imageSecureUrl: selectedMatch.otherItem.imageSecureUrl ?? '' },
        })
        if (successInRemoveMatch) {
            navigation.navigate('Home')
        }
    }


    const posts: ChatPostType[] = data && data.itemsChat && data.itemsChat.posts && data.itemsChat.posts.length > 0 ?
        data.itemsChat.posts : []


    return (
        <View style={styles.manageMatchPageContainer}>
            <Text style={styles.pageTitle}>MANAGE MATCH</Text>

            {notification !== undefined &&
                <Notification  { ...notification }/>
            }

            {showRemoveWarning ?
                    <RemoveMatch removeMatch={removeMatch} isSubmitting={submitting}/>
                    :
                    <MatchedItemsImages 
                        selectedMatch={selectedMatch}
                        setShowRemoveWarning={setShowRemoveWarning}
                    />                   
            }
       

            <View>
                {loading ?
                    <WaitSpinner/>
                    : error ?
                        <Text>Something went wrong. Could not find chat.</Text>
                        :
                        null
                }
            </View>

            {posts.length > 0 &&
                <ChatPostList
                    selectedMatch={selectedMatch}
                    posts={posts}
                />
            }

            <NewChatPost
                selectedMatch={selectedMatch}
                refetchPosts={refetch}
            />

        </View>
    )
}


export default ManageMatch


