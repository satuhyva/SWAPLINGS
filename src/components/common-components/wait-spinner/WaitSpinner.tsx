import React from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { styles } from './styles'
import { theme } from '../../../theme/theme'


const WaitSpinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={theme.colors.primary.main}/>
            <Text  style={styles.waitText}>Loading, please wait...</Text>
        </View>
    )
}


  
export default WaitSpinner