import { SignUpPersonResponseType } from './queries'
import { ParsedLoginSignUpDataType } from '../../types/signup-login/ParsedLoginSignUpDataType'



export const parseSignUpResponse = (data: SignUpPersonResponseType | undefined | null ): ParsedLoginSignUpDataType => {
    
    if (!data) throw new Error('No data was returned from the sign up query.')
    if (typeof data.signUpPerson.success !== 'boolean') throw new Error('Response success type must be boolean.')

    if (!data.signUpPerson.success) return { errorMessage: data.signUpPerson.message, loggedInUserData: undefined } //data.signUpPerson.message

    return {
        errorMessage: undefined,
        loggedInUserData: {
            id: parseText(data.signUpPerson.id, 'User id'),
            loginType: 'traditional',
            name: parseText(data.signUpPerson.username, 'Username (for name field)'),
            jwtToken: parseText(data.signUpPerson.jwtToken, 'Token'),
        }
    }
}


const parseText = (text: unknown, target: string): string => {
    if (!text || !isString(text)) throw new Error(`When present, ${target} must be string.`)
    return text
}


const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String
}
