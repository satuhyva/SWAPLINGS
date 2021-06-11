export type MatchDataType = {
    couldMatch: boolean,
    myItemsMatchedToThis: { id: string, title: string, imageSecureUrl: string | null }[],
    myItemsMatchedFromThis: { id: string, title: string, imageSecureUrl: string | null }[],
    myItemsMatchedWithThis: { id: string, title: string, imageSecureUrl: string | null }[]
}