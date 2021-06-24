import React from 'react'
import Login from '../Login'
import { render, fireEvent, act } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import TestWrapperWithContext from '../../common-components/test-wrapper-with-context/TestWrapperWithContext'
import { ReactTestInstance } from 'react-test-renderer'




export type LoginInputType = 'username' | 'password'  

export type LoginDataType = {
    username: string,
    password: string, 
}

export const LOGIN_INPUTS = {
    username: 'Username',
    password: 'Password', 
}

export const USER_LOGIN_TEST_DATA_PROPER = {
    username: 'Kaladin Stormblessed',
    password: '12345678', 
}


export const EXPECTED_LOGIN_API_RESPONSE_DATA_PROPER = {
    data: {
        loginPerson: {
            code: '200',
            success: true,
            message: 'Successfully performed sign up person.',
            id: 'some long random id',
            username: USER_LOGIN_TEST_DATA_PROPER.username,
            facebookName: null,
            jwtToken: 'some long jwt token',
        }
    }
}

export const createWrappedLoginComponent = (dispatchLoggedInUserDataMock:  jest.Mock<any, any>, changePageToShowMock:  jest.Mock<any, any>) => {
    return render(
        <TestWrapperWithContext
            dispatchMock={dispatchLoggedInUserDataMock}
        >
            <Login 
                changePageToShow={changePageToShowMock}
            />
        </TestWrapperWithContext>
    )
}


export const fillInTheLoginFormAndSubmit = async (getByTestId: (testID: string | RegExp) => ReactTestInstance, testData: LoginDataType) => {
    await act(async () => {
        Object.keys(testData).forEach(async target => {
            const inputType = target as LoginInputType
            const inputObject = getByTestId(`FormTextInputInput-${inputType}`)
            await fireEvent.changeText(inputObject, {
                target: { value: testData[inputType] }
            })
        })
    })

    await act(async () => {
        const submitButtonObject = getByTestId('submit-login')
        await fireEvent.press(submitButtonObject)
    })
}
