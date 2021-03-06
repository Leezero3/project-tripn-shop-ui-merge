import React from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { Find } from "login/index"

const CheckId = () => {
    return(
        <>
            <Find/>
            <Div>
                <div>
                <p>NAME?</p>
                <Input id="name" type="text"/>
                <p>Email?</p>
                <Inputemail id="email" type="email"/>
                <>&nbsp;</>
                <button>인증번호 받기</button>
                <Input id="number" type="text" placeholder="인증번호를 입력해주세요"/>
                <br/>
                <br/>
                <button style={{textAlign:'center'}}><Link to='/login/find/check/take-id' style= {{textDecoration: 'none'}}>확인</Link></button>
                </div>
            </Div>
        </>
    )
}
export default CheckId

const Div = styled.div`
    margin-top: 50px;
    display: flex;
    margin-left: 40px;

`
const Input = styled.input`
    size: 10px;
    width: 50%
`
const Inputemail =styled.input`
    width: 50%
`
// const Div1 = styled.div`
//     width:50%;
//     height:115px;
//     // display: flex;
//     border: 1px solid #ffcc00;
//     background-color: #ffcc00;
//     // text-align: center;
// `