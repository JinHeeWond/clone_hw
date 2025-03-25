import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 20px;
  z-index: 1000;
`;

const Title = styled.span`
  margin-left: 90vw;
  font-size: 25px;

   @media (max-width: 639px) {
    width: 86.6666vw;
   
  }
`;

const Menubar = styled.div`
  display: none;
  position: absolute;
  right: 85vwpx;
  top: 15px;

  @media (max-width: 639px) {
    display: block;
  }
`;


const Header = () => {
  return (
    <div>
    <HeaderContainer>
      <Title>Logo</Title>
      <Menubar>
      <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onClick="w3_open();"><i class="fa fa-bars"></i> &nbsp;Menu</button>
    </Menubar>
    </HeaderContainer>
    </div>
  );
};

export default Header;
