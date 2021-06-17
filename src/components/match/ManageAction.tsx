import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { styles } from './styles'
import { theme } from '../../theme/theme'
import { Button } from 'react-native-paper'
import { matchToHandleVar, selectedMatchVar } from '../../apollo/cache'
import { useHandleMatch } from './useHandleMatch'
import {  useNavigation } from '@react-navigation/native'
import { CompositeNavigationPropBrowseType, CompositeNavigationPropHomeType } from '../../types/routes/CompositeNavigationPropTypes'
import { ItemImageButtonActionType } from '../common-components/handle-matches/ItemImageButtonsRow'
import RemoveMatch from './RemoveMatch'
import Notification from '../common-components/notification/Notification'




type ManageMatchActionPropsType = {
    action: ItemImageButtonActionType,
}


const ManageMatchAction: React.FC<ManageMatchActionPropsType> = ({ action }) => {

    const [showRemoveWarning, setShowRemoveWarning] = useState(false)
    const { submitting, submitAddMatch, notification, submitRemoveMatch } = useHandleMatch()
    const navigation = useNavigation<CompositeNavigationPropBrowseType | CompositeNavigationPropHomeType>()

    const act = async () => {
        if (action.currentState === 'FROM' || action.currentState === 'AVAILABLE') {
            const successInMatching = await submitAddMatch(action)
            if (action.currentState === 'FROM' && successInMatching) {
                viewMatch()
            } else {
                cancelHandleMatch()
            }
        }
        if (action.currentState === 'TO' || action.currentState === 'BOTH') {
            const successInRemovingMatch = await submitRemoveMatch(action)
            if (successInRemovingMatch) {
                cancelHandleMatch()
            }
        }        
    }

    const cancelHandleMatch = () => {
        matchToHandleVar(undefined)
        if (action.mode === 'MY') {
            navigation.navigate('Home') 
        } else {     
            navigation.navigate('Browse')            
        }

    }

    const viewMatch = () => {
        matchToHandleVar(undefined)
        selectedMatchVar({
            myItem: action.myItem,
            otherItem: action.otherItem,
        })  
    }

    const buttonLabels = {
        TO: 'WITHDRAW SWAP PROPOSITION',
        FROM: 'CONFIRM SWAP',
        BOTH: 'WITHDRAW SWAP PROPOSITION',
        AVAILABLE: 'PROPOSE SWAP',
    }


    return (
        <View>
            {notification !== undefined &&
                <Notification  { ...notification }/>
            }

            <View style={styles.imageRowContainer}>
                <Image 
                    source={{uri: action.otherItem.imageSecureUrl}}
                    style={styles.image} 
                />
                <Image 
                    source={{uri: action.myItem.imageSecureUrl}}
                    style={styles.image} 
                />                
            </View>

            {action.currentState === 'BOTH' ?
                <View>
                    {showRemoveWarning ?
                        <RemoveMatch removeMatch={act} isSubmitting={submitting}/>
                        :
                        <View style={styles.matchButtonView}>
                            <Button 
                                mode='contained' 
                                onPress={() => setShowRemoveWarning(true)}
                                disabled={false}
                                color={theme.colors.primary.main}
                            >
                                {buttonLabels.BOTH}
                            </Button>
                        </View>
                    }
                </View>
                :
                <View style={styles.matchButtonView}>
                    <Button 
                        mode='contained' 
                        onPress={act}
                        disabled={false}
                        color={action.currentState === 'TO' ? theme.colors.error : theme.colors.primary.main}
                    >
                        {buttonLabels[action.currentState]}
                    </Button>
                </View>                
            }



            {action.currentState === 'BOTH' &&
                            <View style={styles.matchButtonView}>
                            <Button 
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

