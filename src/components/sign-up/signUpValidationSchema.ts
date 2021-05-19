import * as Yup from 'yup'
import { SignUpType } from '../../types/signup-login/SignUpType'

export const signUpValidationSchema = (): Yup.SchemaOf<SignUpType> => {
    return Yup.object({
        username: Yup.string()
            .min(3, 'Username must be at least 3 characters long')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters long')
            .required('Required'),
        passwordConfirm: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Required'),
        email: Yup.string()
            .email('Email must be a proper email')
               
    })
}
