import React from 'react'
import styled from 'styled-components'

const BubblyQ = () => {
    <>
    
    </>
    return (
        <UlContainer>
            <li>여행 결제 안내를 부탁드립니다.</li>
            <li></li>
        </UlContainer>
    )
}
export default BubblyQ
const UlContainer = styled.ul`
    // position:relative; 
    // margin: 50px;
    width:auto; 
    height:auto;
    // opacity: 0;
    float: right;
    // background:pink; 
    border-radius: 10px;

    // border-top:0px solid transparent; 
    // border-left: 10px solid transparent; 
    // border-right: 10px solid transparent; 
    // border-bottom: 10px solid pink; 
    // content:""; 
    // position:absolute;
    // top:-10px;
    // left:200px;  

    // width:auto;
    // height:auto;
    background-color:#ffe86a;
    list-style:none;
    list-style-image:scr={icon};
    margin:10px 0 0 0;
    padding: 5px;
    // border-radius: 10px 2px 2px 10px;
`

    // ul{
    //     list-style: none;
    //     margin: 0;
    //     padding: 0;
    //   }
      
    //   ul li{
    //     display:inline-block;
    //     clear: both;
    //     padding: 20px;
    //     border-radius: 30px;
    //     margin-bottom: 2px;
    //     font-family: Helvetica, Arial, sans-serif;
    //   }
      
    //   .him{
    //     background: #eee;
    //     float: left;
    //   }
      
    //   .me{
    //     float: right;
    //     background: #0084ff;
    //     color: #fff;
    //   }
      
    //   .him + .me{
    //     border-bottom-right-radius: 5px;
    //   }
      
    //   .me + .me{
    //     border-top-right-radius: 5px;
    //     border-bottom-right-radius: 5px;
    //   }
      
    //   .me:last-of-type {
    //     border-bottom-right-radius: 30px;
    //   }