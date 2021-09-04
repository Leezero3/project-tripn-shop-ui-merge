import Video from '../images/vid.gif'
import {InputV} from 'chat/index'
import React from 'react'
import styled from 'styled-components'

const Sub = () => {

    return(
        <>
        <div>
        
            <Img src={Video}/>
            <SubBox>
                <li style={{justifyContent:"center"}}>안녕하세요. tripN입니다.</li>
                <li>무엇을 도와드릴까요?</li>
            </SubBox>
            <Li><InputV/></Li>
            
        </div>
        </>
    )
}
export default Sub

const SubBox = styled.ul`
    background:#ccc;
    list-style-type:none;
    width: 88%; 
    height:auto;
    top:400px;
    textAlign: center;
    margin-left: 5px;
    border-radius: 5px;
    justify-content: center;
    z-index : 2;
`

const Img = styled.img`
    // position:fixed;
    // right:0;
    bottom:0;
    min-width:97%;
    min-height:95%;
    // height : 450px;
    // width : 380px;
    margin-left: 5px;

`

const Li = styled.li`
    list-style-type:none;
    // justify-content: center;
    margin-left:190px;
    margin-bottom :10px;
    border-radius:60%;
    border-width : 20px;
    border-color : #ffcc00;
    border-radius:10px;
`