export type MatchDataType = {
    couldMatch: boolean,
    myItemsMatchedToThis: { id: string,imageSecureUrl: string | null }[],
    myItemsMatchedFromThis: { id: string,imageSecureUrl: string | null }[],
    myItemsMatchedWithThis: { id: string,imageSecureUrl: string | null }[]
}