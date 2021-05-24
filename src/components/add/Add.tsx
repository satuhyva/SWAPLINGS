import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'
import ItemImage from './ItemImage'


const Add = () => {


    return (
        <View>
            <Text style={styles.pageTitle}>ADD NEW ITEM</Text>
            <ItemImage/>
        </View>
    )
}

export default Add

