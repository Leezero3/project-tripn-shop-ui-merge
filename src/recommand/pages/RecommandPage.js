import React from 'react'
import styled from 'styled-components'
import RecommandComponent from '../components/RecommandComponent'
import { ChooseDate, ReservaionTab, ReservationButton} from 'common/index'
import BackImg2 from '../../common/images/2.jpg'
import BackImg3 from '../../common/images/3.jpg'


const RecommandPage = () => {
    return (<>
   
    <br/>
    <br/>
    <br/>
    <BackgroundImg2 src={BackImg2}/>
    <BackgroundImg3 src={BackImg3}/>
    <StyledTable>
        <Styledtr>
            <Styledtd><ChooseDate/></Styledtd>
        </Styledtr>
        <Styledtr>
            <Styledtd><RecommandComponent/></Styledtd>
        </Styledtr>
        <Styledtr>
            <Styledtd><RecommandComponent/></Styledtd>
        </Styledtr>
        <Styledtr>
            <Styledtd><RecommandComponent/></Styledtd>
        </Styledtr>
        <Styledtr>
            <Styledtd><RecommandComponent/></Styledtd>
        </Styledtr>
        <Styledtr>
            <Styledtd><RecommandComponent/></Styledtd>
        </Styledtr>
        <Styledtr>
            <Styledtd><RecommandComponent/></Styledtd>
        </Styledtr>
        <Styledtr>
            <td colSpan="3" style={{border: "1px", borderStyle:"solid", color: "#bcbcbc",}}><ReservaionTab/></td>
        </Styledtr>
        <Styledtr>
            <td colSpan="3" style={{border: "1px", borderStyle:"solid", color: "#bcbcbc"}}><ReservationButton/></td> 
        </Styledtr>
    </StyledTable>  
    </>)
}

export default RecommandPage

const StyledTable = styled.table`
    width: 1500px;
    height: 2500px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #bcbcbc;
    
`

const Styledtr = styled.tr`
    width: 10%;
    height: 12.5%;
    border: 1px solid #bcbcbc;
`

const Styledtd = styled.td`
    width: 20%;
    height: 12.5%;
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

