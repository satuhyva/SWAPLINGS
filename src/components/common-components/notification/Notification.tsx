import React, { useState, useEffect } from 'react'
import {  Animated, Text, Easing, View } from 'react-native'
import { styles, NOTIFICATION_VIEW_HEIGHT, SPACING } from './styles'
import { IconButton } from 'react-native-paper'
import { NotificationPropsType } from '../../../types/notification/NotificationPropsType'




const Notification: React.FC<NotificationPropsType> = ({ title, content, themeType, clearNotification }) => {


    const [positionY] = useState(new Animated.Value(-NOTIFICATION_VIEW_HEIGHT - SPACING))
    
    const displayNotification = () => {
        Animated.sequence([
            Animated.spring(positionY, {
                toValue: 0,
                useNativeDriver: false
            }),
            Animated.delay(5000),
            Animated.timing(positionY, {
                duration: 500,
                toValue: -NOTIFICATION_VIEW_HEIGHT - SPACING,
                easing: Easing.ease,
                useNativeDriver: false
            })
        ]).start(({ finished }) => {
            if (finished) clearNotification()
        })
    }

    const hideNotification = () => {
        Animated.timing(positionY, {
            duration: 300,
            toValue: -NOTIFICATION_VIEW_HEIGHT - SPACING,
            easing: Easing.ease,
            useNativeDriver: false
        }).start(({ finished }) => {
            if (finished) clearNotification()
        })
    }

    useEffect(() => {
        displayNotification()
    },[])


    const theming = themeType === 'error' ? styles.errorTheme : styles.successTheme

    return (
        <Animated.View style={[theming, styles.animatedView, { transform: [{ translateY: positionY }]}]}>
            <View style={[styles.notificationView]}>
                <View>
                    <Text style={styles.titleText} testID={`notification-${themeType}`}>{title}</Text>
                    {Array.isArray(content) ?
                        content.map(line => <Text key={line}>{line}</Text>)
                        :
                        <Text>{content}</Text>
                    }
                </View>   
                <IconButton
                    icon='close-circle-outline'
                    onPress={hideNotification}
                    testID='notification-close-button'
                />
            </View>
 
        </Animated.View>

    )
}

export default Notification



