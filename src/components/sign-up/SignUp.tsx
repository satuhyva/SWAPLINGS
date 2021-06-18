import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { useHandleSignUp } from './useHandleSignUp'
import Notification from '../common-components/notification/Notification'
import MoveToPage from '../common-components/move-to-page/MoveToPage'
import SignUpForm from './SignUpForm'
import HeaderLogo from '../header/HeaderLogo'



type SignUpPropsType = {
    changePageToShow: (show: 'login' | 'signup') => void
}



const SignUp: React.FC<SignUpPropsType> = ({ changePageToShow }) => {

    const { submitting, submitSignUp, notification } = useHandleSignUp()

    return (
        <View >
            {notification !== undefined &&
                <Notification  { ...notification }/>
            } 
            <HeaderLogo/>         
            <Text style={styles.title}>SIGN UP</Text>
            <SignUpForm
                submitSignUp={submitSignUp}
                submitting={submitting}
                notification={notification}
            />
            <MoveToPage
                infoText='Already have an account?'
                moveAction={() => changePageToShow('login')}
                underlinedText='LOGIN'
            /> 
        </View>
    )
}

export default SignUp

