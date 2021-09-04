import React from 'react'
import styled from 'styled-components'
const InputTx = () => {
    // const Input_tx = () => (
    //     <div>
           
    //     <label for="chatTextArea">메세지 입력</label>
    //     <textarea name="chatTextarea" autocomplete="off" id="chatTextarea" rows="1" data-min-rows="1" placeholder="쓱 메시지를 입력하세요." style="overflow: hidden; height: 19px;"></textarea>
         
    //     </div>
    // )
    return(
        <div>
            <from action="form_ok.php" method="POST">
                <InPut1 id="input1" type="text" placeholder="입력해주세요!"/>
                <InPut2 id="input2" type="submit"/>
            </from>
        </div>
    )
}
export default InputTx

const InPut1 = styled.input`
    width : 300px;
    height : 50px;
    border-bottom:none;
    border-left:none;
    border-right:none;
    border-top:3px solid gray;
    margin-right: 10px;
    
`

const InPut2 = styled.input`
    width : 60px;
    height : 50px;
    border-bottom:none;
    border-left:none;
    border-right:none;
    border-top:3px solid gray;
`
