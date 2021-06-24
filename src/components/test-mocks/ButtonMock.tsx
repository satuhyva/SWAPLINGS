import React from 'react'
import { Button } from 'react-native-paper'


export type ButtonMockPropsType = {
    isDisabled: boolean,
    onPress: () => void,
    testID: string,
    text: string,
    color: string
}

const ButtonMock: React.FC<ButtonMockPropsType> = ({ isDisabled, onPress, testID, text, color }) => {


    return (
        <Button 
            mode='contained' 
            onPress={onPress}
            disabled={isDisabled}
            color={color}
            testID={testID}
        >
            {text}
        </Button>
    )
}

export default ButtonMock