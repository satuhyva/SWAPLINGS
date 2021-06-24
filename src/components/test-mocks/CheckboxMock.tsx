import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'



export type CheckboxMockPropsType = {
    title: string,
    checked: boolean,
    onPress: () => void,
    checkedColor: string,
    textStyle: { fontWeight: "normal" | "bold", color: string },
    containerStyle: { backgroundColor: string, borderWidth: number, marginLeft: number, marginTop: number },
}


const CheckboxMock: React.FC<CheckboxMockPropsType> = ({ title, checked, onPress, containerStyle }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={containerStyle}>
                <Text>{checked ? 'X' : 'O'}</Text>
                <Text>{title}</Text>
            </View>            
        </TouchableOpacity>
    )
}

export default CheckboxMock