import { ItemType } from './ItemType'


export type MyItemType = {
    id: string,
    title: string,
    priceGroup: string, 
    description: string,
    brand: string | null
    imagePublicId: string | null
    imageSecureUrl: string | null
    matchedTo: ItemType[]
    matchedFrom: ItemType[]
}

export type MyItemForCarouselType = {
    id: string,
    title: string,
    priceGroup: string, 
    imageSecureUrl: string | null
    matchedTo: { id: string }[]
    matchedFrom: { id: string }[]
}


export type MatchItemChatType = {
    id: string,
    title: string,
    imageSecureUrl: string | null
}


