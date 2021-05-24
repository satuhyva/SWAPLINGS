import { makeVar } from '@apollo/client'
import { UploadedImageType } from '../types/item/UploadedImageType'


export const itemUnderConstructionImageVar = makeVar<UploadedImageType | undefined>(undefined)