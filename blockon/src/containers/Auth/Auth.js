import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import TouchId from '../../components/TouchId/TouchId';
import './Auth.css';


class Auth extends Component {
    render() {
        return(
            <Row>
            <Col xs={12} lg={12}>
                <TouchId {...this.props}/>
            </Col>
        </Row>
        );

    }
};

export default Auth;
