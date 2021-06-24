import { signUpUser } from '../helpers/signUpUser'
import { logoutUser } from '../helpers/logoutUser'



export const describeSignUp = (USER_1, USER_2) => {

    return describe('SIGN UP', () => {

        it('given improper input in signing up, error messages should be shown to the user', async () => {
          await signUpUser('UU', '1234567', 'some.mail@gmail')
          await expect(element(by.id('error-username'))).toBeVisible()
          await expect(element(by.id('error-password'))).toBeVisible()
          await expect(element(by.id('error-email'))).toBeVisible()
    
          await element(by.id('FormTextInputInput-username')).clearText()
          await expect(element(by.id('error-username'))).toBeVisible()
          await element(by.id('FormTextInputInput-username')).typeText(USER_2.username)
    
          await element(by.id('FormTextInputInput-email')).clearText()
          await element(by.id('FormTextInputInput-passwordConfirm')).clearText()
          await element(by.id('FormTextInputInput-passwordConfirm')).typeText('12345678')
          await expect(element(by.text('Passwords must match'))).toBeVisible()
    
          await element(by.id('FormTextInputInput-password')).clearText()
          await element(by.id('FormTextInputInput-password')).typeText('12345678')
          await expect(element(by.id('error-username'))).not.toBeVisible()
          await expect(element(by.id('error-password'))).not.toBeVisible()
          await expect(element(by.id('error-passwordConfirm'))).not.toBeVisible()
          await expect(element(by.id('error-email'))).not.toBeVisible()
        })
    
        it('given proper input in signing up, the user should be able to sign up (followed by automatic login)', async () => {
          await signUpUser(USER_1.username, USER_1.password, USER_1.email)
          await expect(element(by.id('title-my-items'))).toBeVisible()
        })
    
    
        it('given a username or email that are already in use (in database), signing up should not be allowed', async () => {
          await signUpUser(USER_2.username, USER_2.password, USER_2.email)
          await logoutUser()
    
          await signUpUser(USER_2.username, USER_2.password, 'different@gmail.com')
          await expect(element(by.id('notification-error'))).toBeVisible()
    
          await expect(element(by.id('notification-close-button'))).toBeVisible()
          await element(by.id('notification-close-button')).tap()
          await element(by.id('FormTextInputInput-username')).clearText()
          await element(by.id('FormTextInputInput-username')).typeText('different username')
          await element(by.id('FormTextInputInput-email')).clearText()
          await element(by.id('FormTextInputInput-email')).typeText(USER_2.email)
          await expect(element(by.id('submit-sign-up'))).toBeVisible()
          await element(by.id('submit-sign-up')).tap()
          await expect(element(by.id('notification-error'))).toBeVisible()
        })
    
      })
    

}