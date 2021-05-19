import { gql } from '@apollo/client'

export const SIGN_UP_PERSON_TRADITIONALLY = gql`
mutation signUpPerson($signUpInput: SignUpInput!) {
    signUpPerson(signUpInput: $signUpInput) {
        code
        success
        message
        username
        facebookName
        jwtToken
    }
}
`
