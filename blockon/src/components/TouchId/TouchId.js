import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from 'semantic-ui-react';
import docBg from '../../assets/images/mount1.jpg';
import pharmaBg from '../../assets/images/pharma-auth.jpg';
import patBg from '../../assets/images/patient-auth.jpg';
import headerLogo from '../../assets/images/CryptScrypt-white.png';
import './TouchId.css';


class TouchId extends Component {

    constructor (props) {
        super(props);
        this.redirect = this.redirect.bind(this);
    }
    
    redirect() {
        const { coreUserType, userType } = this.props.match.params;
        let path = '';
        switch(userType) {
            case 'physician':
                path = '/auth/physician/patient';
                break;
            case 'patient':
                path = `/dashboard/${coreUserType}`;
                break;
            case 'pharmacist':
                path = '/auth/pharmacist/patient';
                break;
            default:
                path = '/dashboard';
        }
        this.props.history.push(path);
    }

    render() {
        const {coreUserType, userType} = this.props.match.params;
        let bgPath = '';
        switch(userType) {
            case 'physician':
             bgPath = docBg;
                break;
            case 'patient':
            bgPath = patBg;
                break;
            case 'pharmacist':
            bgPath = pharmaBg;
                break;
            default:
                bgPath = docBg;
            }
        return(
            <div>
            <div className="touchBg" style={ { backgroundImage: `url(${bgPath})` } }></div>
            <Image src={headerLogo} alt="logo" className="loginLogo"/>
            <div className="touchWrapper">
            { coreUserType &&
                <h3 className="titleOne">Welcome&nbsp;&nbsp;<span className="user-type">{coreUserType}, Thank you for authenticating</span></h3>
            }
                <h3 className="titleOne">Hi&nbsp;&nbsp;<span className="user-type">{userType}</span></h3>
                <h1 className="titleTwo">Login</h1>
                <div className="iconWrapper" onClick={this.redirect}>
                    <FontAwesomeIcon icon="fingerprint" className="touchIcon" />
                    <div>
                        <span className="touchTitle">Touch ID</span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
};

export default TouchId;