import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import './Header.css';

const HeaderBar = () => (
  <Header as='h2' className="mainHeader">
    <Icon name='heartbeat' className="headerIcons icon"/>
    <Header.Content className="headerIcons iconTitle"><span Style="color: rgb(10,136,188)">Crypt</span><span Style="color: rgb(0,128,128)">Scrypt</span></Header.Content>
  </Header>
)

export default HeaderBar;