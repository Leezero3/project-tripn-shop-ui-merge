import React from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { Find } from "login/index"

const TakeId = () => {

    return (
        <>
            <Find/>
            <Div>
                <div>
                    <p>Your ID is</p>
                    <Input id="name" type="text"/>
                    <br/>
                    <br/>
                    <button style={{textAlign:'center'}}><Link to='/login' style= {{textDecoration: 'none'}}>확인</Link></button>
                </div>
            </Div>
        </>
    )
}
export default TakeId

const Div = styled.div`
    margin-top: 50px;
    display: flex;

`
const Input = styled.input`
    size: 10px;
    width: 50%
`
