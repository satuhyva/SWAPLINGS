import React, {  useState } from 'react'
import { View, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { Button } from 'react-native-paper'
import { styles } from './styles'
import { theme } from '../../theme/theme'



type RemoveMatchPropsType = {
    isSubmitting: boolean,
    removeMatch: () => void
}


const RemoveMatch: React.FC<RemoveMatchPropsType> = ({ isSubmitting, removeMatch }) => {

    const [isConfirmed, setIsConfirmed] = useState(false) 


    return (
        <View style={styles.removeWarningContainer}>
        <Text style={styles.removeWarningText}>
            If you withdraw your swap proposal,
        </Text>
        <Text style={styles.removeWarningText}>
            the chat posts will also be permanently removed.
        </Text>  
        <CheckBox
            center
            title='I understand and want to continue.'
            checked={isConfirmed}
            onPress={() => setIsConfirmed(!isConfirmed)}
            checkedColor={theme.colors.primary.main}
            textStyle={{ fontWeight: 'normal', color: theme.colors.primary.main }}
            containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
        />
        <View style={styles.removeAccountButtonView}>
            <Button 
                icon='account-remove' 
                mode='contained' 
                compact={true}
                onPress={removeMatch}
                color={isConfirmed ? theme.colors.error : theme.colors.primary.light}
                disabled={isSubmitting || !isConfirmed}
            >
                REMOVE MATCH
            </Button>
        </View>  
    </View>
    )
}


export default RemoveMatch


