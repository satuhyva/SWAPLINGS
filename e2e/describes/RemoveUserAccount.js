import { signUpUser } from '../helpers/signUpUser'




export const describeRemoveUserAccount = (USER_1) => {


    return describe('REMOVE USER ACCOUNT', () => {

        it('given a signed up user, the user should be able to remove his or her account (including cancelling the process at various points)', async () => {
            await signUpUser(USER_1.username, USER_1.password, USER_1.email)
            await expect(element(by.id('TabBar-Settings'))).toBeVisible()
            await element(by.id('TabBar-Settings')).tap()

            await expect(element(by.id('start-removing-account'))).toBeVisible()
            await element(by.id('start-removing-account')).tap()

            await expect(element(by.id('cancel-remove-account'))).toBeVisible()
            await expect(element(by.id('remove-account-permanently'))).toBeVisible()
            await element(by.id('cancel-remove-account')).tap()
            await expect(element(by.id('remove-account-permanently'))).not.toBeVisible()

            await expect(element(by.id('start-removing-account'))).toBeVisible()
            await element(by.id('start-removing-account')).tap()
            await expect(element(by.id('remove-account-permanently'))).toBeVisible()
            await element(by.id('remove-account-permanently')).tap()
            await expect(element(by.id('remove-account-checkbox'))).toBeVisible()
            await element(by.id('remove-account-checkbox')).tap()
            await expect(element(by.id('cancel-remove-account'))).toBeVisible()
            await element(by.id('cancel-remove-account')).tap()

            await expect(element(by.id('start-removing-account'))).toBeVisible()
            await element(by.id('start-removing-account')).tap()
            await expect(element(by.id('remove-account-checkbox'))).toBeVisible()
            await element(by.id('remove-account-checkbox')).tap()
            await expect(element(by.id('remove-account-permanently'))).toBeVisible()
            await element(by.id('remove-account-permanently')).tap()
            await expect(element(by.id('notification-success'))).toBeVisible()
            await expect(element(by.id('notification-close-button'))).toBeVisible()
            await element(by.id('notification-close-button')).tap()
            await expect(element(by.id('title-login'))).toBeVisible()
        })

    })

}