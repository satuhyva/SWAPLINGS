import React from 'react'
import { View, Image, Text, ImageSourcePropType, TouchableOpacity  } from 'react-native'
import { styles } from './styles'
import { MyItemType } from '../../types/item/MyItemType'
import { IconButton } from 'react-native-paper'
// import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'


type MyItemButtonPropsType = {
    myItem: MyItemType
}

const MyItemButton: React.FC<MyItemButtonPropsType> = ({ myItem }) => {

    let matches: string[] = []
    myItem.matchedFrom.forEach(itemMatchedFrom => {
        myItem.matchedTo.forEach(itemMatchedTo => {
            if (itemMatchedFrom.id === itemMatchedTo.id) {
                matches.push(itemMatchedFrom.id)
            }
        })
    })


    const displayTitle = myItem.title.length > 25 ? myItem.title.substring(0, 25) + '...' : myItem.title

    return (
        <TouchableOpacity>
            <View style={styles.myItemButtonContainer} >
                {myItem.imageSecureUrl ?
                    <Image
                        source={myItem.imageSecureUrl  as ImageSourcePropType}
                        style={styles.imageView}
                    />
                    :
                    <View style={[styles.imageView, styles.iconView]}>
                        <IconButton
                            icon='image-edit'
                            color='#FFFFFF'
                            size={90}
                            style={styles.itemImageButton}
                            disabled={true}
                        />  
                    </View>
                }
                <View style={styles.itemDetailsContainer}>
                    <Text style={styles.myItemTitle}>{displayTitle.toLocaleUpperCase()}</Text>
                    <Text style={styles.matchText}>{`${matches.length}    ${matches.length === 1 ? 'MATCH' : 'MATCHES'}`}</Text>
                    <Text style={styles.text}>{`${myItem.matchedFrom.length}    ${myItem.matchedFrom.length === 1 ? 'item': 'items'} others are offering for this item`}</Text>
                    <Text style={styles.text}>{`${myItem.matchedTo.length}    ${myItem.matchedTo.length === 1 ? 'item': 'items'} I want to swap this item with`}</Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}

export default MyItemButton