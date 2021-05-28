import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import MyItems from './MyItems'
import Notification from '../common-components/notification/Notification'
import { NotificationPropsType } from 'src/types/notification/NotificationPropsType'



const Home = () => {

    const [notification, setNotification] = useState<NotificationPropsType | undefined>(undefined)

    return (
        <View style={styles.homeScreen}>
            {notification !== undefined &&
                <Notification  { ...notification }/>
            }
            <Text style={styles.pageTitle}>HOME</Text>
            <MyItems setNotification={setNotification}/>

            
        </View>
    )
}


export default Home

