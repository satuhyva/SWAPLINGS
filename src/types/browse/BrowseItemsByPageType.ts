type EdgeItemType = {
    brand: string | null,
    description: string,
    id: string,
    imagePublicId: string,
    imageSecureUrl: string,
    priceGroup: string,
    title: string,
    __typename: 'Item'
}


type EdgeType = {
    cursor: string,
    node: EdgeItemType
}

export type BrowseItemsByPageType = {
    edges: EdgeType[],
    pageInfo: {
        endCursor: string,
        hasNextPage: boolean,
        __typename: 'PageInfo'
    }
}

export type BrowseItemsByPageResponseType = {
    browseItemsByPage: BrowseItemsByPageType
}