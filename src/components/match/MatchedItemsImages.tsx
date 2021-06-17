import React from 'react'
import { View, Image } from 'react-native'
import { styles } from './styles'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../../theme/theme'
import { IconButton } from 'react-native-paper'
import { SelectedItemMatchType } from '../../types/match/SelectedItemMatchType'



type MatchedItemsImagesPropsType = {
    selectedMatch: SelectedItemMatchType,
    setShowRemoveWarning: (newState: boolean) => void
}



const MatchedItemsImages: React.FC<MatchedItemsImagesPropsType> = ({ selectedMatch,  setShowRemoveWarning }) => {


    return (
                    <View style={styles.matchImageRowContainer}>
                        <Image 
                            source={{uri: selectedMatch.otherItem.imageSecureUrl ?? ''}}
                            style={styles.matchImage} 
                        />
                        <View style={styles.matchImageCentralIconsContainer}>
                            <MIcon name='cards-heart' size={50} color={theme.colors.primary.light} />
                            <View style={styles.iconBackgroundCircle}>
                                <IconButton
                                    icon='delete-forever'
                                    color={theme.colors.primary.dark}
                                    size={40}
                                    onPress={() => setShowRemoveWarning(true)}
                                /> 
                            </View>
                        </View>
                        <Image 
                            source={{uri: selectedMatch.myItem.imageSecureUrl ?? '' }}
                            style={styles.matchImage} 
                        /> 
                    </View>                    
            
    )
}


export default MatchedItemsImages


