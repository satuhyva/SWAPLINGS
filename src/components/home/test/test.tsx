import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import Home from '../Home'
import { MY_ITEMS } from '../queries'
import { MY_ITEMS_LIST } from './testData'
import { render,  act, fireEvent } from '@testing-library/react-native'
import IconButtonMock, { IconButtonMockPropsType } from '../../test-mocks/IconButtonMock'
import CheckboxMock, { CheckboxMockPropsType } from '../../test-mocks/CheckboxMock'
import ButtonMock , { ButtonMockPropsType } from '../../test-mocks/ButtonMock'
import { mocked } from 'ts-jest/dist/utils/testing'
import reactiveVars from '../../../apollo/cache'

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


const mockedNavigationNavigate = jest.fn()
const mockedNavigationDispatch = jest.fn()
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigationNavigate,
      dispatch: mockedNavigationDispatch,
    }),
  }
})

jest.mock('../../../apollo/cache')



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

    beforeEach(() => {
        mockedNavigationDispatch.mockClear()
    })

    it('renders without error', async () => {

        const { getByTestId } = render(
            <MockedProvider mocks={apolloClientMocks} addTypename={false}>
                <Home/>
            </MockedProvider>
        )
        
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 0))
            const titleObject = getByTestId('home-page')
            expect(titleObject).toBeDefined()
            const myItemsScrollView = getByTestId('my-items-scroll-view')
            expect(myItemsScrollView).toBeDefined()
            MY_ITEMS_LIST.map(item => {
                const itemButtonObject = getByTestId(`my-item-${item.id}`)
                expect(itemButtonObject).toBeDefined()
            })
        })
    })


    it('allows selecting an item by clicking the respective button', async () => {
        const matchToHandleVarMock = jest.fn()
        const selectedMatchVarMock = jest.fn()
        mocked(reactiveVars.matchToHandleVar).mockImplementation(matchToHandleVarMock)
        mocked(reactiveVars.selectedMatchVar).mockImplementation(selectedMatchVarMock)

        const { getByTestId } = render(
            <MockedProvider mocks={apolloClientMocks} addTypename={false}>
                <Home/>
            </MockedProvider>
        )
        
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 0))
            const itemButtonObject = getByTestId(`my-item-${MY_ITEMS_LIST[0].id}`)
            expect(itemButtonObject).toBeDefined()
            await fireEvent.press(itemButtonObject)
            expect(selectedMatchVarMock.mock.calls.length).toBe(1)
            expect(selectedMatchVarMock.mock.calls[0][0]).toBe(undefined)
            expect(matchToHandleVarMock.mock.calls.length).toBe(1)
            expect(matchToHandleVarMock.mock.calls[0][0].item.id).toBe(MY_ITEMS_LIST[0].id)
            expect(mockedNavigationNavigate.mock.calls[0][0]).toBe('Match')

        })
    })


})