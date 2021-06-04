import { useContext, useState } from 'react'
import { parseLoginResponse } from './parseLoginResponse'
import { parseFacebookLoginResponse } from '../login/parseFacebookLoginResponse'
import AppContext from '../../app-state/AppContext'
import { NotificationPropsType } from '../../types/notification/NotificationPropsType'
import { ActionTypesEnum } from '../../types/app-state/ActionTypesEnum'
import { ERROR_LOGIN_TITLE, ERROR_LOGIN_CONTENT, ERROR_FACEBOOK_TITLE, ERROR_FACEBOOK_CONTENT } from '../../utils/common-constants/errorMessages'
import { LOGIN_PERSON, LOGIN_PERSON_FACEBOOK, LoginPersonResponseType, LoginInputVariablesType, FacebookLoginInputVariablesType, FacebookLoginResponseType } from './queries'
import axios from 'axios'
import { LOCALHOST_GRAPHQL } from '@env'



type UseHandleLoginType = {
    submitting: boolean,
    submitLogin: (values: LoginInputVariablesType) => Promise<void>,
    submitFacebookLogin: (accessToken: string, userId: string) => Promise<void>,
    notification: NotificationPropsType | undefined,
    setNotification: (notification: NotificationPropsType | undefined) => void
}


const CONFIGURATIONS = {
    headers: {
        'Content-Type': 'application/json'
    }
}


export const useHandleLogin = (): UseHandleLoginType => {

    const [submitting, setSubmitting] = useState(false)
    const [notification, setNotification] = useState<NotificationPropsType | undefined>(undefined)
    const { dispatch } = useContext(AppContext)

    
    const submitLogin = async (values: LoginInputVariablesType): Promise<void> => {
        setSubmitting(true)
        try {
            const response = await axios.post(LOCALHOST_GRAPHQL, {
                        query: LOGIN_PERSON,
                        variables: { loginInput: { username: values.username, password: values.password } }
                }, CONFIGURATIONS)
            const responseData = response.data as unknown as { data: LoginPersonResponseType }
            const parsedLoginData = parseLoginResponse(responseData.data)
            if (parsedLoginData.errorMessage) throw new Error(parsedLoginData.errorMessage)
            dispatch({ type: ActionTypesEnum.SET_LOGGED_IN_USER, data: parsedLoginData.loggedInUserData })
        } catch (error) {
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
        const personValues: FacebookLoginInputVariablesType = { userId: userId, facebookAccessToken: accessToken }
        try {
            const response = await axios.post(LOCALHOST_GRAPHQL, {
                        query: LOGIN_PERSON_FACEBOOK,
                        variables: { facebookLoginInput: personValues }
                }, CONFIGURATIONS)
            const responseData = response.data as unknown as { data: FacebookLoginResponseType }
            const parsedLoginData = parseFacebookLoginResponse(responseData.data)
            if (parsedLoginData.errorMessage) throw new Error(parsedLoginData.errorMessage)
            dispatch({ type: ActionTypesEnum.SET_LOGGED_IN_USER, data: parsedLoginData.loggedInUserData })
        } catch (error) {
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


