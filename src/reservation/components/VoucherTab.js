import React from 'react'
import '../styles/VoucherTab.css'



const VoucherTab = () => (<>
<div class="wrap" style = {{margin: '5px 20px 20px 20px', position:'relative', left: "4.5%"}}>
<h1>바우처</h1><br/>
<label for="menu1" class="label e">
  <span class="rotate">
    <p>비행기</p>
  </span>
</label>
<input type="radio" name="navigation" id="menu1" class="button"/>
<div class="contents">
 
</div> 
<label for="menu2" class="label d">
  <span class="rotate">
    <p> 렌트카 </p>
  </span>
</label>
<input type="radio" name="navigation" id="menu2" class="button"/>
<div class="contents">
  
</div>
<label for="menu3" class="label c">
  <span class="rotate">
    <p>  숙소 </p>
  </span>
</label>    
<input type="radio" name="navigation" id="menu3" class="button"/>
<div class="contents">
  
</div>
</div></>
)
export default VoucherTab