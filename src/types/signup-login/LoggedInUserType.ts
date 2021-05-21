export type LoggedInUserType = {
    id: string
    loginType: 'traditional' | 'facebook',
    name: string,
    jwtToken: string 
}