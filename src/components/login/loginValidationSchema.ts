import * as Yup from 'yup'
import { LoginType } from '../../types/signup-login/LoginType'

export const loginValidationSchema = (): Yup.SchemaOf<LoginType> => {
    return Yup.object({
        username: Yup.string()
            .min(3, 'Username must be at least 3 characters long')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters long')
            .required('Required')
    })
}
