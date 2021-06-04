import { gql, ApolloCache } from '@apollo/client'
import { AddItemResponseType } from './queries'



export const updateCacheAfterAddedItem = (cache: ApolloCache<AddItemResponseType>, data: AddItemResponseType | null | undefined) => {
    console.log(cache)
    cache.modify({
        fields: {
            myItems(existingItems = []) {
                if (!data) return existingItems
                const newItemRef = cache.writeFragment({
                    data: data.addItem.item,
                    fragment: gql`
                        fragment NewItem on Item {
                            id
                            title
                            priceGroup
                            description
                            brand
                            imagePublicId
                            imageSecureUrl
                        }
                    `
                })
                return [...existingItems, newItemRef]
            }
        }
    })
}