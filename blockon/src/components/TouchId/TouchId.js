import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TouchId.css';


class TouchId extends Component {

    render = () => (
        <div className="touchBg">
            <div className="touchWrapper">
                <h3 className="titleOne">Crypt Scrypt</h3>
                <h1 className="titleTwo">Login</h1>
                <div className="iconWrapper">
                    <FontAwesomeIcon icon="fingerprint" className="touchIcon" />
                    <div>
                    <span className="touchTitle">Touch ID</span>
                    </div>
                </div>
            </div>
        </div>

    )

};

export default TouchId;