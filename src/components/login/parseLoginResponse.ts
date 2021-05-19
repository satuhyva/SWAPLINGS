import { LoggedInUserType } from '../../types/signup-login/LoggedInUserType'
import { LoginServerResponseType } from '../../types/signup-login/LoginServerResponseType'



export const parseLoginResponse = (response: unknown): LoggedInUserType | string => {
    const loginData = response as LoginServerResponseType
    if (!loginData.data.loginPerson.success) return loginData.data.loginPerson.message
    return {
        username: parseText(loginData.data.loginPerson.username, 'Username'),
        jwtToken: parseText(loginData.data.loginPerson.jwtToken, 'Token')
    }
}


const parseText = (text: unknown, target: string): string => {
    if (!text || !isString(text)) throw new Error(`When present, ${target} must be string.`)
    return text
}


const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String
}
