import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useLazyQuery, useApolloClient, useQuery } from '@apollo/client'
import { styles } from './styles'
import BrowseSearchTerms from './BrowseSearchTerms'
import { SearchTermsType } from '../../types/browse/SearchTermsType'
import { Button } from 'react-native-paper'
import { theme } from '../../theme/theme'
import { BROWSE_ITEMS_BY_PAGE, MY_ITEMS_FOR_CAROUSEL, MyItemsForCarouselType } from './queries'
import Notification from '../common-components/notification/Notification'
import { NotificationPropsType } from '../../types/notification/NotificationPropsType'
import WaitSpinner from '../common-components/wait-spinner/WaitSpinner'
import Carousel from '../carousel/Carousel'
import { BrowseItemsByPageResponseType } from '../../types/browse/BrowseItemsByPageType'
import { ItemForCardType } from '../../types/item/ItemForCardType'



const NUMBER_OF_ITEMS_TO_FETCH_AT_A_GO = 2


const Browse = () => {

    const [searchTerms, setSearchTerms] = useState<SearchTermsType | undefined>(undefined)
    const [browseNotification, setBrowseNotification] = useState<NotificationPropsType | undefined>(undefined)
    const [myItemsNotification, setMyItemsNotification] = useState<NotificationPropsType | undefined>(undefined)
    const [showSetSearchCriteria, setShowSetSearchCriteria] = useState(true)
    const [browseItemsByPage, { loading: browseLoading, error: browseError, data: browseData, fetchMore }] = useLazyQuery<BrowseItemsByPageResponseType>(BROWSE_ITEMS_BY_PAGE)
    // const myItems = useQuery<{ data: MyItemsForCarouselType }>(MY_ITEMS_FOR_CAROUSEL)
    const { loading: myItemsLoading, error: myItemsError, data: myItemsData } = useQuery<MyItemsForCarouselType>(MY_ITEMS_FOR_CAROUSEL)

    const client = useApolloClient()


    if (browseError) {
        console.log(browseError)
        setBrowseNotification({
            title: 'ERROR',
            content: 'Something went wrong. Could not get items for browsing.',
            themeType: 'error',
            clearNotification: () => setBrowseNotification(undefined)
        })
    }
    if (myItemsError) {
        console.log(browseError)
        setMyItemsNotification({
            title: 'ERROR',
            content: 'Something went wrong. Could not get your own items.',
            themeType: 'error',
            clearNotification: () => setBrowseNotification(undefined)
        })
    }

    // RATIONALE (to be realized in the end): 
    // We always fetch only the first couple of items to get started and then, when the user
    // has kept swiping items with the carousel to the last item, only then more items are fetched.
    // Items are  shown in order of descending createdAt.

    const searchCriteriaChanged = async (searchTerms: SearchTermsType) => {
        // When search criteria change, browseItemsByPage field result needs to be cleared.
        // This does not remove individual items from cache. New server query is performed.
        client.cache.modify({
            fields: {
                browseItemsByPage() {
                    return {}
                }
            }
        })
        setShowSetSearchCriteria(false)
        setSearchTerms(searchTerms)
        browseItemsByPage({ variables: {
            browseItemsByPageInput: {
                first: NUMBER_OF_ITEMS_TO_FETCH_AT_A_GO,
                browseItemsInput: searchTerms
            }
        }})
    }

    const getMoreItemsToBrowse = () => {
        if (fetchMore && browseData) {
            fetchMore({
                variables: {
                    browseItemsByPageInput: {
                        first: NUMBER_OF_ITEMS_TO_FETCH_AT_A_GO,
                        after: (browseData as BrowseItemsByPageResponseType).browseItemsByPage.pageInfo.endCursor,
                        browseItemsInput: searchTerms
                    }
                }
            })
        }
    }

    const browseItems = browseData as BrowseItemsByPageResponseType
    const browseItemsAsCarouselCards = browseItems && browseItems.browseItemsByPage && browseItems.browseItemsByPage.edges ?
        browseItems.browseItemsByPage.edges.filter(edge => edge !== undefined).map(edge => edge.node as ItemForCardType)
        : 
        undefined


    return (
        <View>
            <View style={styles.browseContainer}>
                {browseNotification !== undefined &&
                    <Notification { ...browseNotification }/>
                }
                {myItemsNotification !== undefined &&
                    <Notification { ...myItemsNotification }/>
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

            {browseLoading && 
                <WaitSpinner/>
            }

            {!showSetSearchCriteria && browseItemsAsCarouselCards ?
                browseItemsAsCarouselCards.length === 0 ?
                    <View style={styles.searchCriteriaContainer}>
                            {(!searchTerms?.priceGroups && !searchTerms?.phrasesInTitle && !searchTerms?.phrasesInDescription && !searchTerms?.brands) ?
                                <View style={styles.noItemsContainer}>
                                    <Text style={styles.noItemsText}>
                                        Currently there are no items in the database.
                                    </Text>
                                </View>
                                :
                                <View style={styles.noItemsContainer}>
                                    <Text style={styles.noItemsText}>
                                        No items were returned
                                    </Text>
                                    <Text style={styles.noItemsText}>
                                        with the selected search criteria. 
                                    </Text>
                                </View>
                            }                        
                    </View>
                    :
                    <Carousel 
                        itemCards={browseItemsAsCarouselCards} 
                        myItems={myItemsData === undefined ? [] : myItemsData.myItems}
                    />
                        :
                        <>
                            {myItemsLoading ? <WaitSpinner/> : null}
                        </>
            }


            {!showSetSearchCriteria && browseData && (browseData as BrowseItemsByPageResponseType).browseItemsByPage.pageInfo.hasNextPage &&
                <View style={styles.fetchMoreContainer}>
                    <Button 
                        icon='page-next-outline' 
                        mode='contained' 
                        onPress={getMoreItemsToBrowse}
                        disabled={false}
                        color={theme.colors.primary.main}
                    >
                        MORE
                    </Button> 
                </View>
            }

        </View>
    )
}

export default Browse

