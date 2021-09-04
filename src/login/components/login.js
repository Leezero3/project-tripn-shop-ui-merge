import React from 'react'
import { Link } from 'react-router-dom'

const LoginB = () => {

    return(
        <>
        <button><Link to='/login' style= {{textDecoration: 'none'}}>login</Link></button>
        
        </>
    )

}

export default LoginB