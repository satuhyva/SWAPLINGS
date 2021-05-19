import { gql } from '@apollo/client'


export const LOGIN_PERSON = gql`
    mutation loginPerson($loginInput: LoginInput!) {
        loginPerson(loginInput: $loginInput) {
            code
            success
            message
            username
            facebookName
            jwtToken
        }
    }
`
export const LOGIN_PERSON_FACEBOOK = gql`
    mutation facebookLogin($facebookLoginInput: FacebookLoginInput!) {
        facebookLogin(facebookLoginInput: $facebookLoginInput) {
            code
            success
            message
            username
            facebookName
            jwtToken
        }
    }
`