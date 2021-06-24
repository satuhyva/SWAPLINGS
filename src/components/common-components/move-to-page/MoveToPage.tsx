import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'



type MoveToPagePropsType = {
    infoText: string,
    underlinedText: string,
    moveAction: () => void
}

const MoveToPage: React.FC<MoveToPagePropsType> = ({ infoText, underlinedText, moveAction }) => {
    return (
        <View  style={styles.container}>
            <Text style={styles.infoText}>
                {infoText}
            </Text>
            <TouchableOpacity onPress={moveAction} testID='move-to-touchable'>
                <Text style={styles.underlinedText} testID={`move-to-${underlinedText}`}>
                    {underlinedText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default MoveToPage


