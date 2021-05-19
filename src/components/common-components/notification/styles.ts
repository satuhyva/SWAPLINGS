import { StyleSheet } from 'react-native'
import { theme } from '../../../theme/theme'


export const NOTIFICATION_VIEW_HEIGHT = 70
export const SPACING = 5


export const styles = StyleSheet.create({
    animatedView: {
        top: 40,
        left: SPACING,
        right: SPACING,
        position: 'absolute',
        padding: 5,
        height: NOTIFICATION_VIEW_HEIGHT,
        borderRadius: 6,
        zIndex: 10,
    },
    errorTheme: {
        backgroundColor: theme.colors.error,
    },
    successTheme: {
        backgroundColor: theme.colors.success,
    },
    titleText: {
        fontWeight: 'bold',
    },
    notificationView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})
