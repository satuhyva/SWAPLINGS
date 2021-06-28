import React from 'react'
import { View, Image } from 'react-native'
import { styles } from './styles'



const HeaderLogo = () => {

    const logoImageSource = process.env.NODE_ENV === 'test' ? null : require('../../assets/LOGO.png')
    
    return (
        <View style={styles.logoContainer}>
            {logoImageSource !== null &&
                <Image 
                    resizeMode='contain'
                    source={{ uri: logoImageSource }}
                    style={styles.image} 
                />                
            }
  
        </View>
    )
}


export default HeaderLogo


