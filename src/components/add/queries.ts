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


export type AddItemInputVariablesType = {
    title: string,
    description: string,
    brand?: string,
    priceGroup: string,
    imagePublicId: string,
    imageSecureUrl: string
}

export type AddedItemType = {
    id: string,
    title: string,
    priceGroup: string,
    description: string,
    brand: string | null,
    imagePublicId: string | null,
    imageSecureUrl: string | null,
}

export type AddItemResponseType = {
    addItem: {
        code: string,
        success: boolean,
        message: string,
        item: AddedItemType | null,
    }
}








