export const logoutUser = async () => {
    await expect(element(by.id('TabBar-Settings'))).toBeVisible()
    await element(by.id('TabBar-Settings')).tap()
    await expect(element(by.id('logout-button'))).toBeVisible()
    await element(by.id('logout-button')).tap()
}