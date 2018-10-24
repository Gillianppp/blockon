import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
// import { Row, Col } from 'react-flexbox-grid';
import './LoginButtons.css';


class LoginButtons extends Component {

    render = () => (
        <div className="buttonBg">
            <div className="buttonWrapper">
                <Button.Group vertical>
                    <Button className="loginButton" size='huge'>Physician</Button>
                    <Button className="loginButton" size='huge'>Pharmachist</Button>
                    <Button className="loginButton" size='huge'>Patient</Button>
                    <Button className="loginButton" size='huge'>PDMP Coordinator</Button>
                    <Button className="loginButton" size='huge'>Director of Health</Button>
                </Button.Group>
            </div>
        </div>
    )

};

export default LoginButtons;