import React from "react";
import styled from "styled-components";

const Side = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
`;

const UserRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 46px;
  border-radius: 50%;
  margin-right: 12px;
`;

const UserText = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconBar = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 6px;
`;

const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Sidebar = ({ toggleSide }) => {
  return (
    <Side>
      <UserRow>
        <Avatar
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="avatar"
        />
        <UserText>
          <span>
            Welcome, <strong>Mike</strong>
          </span>
          <IconBar>
            <a href="#" style={{ color: 'black' }}><i className="fa fa-envelope"></i></a>
            <a href="#" style={{ color: 'black' }}><i className="fa fa-user"></i></a>
            <a href="#" style={{ color: 'black' }}><i className="fa fa-cog"></i></a>
          </IconBar>

        </UserText>
      </UserRow>

      <MenuBlock className="w3-bar-block">
        <a
          href="#"
          className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
          onClick={toggleSide}
          title="close menu"
        >
          <i className="fa fa-remove fa-fw"></i>&nbsp; Close Menu
        </a>
        <a href="#" className="w3-bar-item w3-button w3-padding w3-blue">
          <i className="fa fa-users fa-fw"></i>&nbsp; Overview
        </a>
        <a href="#" className="w3-bar-item w3-button w3-padding">
          <i className="fa fa-eye fa-fw"></i>&nbsp; Views
        </a>
        <a href="#" className="w3-bar-item w3-button w3-padding">
          <i className="fa fa-users fa-fw"></i>&nbsp; Traffic
        </a>
        <a href="#" className="w3-bar-item w3-button w3-padding">
          <i className="fa fa-bullseye fa-fw"></i>&nbsp; Geo
        </a>
        <a href="#" className="w3-bar-item w3-button w3-padding">
          <i className="fa fa-diamond fa-fw"></i>&nbsp; Orders
        </a>
        <a href="#" className="w3-bar-item w3-button w3-padding">
          <i className="fa fa-bell fa-fw"></i>&nbsp; News
        </a>
        <a href="#" className="w3-bar-item w3-button w3-padding">
          <i className="fa fa-bank fa-fw"></i>&nbsp; General
        </a>
        <a href="#" className="w3-bar-item w3-button w3-padding">
          <i className="fa fa-history fa-fw"></i>&nbsp; History
        </a>
        <a href="#" className="w3-bar-item w3-button w3-padding">
          <i className="fa fa-cog fa-fw"></i>&nbsp; Settings
        </a>
      </MenuBlock>
    </Side>
  );
};

export default Sidebar;
