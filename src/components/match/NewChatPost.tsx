import React, {  useState } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { IconButton } from 'react-native-paper'
import FormTextInput from '../common-components/form-text-input/FormTextInput'
import { useHandleChat } from './useHandleChat'
import { SelectedItemMatchType } from '../../types/match/SelectedItemMatchType'
import { ApolloQueryResult } from '@apollo/client'
import { ItemsChatResponseType } from './queries'
import Notification from '../common-components/notification/Notification'


type NewChatPostPropsType = {
    selectedMatch: SelectedItemMatchType,
    refetchPosts: (variables?: Partial<{
        itemsChatInput: {
            itemIdA: string;
            itemIdB: string;
        };
    }> | undefined) => Promise<ApolloQueryResult<ItemsChatResponseType>>
}



const NewChatPost: React.FC<NewChatPostPropsType> = ({ selectedMatch, refetchPosts }) => {


    const [newPost, setNewPost] = useState('')
    const [showErrors, setShowErrors] = useState(false)
    const { submittingPost, postNotification, submitPost } = useHandleChat()
   

    const submitNewPost = async () => {
        setShowErrors(true)
        const successInSubmittingPost = await submitPost(selectedMatch.myItem.id, selectedMatch.otherItem.id, newPost)
        if (successInSubmittingPost) {
            refetchPosts()
            setNewPost('')
            setShowErrors(false)
        }
    }


    return (

            <View style={styles.newPostContainer}>

                {postNotification !== undefined &&
                    <Notification  { ...postNotification }/>
                }

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
                        color='#FFFFFF'
                        size={30}
                        onPress={submitNewPost}
                        disabled={submittingPost}
                    /> 
                </View>
            </View>

    )
}


export default NewChatPost


