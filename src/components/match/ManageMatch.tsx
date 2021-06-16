import React, { useEffect, useState } from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import { useReactiveVar } from '@apollo/client'
import { selectedMatchVar } from '../../apollo/cache'
import { styles } from './styles'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../../theme/theme'
import { IconButton } from 'react-native-paper'
import FormTextInput from '../common-components/form-text-input/FormTextInput'
import { useHandleChat } from './useHandleChat'
import { ITEMS_CHAT, ItemsChatInputVariablesType, ItemsChatResponseType } from './queries'
import { useQuery } from '@apollo/client'
import Notification from '../common-components/notification/Notification'
import WaitSpinner from '../common-components/wait-spinner/WaitSpinner'
import ChatPost from './ChatPost'
import { ChatPostType } from '../../types/chat/ChatPostType'




const ManageMatch = () => {

    const selectedMatch = useReactiveVar(selectedMatchVar)

    const [newPost, setNewPost] = useState('')
    const [showErrors, setShowErrors] = useState(false)

    const { loading, error, data } = useQuery<
            ItemsChatResponseType, 
            { itemsChatInput: { itemIdA: string, itemIdB: string }}
        >(ITEMS_CHAT, { variables: { itemsChatInput: { itemIdA: selectedMatch?.myItem.id ?? '', itemIdB: selectedMatch?.otherItem.id ?? '' } }})

    const { submitting, postNotification, submitPost } = useHandleChat()


    if (!selectedMatch) return null

    const removeMatch = () => {

    }

    const submitNewPost = async () => {
        setShowErrors(true)
        const successInSubmittingPost = await submitPost(selectedMatch.myItem.id, selectedMatch.otherItem.id, newPost)
        console.log(successInSubmittingPost)
    }

    // console.log(error)
    // console.log(data)
    const posts: ChatPostType[] = data && data.itemsChat && data.itemsChat.length > 0 ?
        data.itemsChat : []


    return (
        <View style={styles.manageMatchPageContainer}>
            <Text style={styles.pageTitle}>MANAGE MATCH</Text>

            <View style={styles.matchImageRowContainer}>
                <Image 
                    source={{uri: selectedMatch.otherItem.imageSecureUrl ?? ''}}
                    style={styles.matchImage} 
                />
                <View style={styles.matchImageCentralIconsContainer}>
                    <MIcon name='cards-heart' size={50} color={theme.colors.primary.light} />
                    <View style={styles.iconBackgroundCircle}>
                        <IconButton
                            icon='delete-forever'
                            color={theme.colors.primary.dark}
                            size={40}
                            onPress={removeMatch}
                        /> 
                    </View>
                </View>
                <Image 
                    source={{uri: selectedMatch.myItem.imageSecureUrl ?? '' }}
                    style={styles.matchImage} 
                />  
            </View>

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
            }

            <View style={styles.newPostContainer}>
                <FormTextInput
                    target='matchPost'
                    value={newPost}
                    handleValueChange={text => setNewPost(text)}
                    isEditable={true}
                    isVisible={true}
                    error={showErrors && newPost.length < 1 ? 'RED_TITLE' : undefined}
                />
                <View style={styles.postIconBackgroundCircle}>
                    <IconButton
                        icon='send'
                        color={theme.colors.primary.contrast}
                        size={30}
                        onPress={submitNewPost}
                    /> 
                </View>
            </View>
        </View>
    )
}


export default ManageMatch


