import React from 'react'
import { View, Image, Text, ImageSourcePropType, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { MyItemType } from '../../types/item/MyItemType'
import { IconButton } from 'react-native-paper'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../../theme/theme'
import { CheckBox } from 'react-native-elements'




type DeleteViewPropsType = {
    displayTitle: string,
    myItem: MyItemType,
    isConfirmed: boolean,
    setIsConfirmed: (newValue: boolean) => void
    cancelShowDeleteView: () => void
}




const DeleteView: React.FC<DeleteViewPropsType> = ({ displayTitle, myItem, cancelShowDeleteView, isConfirmed, setIsConfirmed }) => {



    return (
 

                <View style={styles.deleteView}>
                    {myItem.imageSecureUrl ?
                            <Image
                                source={myItem.imageSecureUrl  as ImageSourcePropType}
                                style={styles.imageView}
                            />
                            :
                            <View style={[styles.imageView, styles.iconView]}>
                                <IconButton
                                    icon='image-edit'
                                    color='#FFFFFF'
                                    size={90}
                                    style={styles.itemImageButton}
                                    disabled={true}
                                />  
                            </View>
                        }
                        <View style={styles.itemDetailsContainer}>
                            <Text style={styles.myItemTitleDelete}>DELETE ITEM</Text>
                            <Text style={styles.myItemTitleDelete}>{displayTitle.toLocaleUpperCase()}</Text>
                            <Text style={styles.text}>All the data related to this item</Text>
                            <Text style={styles.text}>will be permanently removed.</Text>
                            
                            <CheckBox
                                // center
                                title='I want to proceed.'
                                checked={isConfirmed}
                                onPress={() => setIsConfirmed(!isConfirmed)}
                                checkedColor='#FFFFFF'
                                textStyle={{ fontWeight: 'normal', color: '#FFFFFF' }}
                                containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, marginLeft: -10, marginTop: -8 }}
                            />
                        </View>
                        <View style={styles.deleteButtonContainer}>
                            <TouchableOpacity style={styles.deleteIconContainer} onPress={cancelShowDeleteView}>
                                <MIcon name='keyboard-return' size={35} color='#FFFFFF' />  
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteIconContainer} onPress={() => console.log('deletoi')}>
                                <MIcon name='delete-forever' size={35} color={isConfirmed ? '#FFFFFF' : theme.colors.primary.light} />  
                            </TouchableOpacity>
                            
                        </View>       
                </View>
    )
}

export default DeleteView