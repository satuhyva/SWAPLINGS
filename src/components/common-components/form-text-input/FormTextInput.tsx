import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { TextInput } from 'react-native-paper'
import { theme } from '../../../theme/theme'
import { labels, labels_RED_TITLE, placeHolders } from './formTextInputLabels'




type FormTextInputPropsType = {
    target: 'username' | 'password' | 'passwordConfirm' | 'email' | 'itemTitle' | 'itemDescription' | 'itemBrand' | 'searchTitle' | 'searchDescription' | 'searchBrand',
    value: string,
    handleValueChange: (newValue: string) => void,
    isEditable: boolean,
    isVisible: boolean,
    error?: string,
}



const FormTextInput: React.FC<FormTextInputPropsType> = ({ target, value, handleValueChange, isEditable, isVisible, error }) => {

    return (
        <View style={styles.inputContainer}>
            <Text style={error === 'RED_TITLE' ? { color: theme.colors.error } : null}>
                {error === 'RED_TITLE' ?
                    labels_RED_TITLE[target]
                    :
                    labels[target]
                }
                </Text>
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