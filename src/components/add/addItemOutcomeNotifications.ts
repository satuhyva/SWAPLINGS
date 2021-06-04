import { NotificationPropsType } from '../../types/notification/NotificationPropsType'
import { ADD_ITEM_NOTIFICATION } from '../../utils/common-constants/errorMessages'





export const setAddItemOutcomeNotification = (
    type: 'success' | 'error',
    setNotification: (newNotification: NotificationPropsType | undefined,) => void,
    clearAll: () => void
): void => {

        if (type === 'success') {
            setNotification({
                title: ADD_ITEM_NOTIFICATION.successTitle,
                content: ADD_ITEM_NOTIFICATION.successContent,
                themeType: 'success',
                clearNotification: () => {
                    clearAll()
                    setNotification(undefined)
                }
            })
        } else {
            setNotification({
                title: ADD_ITEM_NOTIFICATION.errorTitle,
                content: ADD_ITEM_NOTIFICATION.errorContent,
                themeType: 'error',
                clearNotification: () => {
                    clearAll()
                    setNotification(undefined)
                }
            }) 
        }

}