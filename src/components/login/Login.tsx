import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { useHandleLogin } from './useHandleLogin'
import WaitSpinner from '../common-components/wait-spinner/WaitSpinner'
import Notification from '../common-components/notification/Notification'
import LoginWithFacebook from './LoginWithFacebook'
import MoveToPage from '../common-components/move-to-page/MoveToPage'
import LoginForm from './LoginForm'
import HeaderLogo from '../header/HeaderLogo'

type LoginPropsType = {
    changePageToShow: (show: 'login' | 'signup') => void
}


const Login: React.FC<LoginPropsType> = ({ changePageToShow }) => {

    const { submitting, submitLogin, submitFacebookLogin, notification, setNotification } = useHandleLogin()


    return (
        <View style={styles.formContainer}>
            {notification !== undefined &&
                <Notification  { ...notification }/>
            }
            <HeaderLogo/>
            <Text style={styles.title}>LOGIN</Text>
            
            <LoginForm
                submitLogin={submitLogin}
                submitting={submitting}
                notification={notification}
            />
            <View style={styles.waitSpinnerContainer}>
                {submitting ?
                    <WaitSpinner/>
                    :
                    <LoginWithFacebook
                        submitFacebookLogin={submitFacebookLogin}
                        setNotification={setNotification}
                        isDisabled={submitting || notification !== undefined}
                    />
                }
            </View>

            <MoveToPage
                infoText='No account yet?'
                moveAction={() => changePageToShow('signup')}
                underlinedText='SIGN UP'
            />

        </View>
    )
}

export default Login

