import { signUpUser } from '../helpers/signUpUser'
import { logoutUser } from '../helpers/logoutUser'
import { loginUser } from '../helpers/loginUser'




export const describeLogin = (USER_1, USER_2) => {

    return describe('LOGIN', () => {

        it('given a user who has not signed up yet, the user should not be able to login', async () => {
        await expect(element(by.id('title-login'))).toBeVisible()
        await loginUser(USER_1.username, USER_1.password)
        await expect(element(by.id('notification-error'))).toBeVisible()
        })

        it('given a signed-up user (who has been automatically logged in), the user should be able to logout and then login again', async () => {
        await signUpUser(USER_2.username, USER_2.password, USER_2.email)
        await logoutUser()
        await expect(element(by.id('title-login'))).toBeVisible()
        await loginUser(USER_2.username, USER_2.password)
        await expect(element(by.id('title-my-items'))).toBeVisible()
        })

    })

}

