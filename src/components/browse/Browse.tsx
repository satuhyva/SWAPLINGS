import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useLazyQuery } from '@apollo/client'
import { styles } from './styles'
import BrowseSearchTerms from './BrowseSearchTerms'
import { SearchTermsType } from '../../types/browse/SearchTermsType'
import { Button } from 'react-native-paper'
import { theme } from '../../theme/theme'
import { GET_BROWSE_ITEMS } from './queries'
import Notification from '../common-components/notification/Notification'
import { NotificationPropsType } from 'src/types/notification/NotificationPropsType'
import WaitSpinner from '../common-components/wait-spinner/WaitSpinner'
import Carousel from '../carousel/Carousel'



const Browse = () => {

    const [searchTerms, setSearchTerms] = useState<SearchTermsType | undefined>(undefined)
    const [notification, setNotification] = useState<NotificationPropsType | undefined>(undefined)
    const [showSetSearchCriteria, setShowSetSearchCriteria] = useState(true)
    const [getBrowseItems, { loading, error, data }] = useLazyQuery(GET_BROWSE_ITEMS)

    if (error) {
        setNotification({
            title: 'ERROR',
            content: 'Something went wrong. Could not get items.',
            themeType: 'error',
            clearNotification: () => setNotification(undefined)
        })
    }

    const searchCriteriaChanged = async (searchTerms: SearchTermsType) => {
        setShowSetSearchCriteria(false)
        setSearchTerms(searchTerms)
        getBrowseItems({ variables: { browseItemsInput: searchTerms }})
    }

    console.log(data)

    return (
        <View>
            <View style={styles.browseContainer}>
                {notification !== undefined &&
                    <Notification { ...notification }/>
                }
                <Text style={styles.pageTitle}>BROWSE ITEMS</Text>
                {searchTerms === undefined || showSetSearchCriteria ?
                    <BrowseSearchTerms
                        searchTerms={searchTerms}
                        searchCriteriaChanged={searchCriteriaChanged}
                        setShowSetSearchCriteria={setShowSetSearchCriteria}
                    />
                    :
                    <View style={styles.submitButtonContainer}>
                        <Button 
                            icon='square-edit-outline' 
                            mode='contained' 
                            onPress={() => setShowSetSearchCriteria(true)}
                            disabled={false}
                            color={theme.colors.primary.main}
                            >
                                EDIT SEARCH CRITERIA
                        </Button> 
                    </View>
                }
            </View>

            {loading ? 
                <WaitSpinner/>
                :
                data && data.browseItems ?
                    <Carousel itemCards={data.browseItems}/>
                    :
                    null
            }
        </View>
    )
}

export default Browse

