import React from 'react'
import SignUpLogin from '../SignUpLogin'
import { render, fireEvent } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import Login from '../Login'
import { 
    LOGIN_INPUTS, 
    LoginInputType, 
    fillInTheLoginFormAndSubmit, 
    createWrappedLoginComponent, 
    EXPECTED_LOGIN_API_RESPONSE_DATA_PROPER,
    USER_LOGIN_TEST_DATA_PROPER
} from './helpers'
import { mocked } from 'ts-jest/dist/utils/testing'
import axios from 'axios'
import { ActionTypesEnum } from '../../../types/app-state/ActionTypesEnum'
import IconButtonMock, { IconButtonMockPropsType } from '../../test-mocks/IconButtonMock'
import CheckboxMock, { CheckboxMockPropsType } from '../../test-mocks/CheckboxMock'
import ButtonMock , { ButtonMockPropsType } from '../../test-mocks/ButtonMock'


// React native vector icons do not workd with Jest.
// Therefore, for every component that contains an icon, a mock component is used.

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'MIcon')
jest.mock('react-native-paper/src/components/Icon', () => 'Paper-Icon')

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




jest.mock('axios')

beforeEach(() => {
    mocked(axios.post).mockClear()
})



describe('LOGIN COMPONENT', () => {


    it('displays text "LOGIN", the necessary input fields with labels, and the move-to-sign-up link', () => {

        const changePageToShowMock = jest.fn()

        const { getByTestId } = render(
            <Login 
                changePageToShow={changePageToShowMock}
            />
        )
        const titleObject = getByTestId('title-login')
        expect(titleObject).toHaveTextContent('LOGIN')

        Object.keys(LOGIN_INPUTS).forEach(target => {
            const inputType = target as LoginInputType
            const labelObject = getByTestId(`FormTextInputLabel-${inputType}`)
            expect(labelObject).toHaveTextContent(LOGIN_INPUTS[inputType])
            const inputObject = getByTestId(`FormTextInputInput-${inputType}`)
            expect(inputObject).toBeDefined()
        })

        const moveToLoginObject = getByTestId('move-to-SIGN UP')
        expect(moveToLoginObject).toHaveTextContent('SIGN UP')

    })



    it('allows choosing to navigate to SIGN UP page using the SIGN UP link', () => {

        const changePageToShowMock = jest.fn()

        const { getByTestId } = render(
            <Login 
                changePageToShow={changePageToShowMock}
            />
        )

        const moveToTouchableObject = getByTestId('move-to-touchable')
        expect(moveToTouchableObject).toBeDefined()
        fireEvent.press(moveToTouchableObject)
        expect(changePageToShowMock.mock.calls).toHaveLength(1)
        expect(changePageToShowMock.mock.calls[0][0]).toBe('signup')
        
    })


    it('allows user to fill in the login form with proper data, and then submit the form', async () => {
        const changePageToShowMock = jest.fn()
        const dispatchLoggedInUserDataMock = jest.fn()
        mocked(axios.post).mockImplementationOnce(() => Promise.resolve({ data: EXPECTED_LOGIN_API_RESPONSE_DATA_PROPER }))

        const { getByTestId } = createWrappedLoginComponent(dispatchLoggedInUserDataMock, changePageToShowMock)
        await fillInTheLoginFormAndSubmit(getByTestId, USER_LOGIN_TEST_DATA_PROPER)

        const mockCall = dispatchLoggedInUserDataMock.mock.calls[0][0]
        expect(mockCall.type).toBe(ActionTypesEnum.SET_LOGGED_IN_USER)
        expect(mockCall.data.id).toBe(EXPECTED_LOGIN_API_RESPONSE_DATA_PROPER.data.loginPerson.id)
        expect(mockCall.data.loginType).toBe('traditional')
        expect(mockCall.data.name).toBe(USER_LOGIN_TEST_DATA_PROPER.username)
        expect(mockCall.data.jwtToken).toBe(EXPECTED_LOGIN_API_RESPONSE_DATA_PROPER.data.loginPerson.jwtToken)
    })


    it('does not allow user to submit form with improper username', async () => {
        const changePageToShowMock = jest.fn()
        const dispatchLoggedInUserDataMock = jest.fn()

        const { getByTestId } = createWrappedLoginComponent(dispatchLoggedInUserDataMock, changePageToShowMock)

        await fillInTheLoginFormAndSubmit(getByTestId, { ...USER_LOGIN_TEST_DATA_PROPER, username: 'K' })
        expect(dispatchLoggedInUserDataMock.mock.calls.length).toBe(0)
    })


    it('does not allow user to submit form with improper password', async () => {
        const changePageToShowMock = jest.fn()
        const dispatchLoggedInUserDataMock = jest.fn()

        const { getByTestId } = createWrappedLoginComponent(dispatchLoggedInUserDataMock, changePageToShowMock)

        await fillInTheLoginFormAndSubmit(getByTestId, { ...USER_LOGIN_TEST_DATA_PROPER, password: '1234567' })
        expect(dispatchLoggedInUserDataMock.mock.calls.length).toBe(0)
    })
    
})






describe('SIGN UP-LOGIN PARENT COMPONENT', () => {


    it('displays LOGIN by default but allows switching between LOGIN and SIGNUP pages', () => {

        const { getByTestId } = render(
            <SignUpLogin/>
        )

        const titleLoginObject = getByTestId('title-login')
        expect(titleLoginObject).toHaveTextContent('LOGIN')

        const moveToSignUpObject = getByTestId('move-to-touchable')
        fireEvent.press(moveToSignUpObject)

        const titleSignUpObject = getByTestId('title-sign-up')
        expect(titleSignUpObject).toHaveTextContent('SIGN UP')

        const moveBackToLoginObject = getByTestId('move-to-touchable')
        fireEvent.press(moveBackToLoginObject)

        const titleLoginObjectAgain = getByTestId('title-login')
        expect(titleLoginObjectAgain).toHaveTextContent('LOGIN')
        
    })
    
})



