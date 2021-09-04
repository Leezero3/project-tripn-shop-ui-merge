import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderLogo = () => {
    <></>
    return (
        <Logo><Link to='/home-page' style={{ textDecoration: 'none', color: 'black' }}>Trip N</Link></Logo>
    )
}
export default HeaderLogo

const Logo = styled.h1`
    height: auto;
    width: auto;
    text-align: center;
    //float: left;
    font-size: 30px;
    // margin: 60px 100px 10px;
`