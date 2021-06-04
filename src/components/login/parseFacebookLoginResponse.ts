import { FacebookLoginResponseType } from './queries'
import { ParsedLoginSignUpDataType } from '../../types/signup-login/ParsedLoginSignUpDataType'



export const parseFacebookLoginResponse = (data: FacebookLoginResponseType | null | undefined): ParsedLoginSignUpDataType => {
    
    if (!data) throw new Error('No data was returned from the Facebook login query.')

    if (typeof data.facebookLogin.success !== 'boolean') throw new Error('Response success type must be boolean.')

    if (!data.facebookLogin.success) return { errorMessage: data.facebookLogin.message, loggedInUserData: undefined } 

    return {
        errorMessage: undefined,
        loggedInUserData: {
            id: parseText(data.facebookLogin.id, 'User id'),
            loginType: 'facebook',
            name: parseText(data.facebookLogin.facebookName, 'Facebook name (for field name)'),
            jwtToken: parseText(data.facebookLogin.jwtToken, 'Token'),
        }
    }

}


const parseText = (text: unknown, target: string): string => {
    if (!text || !isString(text)) throw new Error(`When present, "${target}" must be string.`)
    return text
}


const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String
}
