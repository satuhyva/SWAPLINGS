import React from 'react'
import { IconButton } from 'react-native-paper'


type ExpoCameraButtonPropsType = {
    action: () => void,
    type: 'flip' | 'snap' | 'cancel' | 'remove' | 'save'
}


const ExpoCameraButton: React.FC<ExpoCameraButtonPropsType> = ({ action, type }) => {

    const icons = {
        flip: { name: 'camera-switch', color: '#FFFFFF', backgroundColor: '#000000' },
        snap: { name: 'camera-enhance', color: '#FFFFFF', backgroundColor: '#000000' },
        cancel: { name: 'keyboard-return', color: '#000000', backgroundColor: '#FFFFFF' },
        remove: { name: 'delete-forever', color: '#000000', backgroundColor: '#FFFFFF' },
        save: { name: 'content-save', color: '#000000', backgroundColor: '#FFFFFF' }
    }

    return (              
        <IconButton
            icon={icons[type].name}
            color={icons[type].color}
            size={40}
            style={{ backgroundColor: icons[type].backgroundColor }}
            onPress={action}
        /> 
    )
}


export default ExpoCameraButton


