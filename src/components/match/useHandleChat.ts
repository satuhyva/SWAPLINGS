import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { NotificationPropsType } from 'src/types/notification/NotificationPropsType'
import { ADD_POST, AddPostInputVariablesType, AddPostResponseType } from './queries'





type UseHandleChatType = {
    submittingPost: boolean,
    postNotification: NotificationPropsType | undefined,
    submitPost: (itemIdA: string, itemIdB: string, post: string) => Promise<boolean>,
}



export const useHandleChat = (): UseHandleChatType => {


    const [submittingPost, setSubmittingPost] = useState(false)
    const [postNotification, setPostNotification] = useState<NotificationPropsType | undefined>(undefined)
    const [addPost] = useMutation<AddPostResponseType, { addPostInput: AddPostInputVariablesType }>(ADD_POST)


    const submitPost = async (itemIdA: string, itemIdB: string, post: string): Promise<boolean> => {
        setSubmittingPost(true)
        const addPostInput = {
            itemIdA: itemIdA, 
            itemIdB: itemIdB, 
            post: post
        }
        try {
            const { data } = await addPost({ variables: { addPostInput: addPostInput }})
            if (data && data.addPost && data.addPost.success) return true
            return false
        } catch (error) {
            console.log('error\n', error)
            setPostNotification({
                title: 'ERROR',
                content: 'Error in adding post',
                themeType: 'error',
                clearNotification: () =>  setPostNotification(undefined)
            })
            setSubmittingPost(false)
            return false
        }
    }




    return {
        submittingPost,
        postNotification,
        submitPost
    }

}