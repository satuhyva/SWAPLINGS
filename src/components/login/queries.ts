

// axios query is the same as Apollo Client query except for the missing gql prior to ``
export const LOGIN_PERSON = `
    mutation loginPerson($loginInput: LoginInput!) {
        loginPerson(loginInput: $loginInput) {
            code
            success
            message
            id
            username
            facebookName
            jwtToken
        }
    }
`


export type LoginInputVariablesType = {
    username: string,
    password: string
}

export type LoginPersonResponseType = {
    loginPerson: {
        code: string,
        success: boolean,
        message: string,
        id: string | null,
        username: string | null,
        facebookName: null, 
        jwtToken: string | null,
    }
}


// axios query is the same as Apollo Client query except for the gql prior to ``
export const LOGIN_PERSON_FACEBOOK = `
    mutation facebookLogin($facebookLoginInput: FacebookLoginInput!) {
        facebookLogin(facebookLoginInput: $facebookLoginInput) {
            code
            success
            message
            id
            username
            facebookName
            jwtToken
        }
    }
`
export type FacebookLoginInputVariablesType = {
    userId: string, 
    facebookAccessToken: string
}

export type FacebookLoginResponseType = {
    facebookLogin: {
        code: string,
        success: boolean,
        message: string,
        id: string | null,
        username: null
        facebookName: string | null, 
        jwtToken: string | null 
    }
}