

export type RemoveAccountServerResponseType = {
    data: {
        removePerson: {
            code: string,
            facebookName: string | null,
            message: string,
            success: boolean,
            username: string | null,
        }
    }
}