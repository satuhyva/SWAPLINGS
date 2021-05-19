import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'



type CardContentPropsType = {
    cardData: { title: string, imageUrl: string,}
}


const CardContent: React.FC<CardContentPropsType> = ({ cardData }) => {

    return (
            <View  style={styles.cardBoard}>
                <Text>ITEM TITLE</Text>
                <Text style={styles.itemTitle}>{cardData.title}</Text>
                <Image 
                    source={{uri: cardData.imageUrl}}
                    style={styles.image} 
                />
            </View>
    )
}

export default CardContent
