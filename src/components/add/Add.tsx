import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import ItemImage from './ItemImage'
import FormTextInput from '../common-components/form-text-input/FormTextInput'
import TogglePriceGroupButtons from './TogglePriceGroupButtons'
import { Button } from 'react-native-paper'
import { theme } from '../../theme/theme'
import { itemUnderConstructionImageVar } from '../../apollo/cache'
import { useReactiveVar } from '@apollo/client'
import { useAddItem, AddItemType } from './useAddItem'
import Notification from '../common-components/notification/Notification'
import { PriceGroupEnum } from '../../types/item/PriceGroupEnum'



const Add = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [brand, setBrand] = useState('')
    const [priceGroup, setPriceGroup] = useState<PriceGroupEnum | ''>('')
    const itemImage = useReactiveVar(itemUnderConstructionImageVar)
    const [showErrors, setShowErrors] = useState(false)

    const clearAll = () => {
        setTitle('')
        setDescription('')
        setBrand('')
        setPriceGroup('')
        itemUnderConstructionImageVar(undefined)
    }    

    const { notification, submitAddItem, submitting } = useAddItem(clearAll)

    //TODO: Add maximum length for title and description and brand


    const submitItemDetails = async () => {
        if (!itemImage || !itemImage.clientUrl || title === '' || description === '' || priceGroup === '') {
            setShowErrors(true)
        } else {
            let itemDetails: AddItemType = { 
                title: title, description: description, priceGroup: priceGroup, imagePublicId: itemImage.publicId, imageSecureUrl: itemImage.secureUrl 
            }
            if (brand) itemDetails = { ...itemDetails, brand: brand }
            await submitAddItem(itemDetails)
        }
    }

    
    return (
        <View>
            {notification !== undefined &&
                <Notification  { ...notification }/>
            }    
            <Text style={styles.pageTitle}>ADD A NEW ITEM</Text>
            <Text  style={styles.infoText}>Fill in item details and then submit.</Text>

            <View style={styles.formContainer}>
                <Text style={styles.subtitle}>TITLE</Text>
                <FormTextInput
                    target='itemTitle'
                    value={title}
                    handleValueChange={text => setTitle(text)}
                    isEditable={!submitting}
                    isVisible={true}
                    error={showErrors && title === '' ? 'RED_TITLE' : undefined}
                />
                <Text style={styles.subtitle}>DESCRIPTION</Text>
                <FormTextInput
                    target='itemDescription'
                    value={description}
                    handleValueChange={text => setDescription(text)}
                    isEditable={!submitting}
                    isVisible={true}
                    error={showErrors && description === '' ? 'RED_TITLE' : undefined}
                />
                <Text style={styles.subtitle}>BRAND</Text>
                <FormTextInput
                    target='itemBrand'
                    value={brand}
                    handleValueChange={text => setBrand(text)}
                    isEditable={!submitting}
                    isVisible={true}
                    error={undefined}
                />
                <View style={styles.priceGroupAndImageContainer}>
                    <View style={styles.toggleButtonOrImageContainer}>
                        <Text style={styles.subtitle}>PRICE GROUP</Text>
                        <Text style={showErrors && priceGroup === '' ? styles.priceGroupInfoWithError : styles.priceGroupInfo}>Estimate the value in €</Text>
                        <TogglePriceGroupButtons
                            priceGroup={priceGroup}
                            setPriceGroup={setPriceGroup}
                            disabled={submitting}
                        />
                    </View>
                    <View style={styles.toggleButtonOrImageContainer}>
                        <Text style={styles.subtitle}>PHOTO</Text>
                        <Text style={showErrors && !itemImage ? styles.priceGroupInfoWithError : styles.priceGroupInfo}>Tap to take a photo</Text>
                        <ItemImage disabled={submitting}/>
                    </View>
                </View>
            </View>

            <View style={styles.submitButtonContainer}>
                <Button 
                    icon='send' 
                    mode='contained' 
                    onPress={submitItemDetails}
                    disabled={submitting}
                    color={!itemImage || title === '' || description === '' || priceGroup === '' ?
                        theme.colors.primary.light
                        :
                        theme.colors.primary.main}
                >
                    SUBMIT
                </Button>
            </View>
        </View>

    )
}

export default Add

