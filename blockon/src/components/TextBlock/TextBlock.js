import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './TextBlock.css';

class TextBlock extends Component {
  render() {
    return (
      <div>
        <h1 className="imgTitle">Report Patient's Status</h1>
        <p className="blockText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <Button size='tiny' negative className="flagButton">Flag Patient</Button>
    </div>
    );
  }
}


export default TextBlock;
