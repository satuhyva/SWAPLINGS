import React from 'react'
import { View, Image, Text, ImageSourcePropType, TouchableOpacity  } from 'react-native'
import { styles } from './styles'
import { MyItemType } from '../../types/item/MyItemType'
import { IconButton } from 'react-native-paper'
import { matchToHandleVar, selectedMatchVar } from '../../apollo/cache'
import { useNavigation } from '@react-navigation/native'
import { CompositeNavigationPropMatchType } from '../../types/routes/CompositeNavigationPropTypes'



type MyItemButtonPropsType = {
    myItem: MyItemType
}

const MyItemButton: React.FC<MyItemButtonPropsType> = ({ myItem }) => {

    const navigation = useNavigation<CompositeNavigationPropMatchType>()
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


    const handleMyItemButtonPressed = () => {
        selectedMatchVar(undefined)
        matchToHandleVar({
            mode: 'MY',
            item: {
                id: myItem.id,
                title: myItem.title,
                imageSecureUrl: myItem.imageSecureUrl ?? '',
            },
            matches: matches,
            matchedFrom: matchedFrom,
            matchedTo: matchedTo,
        })
        navigation.navigate('Match')
    }





    const displayTitle = myItem.title.length > 25 ? myItem.title.substring(0, 25) + '...' : myItem.title

    return (
        <TouchableOpacity onPress={handleMyItemButtonPressed}>
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
                    <Text style={styles.text}>{`${matchedFrom.length}    ${matchedFrom.length === 1 ? 'item': 'items'} others are offering for this item`}</Text>
                    <Text style={styles.text}>{`${matchedTo.length}    ${matchedTo.length === 1 ? 'item': 'items'} I want to swap this item with`}</Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}

export default MyItemButton