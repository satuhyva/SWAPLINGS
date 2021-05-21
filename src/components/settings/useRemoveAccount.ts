import { useContext, useState } from 'react'
import AppContext from '../../app-state/AppContext'
import { useMutation } from '@apollo/client'
import { REMOVE_ACCOUNT } from './queries'
import { parseRemoveAccountServerResponse } from './parseRemoveAccountServerResponse'
import { NotificationPropsType } from '../../types/notification/NotificationPropsType'
import { REMOVE_ACCOUNT_NOTIFICATION } from '../../utils/common-constants/errorMessages'
import { ActionTypesEnum } from '../../types/app-state/ActionTypesEnum'



type UseRemoveAccountType = {
    isSubmitting: boolean,
    submitRemoveAccount: () => Promise<void>
    notification: NotificationPropsType | undefined
}



export const useRemoveAccount = (): UseRemoveAccountType => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const { dispatch } = useContext(AppContext)
    const [removeAccount] = useMutation(REMOVE_ACCOUNT)
    const [notification, setNotification] = useState<NotificationPropsType | undefined>(undefined)


    const submitRemoveAccount = async (): Promise<void> => {
        setIsSubmitting(true)
        try {
            const response = await removeAccount()
            const parsedResponse = parseRemoveAccountServerResponse(response)
            const success = typeof parsedResponse !== 'string' 
            if (success) {
                setNotification({
                    title: REMOVE_ACCOUNT_NOTIFICATION.successTitle,
                    content: REMOVE_ACCOUNT_NOTIFICATION.successContent,
                    themeType: 'success',
                    clearNotification: () => {
                        dispatch({ type: ActionTypesEnum.SET_LOGGED_IN_USER, data: undefined })
                    }
                })
            } else {
                console.log(parsedResponse)
                throw new Error()
            }
        } catch (error) {
            console.log(error)
            setNotification({
                title: REMOVE_ACCOUNT_NOTIFICATION.errorTitle,
                content: REMOVE_ACCOUNT_NOTIFICATION.errorContent,
                themeType: 'error',
                clearNotification: () => setNotification(undefined)
            })
            setIsSubmitting(false)
        }
    }


    return {
        isSubmitting,
        submitRemoveAccount,
        notification
    }

}