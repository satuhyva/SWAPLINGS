export type SignUpServerResponseType = {
    data: {
        signUpPerson: {
            code: string,
            success: boolean,
            message: string,
            id: string | null,
            username: string | null,
            facebookName: null, 
            jwtToken: string | null,
        }
    }
}