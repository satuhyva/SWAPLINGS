import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { MatchToHandleType } from '../../types/match/MatchToHandleType'
import { useApolloClient } from '@apollo/client'


type HandleBrowseMatchPropsType = {
    matchToHandle: MatchToHandleType
}

const HandleBrowseMatch: React.FC<HandleBrowseMatchPropsType> = ({ matchToHandle }) => {

    console.log(matchToHandle)
    const { cardData, matchData } = matchToHandle
    const client = useApolloClient()

// TODO: poista hätävaraviittaus kuvalle

    return (
        <View style={styles.pageContentContainer}>
            <Text style={styles.pageTitle}>HANDLE BROWSE MATCH</Text>


            <Image 
                source={{uri: cardData.imageSecureUrl}}
                style={styles.image} 
            /> 

            {matchData.myItemsMatchedWithThis.length > 0 &&
                <View>
                    <Text>ALREADY MATCHED WITH:</Text>
                    <View style={styles.imageRowContainer}>
                        {matchData.myItemsMatchedWithThis.map(matchedBothWays => {
                            return <Image
                                        key={matchedBothWays.id + '-BOTH'}
                                        source={{uri: matchedBothWays.imageSecureUrl ?? 'https://res.cloudinary.com/swaplings/image/upload/v1622794380/items/dmkqlumun8wii38v5bv9.png'}}
                                        style={styles.myItemImage}
                                    />
                        })}
                    </View>
                </View>
            }

            {matchData.myItemsMatchedToThis.length > 0 &&
                <View>
                    <Text>YOU HAVE <strong>PROPOSED</strong> TO SWAP WITH THESE:</Text>
                    <View style={styles.imageRowContainer}>
                            {matchData.myItemsMatchedToThis.map(matchedToThis => {
                                return <Image
                                            key={matchedToThis.id + '-TO'}
                                            source={{uri: matchedToThis.imageSecureUrl ?? 'https://res.cloudinary.com/swaplings/image/upload/v1622794380/items/dmkqlumun8wii38v5bv9.png'}}
                                            style={styles.myItemImage}
                                        />
                            })}
                    </View>
                </View>
            }

            {matchData.myItemsMatchedFromThis.length > 0 &&
                <View>
                    <Text>YOU HAVE BEEN <strong>ASKED</strong> TO SWAP WITH THESE:</Text>
                    <View style={styles.imageRowContainer}>
                            {matchData.myItemsMatchedFromThis.map(matchedFromThis => {
                                return <Image
                                            key={matchedFromThis.id + '-FROM'}
                                            source={{uri: matchedFromThis.imageSecureUrl ?? 'https://res.cloudinary.com/swaplings/image/upload/v1622794380/items/dmkqlumun8wii38v5bv9.png'}}
                                            style={styles.myItemImage}
                                        />
                            })}
                    </View>
                </View>
            }
        </View>
    )
}

export default HandleBrowseMatch




