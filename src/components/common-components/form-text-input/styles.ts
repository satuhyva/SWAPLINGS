import { StyleSheet } from 'react-native'
import { theme } from '../../../theme/theme'
import { Dimensions } from 'react-native'


export const styles = StyleSheet.create({
    input: {
        height: 40,
        fontSize: 16,
        width: Dimensions.get('window').width * 0.8
    },
    inputContainer: {
        marginTop: 5,
    },
    error: {
        color: theme.colors.error,      
    },
})
