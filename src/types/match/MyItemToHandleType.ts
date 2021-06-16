


export type MyItemToHandleType = {
    myItem: {
        id: string,
        title: string,
        imageSecureUrl: string,
    }
    matches: {
        id: string,
        title: string,
        imageSecureUrl: string,   
    }[],
    matchedFrom: {
        id: string,
        title: string,
        imageSecureUrl: string,   
    }[],
    matchedTo: {
        id: string,
        title: string,
        imageSecureUrl: string,   
    }[],
}