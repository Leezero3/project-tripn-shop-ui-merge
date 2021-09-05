import Video from '../images/vid.gif'
import {InputV, Nacigation } from 'chat/index'
import React from 'react'
import styled from 'styled-components'

const Sub = () => {

    return(
        <>
        <div>
            <ChDiv>
                <Nacigation/>
                <tr>
                    <Img src={Video}/>
                    <SubBox>
                        <li style={{justifyContent:"center"}}>안녕하세요. tripN입니다.</li>
                        <li>무엇을 도와드릴까요?</li>
                    </SubBox>
                    <Li><InputV/></Li>
                </tr>
            </ChDiv>
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
    text-align: center;
    margin-left: 20px;
    margin-bottom:5px;
    border-radius: 5px;
    // justify-content: center;
    z-index : 2;
`

const Img = styled.img`
    // position:fixed;
    // right:0;
    bottom:0;
    min-width:80%;
    min-height:80%;
    // height : 450px;
    // width : 380px;
    margin-left: 15px;

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
const ChDiv = styled.table`
    width : 430px;
    height : 600px;
    // padding:10px
    border-radius:10px;
    border-width : 5px;
    border-style : dotted;
    border-color : #ffcc00;
`