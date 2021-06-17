import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { NotificationPropsType } from 'src/types/notification/NotificationPropsType'
import { ADD_MATCH, ChangeMatchInputVariablesType, AddMatchResponseType, REMOVE_MATCH, RemoveMatchResponseType } from './queries'
import { ItemImageButtonActionType } from '../common-components/handle-matches/ItemImageButtonsRow'



type UseHandleMatchType = {
    submitting: boolean,
    submitAddMatch: (action: ItemImageButtonActionType) => Promise<boolean>,
    notification: NotificationPropsType | undefined,
    submitRemoveMatch: (action: ItemImageButtonActionType) => Promise<boolean>,
}



export const useHandleMatch = (): UseHandleMatchType => {


    const [submitting, setSubmitting] = useState(false)
    const [notification, setNotification] = useState<NotificationPropsType | undefined>(undefined)
    const [addMatch] = useMutation<AddMatchResponseType, { changeMatchInput: ChangeMatchInputVariablesType }>(ADD_MATCH)
    const [removeMatch] = useMutation<RemoveMatchResponseType, { changeMatchInput: ChangeMatchInputVariablesType }>(REMOVE_MATCH)  


    const submitAddMatch = async (action: ItemImageButtonActionType): Promise<boolean> => {
        setSubmitting(true)
        const addMatchInput = {
            myItemId: action.myItem.id, 
            itemToId: action.otherItem.id
        }
        try {
            const { data } = await addMatch({ variables: { changeMatchInput: addMatchInput }})
            setSubmitting(false)
            if (data?.addMatch.success) return true
            return false
        } catch (error) {
            console.log('error\n', error)
            setNotification({
                title: 'ERROR',
                content: 'Error in adding match',
                themeType: 'error',
                clearNotification: () =>  setNotification(undefined)
            })
            setSubmitting(false)
            return false
        }
    }

    const submitRemoveMatch = async (action: ItemImageButtonActionType): Promise<boolean> => {
        setSubmitting(true)
        const removeMatchInput = {
            myItemId: action.myItem.id, 
            itemToId: action.otherItem.id
        }
        try {
            const { data } = await removeMatch({ variables: { changeMatchInput: removeMatchInput }})
            if (data?.removeMatch.success) return true
            return false
        } catch (error) {
            console.log('error\n', error)
            setNotification({
                title: 'ERROR',
                content: 'Error in removing match',
                themeType: 'error',
                clearNotification: () =>  setNotification(undefined)
            })
            setSubmitting(false)
            return false
        }
    }


    return {
        submitting,
        submitAddMatch,
        notification,
        submitRemoveMatch
    }

}