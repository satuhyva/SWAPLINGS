import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { ImageSourcePropType } from 'react-native'




export type ItemImageButtonActionType = {
    mode: 'MY' | 'BROWSE',
    currentState: 'BOTH' | 'TO' | 'FROM' | 'AVAILABLE'
    myItem: {
        id: string, title: string, imageSecureUrl: string
    },
    otherItem: {
        id: string, title: string, imageSecureUrl: string
    }
}



type ItemImageButtonsRowPropsType = {
    mode: 'MY' | 'BROWSE',
    type: 'BOTH' | 'TO' | 'FROM' | 'AVAILABLE'
    itemsForButtons: {
        id: string,
        title: string,
        imageSecureUrl: string,
    }[],
    setAction: (action: ItemImageButtonActionType) => void,
    mainItem: { id: string, title: string, imageSecureUrl: string },
}        


const titles = {
    BOTH: <Text>already <strong>MATCHED</strong> with:</Text>,
    TO: <Text>you have <strong>PROPOSED</strong> to swap with:</Text>,
    FROM: <Text>you have been <strong>ASKED</strong> to swap with:</Text>,
    AVAILABLE: <Text>you could <strong>PROPOSE</strong> to swap with:</Text>,
}



const ItemImageButtonsRow: React.FC<ItemImageButtonsRowPropsType> = ({ mode, type, itemsForButtons, setAction, mainItem }) => {

    if (itemsForButtons.length === 0) return null
    if (mode === 'MY' && type === 'AVAILABLE') throw new Error('Type "AVAILABLE" is not available for mode "MY".')
    
    return (
        <View>
            {titles[type]}
            <View style={styles.imageRowContainer}>
                {itemsForButtons.map(item => {

                    if (item.imageSecureUrl) {
                        const action = {
                            mode: mode,
                            currentState: type,
                            myItem: mode === 'MY' ? mainItem : item,
                            otherItem: mode === 'MY' ? item : mainItem
                        }

                        return (
                            <TouchableOpacity onPress={() => setAction(action)} key={item.id + '-' + type}>
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

export default ItemImageButtonsRow

