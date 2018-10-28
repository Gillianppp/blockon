import React, { Component } from 'react';
// import { Container } from 'semantic-ui-react';
import { Row, Col } from 'react-flexbox-grid';
import HeaderBar from '../../components/Header/Header';
import TouchId from '../../components/TouchId/TouchId';
import './Auth.css';


class Auth extends Component {
    render() {
        return(
            <Row>
            <Col xs={12} lg={12}>
                <HeaderBar />
                <TouchId {...this.props}/>
            </Col>
        </Row>
        );

    }
};

export default Auth;
