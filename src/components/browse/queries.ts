import { gql } from '@apollo/client'


export const GET_BROWSE_ITEMS = gql`
    query browseItems($browseItemsInput: BrowseItemsInput!) {
        browseItems(browseItemsInput: $browseItemsInput) {
            id
            title
            priceGroup
            description
            brand
            imagePublicId
            imageSecureUrl
        }
    }
`


