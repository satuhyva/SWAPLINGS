import { useContext, useState } from 'react'
import { SignUpFormikValuesType } from '../../types/signup-login/SignUpFormikValuesType'
import { useMutation } from '@apollo/client'
import { parseSignUpResponse } from './parseSignUpResponse'
import { NotificationPropsType } from 'src/types/notification/NotificationPropsType'
import AppContext from '../../app-state/AppContext'
import { ActionTypesEnum } from '../../types/app-state/ActionTypesEnum'
import { SIGN_UP_NOTIFICATION } from '../../utils/common-constants/errorMessages'
import { SIGN_UP_PERSON_TRADITIONALLY } from './queries'



type SignUpPersonType = {
    username: string,
    password: string,
    email?: string
}


type UseHandleSignUpType = {
    submitting: boolean,
    submitSignUp: (values: SignUpFormikValuesType) => Promise<void>,
    notification: NotificationPropsType | undefined
}



export const useHandleSignUp = (): UseHandleSignUpType => {

    const [submitting, setSubmitting] = useState(false)
    const [signUpPersonTraditionally] = useMutation(SIGN_UP_PERSON_TRADITIONALLY)
    const [notification, setNotification] = useState<NotificationPropsType | undefined>(undefined)
    const { dispatch } = useContext(AppContext)

    const submitSignUp = async (values: SignUpFormikValuesType): Promise<void> => {
        setSubmitting(true)
        let personValues: SignUpPersonType = { username: values.username, password: values.password }
        if (values.email) {
            personValues = { ...personValues, email: values.email }
        }
        
        try {
            const response = await signUpPersonTraditionally({ variables: { signUpInput: personValues }})
            const parsedSignUpData = parseSignUpResponse(response)
            if (typeof parsedSignUpData === 'string' ) throw new Error(parsedSignUpData)
            dispatch({ type: ActionTypesEnum.SET_LOGGED_IN_USER, data: parsedSignUpData }) 
        } catch (error) {
            console.log(error)
            let result: 'error' | 'duplicateUsername' | 'duplicateEmail' = 'error'
            if (error.toString().includes('Duplicate email')) result = 'duplicateEmail'
            if (error.toString().includes('Duplicate username')) result = 'duplicateUsername'
            const notificationContent = result === 'error' ? 
                SIGN_UP_NOTIFICATION.errorGeneralContent : result === 'duplicateUsername' ? 
                    SIGN_UP_NOTIFICATION.errorDuplicateUsernameContent : SIGN_UP_NOTIFICATION.errorDuplicateEmailContent
            setNotification({
                title: SIGN_UP_NOTIFICATION.errorTitle,
                content: notificationContent,
                themeType: 'error',
                clearNotification: () => setNotification(undefined)
            })
            setSubmitting(false)
        }
    }




    return {
        submitting,
        submitSignUp,
        notification
    }

}