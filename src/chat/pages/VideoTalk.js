import React from 'react'
import styled from 'styled-components'
import Video from '../images/vid.gif'
import {InputV,Nacigation} from 'chat/index'

const VideoTalk = () => {

    return (
        <div>
            <ChDiv>
                <Nacigation/>
                <tr>
                    <Img src={Video}/>
        
                    <Li><InputV/></Li>
                </tr>
            </ChDiv>
        </div>
        
    )
}
export default VideoTalk

const Img = styled.img`
    // position:fixed;
    // right:0;
    bottom:0;
    min-width:85%;
    min-height:85%;
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
const ChDiv = styled.table`
    width : 430px;
    height : 600px;
    // padding:10px
    border-radius:10px;
    border-width : 5px;
    border-style : dotted;
    border-color : #ffcc00;
`