import React from 'react'
import SignUp from '../SignUp'
import { render, fireEvent, act } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import TestWrapperWithContext from '../../common-components/test-wrapper-with-context/TestWrapperWithContext'
import { ReactTestInstance } from 'react-test-renderer'



export type SignUpInputType = 'username' | 'password' | 'passwordConfirm' | 'email' 

export type SignUpDataType = {
    username: string,
    password: string, 
    passwordConfirm: string,
    email: string,
}

export const SIGN_UP_INPUTS = {
    username: 'Username',
    password: 'Password', 
    passwordConfirm: 'Confirm password', 
    email: 'Email'
}

export const USER_SIGN_UP_TEST_DATA_PROPER = {
    username: 'Kaladin Stormblessed',
    password: '12345678', 
    passwordConfirm: '12345678', 
    email: 'kaladin.stormblessed@gmail.com'
}


export const EXPECTED_SIGN_UP_API_RESPONSE_DATA_PROPER = {
    data: {
        signUpPerson: {
            code: '200',
            success: true,
            message: 'Successfully performed sign up person.',
            id: 'some long random id',
            username: USER_SIGN_UP_TEST_DATA_PROPER.username,
            facebookName: null,
            jwtToken: 'some long jwt token',
        }
    }
}

export const createWrappedSignUpComponent = (dispatchLoggedInUserDataMock:  jest.Mock<any, any>, changePageToShowMock:  jest.Mock<any, any>) => {
    return render(
        <TestWrapperWithContext
            dispatchMock={dispatchLoggedInUserDataMock}
        >
            <SignUp 
                changePageToShow={changePageToShowMock}
            />
        </TestWrapperWithContext>
    )
}


export const fillInTheSignUpFormAndSubmit = async (getByTestId: (testID: string | RegExp) => ReactTestInstance, testData: SignUpDataType) => {
    await act(async () => {
        Object.keys(testData).forEach(async target => {
            const inputType = target as SignUpInputType
            const inputObject = getByTestId(`FormTextInputInput-${inputType}`)
            await fireEvent.changeText(inputObject, {
                target: { value: testData[inputType] }
            })
        })
    })

    await act(async () => {
        const submitButtonObject = getByTestId('submit-sign-up')
        await fireEvent.press(submitButtonObject)
    })
}
