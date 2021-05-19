import { LoggedInUserType } from '../../types/signup-login/LoggedInUserType'
import { FacebookLoginServerResponseType } from '../../types/signup-login/FacebookLoginServerResponseType'



export const parseFacebookLoginResponse = (response: unknown): LoggedInUserType | string => {
    const loginData = response as FacebookLoginServerResponseType
    if (!loginData.data.facebookLogin.success) return loginData.data.facebookLogin.message
    return {
        facebookName: parseText(loginData.data.facebookLogin.facebookName, 'Facebook name'),
        jwtToken: parseText(loginData.data.facebookLogin.jwtToken, 'Token')
    }
}


const parseText = (text: unknown, target: string): string => {
    if (!text || !isString(text)) throw new Error(`When present, "${target}" must be string.`)
    return text
}


const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String
}
