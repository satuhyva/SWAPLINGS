import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import RemoveAccount from './RemoveAccount'
import Logout from '../logout/Logout'


const Settings = () => {

    const [showConfirmRemoveAccount, setShowConfirmRemoveAccount] = useState(false)


    return (
        <View style={styles.pageContentContainer}>
            <Text style={styles.pageTitle}>SETTINGS</Text>
            <Logout/>
            <RemoveAccount
                showConfirmRemoveAccount={showConfirmRemoveAccount}
                setShowConfirmRemoveAccount={setShowConfirmRemoveAccount}
            />

        </View>
    )
}

export default Settings




