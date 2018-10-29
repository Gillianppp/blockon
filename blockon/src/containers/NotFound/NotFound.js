import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import HeaderBar from '../../components/Header/Header';
import './NotFound.css';


class NotFound extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} lg={12}>
                    <HeaderBar />
                    <Row>
                    <h1 className="errorText">Uh, Oh that page couldn't be found. Please return to Home</h1>
                    </Row>
                    
                </Col>
            </Row>
        );

    }
};

export default NotFound;
