import React from "react";
import styled from "styled-components";


const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`

function Sidebar() {
  return(
 <Side>
  <div class="w3-container w3-row">
    <div class="w3-col s4">
      <img src="	https://www.w3schools.com/w3images/avatar2.png" class="w3-circle w3-margin-right"  style={{ width: "46px"}} ></img>
    </div>
    <div class="w3-col s8 w3-bar">
      <span>Welcome, <strong>Mike</strong></span><br/>
      <a href="#" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i></a>
      <a href="#" class="w3-bar-item w3-button"><i class="fa fa-user"></i></a>
      <a href="#" class="w3-bar-item w3-button"><i class="fa fa-cog"></i></a>
    </div>
  </div>
 </Side>
  );
}

export default Sidebar;