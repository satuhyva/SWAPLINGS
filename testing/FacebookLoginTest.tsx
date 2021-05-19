import React from 'react'
import * as Facebook from 'expo-facebook'
import { View, Text, TouchableOpacity } from 'react-native'



const loginViaFacebook = async () => {
    console.log('starting')
    try {
        await Facebook.initializeAsync({
          appId: '3013384772227109',
        })
        const response = await Facebook.logInWithReadPermissionsAsync({ permissions: ['public_profile'] })
        console.log('response', response)

        // const {
        //   type,
          
        // //   token,
        // //   expirationDate,
        // //   permissions,
        // //   declinedPermissions,
        // } = await Facebook.logInWithReadPermissionsAsync({
        //   permissions: ['public_profile'],
        // });
        // if (type === 'success') {
        //   // Get the user's name using Facebook's Graph API
        //   const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        //   Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        // } else {
        //   // type === 'cancel'
        // }
      } catch ({ message }) {
        console.log(`Facebook Login Error: ${message}`)
      }
}


const FacebookLoginTest = () => {

    return (
        <View>
            <TouchableOpacity onPress={loginViaFacebook}>
                <Text>
                    LOGON VIA FB
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default FacebookLoginTest


