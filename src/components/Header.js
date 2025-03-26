import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar"; 

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
  right: 85vw;
  top: 15px;

  @media (max-width: 639px) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 70%;
  max-width: 300px;
  background-color: #f9f9f9;
  z-index: 1000;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 640px) {
    display: none;
  }
`;


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <HeaderContainer>
        <Title>Logo</Title>
        <Menubar>
          <button
            className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
            onClick={toggleSide}
          >
            <i className="fa fa-bars"></i> 
          </button>
        </Menubar>
      </HeaderContainer>

      {isOpen && <Overlay onClick={toggleSide} />}

      <SidebarWrapper isOpen={isOpen}>
        <Sidebar toggleSide={toggleSide} />
      </SidebarWrapper>

    </>
  );
};

export default Header;
