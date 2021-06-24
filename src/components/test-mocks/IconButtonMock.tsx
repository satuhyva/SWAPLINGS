import React from 'react'
import { View, TouchableOpacity } from 'react-native'


export type IconButtonMockPropsType = {
    onPress: () => void,
    testID: string,
    icon: string,
    color: string,
    size?: number,
    style?: {
        backgroundColor: string
        width: number
        height: number
    },
    isDisabled?: boolean,
}



const IconButtonMock: React.FC<IconButtonMockPropsType> = ({ onPress, testID, color, size }) => {


    return (
        <TouchableOpacity onPress={onPress} testID={testID}>
            <View
                style={{ width: size, height: size, backgroundColor: color, borderRadius: size }}
            />
        </TouchableOpacity>
    )
}

export default IconButtonMock