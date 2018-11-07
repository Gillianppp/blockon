import React, { Component } from 'react';
import { Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/images/CryptScrypt-white.png';
import './LoginButtons.css';


class LoginButtons extends Component {
    render = () => (
        <div>
            <div className="buttonBg"></div>
            <Image src={headerLogo} alt="logo" className="loginLogo"/>
            <div className="buttonWrapper">
                <Button.Group vertical>
                    <Link className="loginButton"  to="/auth/physician"><Button size='huge'>Physician</Button></Link>
                    <Link className="loginButton"  to="/auth/pharmacist"><Button size='huge'>Pharmacist</Button></Link>
                    <Link className="loginButton" to="/auth/patient"><Button size='huge'>Patient</Button></Link>
                    <Link className="loginButton" to="/auth/pdmp"><Button size='huge'>PDMP Coordinator</Button></Link>
                    <Link className="loginButton" to="/auth/director"><Button size='huge'>Director of Health</Button></Link>

                </Button.Group>
            </div>
        </div>
    )

};

export default LoginButtons;