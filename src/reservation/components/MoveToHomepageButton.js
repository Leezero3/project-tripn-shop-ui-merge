import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MoveToHomepageButton = () => {
  return (
    <div style={{textAlign:'center'}}><MoveButton><Link to='/home-page' style={{ textDecoration: 'none', color: 'black'}} >홈페이지로 이동하기</Link></MoveButton>
    </div>
  );
};

export default MoveToHomepageButton


const MoveButton = styled.button`
    background: transparent;
    border-radius:35px;
    border: 3px solid gray;
    color: gray;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 30px;
    width : 500px
    `
  
