import React from 'react'
import { AppStateType } from "./AppStateType"
import { ActionType } from './ActionType'


export type AppContextType = {
    state: AppStateType,
    dispatch: React.Dispatch<ActionType>
}