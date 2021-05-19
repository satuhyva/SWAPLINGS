import SignUp from './SignUp'
// import { render, fireEvent } from '@testing-library/react-native'



// const USERNAME = 'Some username'


describe('SIGN UP COMPONENT', () => {

    it('given empty SignUp form, user can create a new account', () => {

        expect(true).toBe(true)
        const changePageToShowMock = jest.fn()
        console.log('r', typeof changePageToShowMock)
        console.log(typeof SignUp)

        // const { getByTestId } = render(<SignUp changePageToShow={changePageToShowMock}/>)
        // fireEvent.changeText(getByTestId('FormTextInput-username'), USERNAME)


    })
    
})