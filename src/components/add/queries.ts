import { gql } from '@apollo/client'


export const ADD_ITEM = gql`
    mutation addItem($addItemInput: AddItemInput!) {
        addItem(addItemInput: $addItemInput) {
            code
            success
            message
            item {
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





