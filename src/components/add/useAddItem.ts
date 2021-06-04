import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { NotificationPropsType } from 'src/types/notification/NotificationPropsType'
import { ADD_ITEM, AddItemInputVariablesType, AddItemResponseType } from './queries'
import { updateCacheAfterAddedItem } from './updateCacheAfterAddedItem'
import { setAddItemOutcomeNotification } from './addItemOutcomeNotifications'


type UseAddItemType = {
    submitting: boolean,
    submitAddItem: (itemDetails: AddItemInputVariablesType) => Promise<void>,
    notification: NotificationPropsType | undefined,
    
}



export const useAddItem = (clearAll: () => void): UseAddItemType => {

    const [submitting, setSubmitting] = useState(false)
    const [addItem] = useMutation<AddItemResponseType, { addItemInput: AddItemInputVariablesType }>(ADD_ITEM, {
        update(cache, { data }) {
            updateCacheAfterAddedItem(cache, data)
        }
    })

    const [notification, setNotification] = useState<NotificationPropsType | undefined>(undefined)


    const submitAddItem = async (itemDetails: AddItemInputVariablesType): Promise<void> => {
        setSubmitting(true)
        try {
            const { data } = await addItem({ variables: { addItemInput: itemDetails }})
            if (data && data.addItem.success) setAddItemOutcomeNotification('success', setNotification, clearAll)
            else  throw new Error()  
            setSubmitting(false)
        } catch (error) {
            setAddItemOutcomeNotification('error', setNotification, clearAll)
            setSubmitting(false)
        }
    }

    return {
        submitting,
        submitAddItem,
        notification
    }

}