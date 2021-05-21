import { gql } from '@apollo/client'


export const REMOVE_ACCOUNT = gql`
    mutation removePerson {
        removePerson {
            code
            success
            message
            username
            facebookName
        }
    }
`

