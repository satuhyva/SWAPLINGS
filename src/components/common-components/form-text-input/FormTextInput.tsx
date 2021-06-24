import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { TextInput } from 'react-native-paper'
import { theme } from '../../../theme/theme'
import { InputType, labels, labels_RED_TITLE, placeHolders } from './formTextInputLabels'




type FormTextInputPropsType = {
    target: InputType,
    value: string,
    handleValueChange: (newValue: string) => void,
    isEditable: boolean,
    isVisible: boolean,
    error?: string,
}



const FormTextInput: React.FC<FormTextInputPropsType> = ({ target, value, handleValueChange, isEditable, isVisible, error }) => {

    return (
        <View style={styles.inputContainer}>
            <Text 
                style={error === 'RED_TITLE' ? { color: theme.colors.error } : null}
                testID={`FormTextInputLabel-${target}`}
            >
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
                multiline={target === 'matchPost' ? true : false}
                numberOfLines={target === 'matchPost' ? 3 : 1}
                autoCorrect={false}
                secureTextEntry={!isVisible}
                textContentType='oneTimeCode'
                style={target === 'matchPost' ? styles.inputMultiline : styles.input}
                mode='outlined'
                theme={{ colors: { text: theme.colors.primary.main,   primary: theme.colors.primary.main } }}
                testID={`FormTextInputInput-${target}`}
            />
            {error && error !== 'RED_TITLE' &&
                <Text style={styles.error} testID={`error-${target}`}>{error}</Text>
            }
        </View>
                            

    )
}

export default FormTextInput