import React from 'react'
import styled from 'styled-components'
import {BubblyA, BubblyQ, InputTx} from 'chat/index'


const Talk = () => {
    <>
    </>
    return (<>
        <BB><BubblyA/><BubblyQ/></BB>
        <ul></ul>
        <ul></ul>
        <ul><InputTx/></ul>
    </>)
}
export default Talk


const BB = styled.ul `
    height : 450px;
    width : 380px;
//     // position:relative; 
//     // margin: 50px;
//     width:auto; 
//     height:auto;
//     // opacity: 0;
//     float: left;
//     background:pink; 
//     border-radius: 10px;

//     // border-top:0px solid transparent; 
//     // border-left: 10px solid transparent; 
//     // border-right: 10px solid transparent; 
//     // border-bottom: 10px solid pink; 
//     content:""; 
//     // position:absolute;
//     // top:-10px;
//     // left:200px;  
`
