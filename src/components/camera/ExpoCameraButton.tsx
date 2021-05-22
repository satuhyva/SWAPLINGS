import React from 'react'
import { IconButton } from 'react-native-paper'


type ExpoCameraButtonPropsType = {
    action: () => void,
    type: 'flip' | 'snap' | 'cancel' | 'remove' | 'save'
}


const ExpoCameraButton: React.FC<ExpoCameraButtonPropsType> = ({ action, type }) => {

    const icons = {
        flip: 'camera-switch',
        snap: 'camera-enhance',
        cancel: 'keyboard-return',
        remove: 'delete-forever',
        save: 'content-save'
    }

    return (              
        <IconButton
            icon={icons[type]}
            color='#FFFFFF'
            size={40}
            style={{ backgroundColor: '#000000' }}
            onPress={action}
        /> 
    )
}


export default ExpoCameraButton


