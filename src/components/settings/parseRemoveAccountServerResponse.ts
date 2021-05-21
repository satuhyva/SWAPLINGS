import { RemoveAccountServerResponseType } from '../../types/removeAccount/RemoveAccountServerResponseType'

export const parseRemoveAccountServerResponse = (response: unknown): string | boolean => {
    const removeAccountResponse = response as RemoveAccountServerResponseType
    if (typeof removeAccountResponse.data.removePerson.success !== 'boolean') throw new Error('Response success must be of type boolean.')
    if (!removeAccountResponse.data.removePerson.success) return removeAccountResponse.data.removePerson.message
    return true
}


