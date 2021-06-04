import { LoginPersonResponseType } from './queries'
import { ParsedLoginSignUpDataType } from '../../types/signup-login/ParsedLoginSignUpDataType'




export const parseLoginResponse = (data: LoginPersonResponseType | undefined | null): ParsedLoginSignUpDataType => {
    if (!data) throw new Error('No data was returned from the login query.')
    if (typeof data.loginPerson.success !== 'boolean') throw new Error('Response success type must be boolean.')

    if (!data.loginPerson.success) return { errorMessage: data.loginPerson.message, loggedInUserData: undefined } 

    return {
        errorMessage: undefined,
        loggedInUserData: {
            id: parseText(data.loginPerson.id, 'User id'),
            loginType: 'traditional',
            name: parseText(data.loginPerson.username, 'Username (for field name)'),
            jwtToken: parseText(data.loginPerson.jwtToken, 'Token'),
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

