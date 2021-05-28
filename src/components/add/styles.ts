import { StyleSheet } from 'react-native'
import { theme } from '../../theme/theme'



export const styles = StyleSheet.create({

    imageView: {
        width: 150,
        height: 150,
        borderRadius: 6
    },
    iconView: {
        backgroundColor: theme.colors.primary.dark,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center' 
    },
    pageTitle: {
        marginTop: 60,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    infoText: {
        textAlign: 'center'
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: -5,
        marginTop: 10
    },
    formContainer: {
        marginLeft: 20
    },
    priceGroupInfo: {
        marginTop: 8,
        marginBottom: 5
    },
    priceGroupInfoWithError: {
        marginTop: 8,
        marginBottom: 5,
        color: theme.colors.error,
    },
    priceGroupAndImageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start' ,
    },
    priceGroupToggleButtonsContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'  
    },
    toggleButton: {
        marginBottom: 5, 
        borderColor: theme.colors.primary.light, 
        borderWidth: 1
    },
    toggleButtonOrImageContainer: {
        marginRight: 30,
    },
    submitButtonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    itemImageButton: {
        backgroundColor: theme.colors.primary.dark,
    }

})
