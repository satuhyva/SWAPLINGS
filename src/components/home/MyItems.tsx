import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from './styles'
import { MY_ITEMS } from './queries'
import { useQuery } from '@apollo/client' 
import WaitSpinner from '../common-components/wait-spinner/WaitSpinner'
import { NotificationPropsType } from 'src/types/notification/NotificationPropsType'
import { MyItemType } from '../../types/item/MyItemType'
import MyItemButton from './MyItemButton'




type MyItemsPropsType = {
    setNotification: (newNotification: NotificationPropsType | undefined) => void
}

const MyItems: React.FC<MyItemsPropsType> = ({ setNotification }) => {


    const { loading, error, data } = useQuery(MY_ITEMS)

    if (loading) return <WaitSpinner/>

    if (error) {
        //TODO: korjaa, tässä joku ongelma, jos tulee error, niin asettaa notifikaatiota uudelleen ja uudelleen
        console.log('error', error)
        const errorNotification: NotificationPropsType = {
            title: '',
            content: '',
            themeType: 'error',
            clearNotification: () => setNotification(undefined)
        }
        setNotification(errorNotification)
        return null
    }

    const myItemsData = data as { myItems: MyItemType[]}

    return (
        <View style={styles.myItemsContainer}>
            <Text style={styles.subtitle}>MY ITEMS</Text>
            <Text style={styles.infoText}>Tap an item button to view item details.</Text>
            {myItemsData.myItems.length > 0 ?
                <View style={styles.scrollView}>
                    <ScrollView>
                        {myItemsData.myItems.map(myItem => <MyItemButton key={myItem.id} myItem={myItem}/>)}
                    </ScrollView>
                </View>
                :
                <Text>There are no items yet.</Text>
            }
            
        </View>
    )
}

export default MyItems

