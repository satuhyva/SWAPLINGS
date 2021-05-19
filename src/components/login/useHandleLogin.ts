import { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { LoginType } from '../../types/signup-login/LoginType'
import { parseLoginResponse } from './parseLoginResponse'
import { parseFacebookLoginResponse } from '../login/parseFacebookLoginResponse'
import AppContext from '../../app-state/AppContext'
import { NotificationPropsType } from '../../types/notification/NotificationPropsType'
import { ActionTypesEnum } from '../../types/app-state/ActionTypesEnum'
import { ERROR_LOGIN_TITLE, ERROR_LOGIN_CONTENT, ERROR_FACEBOOK_TITLE, ERROR_FACEBOOK_CONTENT } from '../../utils/common-constants/errorMessages'
import { LOGIN_PERSON, LOGIN_PERSON_FACEBOOK } from './queries'


type UseHandleLoginType = {
    submitting: boolean,
    submitLogin: (values: LoginType) => Promise<void>,
    submitFacebookLogin: (accessToken: string, userId: string) => Promise<void>,
    notification: NotificationPropsType | undefined,
    setNotification: (notification: NotificationPropsType | undefined) => void
}



export const useHandleLogin = (): UseHandleLoginType => {

    const [submitting, setSubmitting] = useState(false)
    const [loginPerson] = useMutation(LOGIN_PERSON)
    const [loginPersonFacebook] = useMutation(LOGIN_PERSON_FACEBOOK)
    const [notification, setNotification] = useState<NotificationPropsType | undefined>(undefined)
    const { dispatch } = useContext(AppContext)

    const submitLogin = async (values: LoginType): Promise<void> => {
        setSubmitting(true)
        try {
            const response = await loginPerson({ variables: { loginInput: { username: values.username, password: values.password } }})
            const parsedLoginData = parseLoginResponse(response)
            if (typeof parsedLoginData === 'string' ) throw new Error(parsedLoginData)
            dispatch({ type: ActionTypesEnum.SET_LOGGED_IN_USER, data: parsedLoginData })
        } catch (error) {
            console.log(error)
            setSubmitting(false)
            setNotification({
                title: ERROR_LOGIN_TITLE,
                content: ERROR_LOGIN_CONTENT,
                themeType: 'error',
                clearNotification: () => setNotification(undefined)
            })
        }
    }

    const submitFacebookLogin = async (accessToken: string, userId: string): Promise<void> => {
        setSubmitting(true)
        const personValues = { userId: userId, facebookAccessToken: accessToken }
        try {
            const response = await loginPersonFacebook({ variables: { facebookLoginInput: personValues }})
            const parsedLoginData = parseFacebookLoginResponse(response)
            if (typeof parsedLoginData === 'string' ) throw new Error(parsedLoginData)
            dispatch({ type: ActionTypesEnum.SET_LOGGED_IN_USER, data: parsedLoginData })
        } catch (error) {
            console.log(error)
            setSubmitting(false)
            setNotification({
                title: ERROR_FACEBOOK_TITLE,
                content: ERROR_FACEBOOK_CONTENT,
                themeType: 'error',
                clearNotification: () => setNotification(undefined)
            })
        }
    }


    return {
        submitting,
        submitLogin,
        submitFacebookLogin,
        notification,
        setNotification
    }

}


