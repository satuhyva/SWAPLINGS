import { MatchedItemType } from './MatchedItemType'


export type MyItemType = {
    id: string,
    title: string,
    priceGroup: string, 
    description: string,
    brand: string | null
    imagePublicId: string | null
    imageSecureUrl: string | null
    matchedTo: MatchedItemType[]
    matchedFrom: MatchedItemType[]
}


