import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import Home from '../Home'
import { MY_ITEMS } from '../queries'
import { MY_ITEMS_LIST } from './testData'
import { render,  act } from '@testing-library/react-native'
import IconButtonMock, { IconButtonMockPropsType } from '../../test-mocks/IconButtonMock'
import CheckboxMock, { CheckboxMockPropsType } from '../../test-mocks/CheckboxMock'
import ButtonMock , { ButtonMockPropsType } from '../../test-mocks/ButtonMock'


// React native vector icons do not workd with Jest.
// Therefore, for every component that contains an icon, a mock component is used.

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'MIcon')

jest.doMock('react-native-paper/src/components/Button', () => {
    return {
      __esModule: true,
      default: (props: ButtonMockPropsType) => {
        return <ButtonMock {...props}/>
      },
    }
})

jest.doMock('react-native-paper/src/components/IconButton', () => {
    return {
      __esModule: true,
      default: (props: IconButtonMockPropsType) => {
        return <IconButtonMock {...props}/>
      },
    }
})

jest.doMock('react-native-elements/dist/checkbox/CheckBox', () => {
    return {
      __esModule: true,
      default: (props: CheckboxMockPropsType) => {
        return <CheckboxMock {...props}/>
      },
    }
})

jest.mock('react-native-elements/dist/checkbox/CheckBoxIcon', () => 'CheckBoxIcon')





const apolloClientMocks = [
    {
        request: {
            query: MY_ITEMS
        },
        result: {
            data: {
                myItems: [ ...MY_ITEMS_LIST ]
            }
        }
    }
]


describe('HOME COMPONENT', () => {

    it('renders without error', async () => {

        const { getByTestId } = render(
            <MockedProvider mocks={apolloClientMocks} addTypename={false}>
                <Home/>
            </MockedProvider>
        )
        
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 0))
            const titleObject = getByTestId('home-page')
            expect(titleObject).not.toBeNull()
        })


    })
})