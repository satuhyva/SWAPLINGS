import { LoggedInUserType } from '../../types/signup-login/LoggedInUserType'
import { SignUpServerResponseType } from '../../types/signup-login/SignUpServerResponseType'



export const parseSignUpResponse = (response: unknown): LoggedInUserType | string => {
    const signUpData = response as SignUpServerResponseType
    if (!signUpData.data.signUpPerson.success) return signUpData.data.signUpPerson.message
    return {
        username: parseText(signUpData.data.signUpPerson.username, 'Username'),
        jwtToken: parseText(signUpData.data.signUpPerson.jwtToken, 'Token')
    }
}


const parseText = (text: unknown, target: string): string => {
    if (!text || !isString(text)) throw new Error(`When present, ${target} must be string.`)
    return text
}


const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String
}
