import { gql } from '@apollo/client'


export const BROWSE_ITEMS_BY_PAGE = gql`
    query browseItemsByPage($browseItemsByPageInput: BrowseItemsByPageInput!) {
        browseItemsByPage(browseItemsByPageInput: $browseItemsByPageInput) {
            edges {
                cursor
                node {
                    id
                    title
                    priceGroup
                    description
                    brand
                    imagePublicId
                    imageSecureUrl                    
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    }
`



export const MY_ITEMS_FOR_CAROUSEL = gql`
            query MyItemsInCache {
                myItems {
                    id
                    priceGroup
                    imageSecureUrl
                    matchedTo {
                        id
                    }
                    matchedFrom {
                        id
                    }
                }
            }
        `

export type MyItemsForCarouselType = {
    myItems: {
        id: string,
        title: string,
        priceGroup: string,
        imageSecureUrl: string,
        matchedTo: {
            id: string,
        }[],
        matchedFrom: {
            id: string,
        }[],
    }[]
}

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

