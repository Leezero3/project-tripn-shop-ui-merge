import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PersonalRecommand = () => {
  return (
    <div>
        <MainButton><Link to='/recommand-page' style={{ textDecoration: 'none', color: 'black' }}>나만의 일정 추천받기</Link></MainButton>
    </div>
  );
};
export default PersonalRecommand

const MainButton = styled.button`
    background: transparent;
    border-radius:35px;
    border: 3px solid gray;
    color: gray;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 30px;
    width : 500px
`   