import { MyItemType } from '../../types/item/MyItemType'




export const getMatchedData = (myItem: MyItemType) => {

    const matches: { id: string, title: string, imageSecureUrl: string }[] = []
    const matchedFrom:  { id: string, title: string, imageSecureUrl: string }[] = []
    const matchedTo:  { id: string, title: string, imageSecureUrl: string }[] = []    

    myItem.matchedFrom.forEach(itemMatchedFrom => {
        let isMatched = false
        const itemFrom = { id: itemMatchedFrom.id,  title:  itemMatchedFrom.title, imageSecureUrl:  itemMatchedFrom.imageSecureUrl ?? '' }
        myItem.matchedTo.forEach(itemMatchedTo => {
            if (itemMatchedFrom.id === itemMatchedTo.id) {
                matches.push(itemFrom)
                isMatched = true
            }
        })
        if (!isMatched) {
            matchedFrom.push(itemFrom)
        }
    })

    myItem.matchedTo.forEach(itemMatchedTo => {
        const isNotAMatch = matches.every(matchedItem => matchedItem.id !== itemMatchedTo.id)
        if (isNotAMatch) {
            matchedTo.push({ id: itemMatchedTo.id,  title:  itemMatchedTo.title, imageSecureUrl:  itemMatchedTo.imageSecureUrl ?? '' })
        }
    })

    return {
        matches,
        matchedFrom,
        matchedTo
    }

}