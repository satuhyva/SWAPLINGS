import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { TextInput } from 'react-native-paper'
import { theme } from '../../../theme/theme';


type FormTextInputType = {
    target: 'username' | 'password' | 'passwordConfirm' | 'email',
    value: string,
    handleValueChange: (newValue: string) => void,
    isEditable: boolean,
    isVisible: boolean,
    error?: string,
}

const FormTextInput: React.FC<FormTextInputType> = ({ target, value, handleValueChange, isEditable, isVisible, error }) => {

    const placeHolders = {
        username: 'Username',
        password: 'Password',
        passwordConfirm: 'Confirm password',
        email: 'Email'
    }
    const label = target !== 'email' ? placeHolders[target] : placeHolders[target] + ' (optional, for password reset purpose)'

    return (
        <View style={styles.inputContainer}>
            <Text>{label}</Text>
            <TextInput
                value={value}
                onChangeText={handleValueChange}
                placeholder={placeHolders[target]}
                blurOnSubmit={true}
                editable={isEditable}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={!isVisible}
                style={styles.input}
                mode='outlined'
                theme={{ colors: { text: theme.colors.primary.main,   primary: theme.colors.primary.main } }}
                testID={`FormTextInput-${target}`}
            />
            {error &&
                <Text style={styles.error}>{error}</Text>
            }
        </View>
                            

    )
}

export default FormTextInput