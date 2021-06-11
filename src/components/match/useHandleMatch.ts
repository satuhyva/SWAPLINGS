import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { NotificationPropsType } from 'src/types/notification/NotificationPropsType'
import { ADD_MATCH, ChangeMatchInputVariablesType, AddMatchResponseType, REMOVE_MATCH, RemoveMatchResponseType } from './queries'
// import { updateCacheAfterAddedItem } from './updateCacheAfterAddedItem'
// import { setAddItemOutcomeNotification } from './addItemOutcomeNotifications'
import { MatchActionType } from './HandleBrowseMatch'






type UseHandleMatchType = {
    submitting: boolean,
    submitAddMatch: (matchAction: MatchActionType) => Promise<boolean>,
    notification: NotificationPropsType | undefined,
    submitRemoveMatch: (matchAction: MatchActionType) => Promise<boolean>,
}



export const useHandleMatch = (): UseHandleMatchType => {


    const [submitting, setSubmitting] = useState(false)
    const [notification, setNotification] = useState<NotificationPropsType | undefined>(undefined)
    const [addMatch] = useMutation<AddMatchResponseType, { changeMatchInput: ChangeMatchInputVariablesType }>(ADD_MATCH, {
        update(cache, { data }) {
            // TODO: toteuta tämä!
            console.log('updating cache',cache, data)
        }
    })
    const [removeMatch] = useMutation<RemoveMatchResponseType, { changeMatchInput: ChangeMatchInputVariablesType }>(REMOVE_MATCH, {
        update(cache, { data }) {
            // TODO: toteuta tämä!
            console.log('updating cache',cache, data)
        }
    })  
    
    // const [addItem] = useMutation<AddItemResponseType, { addItemInput: AddItemInputVariablesType }>(ADD_ITEM, {
    //     update(cache, { data }) {
    //         updateCacheAfterAddedItem(cache, data)
    //     }
    // })

    // 
    const submitAddMatch = async (matchAction: MatchActionType): Promise<boolean> => {
        setSubmitting(true)
        const addMatchInput = {
            myItemId: matchAction.myItemId, 
            itemToId: matchAction.cardData.id
        }
        try {
            const { data } = await addMatch({ variables: { changeMatchInput: addMatchInput }})
            console.log(data)
            return true
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

    const submitRemoveMatch = async (matchAction: MatchActionType): Promise<boolean> => {
        setSubmitting(true)
        const removeMatchInput = {
            myItemId: matchAction.myItemId, 
            itemToId: matchAction.cardData.id
        }
        try {
            const { data } = await removeMatch({ variables: { changeMatchInput: removeMatchInput }})
            console.log(data)
            return true
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


    return {
        submitting,
        submitAddMatch,
        notification,
        submitRemoveMatch
    }

}