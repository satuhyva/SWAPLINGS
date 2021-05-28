import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { ItemForCardType } from '../../../types/item/ItemForCardType'



type CardContentPropsType = {
    cardData: ItemForCardType
}


// album, bullseye, cards-heart,chat, checkbox-blank-circle-outline, checkbox-marked-circle-outline

const CardContent: React.FC<CardContentPropsType> = ({ cardData }) => {

    return (
            <View style={styles.cardBoard}>
                <Text style={styles.itemTitle}>{cardData.title.toLocaleUpperCase()}</Text>
                <Image 
                    source={{uri: cardData.imageSecureUrl}}
                    style={styles.image} 
                />
                <Text style={styles.subtitle}>DESCRIPTION:</Text>
                <Text style={styles.descriptionText}>{cardData.description}</Text>
                <Text style={styles.subtitle}>PRICE GROUP:</Text>
                <Text style={styles.priceGroupText}>{`${cardData.priceGroup} €`}</Text>
                {cardData.brand &&
                    <React.Fragment>
                        <Text style={styles.subtitle}>BRAND:</Text>
                        <Text style={styles.descriptionText}>{cardData.brand}</Text>                 
                    </React.Fragment>
                }
            </View>
    )
}

export default CardContent
