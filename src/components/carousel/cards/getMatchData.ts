import { ItemForCardType } from '../../../types/item/ItemForCardType'
import { MyItemForCarouselType } from '../../../types/item/MyItemType'

// TODO: katso, että ei voi olla both way matchin itemeja to- tai  from-listoilla!!!

export const getMatchData = (myItems: MyItemForCarouselType[], thisItem: ItemForCardType) => {

    let couldMatch = false
    let myItemIdsMatchedToThisItem: { id: string, imageSecureUrl: string | null }[] = []
    let myItemIdsMatchedFromThisItem: { id: string, imageSecureUrl: string | null }[] = []

    myItems.forEach(myItem => {
        if (myItem.priceGroup === thisItem.priceGroup) {
            couldMatch = true
            myItem.matchedTo.forEach(toId => {
                if (thisItem.id === toId.id) myItemIdsMatchedToThisItem.push({ id: myItem.id, imageSecureUrl: myItem.imageSecureUrl })
            })
            myItem.matchedFrom.forEach(fromId => {
                if (thisItem.id === fromId.id) myItemIdsMatchedFromThisItem.push({ id: myItem.id, imageSecureUrl: myItem.imageSecureUrl })
            })            
        }
    })

    let myItemIdsMatchedWithThisItem: { id: string,imageSecureUrl: string | null }[] = []
    myItemIdsMatchedToThisItem.forEach(myId => {
        const isNotPresent = myItemIdsMatchedFromThisItem.every(fromId => fromId.id !== myId.id)
        if (!isNotPresent) myItemIdsMatchedWithThisItem.push(myId)
    })

    return {
        couldMatch: couldMatch,
        myItemsMatchedToThis: myItemIdsMatchedToThisItem,
        myItemsMatchedFromThis: myItemIdsMatchedFromThisItem,
        myItemsMatchedWithThis: myItemIdsMatchedWithThisItem
    }
}


