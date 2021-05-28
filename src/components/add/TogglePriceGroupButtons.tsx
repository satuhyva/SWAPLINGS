import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import { theme } from '../../theme/theme'
import { styles } from './styles'
import { PriceGroupEnum, priceGroups } from '../../types/item/PriceGroupEnum'




type TogglePriceGroupButtonsPropsType = {
    priceGroup: PriceGroupEnum | '', 
    setPriceGroup: (newValue: PriceGroupEnum) => void,
    disabled: boolean
}

const TogglePriceGroupButtons: React.FC<TogglePriceGroupButtonsPropsType> = ({ priceGroup, setPriceGroup, disabled }) => {

    const isSelectedColor = theme.colors.primary.main
    const isNotSelectedColor = '#efebe9'

    return (

        <View style={styles.priceGroupToggleButtonsContainer}>
            {priceGroups.map(group => {
                return (
                    <Button 
                        key={group.text + 'toggle-button'}
                        mode='contained' 
                        onPress={() => setPriceGroup(group.groupEnum)}
                        disabled={disabled}
                        color={group.groupEnum === priceGroup ? isSelectedColor : isNotSelectedColor}
                        style={styles.toggleButton}
                    >
                        {group.text}
                    </Button>
                )
            })}

        </View>

    )
}

export default TogglePriceGroupButtons
