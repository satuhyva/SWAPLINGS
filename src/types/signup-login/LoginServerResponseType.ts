

export type LoginServerResponseType = {
    data: {
        loginPerson: {
            code: string,
            success: boolean,
            message: string,
            username: string,
            facebookName: null, 
            jwtToken: string 
        }
    }
}