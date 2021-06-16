import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { NotificationPropsType } from 'src/types/notification/NotificationPropsType'
import { ADD_POST, AddPostInputVariablesType, AddPostResponseType } from './queries'





type UseHandleChatType = {
    submitting: boolean,
    postNotification: NotificationPropsType | undefined,
    submitPost: (itemIdA: string, itemIdB: string, post: string) => Promise<boolean>,
}



export const useHandleChat = (): UseHandleChatType => {


    const [submitting, setSubmitting] = useState(false)
    const [postNotification, setPostNotification] = useState<NotificationPropsType | undefined>(undefined)
    const [addPost] = useMutation<AddPostResponseType, { addPostInput: AddPostInputVariablesType }>(ADD_POST, {
        update(cache, { data }) {
            // TODO: toteuta tämä!
            console.log('updating cache',cache, data)
        }
    })


    const submitPost = async (itemIdA: string, itemIdB: string, post: string): Promise<boolean> => {
        setSubmitting(true)
        const addPostInput = {
            itemIdA: itemIdA, 
            itemIdB: itemIdB, 
            post: post
        }
        try {
            const { data } = await addPost({ variables: { addPostInput: addPostInput }})
            console.log(data)
            return true
        } catch (error) {
            console.log('error\n', error)
            setPostNotification({
                title: 'ERROR',
                content: 'Error in adding post',
                themeType: 'error',
                clearNotification: () =>  setPostNotification(undefined)
            })
            setSubmitting(false)
            return false
        }
    }




    return {
        submitting,
        postNotification,
        submitPost
    }

}