import { gql } from '@apollo/client'


export const MY_ITEMS = gql`
    query myItems {
        myItems {
            id
            title
            priceGroup
            description
            brand
            imagePublicId
            imageSecureUrl
            matchedTo {
                id
                title
                priceGroup
                description
                brand
                imagePublicId
                imageSecureUrl
            }
            matchedFrom {
                id
                title
                priceGroup
                description
                brand
                imagePublicId
                imageSecureUrl
            }
        }
    }
`
