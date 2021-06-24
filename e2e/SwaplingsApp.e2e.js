import { signUpUser } from './helpers/signUpUser'
import { logoutUser } from './helpers/logoutUser'
import { loginUser } from './helpers/loginUser'
import { USERS_LIST } from './helpers/testData'
import { describeRemoveUserAccount } from './describes/RemoveUserAccount'
import { describeLaunchedSwaplingsApp } from './describes/LaunchedSwaplingsApp'
import { describeSignUp } from './describes/SignUp'
import { describeLogin } from './describes/Login'


beforeAll(async () => {
  await device.launchApp()
})

beforeEach(async () => {
  await device.reloadReactNative()
})


// NOTE: Restart server prior to each run with "npm run e2e".
// NOTE: Individual tests are not completely independent of each other because the database is not cleared between tests.
// NOTE: All tests are called from this same file, because we want to make sure the order of ALL tests in all files is known.



// We can do the following, because Detox runs tests sequentially one after the other in the written order.
const REMAINING_NEW_USERS = [ ...USERS_LIST ]
const nextUniqueUser = () => {
  if (REMAINING_NEW_USERS.length === 0) throw new Error('No new unique users left!')
  return REMAINING_NEW_USERS.shift()
}


describe('SWAPLINGS APP', () => {

  describeLaunchedSwaplingsApp()

  describeSignUp(
    nextUniqueUser(), 
    nextUniqueUser()
  )

  describeLogin(
    nextUniqueUser(), 
    nextUniqueUser()
  )

  describeRemoveUserAccount(
    nextUniqueUser()
  )


})

