import React from 'react'
import { View, Image } from 'react-native'
import { styles } from './styles'



const HeaderLogo = () => {
    return (
        <View style={styles.logoContainer}>
            <View 
                //source={require('../../assets/logo.png')}
                style={styles.image} 
            />  
        </View>
    )
}


export default HeaderLogo


