import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { NotificationPropsType } from 'src/types/notification/NotificationPropsType'
import { ADD_ITEM_NOTIFICATION } from '../../utils/common-constants/errorMessages'
import { ADD_ITEM } from './queries'



export type AddItemType = {
    title: string,
    description: string,
    brand?: string,
    priceGroup: string,
    imagePublicId: string,
    imageSecureUrl: string
}

type UseAddItemType = {
    submitting: boolean,
    submitAddItem: (itemDetails: AddItemType) => Promise<void>,
    notification: NotificationPropsType | undefined,
    
}



export const useAddItem = (clearAll: () => void): UseAddItemType => {

    const [submitting, setSubmitting] = useState(false)
    const [addItem] = useMutation(ADD_ITEM)
    const [notification, setNotification] = useState<NotificationPropsType | undefined>(undefined)


    const submitAddItem = async (itemDetails: AddItemType): Promise<void> => {
        setSubmitting(true)
        console.log(itemDetails)
        try {
            const { data } = await addItem({ variables: { addItemInput: itemDetails }})
            if (data.addItem && data.addItem.success) {
                setNotification({
                    title: ADD_ITEM_NOTIFICATION.successTitle,
                    content: ADD_ITEM_NOTIFICATION.successContent,
                    themeType: 'success',
                    clearNotification: () => {
                        clearAll()
                        setNotification(undefined)
                    }
                })
            } else {
                throw new Error()
            }
            setSubmitting(false)
        } catch (error) {
            setNotification({
                title: ADD_ITEM_NOTIFICATION.errorTitle,
                content: ADD_ITEM_NOTIFICATION.errorContent,
                themeType: 'error',
                clearNotification: () => {
                    clearAll()
                    setNotification(undefined)
                }
            }) 
            setSubmitting(false)
        }
    }




    return {
        submitting,
        submitAddItem,
        notification
    }

}