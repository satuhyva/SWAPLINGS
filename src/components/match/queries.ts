import {  gql } from '@apollo/client'
import { MyItemType } from 'src/types/item/MyItemType'


export const MY_ITEMS_IN_CACHE = gql`
            query MyItemsInCache {
                myItems {
                    id
                    title
                    priceGroup
                    imageSecureUrl
                }
            }
        `


export const REMOVE_MATCH = gql`
    mutation removeMatch($changeMatchInput: ChangeMatchInput) {
        removeMatch(changeMatchInput: $changeMatchInput) {
            success
            message
            myItem {
                title 
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
    }
`



export const ADD_MATCH = gql`
    mutation addMatch($changeMatchInput: ChangeMatchInput) {
        addMatch(changeMatchInput: $changeMatchInput) {
            success
            message
            myItem {
                title 
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
    }
`



export type ChangeMatchInputVariablesType = {
    myItemId: string,
    itemToId: string,
}


export type AddMatchResponseType = {
    addMatch: {
        success: boolean,
        message: string,
        myItem: MyItemType
    }
}

export type RemoveMatchResponseType = {
    removeMatch: {
        success: boolean,
        message: string,
        myItem: MyItemType
    }
}




