import { gql } from '@apollo/client'
import { ItemType } from '../../types/item/ItemType'



type MyItemResponseType = 
    ItemType & {
        matchedTo: ItemType[],
        matchedFrom: ItemType[]
    }


export type MyItemsResponseType = {
    myItems: MyItemResponseType[]
}

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


