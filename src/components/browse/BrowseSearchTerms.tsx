import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { PriceGroupEnum } from '../../types/item/PriceGroupEnum'
import { styles } from './styles'
import { SearchTermsType } from '../../types/browse/SearchTermsType'
import PickPriceGroupsButtons from './PickPriceGroupsButtons'
import FormTextInput from '../common-components/form-text-input/FormTextInput'
import { Button } from 'react-native-paper'
import { theme } from '../../theme/theme'


type BrowseSearchTermsPropsType = {
    searchTerms: SearchTermsType | undefined
    searchCriteriaChanged: (newSearchTerms: SearchTermsType) => void,
    setShowSetSearchCriteria: (newValue: boolean) => void,
}



const BrowseSearchTerms: React.FC<BrowseSearchTermsPropsType> = ({ searchTerms, searchCriteriaChanged, setShowSetSearchCriteria }) => {

    const [selectedPriceGroups, setSelectedPriceGroups] = useState<PriceGroupEnum[]>(searchTerms && searchTerms.priceGroups ? searchTerms.priceGroups : [])
    const [titlePhrases, setTitlePhrases] = useState<string>(searchTerms && searchTerms.phrasesInTitle ? searchTerms.phrasesInTitle.join(',') : '')
    const [descriptionPhrases, setDescriptionPhrases] = useState<string>(searchTerms && searchTerms.phrasesInDescription ? searchTerms.phrasesInDescription.join(',') : '')
    const [brands, setBrands] = useState<string>(searchTerms && searchTerms.brands ? searchTerms.brands.join(',') : '')

    const priceGroupSelectionChanged = (group: PriceGroupEnum) => {
        if (selectedPriceGroups.includes(group)) {
            setSelectedPriceGroups(selectedPriceGroups.filter(selectedGroup => selectedGroup !== group))
        } else setSelectedPriceGroups([...selectedPriceGroups, group])
    }

    const submitSearchTerms = () => {
        let seachCriteria: SearchTermsType = {}
        if (selectedPriceGroups.length > 0) seachCriteria = { priceGroups: selectedPriceGroups }
        if (titlePhrases !== '') seachCriteria = { ...seachCriteria, phrasesInTitle: titlePhrases.split(',').map(word => word.trim()) }
        if (descriptionPhrases !== '') seachCriteria = { ...seachCriteria, phrasesInDescription: descriptionPhrases.split(',').map(word => word.trim()) }
        if (brands !== '') seachCriteria = { ...seachCriteria, brands: brands.split(',').map(word => word.trim()) }
        console.log(seachCriteria)
        searchCriteriaChanged(seachCriteria)
    }



    return (
        <View style={styles.searchCriteriaContainer}>
            <View>
                <Text style={styles.subtitle}>SET SEARCH CRITERIA</Text>
                <Text >No criteria? Just hit the SEARCH button.</Text>
            </View>


            <View>
                <Text  style={styles.priceGroupTitle}>PRICE GROUP</Text>
                <Text>How valuable items would you like to view?</Text>
                <Text>Pick any combination of price groups you like.</Text>
                <PickPriceGroupsButtons
                    selectedPriceGroups={selectedPriceGroups}
                    priceGroupSelectionChanged={priceGroupSelectionChanged}
                    disabled={false}
                />

                <Text style={styles.groupTitle}>TITLE *</Text>
                <FormTextInput
                        target='searchTitle'
                        value={titlePhrases}
                        handleValueChange={text => setTitlePhrases(text)}
                        isEditable={true}
                        isVisible={true}
                />

                <Text style={styles.groupTitle}>DESCRIPTION *</Text>
                <FormTextInput
                        target='searchDescription'
                        value={descriptionPhrases}
                        handleValueChange={text => setDescriptionPhrases(text)}
                        isEditable={true}
                        isVisible={true}
                />

                <Text style={styles.groupTitle}>BRAND *</Text>
                <FormTextInput
                        target='searchBrand'
                        value={brands}
                        handleValueChange={text => setBrands(text)}
                        isEditable={true}
                        isVisible={true}
                />

                <View style={styles.rowContainer}>
                    <Text style={styles.star}>*</Text>
                    <View>
                        <Text>List comma-separated search terms as input.</Text>
                        <Text>The search will return items that contain at least </Text>
                        <Text>one of the search terms present in each of the</Text>
                        <Text>list you specify.</Text>
                    </View>
                </View>
                
                <View style={styles.submitButtonContainer}>
                    <Button 
                        icon='text-box-search-outline' 
                        mode='contained' 
                        onPress={submitSearchTerms}
                        disabled={false}
                        color={theme.colors.primary.main}
                        >
                            SEARCH
                    </Button> 
                </View>

            </View>
            {searchTerms !== undefined &&
                    <View style={styles.cancelButtonContainer}>
                        <Button 
                            icon='keyboard-return' 
                            mode='contained' 
                            onPress={() => setShowSetSearchCriteria(false)}
                            disabled={false}
                            color={theme.colors.primary.light}
                        >
                            CANCEL
                        </Button> 
                    </View>
                }
        </View>
    )
}

export default BrowseSearchTerms

