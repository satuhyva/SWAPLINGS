import { LoggedInUserType } from '../signup-login/LoggedInUserType'
import { ActionTypesEnum } from './ActionTypesEnum'


export type ActionType = 
| {
    type: ActionTypesEnum.SET_LOGGED_IN_USER,
    data: LoggedInUserType | undefined,
}
