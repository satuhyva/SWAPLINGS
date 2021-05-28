import { StyleSheet } from 'react-native'
import { theme } from '../../theme/theme'
import { Dimensions } from 'react-native'


export const styles = StyleSheet.create({
    browseContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageTitle: {
        marginTop: 60,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    pickPriceGroupsButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 5,
    },
    pickButton: {
        marginRight: 5, 
        borderColor: theme.colors.primary.light, 
        borderWidth: 1
    },
    subtitle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        // textAlign: 'center'
    },

    priceGroupTitle: {
        marginTop: 8,
        fontWeight: 'bold',
        // marginBottom: -5
    },
    groupTitle: {
        marginTop: 8,
        fontWeight: 'bold',
        marginBottom: -10
    },
    searchCriteriaContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    star: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 8
    },
    submitButtonContainer: {
        marginTop: 10,
        width: Dimensions.get('window').width * 0.8
    },
    cancelButtonContainer: {
        marginTop: 10,
        width: Dimensions.get('window').width * 0.4
    },

})
