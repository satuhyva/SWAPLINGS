import React, { useEffect, useState } from 'react'
import { View, Image, Text } from 'react-native'
import { styles } from './styles'
import { ChatPostType } from '../../types/chat/ChatPostType'
import { Avatar } from 'react-native-paper'
import { getDisplayDateTime } from './getDisplayDateTime'




type ChatPostPropsType = {
    post: ChatPostType,
    isMyItem: boolean,
    imageUrl: string
}

const ChatPost: React.FC<ChatPostPropsType> = ({ post, isMyItem, imageUrl }) => {
    return (
        <View style={styles.chatPostContainer}>
            <View style={styles.avatarContainer}>
                {!isMyItem && <Avatar.Image size={30} source={{uri: imageUrl}} />}
            </View>
            
            <View style={styles.contentContainer}>
                <Text style={styles.dateTimeText}>{getDisplayDateTime(post.createdAt)}</Text>
                <Text>{post.post}</Text>
            </View>
            <View  style={styles.avatarContainer}>
                {isMyItem && <Avatar.Image size={30} source={{uri: imageUrl}} />}
            </View>
            
        </View>
    )
}


export default ChatPost

