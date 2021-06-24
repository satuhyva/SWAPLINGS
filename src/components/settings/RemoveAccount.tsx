import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { theme } from '../../theme/theme'
import { Button } from 'react-native-paper'
import { useRemoveAccount } from './useRemoveAccount'
import WaitSpinner from '../common-components/wait-spinner/WaitSpinner'
import Notification from '../common-components/notification/Notification'
import { CheckBox } from 'react-native-elements'


type RemoveAccountPropsType = {
    showConfirmRemoveAccount: boolean,
    setShowConfirmRemoveAccount: (newValue: boolean) => void,
}


const RemoveAccount: React.FC<RemoveAccountPropsType> = ({ showConfirmRemoveAccount, setShowConfirmRemoveAccount }) => {

    const { isSubmitting, submitRemoveAccount, notification } = useRemoveAccount()
    const [isConfirmed, setIsConfirmed] = useState(false)

    const cancel = () => {
        setIsConfirmed(false)
        setShowConfirmRemoveAccount(false)
    }


    return (
        <View style={styles.pageContentContainer}>

            <Text style={styles.subtitle}>REMOVE ACCOUNT</Text>

            {notification !== undefined &&
                <Notification  { ...notification }/>
            }

            {showConfirmRemoveAccount ?
                <View>
                    <Text style={styles.infoText}>
                        You are about to remove your account.
                    </Text>
                    <Text style={styles.infoText}>
                        Are you sure you want to continue?
                    </Text> 
                    <Text style={styles.infoText}>
                        All your data will be deleted and
                    </Text> 
                    <Text style={styles.infoText}>
                        your account cannot be later restored.
                    </Text>
                    <CheckBox
                        center
                        title='I understand and want to proceed.'
                        checked={isConfirmed}
                        onPress={() => setIsConfirmed(!isConfirmed)}
                        checkedColor={theme.colors.primary.main}
                        textStyle={{ fontWeight: 'normal' }}
                        containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                        testID='remove-account-checkbox'
                    />

                    <View style={styles.removeAccountButtonView}>
                        <Button 
                            icon='account-remove' 
                            mode='contained' 
                            onPress={submitRemoveAccount}
                            color={theme.colors.error}
                            disabled={isSubmitting || !isConfirmed}
                            testID='remove-account-permanently'
                        >
                            REMOVE MY ACCOUNT
                        </Button>
                    </View>      
                    <Text style={styles.infoText}>
                        Having second thoughts?
                    </Text>      
                    <View style={styles.removeAccountButtonView}>
                        <Button 
                            icon='keyboard-return' 
                            mode='contained' 
                            onPress={cancel}
                            color={theme.colors.primary.main}
                            disabled={isSubmitting}
                            testID='cancel-remove-account'
                        >
                            CANCEL REMOVE MY ACCOUNT
                        </Button>
                    </View>                                                    
                </View>

                :

                <View>
                    <Text style={styles.infoText}>
                        Wish to permanently remove your account?
                    </Text>
                    <View style={styles.removeAccountButtonView}>
                        <Button 
                            icon='account-remove' 
                            mode='contained' 
                            onPress={() => setShowConfirmRemoveAccount(true)}
                            color={theme.colors.primary.main}
                            testID='start-removing-account'
                        >
                            REMOVE MY ACCOUNT
                        </Button>
                    </View>                    
                </View>
            }
            <View style={styles.waitSpinnerContainer}>
                {isSubmitting && <WaitSpinner/>}
            </View>
        </View>
    )
}

export default RemoveAccount




