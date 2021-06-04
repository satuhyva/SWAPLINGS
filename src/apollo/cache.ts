import { makeVar } from '@apollo/client'
import { MatchToHandleType } from '../types/match/MatchToHandleType'
import { UploadedImageType } from '../types/item/UploadedImageType'


export const itemUnderConstructionImageVar = makeVar<UploadedImageType | undefined>(undefined)
export const matchToHandleVar = makeVar<MatchToHandleType | undefined>(undefined)