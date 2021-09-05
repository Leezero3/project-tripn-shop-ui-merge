import React from 'react'
import styled from 'styled-components'
import icon from '../images/돌하르방.png'
import { Link } from 'react-router-dom'

const ChatBotIcon = () => {
    return (<>
        <Link to ="/chat"><Icon src ={icon} alt=""/></Link>
    </>)
}
export default ChatBotIcon

const Icon = styled.img`
    position: fixed;
    right:50px;
    bottom :50px;
    width:5%;
    height:10%;
    // border-radius: 50%;
    // box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`