export const loginUser = async (username, password) => {
    await expect(element(by.id('FormTextInputInput-username'))).toBeVisible()
    await element(by.id('FormTextInputInput-username')).typeText(username)
    await expect(element(by.id('FormTextInputInput-password'))).toBeVisible()
    await element(by.id('FormTextInputInput-password')).typeText(password)
    await expect(element(by.id('submit-login'))).toBeVisible()
    await element(by.id('submit-login')).tap()
}