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


export const ITEMS_CHAT = gql`
    query itemsChat($itemsChatInput: ItemsChatInput!){
        itemsChat(itemsChatInput: $itemsChatInput) {
            id 
            itemIdA
            itemIdB
            posts {
                post
                postingItemId
                createdAt                
            }
          
        }
    }
`
export type ItemsChatInputVariablesType = {
    itemIdA: string,
    itemIdB: string,
}
export type ItemsChatResponseType = {
    itemsChat: 
    {
        id: string,
        itemIdA: string,
        itemIdB: string,
        posts: {
            post: string,
            postingItemId: string,
            createdAt: string,
        }[]
    }

}


export const REMOVE_MATCH = gql`
    mutation removeMatch($changeMatchInput: ChangeMatchInput) {
        removeMatch(changeMatchInput: $changeMatchInput) {
            success
            message
            myItem {
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
    }
`



export const ADD_MATCH = gql`
    mutation addMatch($changeMatchInput: ChangeMatchInput) {
        addMatch(changeMatchInput: $changeMatchInput) {
            success
            message
            myItem {
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
    }
`


export const ADD_POST = gql`
    mutation addPost($addPostInput: AddPostInput!) {
        addPost(addPostInput: $addPostInput) {
            success
            message
            chat {
                id
                itemIdA
                personIdA
                itemIdB
                personIdB
                posts {
                    post
                    postingItemId
                    createdAt
                }
            }
        }
    }
`


export type ChatType = {
    id: string,
    itemIdA: string,
    personIdA: string,
    itemIdB: string,
    personIdB: string,
    posts: {
        post: string,
        postingItemId: string,
        createdAt: number
    }[]
}

export type AddPostInputVariablesType = {
    itemIdA: string,
    itemIdB: string,
    post: string
}
export type AddPostResponseType = {
    addPost: {
        success: boolean,
        message: string,
        chat: ChatType
    }
}



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




