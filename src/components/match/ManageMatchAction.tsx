import React from 'react'
import { View, Image } from 'react-native'
import { styles } from './styles'
import { MatchActionType } from './HandleBrowseMatch'
import { theme } from '../../theme/theme'
import { Button } from 'react-native-paper'
import { matchToHandleVar, selectedMatchVar } from '../../apollo/cache'
import { ItemForCardType } from '../../types/item/ItemForCardType'
import { useHandleMatch } from './useHandleMatch'


type ManageMatchActionPropsType = {
    matchAction: MatchActionType,
    cardData: ItemForCardType
}


const ManageMatchAction: React.FC<ManageMatchActionPropsType> = ({ matchAction, cardData }) => {

    const { submitting, submitAddMatch, notification, submitRemoveMatch } = useHandleMatch()

    const act = async () => {
        if (matchAction.currentState === 'FROM' || matchAction.currentState === 'AVAILABLE') {
            const successInMatching = await submitAddMatch(matchAction)
            console.log(successInMatching)
        }
        if (matchAction.currentState === 'TO' || matchAction.currentState === 'BOTH') {
            const successInRemovingMatching = await submitRemoveMatch(matchAction)
            console.log(successInRemovingMatching)
        }        
    }

    const cancelHandleMatch = () => {
        matchToHandleVar(undefined)
    }

    const viewMatch = () => {
        matchToHandleVar(undefined)
        selectedMatchVar({
            myItem: { id: matchAction.myItemId, title: matchAction.myItemTitle, imageSecureUrl: matchAction.myItemUrl },
            otherItem: { id: cardData.id, title: cardData.title, imageSecureUrl: cardData.imageSecureUrl },
        })  
    }

    const buttonLabels = {
        TO: 'REMOVE SWAP PROPOSITION',
        FROM: 'CONFIRM SWAP',
        BOTH: 'REMOVE MATCH',
        AVAILABLE: 'PROPOSE SWAP',
    }


    return (
        <View>
            <View style={styles.imageRowContainer}>
                <Image 
                    source={{uri: matchAction.cardData.imageSecureUrl}}
                    style={styles.image} 
                />
                <Image 
                    source={{uri: matchAction.myItemUrl}}
                    style={styles.image} 
                />                
            </View>

            <View style={styles.matchButtonView}>
                <Button 
                    // icon='cached' 
                    mode='contained' 
                    onPress={act}
                    disabled={false}
                    color={matchAction.currentState === 'TO' ? theme.colors.error : theme.colors.primary.main}
                >
                    {buttonLabels[matchAction.currentState]}
                </Button>
            </View>

            {matchAction.currentState === 'BOTH' &&
                            <View style={styles.matchButtonView}>
                            <Button 
                                // icon='keyboard-return' 
                                mode='contained' 
                                onPress={viewMatch}
                                disabled={false}
                                color={theme.colors.primary.main}
                            >
                                VIEW MATCH
                            </Button>
                        </View>
            }

            <View style={styles.matchButtonView}>
                <Button 
                    icon='keyboard-return' 
                    mode='contained' 
                    onPress={cancelHandleMatch}
                    disabled={false}
                    color={theme.colors.primary.main}
                >
                    BACK
                </Button>
            </View>

        </View>
    )
}

export default ManageMatchAction

