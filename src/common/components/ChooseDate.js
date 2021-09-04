import React from "react";


const ChooseDate = () => {
  return (
    <div style = {{position: "relative", left: "4%", margin: "15spx 0px 0px 0px" }}>
        출발<input type ="date" style = {{margin : '10px'}}/> 도착<input type ="date" style = {{margin : '10px'}}/>
    </div> 
  );
};

export default ChooseDate

