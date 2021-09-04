import React from 'react';
import styled from 'styled-components';
import {Join, Login, Logo, MyPageButton} from 'common/index';
// import Login from './Login';
// import Logo from './Logo';


const Header = () => {
    return(<>
    <SideBar><Login/><Join/><MyPageButton/></SideBar>
    <Logo/>
    </>)
}


export default Header


const SideBar = styled.div`
    display : flex;
    width: auto;
    float: right;
    margin: 40px;
    `

 