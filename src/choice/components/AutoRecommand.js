import React from "react";
import styled from "styled-components";

const AutoRecommand = () => {
  return (
    <div style = {{position: "relative", left: "30px" }}>
        <p style = {{textAlign:"left", margin:"50px 0px px 0px" }}>추천항목</p>
    <div style = {{float:"center"}}>
        <p>
            <AutoRecommandField><legend>추천</legend></AutoRecommandField>
        </p>
    </div>
    </div>
  );
};
export default AutoRecommand


const AutoRecommandField = styled.fieldset`
    float: left;
    margin: 0px 15px 30px 30px;
    width: 400px;
    height: 250px;
`
