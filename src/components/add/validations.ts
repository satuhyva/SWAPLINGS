import { PriceGroupEnum } from '../../types/item/PriceGroupEnum'
import { UploadedImageType } from '../../types/item/UploadedImageType'

const TITLE_MIN_LENGTH = 3
const TITLE_MAX_LENGTH = 35
const DESCRIPTION_MIN_LENGTH = 3
const DESCRIPTION_MAX_LENGTH = 300
const BRAND_MIN_LENGTH = 1
const BRAND_MAX_LENGTH = 35

export const ADD_VALIDATION_CONSTANTS = {
    titleMin: TITLE_MIN_LENGTH,
    titleMax: TITLE_MAX_LENGTH,
    descriptionMin: DESCRIPTION_MIN_LENGTH, 
    descriptionMax: DESCRIPTION_MAX_LENGTH,
    brandMin: BRAND_MIN_LENGTH,
    brandMax: BRAND_MAX_LENGTH
}


export const titleIsValid = (title: string) => {
    return title !== '' && title.length >= TITLE_MIN_LENGTH && title.length <= TITLE_MAX_LENGTH
}

export const descriptionIsValid = (description: string) => {
    return description !== '' && description.length >= DESCRIPTION_MIN_LENGTH && description.length <= DESCRIPTION_MAX_LENGTH
}

export const brandIsValid = (brand: string) => {
    return brand.length >= BRAND_MIN_LENGTH && brand.length <= BRAND_MAX_LENGTH
}

export const itemInputIsValid = (title: string, description: string, brand: string, priceGroup: PriceGroupEnum | '', itemImage: UploadedImageType | undefined) => {
    if (!itemImage || !itemImage.clientUrl) return false
    if (!titleIsValid(title)) return false
    if (!descriptionIsValid(description)) return false
    if (priceGroup === '') return false
    if (brand !== '' && !brandIsValid(brand)) return false
    return true
}

