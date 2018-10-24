import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
//import DashboardContainer from './containers/Dashboard/Dashboard';
import './LoginButtons.css';


class LoginButtons extends Component {

    render = () => (
        <div>
        <div className="buttonBg"></div>
            <div className="buttonWrapper">
                <Button.Group vertical>
                    <Button className="loginButton" size='huge'><Link to="/dashboard">Physician</Link></Button>
                    <Button className="loginButton" size='huge'><Link to="/dashboard">Pharmachist</Link></Button>
                    <Button className="loginButton" size='huge'><Link to="/dashboard">Patient</Link></Button>
                    <Button className="loginButton" size='huge'><Link to="/dashboard">PDMP Coordinator</Link></Button>
                    <Button className="loginButton" size='huge'><Link to="/dashboard">Director of Health</Link></Button>
                </Button.Group>
            </div>
        </div>
    )

};

export default LoginButtons;