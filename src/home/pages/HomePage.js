import React from 'react'
import styled from 'styled-components'

import BackImg1 from '../images/1.jpg'

import { ChatBotIcon } from 'common/index'
import { PersonalRecommand, PersonalChoice } from 'home/index'


const HomePage = () => {
    return (<>

    
    <br/>
    <br/>
    <br/>
    <BackgroundImg src={BackImg1}/>
    <div>
    <StyledTable>
        <Styledtr>
            <Styledtd></Styledtd>
            <Styledtd><PersonalRecommand/></Styledtd>
            <Styledtd><PersonalChoice/></Styledtd>
            <Styledtd></Styledtd>
        </Styledtr>
        <Styledtr>
            <Styledtd></Styledtd>
            <Styledtd></Styledtd>
            <Styledtd></Styledtd>
            <Styledtd><ChatBotIcon/></Styledtd> 
        </Styledtr>       
    </StyledTable>
    </div>
   
    </>)
    
}

export default HomePage;

const StyledTable = styled.table`
    width: 1800px;
    height: 850px;
    margin-left: auto;
    margin-right: auto;
    text-align:center;
    z-index:2;
`

const Styledtr = styled.tr`
    width: 30%;
    height: 30%;
   
`

const Styledtd = styled.td`
    width: 25%;
    height: 25%;
    /* border: 1px solid #bcbcbc; */
`


const BackgroundImg = styled.img`
    opacity: 0.8;
    z-index:-1;
    position: fixed;
    right: 29%;
    top: 30%;
    // bottom:0;
    /* height : 400px;
    width : 380px;
    z-index:-1;  */
    // allow='autoplay; encrypted-media'
 `   
