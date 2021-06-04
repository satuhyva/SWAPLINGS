import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { theme } from '../../theme/theme'
import { Button } from 'react-native-paper'
import { ERROR_FACEBOOK_TITLE, ERROR_FACEBOOK_CONTENT } from '../../utils/common-constants/errorMessages'
import { NotificationPropsType } from '../../types/notification/NotificationPropsType'
import * as Facebook from 'expo-facebook'
import { FACEBOOK_LOGIN_APP_ID } from '@env'



type LoginWithFacebookPropsType = {
    submitFacebookLogin: (accessToken: string, userId: string) => Promise<void>, 
    setNotification: (notification: NotificationPropsType | undefined) => void, 
    isDisabled: boolean
}

export type FacebookAPIResponseType = {
    type: string,
    token: string,
    userId: string,
}


const LoginWithFacebook: React.FC<LoginWithFacebookPropsType> = ({ submitFacebookLogin, setNotification, isDisabled }) => {

    const loginWithFacebook = async () => {

        try {
            await Facebook.initializeAsync({
                appId: FACEBOOK_LOGIN_APP_ID,
              })
              const response = await Facebook.logInWithReadPermissionsAsync({ permissions: ['public_profile'] })
              const responseObject = response as FacebookAPIResponseType
              if (responseObject.type === 'success') {
                await submitFacebookLogin(responseObject.token, responseObject.userId)
              } 
        } catch (error) {
            console.log('error', error)
            setNotification({
                title: ERROR_FACEBOOK_TITLE,
                content: ERROR_FACEBOOK_CONTENT,
                themeType: 'error',
                clearNotification: () => setNotification(undefined)
            })
        }
    }

    return (
        <View style={styles.facebookButtonContainer}>
            <Button 
                mode='contained' 
                onPress={loginWithFacebook}
                disabled={isDisabled}
                color={theme.colors.facebook}
            >
                LOGIN WITH FACEBOOK
            </Button>                                            
        </View>
    )
}

export default LoginWithFacebook

