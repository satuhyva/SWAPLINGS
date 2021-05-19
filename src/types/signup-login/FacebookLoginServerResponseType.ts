export type FacebookLoginServerResponseType = {
    data: {
        facebookLogin: {
            code: string,
            success: boolean,
            message: string,
            username: null
            facebookName: string, 
            jwtToken: string 
        }
    }
}