import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { ImageSourcePropType } from 'react-native'
import { MatchActionType } from './HandleBrowseMatch'
import { ItemForCardType } from '../../types/item/ItemForCardType'





type ItemsImageButtonsRowPropsType = {
    type: 'BOTH' | 'TO' | 'FROM' | 'AVAILABLE',
    itemsForButtons: {
        id: string,
        title: string,
        imageSecureUrl: string | null,
    }[],
    setMatchAction: (actionType: MatchActionType) => void,
    cardData: ItemForCardType,
}        

const titles = {
    BOTH: <Text>already <strong>MATCHED</strong> with:</Text>,
    TO: <Text>you have <strong>PROPOSED</strong> to swap with:</Text>,
    FROM: <Text>you have been <strong>ASKED</strong> to swap with:</Text>,
    AVAILABLE: <Text>you could <strong>PROPOSE</strong> to swap with:</Text>,
}



const ItemsImageButtonsRow: React.FC<ItemsImageButtonsRowPropsType> = ({ type, itemsForButtons, setMatchAction, cardData }) => {

    if (itemsForButtons.length === 0) return null
    
    return (
        <View>
            {titles[type]}
            <View style={styles.imageRowContainer}>
                {itemsForButtons.map(item => {

                    if (item.imageSecureUrl) {
                        const matchAction = {
                            currentState: type,
                            myItemId: item.id,
                            myItemTitle: item.title,
                            myItemUrl: item.imageSecureUrl,
                            cardData: cardData
                        }

                        return (
                            <TouchableOpacity onPress={() => setMatchAction(matchAction)} key={item.id + '-' + type}>
                                <Image
                                        source={item.imageSecureUrl as ImageSourcePropType}
                                        style={styles.myItemImage}
                                    /> 
                                </TouchableOpacity>
                        )
                    } 
                    return null
                })}
            </View>
        </View>
    )
}

export default ItemsImageButtonsRow

