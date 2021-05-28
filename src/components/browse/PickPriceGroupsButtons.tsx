import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import { theme } from '../../theme/theme'
import { styles } from './styles'
import { PriceGroupEnum, priceGroups } from '../../types/item/PriceGroupEnum'




type PickPriceGroupsButtonsPropsType = {
    selectedPriceGroups: PriceGroupEnum[], 
    priceGroupSelectionChanged: (group: PriceGroupEnum) => void,
    disabled: boolean
}


const PickPriceGroupsButtons: React.FC<PickPriceGroupsButtonsPropsType> = ({ selectedPriceGroups, priceGroupSelectionChanged, disabled }) => {


    const isSelectedColor = theme.colors.primary.main
    const isNotSelectedColor = '#efebe9'

    return (

        <View style={styles.pickPriceGroupsButtonsContainer}>
            {priceGroups.map(group => {
                return (
                    <Button 
                        key={group.text + 'pick-button'}
                        mode='contained' 
                        onPress={() => priceGroupSelectionChanged(group.groupEnum)}
                        disabled={disabled}
                        color={selectedPriceGroups.includes(group.groupEnum) ? isSelectedColor : isNotSelectedColor}
                        style={styles.pickButton}
                    >
                        {group.text}
                    </Button>
                )
            })}

        </View>

    )
}

export default PickPriceGroupsButtons
