export type NotificationPropsType = {
    title: string, 
    content: string | string[], 
    themeType: 'error' | 'success',
    clearNotification: () => void,
}
