import TestComponent from './TestComponent'
import { render } from '@testing-library/react-native'
import React from 'react'
import '@testing-library/jest-native/extend-expect'
// import { toHaveTextContent } from '@testing-library/jest-native'
// expect.extend({ toHaveTextContent })


// const USERNAME = 'Some username'


describe('TEST COMPONENT', () => {

    it('can be rendered', () => {

        const { getByTestId } = render(<TestComponent/>)
        const testText = getByTestId('test-component-text')
        expect(testText).toHaveTextContent('TEST COMPONENT')

    })
    
})