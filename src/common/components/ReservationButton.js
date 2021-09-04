import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ReservationButton = () => {
  return (
    <div style={{textAlign:'center'}}><ResButton><Link to='/reservation-page' style={{ textDecoration: 'none', color: 'black' }} >결제하기</Link></ResButton>
    </div>
  );
};

export default ReservationButton


const ResButton = styled.button`
    background: transparent;
    border-radius:35px;
    border: 3px solid gray;
    color: gray;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 30px;
    width : 500px
    `
  
