import React, { useState } from 'react'
import { View } from 'react-native'
import { Formik } from 'formik'
import { signUpValidationSchema } from './signUpValidationSchema'
import FormTextInput from '../common-components/form-text-input/FormTextInput'
import { styles } from './styles'
import { theme } from '../../theme/theme'
import { IconButton } from 'react-native-paper'
import { Button } from 'react-native-paper'
import WaitSpinner from '../common-components/wait-spinner/WaitSpinner'
import { NotificationPropsType } from '../../types/notification/NotificationPropsType'


export type SignUpFormikValuesType = {
    username: string, 
    password: string, 
    passwordConfirm: string,
    email?: string
}

type SignUpFormPropsType = {
    submitSignUp: (values: SignUpFormikValuesType) => Promise<void>,
    submitting: boolean,
    notification: NotificationPropsType | undefined
}



const SignUpForm: React.FC<SignUpFormPropsType> = ({ submitSignUp, submitting, notification }) => {

    const initialValues = { username: '', password: '', passwordConfirm: '', email: '' }
    const [showErrors, setShowErrors] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const validationSchema = signUpValidationSchema()

    return (
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => submitSignUp(values)}
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
                                    <FormTextInput
                                        target='passwordConfirm'
                                        value={values.passwordConfirm}
                                        handleValueChange={handleChange('passwordConfirm')}
                                        isEditable={!submitting}
                                        isVisible={showPassword}
                                        error={errors.passwordConfirm}
                                    />
                                    <FormTextInput
                                        target='email'
                                        value={values.email}
                                        handleValueChange={handleChange('email')}
                                        isEditable={!submitting}
                                        isVisible={true}
                                        error={errors.email}
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
                                        SIGN UP
                                    </Button>
                                </View>

                                <View  style={styles.waitSpinnerContainer}>
                                    {submitting &&
                                        <WaitSpinner/>
                                    }
                                </View>
                            </View>
                        )
                    }}
                </Formik>           
    )
}

export default SignUpForm

