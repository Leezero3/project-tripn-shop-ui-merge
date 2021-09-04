import React from 'react'
import styled from 'styled-components'
import voice from '../images/60811.png'

const InputV = () =>{
    return(
    <div>
        <Icon src ={voice} alr="button"/>
    </div>)
}
export default InputV

const Icon = styled.img`
    width : 30px;
    height : 30px;
    border-radius:50%;
    border-width : 1px;
    border-color : #ffcc00;
    border-radius:10px;
`