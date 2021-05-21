export type FacebookLoginServerResponseType = {
    data: {
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
}