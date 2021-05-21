import { LoggedInUserType } from '../../types/signup-login/LoggedInUserType'
import { FacebookLoginServerResponseType } from '../../types/signup-login/FacebookLoginServerResponseType'



export const parseFacebookLoginResponse = (response: unknown): LoggedInUserType | string => {
    const loginData = response as FacebookLoginServerResponseType
    if (typeof loginData.data.facebookLogin.success !== 'boolean') throw new Error('Response success type must be boolean.')
    if (!loginData.data.facebookLogin.success) return loginData.data.facebookLogin.message
    return {
        id: parseText(loginData.data.facebookLogin.id, 'User id'),
        loginType: 'facebook',
        name: parseText(loginData.data.facebookLogin.facebookName, 'Facebook name (for field name)'),
        jwtToken: parseText(loginData.data.facebookLogin.jwtToken, 'Token'),
    }
}


const parseText = (text: unknown, target: string): string => {
    if (!text || !isString(text)) throw new Error(`When present, "${target}" must be string.`)
    return text
}


const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String
}
