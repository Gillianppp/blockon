import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import logo from '../../assets/images/CryptScrypt.png';
import './Header.css';

const HeaderBar = () => (
  <Header as='h2' className="mainHeader">
    <Header.Content className="headerIcons iconTitle"><Image className="logo" src={logo} alt="logo" /></Header.Content>
  </Header>
)

export default HeaderBar;