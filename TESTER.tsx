import * as React from 'react'
import { View } from 'react-native'
import { useQuery, gql } from '@apollo/client' 
import { string } from 'yup/lib/locale';


const ALL_ITEMS = gql`
    query allItems {
      allItems {
            id
            title
            priceGroup
            description
            brand
            imagePublicId
            imageSecureUrl
        }
    }
`
const SOME_ITEMS = gql`
    query someItems {
      someItems {
            id
            title
            priceGroup
            description
            brand
            imagePublicId
            imageSecureUrl
        }
    }
`



const TESTER: React.FC<{ query: string }> = ({ query }) => {

  const { data } = useQuery(query === 'ALL' ? ALL_ITEMS : SOME_ITEMS)
  console.log(query, data)

  return (
      <View>

      </View>
  )
}

export default TESTER



