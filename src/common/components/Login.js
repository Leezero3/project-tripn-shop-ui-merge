import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const Login = () => {
    return(<>
    <Button><Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>Login</Link></Button>
    </>)
}

 
export default Login;

const Button = styled.button`
    width:80px;
    border: none;
    background-color: white;
    color: black;
    padding: 5px 0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    margin: 4px;
    cursor: pointer;
    box-shadow:1px 1px 1px gray;
    `    

 