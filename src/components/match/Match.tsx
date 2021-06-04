import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { useReactiveVar } from '@apollo/client'
import { matchToHandleVar } from '../../apollo/cache'
import HandleBrowseMatch from './HandleBrowseMatch'



const Match = () => {

    const matchToHandle = useReactiveVar(matchToHandleVar)
    console.log(matchToHandle)

    if (matchToHandle !== undefined) {
        return <HandleBrowseMatch matchToHandle={matchToHandle}/>
    }

    return (
        <View style={styles.pageContentContainer}>
            <Text style={styles.pageTitle}>MATCH</Text>
        </View>
    )
}

export default Match




