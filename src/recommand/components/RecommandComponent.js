import React from "react";
import styled from "styled-components";

const RentCar = () => {
  return (
    <div style = {{position: "relative", left: "4%", margin: "15spx 0px 0px 0px" }}>
        <p style = {{textAlign:"left", margin:"50px 0px px 0px" }}>추천항목</p>
    <div style = {{float:"center"}}>
        <p>
            <RecommandField><legend>추천1</legend></RecommandField>
            <RecommandField><legend>추천2</legend></RecommandField>
            <RecommandField><legend>추천3</legend></RecommandField>
        </p>
    </div>
    </div>
  );
};

export default RentCar


const RecommandField = styled.fieldset`
    float: left;
    margin: 0px 15px 30px 30px;
    width: 400px;
    height: 250px;
`
