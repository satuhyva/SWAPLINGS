import { makeVar } from '@apollo/client'
import { MatchToHandleType } from '../types/match/MatchToHandleType'
import { UploadedImageType } from '../types/item/UploadedImageType'
import { SelectedItemMatchType } from '../types/match/SelectedItemMatchType'


export const itemUnderConstructionImageVar = makeVar<UploadedImageType | undefined>(undefined)
export const matchToHandleVar = makeVar<MatchToHandleType | undefined>(undefined)
export const selectedMatchVar = makeVar<SelectedItemMatchType | undefined>(undefined)
