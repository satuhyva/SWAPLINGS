import { gql } from '@apollo/client'


// axios query is the same as Apollo Client query except for the missing gql prior to ``
export const SIGN_UP_PERSON = `
mutation signUpPerson($signUpInput: SignUpInput!) {
    signUpPerson(signUpInput: $signUpInput) {
        code
        success
        message
        id
        username
        facebookName
        jwtToken
    }
}
`


export type SignUpPersonVariablesType = {
    username: string,
    password: string,
    email?: string,
}


export type SignUpPersonResponseType = {
    signUpPerson: {
        code: string,
        success: boolean,
        message: string,
        id: string | null,
        username: string | null,
        facebookName: string | null,
        jwtToken: string | null,
    }
}




