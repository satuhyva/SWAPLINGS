import { LoggedInUserType } from './LoggedInUserType'


export type ParsedLoginSignUpDataType = {
    errorMessage: string | undefined,
    loggedInUserData: LoggedInUserType | undefined
}