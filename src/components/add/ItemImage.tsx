import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { IconButton } from 'react-native-paper'
import {  useNavigation } from '@react-navigation/native'
import { CompositeNavigationPropAddType } from '../../types/routes/CompositeNavigationPropTypes'
import { itemUnderConstructionImageVar } from '../../apollo/cache'
import { useReactiveVar } from '@apollo/client'
import { styles } from './styles'




type ItemImagePropsType = {
    disabled: boolean
}

const ItemImage: React.FC<ItemImagePropsType> = ({ disabled }) => {

    const navigation = useNavigation<CompositeNavigationPropAddType>()
    const itemImage = useReactiveVar(itemUnderConstructionImageVar)

    const navigateToImaging = () => {
        if (!disabled) {
            navigation.navigate('Imaging')
        }
    }

    return (
        <React.Fragment>
            {itemImage && itemImage.clientUrl ?
                <TouchableOpacity onPress={navigateToImaging}>
                    <Image
                        style={styles.imageView}
                        source={{ uri: itemImage.clientUrl }}
                    />
                </TouchableOpacity>
                :
                <View style={[styles.imageView, styles.iconView]}>
                    <IconButton
                        icon='image-edit'
                        color='#FFFFFF'
                        size={100}
                        style={styles.itemImageButton}
                        onPress={navigateToImaging}
                    />  
                </View>
            }
        </React.Fragment>
    )
}

export default ItemImage

