import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import logo from '../../assets/images/CryptScrypt.png';
import LogOutDropdown from '../../components/LogOutDropdown/LogOutDropdown';
import './Header.css';
class HeaderBar extends Component {
  render() {
      return(
        <Header as='h2' className="mainHeader">
        <Header.Content className="headerIcons iconTitle"><Image className="logo" src={logo} alt="logo" /></Header.Content>
          <LogOutDropdown />
      </Header>
      );
  }
};

export default HeaderBar;