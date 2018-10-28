import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './LoginButtons.css';


class LoginButtons extends Component {

    render = () => (
        <div>
            <div className="buttonBg"></div>
            <div className="buttonWrapper">
                <Button.Group vertical>
                    <Link className="loginButton"  to="/auth/Physician"><Button size='huge'>Physician</Button></Link>
                    <Link className="loginButton"  to="/auth/Pharmacist"><Button size='huge'>Pharmacist</Button></Link>
                    <Link className="loginButton" to="/auth/Patient"><Button size='huge'>Patient</Button></Link>
                    <Link className="loginButton" to="/auth/Pdmp"><Button size='huge'>PDMP Coordinator</Button></Link>
                    <Link className="loginButton" to="/auth/Director"><Button size='huge'>Director of Health</Button></Link>
                </Button.Group>
            </div>
        </div>
    )

};

export default LoginButtons;