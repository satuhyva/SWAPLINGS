import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { theme } from '../../theme/theme'
import { Button } from 'react-native-paper'
import AppContext from '../../app-state/AppContext'
import { ActionTypesEnum } from '../../types/app-state/ActionTypesEnum'



const Logout = () => {

    const { dispatch } = useContext(AppContext)

    
    const logout = () => {
        dispatch({ type: ActionTypesEnum.SET_LOGGED_IN_USER, data: undefined })
    }

    return (
        <View style={styles.contentContainer}>
                    <Text style={styles.infoText}>
                        Wish to logout from SWAPLINGS?
                    </Text>
                    <View style={styles.logoutButtonView}>
                        <Button 
                            icon='logout' 
                            mode='contained' 
                            onPress={logout}
                            color={theme.colors.primary.main}
                            testID='logout-button'
                        >
                            LOGOUT
                        </Button>
                    </View>                    
        </View>
    )
}

export default Logout


