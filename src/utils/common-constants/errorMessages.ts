
// SIGN UP:
const SIGN_UP_ERROR_NOTIFICATION_TITLE = 'ERROR IN SIGNUP'
const SIGN_UP_ERROR_NOTIFICATION_CONTENT = 'Could not sign up.'
const SIGN_UP_ERROR_NOTIFICATION_CONTENT_DUPLICATE_USERNAME = ['Username already exists.',  'Cannot create several users with same username.']
const SIGN_UP_ERROR_NOTIFICATION_CONTENT_DUPLICATE_EMAIL = ['Email already exists.',  'Cannot create several users with the same email.']
export const SIGN_UP_NOTIFICATION = {
    errorTitle: SIGN_UP_ERROR_NOTIFICATION_TITLE,
    errorGeneralContent: SIGN_UP_ERROR_NOTIFICATION_CONTENT,
    errorDuplicateUsernameContent: SIGN_UP_ERROR_NOTIFICATION_CONTENT_DUPLICATE_USERNAME,
    errorDuplicateEmailContent: SIGN_UP_ERROR_NOTIFICATION_CONTENT_DUPLICATE_EMAIL,
}

// LOGIN:
export const ERROR_LOGIN_TITLE = 'ERROR IN LOGIN'
export const ERROR_LOGIN_CONTENT = 'Could not login.'

// FACEBOOK:
export const ERROR_FACEBOOK_TITLE = 'ERROR IN FACEBOOK LOGIN'
export const ERROR_FACEBOOK_CONTENT = 'Something went wrong. Could not login with Facebook.'


// REMOVE ACCOUNT:
const SUCCESS_REMOVE_ACCOUNT_TITLE = 'SUCCESS IN REMOVE ACCOUNT'
const SUCCESS_REMOVE_ACCOUNT_CONTENT = 'Your account has been successfully removed.'
const ERROR_REMOVE_ACCOUNT_TITLE = 'ERROR IN REMOVING ACCOUNT'
const ERROR_REMOVE_ACCOUNT_CONTENT = 'Something went wrong. Your account cound not be removed.'
export const REMOVE_ACCOUNT_NOTIFICATION = {
    errorTitle: ERROR_REMOVE_ACCOUNT_TITLE,
    errorContent: ERROR_REMOVE_ACCOUNT_CONTENT,
    successTitle: SUCCESS_REMOVE_ACCOUNT_TITLE,
    successContent: SUCCESS_REMOVE_ACCOUNT_CONTENT
}

