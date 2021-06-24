
import React from 'react'
import { Text, View } from 'react-native'


export const TEXT_1 = 'TEST COMPONENT'
export const TEXT_2 = 'to test that tests can be run'


const TestComponent = () =>  {
  return (
    <View >
      <Text testID={TEXT_1}>{TEXT_1}</Text>
      <Text testID={TEXT_2}>{TEXT_2}</Text>
    </View>
  )
}

export default TestComponent

