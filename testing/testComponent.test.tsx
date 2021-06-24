import TestComponent, { TEXT_1, TEXT_2} from './TestComponent'
import { render } from '@testing-library/react-native'
import React from 'react'
import '@testing-library/jest-native/extend-expect'



describe('TEST COMPONENT', () => {

    it('can be rendered', () => {

        const { getByTestId } = render(<TestComponent/>)
        const testText_1 = getByTestId(TEXT_1)
        expect(testText_1).toHaveTextContent(TEXT_1)
        const testText_2 = getByTestId(TEXT_2)
        expect(testText_2).toHaveTextContent(TEXT_2)

    })
    
})