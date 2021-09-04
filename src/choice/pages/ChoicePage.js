import React from 'react'
import styled from 'styled-components'
import AutoRecommand from '../components/AutoRecommand'
import { ChooseDate, ReservationButton, ReservaionTab } from 'common/index'
import BackImg2 from '../../common/images/2.jpg'
import BackImg3 from '../../common/images/3.jpg'



const ChoicePage = () => {
    return (<>
    <br/>
    <br/>
    <br/>
    <BackgroundImg2 src={BackImg2}/>
    <BackgroundImg3 src={BackImg3}/>
    <StyledTable>
        <Styledtr>
            <td colSpan="3" style={{border: "1px", borderStyle:"solid", color: "#bcbcbc"}}><ChooseDate/></td>
        </Styledtr>
        <Styledtr>
            <Styledtd><AutoRecommand/></Styledtd>
            <Styledtd><AutoRecommand/></Styledtd>
            <Styledtd><AutoRecommand/></Styledtd>
        </Styledtr>
       
        <Styledtr>
            <Styledtd><AutoRecommand/></Styledtd>
            <Styledtd><AutoRecommand/></Styledtd>
            <Styledtd><AutoRecommand/></Styledtd>
        </Styledtr>
        <Styledtr>
            <td colSpan="3" style={{border: "1px", borderStyle:"solid", color: "#bcbcbc"}}><ReservaionTab/></td>
        </Styledtr>  
        <Styledtr>
            <td colSpan="3" style={{border: "1px", borderStyle:"solid", color: "#bcbcbc"}}><ReservationButton/></td>
        </Styledtr>  
    </StyledTable>
    
    </>)
}

export default ChoicePage

const StyledTable = styled.table`
    width: 1500px;
    height: 1000px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #bcbcbc;
    
`

const Styledtr = styled.tr`
    width: auto;
    height: 20%;
    border: 1px solid #bcbcbc;
`

const Styledtd = styled.td`
    width: 20%;
    height: 20%;
    border: 1px solid #bcbcbc;
`
const BackgroundImg2 = styled.img`
    opacity: 0.8;
    z-index:-1;
    position: fixed;
    right: 1%;
    top: 2%;
    transform:scale(1.1);  
    
 `   
 const BackgroundImg3 = styled.img`
    opacity: 0.8;
    z-index: -2;
    position: fixed;
    left: 1%;
    bottom: 2%;
    transform:scale(1.1);  
    `   
