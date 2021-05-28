import { PriceGroupEnum } from '../item/PriceGroupEnum'

export type SearchTermsType = {
    priceGroups?: PriceGroupEnum[],
    phrasesInTitle?: string[],
    phrasesInDescription?: string[],
    brands?: string[],
}