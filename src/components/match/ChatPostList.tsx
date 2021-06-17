import React from 'react'
import { View, ScrollView } from 'react-native'
import { styles } from './styles'
import ChatPost from './ChatPost'
import { ChatPostType } from '../../types/chat/ChatPostType'
import { SelectedItemMatchType } from '../../types/match/SelectedItemMatchType'


type ChatPostListPropsType = {
    selectedMatch: SelectedItemMatchType,
    posts: ChatPostType[]
}

const ChatPostList: React.FC<ChatPostListPropsType> = ({ posts, selectedMatch }) => {


    return (

                <View style={styles.scrollView}>
                    <ScrollView>
                        <View style={styles.chatContainer}>
                            {posts.map((post, index) => {
                                const isMyItem = selectedMatch.myItem.id === post.postingItemId
                                return <ChatPost 
                                            key={'post-' + index.toString()} 
                                            post={post} 
                                            isMyItem={isMyItem}
                                            imageUrl={isMyItem? (selectedMatch.myItem.imageSecureUrl ?? '') : (selectedMatch.otherItem.imageSecureUrl ?? '')}
                                        />
                            })}
                        </View>                    
                    </ScrollView>
                </View>
    )
}


export default ChatPostList





