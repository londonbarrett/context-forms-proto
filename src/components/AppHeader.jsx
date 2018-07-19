import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.svg';

const Header = styled.header`
  color: #00544C;
  height: 150px;
  padding: 20px;
  text-align: center;
`;

const Spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${Spin} infinite 20s linear;
  height: 80px;
`;

const AppHeader = () => (
  <Header>
    <Logo src={logo} alt="logo" />
    <h1>
      React Context Forms
    </h1>
  </Header>
);

export default AppHeader;
