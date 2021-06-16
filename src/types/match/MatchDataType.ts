export type MatchDataType = {
    couldMatch: boolean,
    myItemsMatchedToThis: { id: string, title: string, imageSecureUrl: string  }[],
    myItemsMatchedFromThis: { id: string, title: string, imageSecureUrl: string  }[],
    myItemsMatchedWithThis: { id: string, title: string, imageSecureUrl: string }[]
}