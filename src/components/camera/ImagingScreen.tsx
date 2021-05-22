import React from 'react'
import { View, Text } from 'react-native'
import { IconButton } from 'react-native-paper'


// @ts-ignore
const ImagingScreen = ({ navigation }) => {
    return (
        <View>
            <Text>
                III
            </Text>
            <IconButton
            icon='camera-switch'
            color='#FFFFFF'
            size={40}
            style={{ backgroundColor: '#000000' }}
            onPress={() => navigation.navigate('Add')}
        /> 
        </View>
    )
}


export default ImagingScreen


