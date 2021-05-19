import React, { useState } from 'react'
import SignUp from '../sign-up/SignUp'
import Login from '../login/Login'


const SignUpLogin = () => {


    const [showing, setShowing] = useState<'login' | 'signup'>('login')
    
    const changePageToShow = (show: 'login' | 'signup') => {
        setShowing(show)
    }

    if (showing === 'login') return <Login changePageToShow={changePageToShow}/>
    else return <SignUp changePageToShow={changePageToShow}/>

}

export default SignUpLogin


