export const signUpUser = async (username, password, email) => {
    await expect(element(by.id('move-to-touchable'))).toBeVisible()
    await element(by.id('move-to-touchable')).tap()
    await expect(element(by.id('FormTextInputInput-username'))).toBeVisible()
    await element(by.id('FormTextInputInput-username')).typeText(username)
    await expect(element(by.id('FormTextInputInput-password'))).toBeVisible()
    await element(by.id('FormTextInputInput-password')).typeText(password)
    await expect(element(by.id('FormTextInputInput-passwordConfirm'))).toBeVisible()
    await element(by.id('FormTextInputInput-passwordConfirm')).typeText(password)
    await expect(element(by.id('FormTextInputInput-email'))).toBeVisible()
    if (email) {
        await element(by.id('FormTextInputInput-email')).typeText(email)
    }
    await expect(element(by.id('submit-sign-up'))).toBeVisible()
    await element(by.id('submit-sign-up')).tap()
}