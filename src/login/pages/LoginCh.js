import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Login = () => {
    <></>
    return (
        <Charttd>
            <div>
                <p>ID:</p>
                <input type="text" title="id"/>
                <p>Password:</p>
                <input type="text" title="password"/>
            </div>
            <button style={{float:'left', marginTop:'10px'}}><Link to='/login/find' style= {{textDecoration: 'none'}}>ID/FW 찾기</Link></button>
            <button style={{float:'right', marginTop:'10px'}}>LOGIN</button>
        </Charttd>
    )
}
export default Login

const Charttd = styled.td`
    padding:2%;
    width:200px;
    height:auto;
    border: 1px solid #ffcc00;
    background-color: #ffcc00;
    justify-content: center;
`