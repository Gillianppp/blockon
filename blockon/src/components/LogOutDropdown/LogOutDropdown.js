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

  { key: 'sign-out', text: (
      <span>
        <a href="/" className="signOutLink"><strong>Sign out</strong></a>
      </span>
    ),},
]

class LogOutDropdown extends Component {
    render() {
        return(
            <Dropdown className="userDropDown" trigger={trigger} options={options} />
        );

    }
};

export default LogOutDropdown;