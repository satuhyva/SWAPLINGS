


export const describeLaunchedSwaplingsApp = () => {

    return describe('LAUNCHED SWAPLINGS APP', () => {

        it('given a launched app, the LOGIN page should be visible', async () => {
          await expect(element(by.id('title-login'))).toBeVisible()
        })
    
        it('given a launched app, the user should be able to switch between LOGIN and SIGN UP pages', async () => {
          await expect(element(by.id('title-login'))).toBeVisible()
          await expect(element(by.id('move-to-touchable'))).toBeVisible()
          await element(by.id('move-to-touchable')).tap()
          await expect(element(by.id('title-sign-up'))).toBeVisible()
          await expect(element(by.id('move-to-touchable'))).toBeVisible()
          await element(by.id('move-to-touchable')).tap()
          await expect(element(by.id('title-login'))).toBeVisible()
        })    
    
      })

}