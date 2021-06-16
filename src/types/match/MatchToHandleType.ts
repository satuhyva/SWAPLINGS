import { ItemForCardType } from '../item/ItemForCardType'
import { MatchDataType } from './MatchDataType'


export type MatchItemDataType = {
    id: string,
    title: string,
    imageSecureUrl: string,
}

export type MatchToHandleType = {
    mode: 'MY' | 'BROWSE',
    item: MatchItemDataType
    matches: MatchItemDataType[],
    matchedFrom: MatchItemDataType[],
    matchedTo: MatchItemDataType[],
    // cardData: ItemForCardType,
    // matchData: MatchDataType
}