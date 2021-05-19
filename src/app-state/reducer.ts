import { ActionType } from '../types/app-state/ActionType'
import { ActionTypesEnum } from '../types/app-state/ActionTypesEnum'
import { AppStateType } from '../types/app-state/AppStateType'
import { assertNever } from '../utils/common-functions/assertNever'

export const reducer = (_state: AppStateType, action: ActionType): AppStateType => {

    switch (action.type) {
    case ActionTypesEnum.SET_LOGGED_IN_USER:
        return { loggedInUser: action.data }
    default:
        return assertNever(action)
    }

}