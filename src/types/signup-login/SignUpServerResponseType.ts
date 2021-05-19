export type SignUpServerResponseType = {
    data: {
        signUpPerson: {
            code: string,
            success: boolean,
            message: string,
            username: string
            facebookName: null, 
            jwtToken: string 
        }
    }
}