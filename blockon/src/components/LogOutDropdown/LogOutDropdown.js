import React, { Component } from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import './LogOutDropdown.css';

const trigger = (
  <span>
    <Icon name='user' /> Hello, Bob
  </span>
)

const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
    ),
    disabled: true,
  },
//   { key: 'profile', text: 'Your Profile' },
//   { key: 'stars', text: 'Your Stars' },
//   { key: 'explore', text: 'Explore' },
//   { key: 'integrations', text: 'Integrations' },
//   { key: 'help', text: 'Help' },
//   { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' },
]

class LogOutDropdown extends Component {
    render() {
        return(
            <Dropdown className="userDropDown" trigger={trigger} options={options} />
        );

    }
};

export default LogOutDropdown;