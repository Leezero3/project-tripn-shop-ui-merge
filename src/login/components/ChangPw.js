import React from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { Find } from "login/index"

const ChangPw = () => {

    return(
        <>
            <Find/>
            <Div>
                <from action="form_ok.php" method="POST">
                    <p>Enter Password : </p>
                        <InPut1 id="input1" type="text" placeholder="Enter the password to change"/>
                    <p>Verify Password : </p>
                        <InPut1 id="input1" type="text" placeholder="Enter the changed password again."/>
                </from>
                
            </Div>
            <br/>
            <button style={{textAlign:'center', marginLeft:'300px'}}><Link to='/login' style= {{textDecoration: 'none'}}>확인</Link></button>
        </>
    )
}
export default ChangPw

const Div = styled.div`
    display: flex;
    width : 50%;
    height : auto;
    // border-bottom:1px solid gray;
    // border-left:1px solid gray;
    // border-right:1px solid gray;
    // border-top:1px solid gray;
    margin-top: 50px;
    margin-left: 40px;
    // justify-content: center;
`

const InPut1 = styled.input`
    // display: flex;
    width : 300px;
    height : 50px;
    border-bottom:1px solid gray;
    border-left:1px solid gray;
    border-right:1px solid gray;
    border-top:1px solid gray;
    margin-right: 10px;
    // justify-content: center;
    
`