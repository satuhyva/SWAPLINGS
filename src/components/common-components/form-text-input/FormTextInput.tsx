import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { TextInput } from 'react-native-paper'
import { theme } from '../../../theme/theme';


type FormTextInputPropsType = {
    target: 'username' | 'password' | 'passwordConfirm' | 'email' | 'itemTitle' | 'itemDescription' | 'itemBrand' | 'searchTitle' | 'searchDescription' | 'searchBrand',
    value: string,
    handleValueChange: (newValue: string) => void,
    isEditable: boolean,
    isVisible: boolean,
    error?: string,
}

const FormTextInput: React.FC<FormTextInputPropsType> = ({ target, value, handleValueChange, isEditable, isVisible, error }) => {

    const placeHolders = {
        username: 'Username',
        password: 'Password',
        passwordConfirm: 'Confirm password',
        email: 'Email',
        itemTitle: '',
        itemDescription: '',
        itemBrand: '',
        searchTitle: 'e.g. table, sofa, chair',
        searchDescription: 'e.g. living room, white, like new',
        searchBrand: 'e.g. Interface, Pohjanmaan',
    }
    const labels = {
        username: 'Username',
        password: 'Password',
        passwordConfirm: 'Confirm password',
        email: 'Email (optional, for password reset purpose)',
        itemTitle: 'Give a short title (e.g. bread maker, microwave oven)',
        itemDescription: 'Describe the item shortly (e.g. color, condition)',
        itemBrand: 'Brand and possible model (optional)',
        searchTitle: '',
        searchDescription: '',
        searchBrand: ''
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={error === 'RED_TITLE' ? { color: theme.colors.error } : null}>{labels[target]}</Text>
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
            {error && error !== 'RED_TITLE' &&
                <Text style={styles.error}>{error}</Text>
            }
        </View>
                            

    )
}

export default FormTextInput