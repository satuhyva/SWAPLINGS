import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { ItemForCardType } from '../../../types/item/ItemForCardType'
import { IconButton } from 'react-native-paper'
import { theme } from '../../../theme/theme'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { MatchDataType } from '../../../types/match/MatchDataType'
import { matchToHandleVar, selectedMatchVar } from '../../../apollo/cache'
import { useNavigation } from '@react-navigation/native'
import { CompositeNavigationPropMatchType } from '../../../types/routes/CompositeNavigationPropTypes'




type CardContentPropsType = {
    cardData: ItemForCardType,
    matchData: MatchDataType
}



const CardContent: React.FC<CardContentPropsType> = ({ cardData, matchData }) => {

    const navigation = useNavigation<CompositeNavigationPropMatchType>()


    const handleMatchButtonPressed = () => {
        selectedMatchVar(undefined)
        matchToHandleVar({
            mode: 'BROWSE',
            item: { id: cardData.id, title: cardData.title, imageSecureUrl: cardData.imageSecureUrl },
            matches: matchData.myItemsMatchedWithThis,
            matchedFrom: matchData.myItemsMatchedFromThis,
            matchedTo: matchData.myItemsMatchedToThis,
        })
        navigation.navigate('Match')
    }

    return (
            <View style={styles.cardBoard}>
                <Text style={styles.itemTitle}>{cardData.title.toLocaleUpperCase()}</Text>
               
                    <Image 
                        source={{uri: cardData.imageSecureUrl}}
                        style={styles.image} 
                    />    
                    {matchData.couldMatch &&
                        <View style={styles.matchDataButtonsContainer}>
                            <View style={styles.matchDataView}>
                                <MIcon name='cached' size={25} color={theme.colors.primary.contrast} />
                                <Text style={styles.matchDataNumber}>{matchData.myItemsMatchedWithThis.length}</Text>
                            </View>
                            <View style={styles.matchDataView}>
                                <MIcon name='call-received' size={25} color={theme.colors.primary.contrast} />
                                <Text style={styles.matchDataNumber}>{matchData.myItemsMatchedFromThis.length}</Text>
                            </View>
                            <View style={styles.matchDataView}>
                                <MIcon name='call-made' size={25} color={theme.colors.primary.contrast} />
                                <Text style={styles.matchDataNumber}>{matchData.myItemsMatchedToThis.length}</Text>
                            </View>
                        </View>                
                    }
               

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
                {matchData.couldMatch &&
                    <View style={styles.matchIconButtonContainer}>
                        <View style={styles.iconBackgroundCircle}>
                            <IconButton
                                icon='cards-heart'
                                color={theme.colors.primary.contrast}
                                size={40}
                                onPress={handleMatchButtonPressed}
                            /> 
                        </View>
                    </View>
                }
                {!matchData.couldMatch &&
                    <View style={styles.noItemsTextContainer}>
                        <Text style={styles.subtitle}>You have no items in this price group.</Text>
                    </View>                
                }
            </View>
    )
}

export default CardContent
