import React, { useState } from 'react'
import { View } from 'react-native'
import { Formik } from 'formik'
import { loginValidationSchema } from './loginValidationSchema'
import FormTextInput from '../common-components/form-text-input/FormTextInput'
import { styles } from './styles'
import { theme } from '../../theme/theme'
import { IconButton } from 'react-native-paper'
import { Button } from 'react-native-paper'
import { NotificationPropsType } from '../../types/notification/NotificationPropsType'
// import { LoginType } from '../../types/signup-login/LoginType'
import { LoginInputVariablesType } from './queries'


type LoginFormPropsType = {
    submitLogin: (values: LoginInputVariablesType) => Promise<void>,
    submitting: boolean,
    notification: NotificationPropsType | undefined
}


const LoginForm: React.FC<LoginFormPropsType> = ({ submitting, submitLogin, notification }) => {


    const initialValues = { username: '', password: '' }
    const [showErrors, setShowErrors] = useState(false)
    const [showPassword, setShowPassword] = useState(false)


    const validationSchema = loginValidationSchema()


    return (
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => submitLogin(values)}
                validateOnChange={showErrors}
                validateOnBlur={showErrors}
            >
                {({ values, handleChange, errors, handleSubmit }) => {
                    return (
                        <View style={styles.formContainer}>
                            <View>
                                <FormTextInput
                                    target='username'
                                    value={values.username}
                                    handleValueChange={handleChange('username')}
                                    isEditable={!submitting}
                                    isVisible={true}
                                    error={errors.username}
                                />                       
                                <FormTextInput
                                    target='password'
                                    value={values.password}
                                    handleValueChange={handleChange('password')}
                                    isEditable={!submitting}
                                    isVisible={showPassword}
                                    error={errors.password}
                                />              
                            </View>

                            <View style={styles.iconButtonView}>
                                <IconButton
                                    icon={showPassword ? 'eye-off' : 'eye'}
                                    color={theme.colors.primary.main}
                                    onPress={() => setShowPassword(!showPassword)}
                                />
                            </View>

                            <View style={styles.loginButtonView}>
                                <Button 
                                    icon='send' 
                                    mode='contained' 
                                    onPress={() => {
                                        if (!showErrors) setShowErrors(true)
                                        handleSubmit()
                                    }}
                                    disabled={submitting || notification !== undefined}
                                    color={theme.colors.primary.main}
                                >
                                    LOGIN
                                </Button>
                            </View>
                        </View>
                    )
                }}
            </Formik>
    )
}

export default LoginForm

