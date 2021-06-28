import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity, Animated, Dimensions } from 'react-native'
import { styles } from './styles'
import { MyItemType } from '../../types/item/MyItemType'
// import { IconButton } from 'react-native-paper'
import IconButton from 'react-native-paper/src/components/IconButton'
// import { matchToHandleVar, selectedMatchVar } from '../../apollo/cache'
import reactiveVars from '../../apollo/cache'
import { useNavigation } from '@react-navigation/native'
import { CompositeNavigationPropMatchType } from '../../types/routes/CompositeNavigationPropTypes'
import { useRef } from 'react'
import { getMatchedData } from './getMatchedData'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../../theme/theme'
import { getPanResponder } from './getPanResponder'
import DeleteView from './DeleteView'

// import useNavigation from '@react-navigation/core/src/useNavigation'


const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_RELEASE_TRESHOLD = SCREEN_WIDTH * 0.35


type MyItemButtonPropsType = {
    myItem: MyItemType
}




const MyItemButton: React.FC<MyItemButtonPropsType> = ({ myItem }) => {

    const [showingDelete, setShowingDelete] = useState(false)
    const [isConfirmed, setIsConfirmed] = useState(false)
    const navigation = useNavigation<CompositeNavigationPropMatchType>()  
    const { selectedMatchVar, matchToHandleVar } = reactiveVars

    const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current
    
    const panResponder = getPanResponder(position, SWIPE_RELEASE_TRESHOLD, SCREEN_WIDTH, setShowingDelete)

    const cancelShowDeleteView = () => {
        const animation = Animated.timing(position, {
            toValue: 0,
            useNativeDriver: true,
            duration: 500
        })
        animation.start(() => {
            setShowingDelete(false)
            setIsConfirmed(false)
        })  
    }


    const { matches, matchedFrom, matchedTo } = getMatchedData(myItem)
    

    const handleMyItemButtonPressed = () => {
        selectedMatchVar(undefined)
        matchToHandleVar({
            mode: 'MY',
            item: {
                id: myItem.id,
                title: myItem.title,
                imageSecureUrl: myItem.imageSecureUrl ?? '',
            },
            matches: matches,
            matchedFrom: matchedFrom,
            matchedTo: matchedTo,
        })
        navigation.navigate('Match')
    }





    const displayTitle = myItem.title.length > 25 ? myItem.title.substring(0, 25) + '...' : myItem.title

    return (
        <TouchableOpacity 
            onPress={handleMyItemButtonPressed} 
            style={{ marginBottom: 5 }} 
            disabled={showingDelete}
            testID={`my-item-${myItem.id}`}
        >
            <View>     

                <DeleteView
                        displayTitle={displayTitle}
                        myItem={myItem}
                        isConfirmed={isConfirmed}
                        setIsConfirmed={setIsConfirmed}
                        cancelShowDeleteView={cancelShowDeleteView}
                />

                <Animated.View 
                    style={{ transform: [{ translateX: position.x }]}}
                    { ...panResponder.panHandlers }
                >
                    <View style={styles.myItemButtonContainer} >
                        {myItem.imageSecureUrl ?
                            <Image
                                source={{ uri: myItem.imageSecureUrl }}
                                style={styles.imageView}
                            />
                            :
                            <View style={[styles.imageView, styles.iconView]}>
                                <IconButton
                                    icon='image-edit'
                                    color='#FFFFFF'
                                    size={90}
                                    style={styles.itemImageButton}
                                    disabled={true}
                                />  
                            </View>
                        }
                        <View style={styles.itemDetailsContainer}>
                            <Text style={styles.myItemTitle}>{displayTitle.toLocaleUpperCase()}</Text>
                            <Text style={styles.matchText}>{`${matches.length}    ${matches.length === 1 ? 'MATCH' : 'MATCHES'}`}</Text>
                            <Text style={styles.text}>{`${matchedFrom.length}    ${matchedFrom.length === 1 ? 'request': 'requests'} by others`}</Text>
                            <Text style={styles.text}>{`${matchedTo.length}    ${matchedTo.length === 1 ? 'proposal': 'proposals'} by me`}</Text>
                        </View>
                        <View style={styles.deleteButtonContainer}>
                            <MIcon name='delete-sweep' size={35} color={theme.colors.primary.contrast} />   
                        </View>
                    </View>
                </Animated.View>  

            </View>
            

        </TouchableOpacity>

    )
}

export default MyItemButton