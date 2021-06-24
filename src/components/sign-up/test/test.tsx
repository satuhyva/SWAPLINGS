import React from 'react'
import SignUp from '../SignUp'
import { render, fireEvent } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import axios from 'axios'
import { mocked } from 'ts-jest/dist/utils/testing'
import { ActionTypesEnum } from '../../../types/app-state/ActionTypesEnum'
import { 
    SIGN_UP_INPUTS, 
    SignUpInputType, 
    fillInTheSignUpFormAndSubmit, 
    EXPECTED_SIGN_UP_API_RESPONSE_DATA_PROPER,
    createWrappedSignUpComponent, 
    USER_SIGN_UP_TEST_DATA_PROPER 
} from './helpers'
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






describe('SIGN UP COMPONENT', () => {


    it('displays text "SIGN UP", the necessary input fields with labels, and the move-to-login link', () => {

        const changePageToShowMock = jest.fn()

        const { getByTestId } = render(
            <SignUp 
                changePageToShow={changePageToShowMock}
            />
        )
        const titleObject = getByTestId('title-sign-up')
        expect(titleObject).toHaveTextContent('SIGN UP')

        Object.keys(SIGN_UP_INPUTS).forEach(target => {
            const inputType = target as SignUpInputType
            const labelObject = getByTestId(`FormTextInputLabel-${inputType}`)
            expect(labelObject).toHaveTextContent(SIGN_UP_INPUTS[inputType])
            const inputObject = getByTestId(`FormTextInputInput-${inputType}`)
            expect(inputObject).toBeDefined()
        })

        const moveToLoginObject = getByTestId('move-to-LOGIN')
        expect(moveToLoginObject).toHaveTextContent('LOGIN')

    })


    it('allows choosing to navigate to LOGIN page using the LOGIN link', () => {

        const changePageToShowMock = jest.fn()

        const { getByTestId } = render(
            <SignUp 
                changePageToShow={changePageToShowMock}
            />
        )

        const moveToTouchableObject = getByTestId('move-to-touchable')
        expect(moveToTouchableObject).toBeDefined()
        fireEvent.press(moveToTouchableObject)
        expect(changePageToShowMock.mock.calls).toHaveLength(1)
        expect(changePageToShowMock.mock.calls[0][0]).toBe('login')
        
    })

    
    it('allows user to fill in the sign up form with proper data, and then submit the form', async () => {
        const changePageToShowMock = jest.fn()
        const dispatchLoggedInUserDataMock = jest.fn()
        mocked(axios.post).mockImplementationOnce(() => Promise.resolve({ data: EXPECTED_SIGN_UP_API_RESPONSE_DATA_PROPER }))

        const { getByTestId } = createWrappedSignUpComponent(dispatchLoggedInUserDataMock, changePageToShowMock)
        await fillInTheSignUpFormAndSubmit(getByTestId, USER_SIGN_UP_TEST_DATA_PROPER)

        const mockCall = dispatchLoggedInUserDataMock.mock.calls[0][0]
        expect(mockCall.type).toBe(ActionTypesEnum.SET_LOGGED_IN_USER)
        expect(mockCall.data.id).toBe(EXPECTED_SIGN_UP_API_RESPONSE_DATA_PROPER.data.signUpPerson.id)
        expect(mockCall.data.loginType).toBe('traditional')
        expect(mockCall.data.name).toBe(USER_SIGN_UP_TEST_DATA_PROPER.username)
        expect(mockCall.data.jwtToken).toBe(EXPECTED_SIGN_UP_API_RESPONSE_DATA_PROPER.data.signUpPerson.jwtToken)
    })


    it('does not allow user to submit form with improper username', async () => {
        const changePageToShowMock = jest.fn()
        const dispatchLoggedInUserDataMock = jest.fn()

        const { getByTestId } = createWrappedSignUpComponent(dispatchLoggedInUserDataMock, changePageToShowMock)

        await fillInTheSignUpFormAndSubmit(getByTestId, { ...USER_SIGN_UP_TEST_DATA_PROPER, username: 'K' })
        expect(dispatchLoggedInUserDataMock.mock.calls.length).toBe(0)
    })



    it('does not allow user to submit form with improper password', async () => {
        const changePageToShowMock = jest.fn()
        const dispatchLoggedInUserDataMock = jest.fn()

        const { getByTestId } = createWrappedSignUpComponent(dispatchLoggedInUserDataMock, changePageToShowMock)

        await fillInTheSignUpFormAndSubmit(getByTestId, { ...USER_SIGN_UP_TEST_DATA_PROPER, password: '1234567' })
        expect(dispatchLoggedInUserDataMock.mock.calls.length).toBe(0)
    })



    it('does not allow user to submit form with non-matching passwords', async () => {
        const changePageToShowMock = jest.fn()
        const dispatchLoggedInUserDataMock = jest.fn()

        const { getByTestId } = createWrappedSignUpComponent(dispatchLoggedInUserDataMock, changePageToShowMock)

        await fillInTheSignUpFormAndSubmit(getByTestId, { ...USER_SIGN_UP_TEST_DATA_PROPER, passwordConfirm: '12345677' })
        expect(dispatchLoggedInUserDataMock.mock.calls.length).toBe(0)
    })



    it('does not allow user to submit form with improper email', async () => {
        const changePageToShowMock = jest.fn()
        const dispatchLoggedInUserDataMock = jest.fn()

        const { getByTestId } = createWrappedSignUpComponent(dispatchLoggedInUserDataMock, changePageToShowMock)

        await fillInTheSignUpFormAndSubmit(getByTestId, { ...USER_SIGN_UP_TEST_DATA_PROPER, email: 'www.kaladin_stormblessed.com' })
        expect(dispatchLoggedInUserDataMock.mock.calls.length).toBe(0)
    })

})