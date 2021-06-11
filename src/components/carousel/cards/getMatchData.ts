import { MatchDataType } from 'src/types/match/MatchDataType'
import { ItemForCardType } from '../../../types/item/ItemForCardType'
import { MyItemForCarouselType } from '../../../types/item/MyItemType'



export const getMatchData = (myItems: MyItemForCarouselType[], thisItem: ItemForCardType): MatchDataType => {

    let couldMatch = false
    let myItemIdsMatchedToThisItem: { id: string, title: string, imageSecureUrl: string | null }[] = []
    let myItemIdsMatchedFromThisItem: { id: string, title: string, imageSecureUrl: string | null }[] = []

    myItems.forEach(myItem => {
        if (myItem.priceGroup === thisItem.priceGroup) {
            couldMatch = true
            myItem.matchedTo.forEach(toId => {
                if (thisItem.id === toId.id) myItemIdsMatchedToThisItem.push({ id: myItem.id, title: myItem.title, imageSecureUrl: myItem.imageSecureUrl })
            })
            myItem.matchedFrom.forEach(fromId => {
                if (thisItem.id === fromId.id) myItemIdsMatchedFromThisItem.push({ id: myItem.id, title: myItem.title, imageSecureUrl: myItem.imageSecureUrl })
            })            
        }
    })


    // This is not a very clever to do this, but there are not likely to be many matched items anyway.
    let myItemIdsMatchedWithThisItem: { id: string, title: string, imageSecureUrl: string | null }[] = []
    myItemIdsMatchedToThisItem.forEach(myId => {
        const isNotPresent = myItemIdsMatchedFromThisItem.every(fromId => fromId.id !== myId.id)
        if (!isNotPresent) myItemIdsMatchedWithThisItem.push(myId)
    })

    myItemIdsMatchedWithThisItem.forEach(bothWayItem => {
        myItemIdsMatchedToThisItem = myItemIdsMatchedToThisItem.filter(toItem => toItem.id !== bothWayItem.id)
        myItemIdsMatchedFromThisItem = myItemIdsMatchedFromThisItem.filter(fromItem => fromItem.id !== bothWayItem.id)
    })

    return {
        couldMatch: couldMatch,
        myItemsMatchedToThis: myItemIdsMatchedToThisItem,
        myItemsMatchedFromThis: myItemIdsMatchedFromThisItem,
        myItemsMatchedWithThis: myItemIdsMatchedWithThisItem
    }
}


