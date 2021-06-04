import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from './styles'
import { MY_ITEMS, MyItemsResponseType } from './queries'
import { useQuery } from '@apollo/client' 
import WaitSpinner from '../common-components/wait-spinner/WaitSpinner'
import Notification from '../common-components/notification/Notification'
import MyItemButton from './MyItemButton'


const Home = () => {

    const { loading, error, data } = useQuery<MyItemsResponseType>(MY_ITEMS)
    const [showErrorNotification, setShowErrorNotification] = useState(false)

    if (loading) return <WaitSpinner/>

    if (error || !data) {
        setShowErrorNotification(true)
        return (
            <View>
                {showErrorNotification &&
                    <Notification
                        title='ERROR'
                        content='Something went wrong. Could not fetch items data.'
                        themeType='error'
                        clearNotification={() => setShowErrorNotification(false)}
                    />
                }
            </View>
        )
    }
    
    console.log('data', data)

    return (
        <View style={styles.homeScreen}>
            <View style={styles.myItemsContainer}>
                <Text style={styles.subtitle}>MY ITEMS</Text>
                {data.myItems.length > 0 && <Text style={styles.infoText}>Tap an item button to view item details.</Text>}
                {data.myItems.length > 0 ?
                    <View style={styles.scrollView}>
                        <ScrollView>
                            {data.myItems.map(myItem => <MyItemButton key={myItem.id} myItem={myItem}/>)}
                        </ScrollView>
                    </View>
                    :
                    <Text>There are no items yet.</Text>
                }       
            </View>
        </View>
    )
}


export default Home

