import { useContext, useState } from 'react'
import { SignUpFormikValuesType } from './SignUpForm'

import { NotificationPropsType } from 'src/types/notification/NotificationPropsType'
import AppContext from '../../app-state/AppContext'
import { ActionTypesEnum } from '../../types/app-state/ActionTypesEnum'
import { SIGN_UP_NOTIFICATION } from '../../utils/common-constants/errorMessages'
import { SIGN_UP_PERSON, SignUpPersonVariablesType, SignUpPersonResponseType } from './queries'
import axios from 'axios'
import { LOCALHOST_GRAPHQL } from '@env'
import { parseSignUpResponse } from './parseSignUpResponse'


type UseHandleSignUpType = {
    submitting: boolean,
    submitSignUp: (values: SignUpFormikValuesType) => Promise<void>,
    notification: NotificationPropsType | undefined
}

const CONFIGURATIONS = {
    headers: {
        'Content-Type': 'application/json'
    }
}


export const useHandleSignUp = (): UseHandleSignUpType => {

    const [submitting, setSubmitting] = useState(false)
    const [notification, setNotification] = useState<NotificationPropsType | undefined>(undefined)
    const { dispatch } = useContext(AppContext)


    const submitSignUp = async (values: SignUpFormikValuesType): Promise<void> => {
        setSubmitting(true)
        let personValues: SignUpPersonVariablesType = { username: values.username, password: values.password }
        if (values.email) {
            personValues = { ...personValues, email: values.email }
        }
    
        try {
            const response = await axios.post(LOCALHOST_GRAPHQL, {
                    query: SIGN_UP_PERSON,
                    variables: { signUpInput: personValues }
                }, CONFIGURATIONS)
            const responseData = response.data as unknown as { data: SignUpPersonResponseType }
            const parsedSignUpData = parseSignUpResponse(responseData.data)
            if (parsedSignUpData.errorMessage) throw new Error(parsedSignUpData.errorMessage)
            dispatch({ type: ActionTypesEnum.SET_LOGGED_IN_USER, data: parsedSignUpData.loggedInUserData })
        } catch (error) {
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