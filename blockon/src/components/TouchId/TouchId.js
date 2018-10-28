import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TouchId.css';


class TouchId extends Component {

    constructor (props) {
        super(props);
        this.redirect = this.redirect.bind(this);
    }
    
    redirect() {
        const { usertype } = this.props.match.params;
        let path = '';
        switch(usertype) {
            case 'Physician':
                path = '/auth/Patient';
                break;
            case 'Patient':
                path = '/dashboard/Physician';
                break;
            case 'Pharmacist':
                path = '/dashboard/Pharmacist';
                break;
            default:
                path = '/dashboard';
        }
        this.props.history.push(path);
    }

    render() {
        const {usertype} = this.props.match.params;
        return(
            <div>
            <div className="touchBg"></div>
            <div className="touchWrapper">
                <h3 className="titleOne">Welcome&nbsp;&nbsp;<span className="userType">{usertype}</span></h3>
                <h1 className="titleTwo">Login</h1>
                <div className="iconWrapper" onClick={() => this.redirect()}>
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