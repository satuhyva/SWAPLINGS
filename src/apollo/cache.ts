import { makeVar } from '@apollo/client'
import { MatchToHandleType } from '../types/match/MatchToHandleType'
import { UploadedImageType } from '../types/item/UploadedImageType'
import { SelectedItemMatchType } from '../types/match/SelectedItemMatchType'
// import { MyItemToHandleType } from '../types/match/MyItemToHandleType'


export const itemUnderConstructionImageVar = makeVar<UploadedImageType | undefined>(undefined)
export const matchToHandleVar = makeVar<MatchToHandleType | undefined>(undefined)
// export const myItemToHandleVar = makeVar<MyItemToHandleType | undefined>(undefined)
export const selectedMatchVar = makeVar<SelectedItemMatchType | undefined>(undefined)
