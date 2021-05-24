import React from 'react'
import { View, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import { IconButton } from 'react-native-paper'
import {  useNavigation } from '@react-navigation/native'
import { CompositeNavigationPropType } from '../../types/routes/CompositeNavigationPropType'
import { itemUnderConstructionImageVar } from '../../apollo/cache'
import { useReactiveVar } from '@apollo/client'
import { styles } from './styles'



const ItemImage = ({ }) => {

    const navigation = useNavigation<CompositeNavigationPropType>()
    const itemImage = useReactiveVar(itemUnderConstructionImageVar)


    return (
        <React.Fragment>
            {itemImage && itemImage.clientUrl ?
                <TouchableOpacity onPress={() => navigation.navigate('Imaging')}>
                    <Image
                        style={styles.imageView}
                        source={itemImage.clientUrl as ImageSourcePropType}
                    />
                </TouchableOpacity>
                :
                <View style={[styles.imageView, styles.iconView]}>
                    <IconButton
                        icon='image-edit'
                        color='#FFFFFF'
                        size={100}
                        style={{ backgroundColor: '#000000' }}
                        onPress={() => navigation.navigate('Imaging')}
                    />  
                </View>
            }
        </React.Fragment>
    )
}

export default ItemImage

