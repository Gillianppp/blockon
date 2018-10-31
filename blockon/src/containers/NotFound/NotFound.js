import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Image } from 'semantic-ui-react';
import logo from '../../assets/images/CryptScrypt.png';
import './NotFound.css';


class NotFound extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} lg={12}>
                    <Image className ="logo" src={logo} alt="logo" />
                    <Row>
                    <h1 className="errorText">Uh, Oh that page couldn't be found. Please return to <a href="/">Home</a></h1>
                    </Row>
                    
                </Col>
            </Row>
        );

    }
};

export default NotFound;
