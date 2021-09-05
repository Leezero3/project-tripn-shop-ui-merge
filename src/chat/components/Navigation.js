import React from 'react'
// import styled from 'styled-components'
// import Talk from 'pages/Talk'
// import VideoTalk from 'pages/VideoTalk'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Nacigation = () => {
    return(
    <div>
        <Ul >
            <Li><Button ><Link to='/chat/talk' style= {{textDecoration: 'none'}}>CHAT</Link></Button></Li>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            <Li><Button><Link to='/chat/video' style= {{textDecoration: 'none'}}>VIDEO</Link></Button></Li> 
            <Li><ButtonS><Link to='/chat/video/sub' style= {{textDecoration: 'none'}}>SUB</Link></ButtonS></Li>

        </Ul>
    </div>
)}
export default Nacigation

const Li = styled.li`
    display:inline;
    `
const Button = styled.button`
    width:70px;
    background-color: #ffcc00;
    border: none;
    border-radius:5px;
    color:#fff;
    padding: 5px 0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    margin-right: 10px;
    cursor: pointer;
    box-shadow:3px 3px 3px black;
    float: left;
`
const ButtonS = styled.button`
    width:70px;
    background-color: #ffcc00;
    border: none;
    border-radius:5px;
    color:#fff;
    padding: 5px 0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    // margin: 4px;
    cursor: pointer;
    box-shadow:3px 3px 3px black;
    float: right;
`

const Ul = styled.ul`
    border-bottom : 2px  solid #93b3b7;
    margin-bottom: 10px;
    margin-left: 10px;
    width : 380px;
    padding: 20px;
`