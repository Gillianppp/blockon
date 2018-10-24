import React, { Component } from 'react';
// import { Container } from 'semantic-ui-react';
import { Row, Col } from 'react-flexbox-grid';
import HeaderBar from '../../components/Header/Header';
import LoginButtons from '../../components/LoginButtons/LoginButtons';
import './Home.css';


class Home extends Component {

    render = () => (
        <Row>
            <Col xs={12} lg={12}>
                <HeaderBar />
                <div className="wrapperOne">
                    <LoginButtons />
                </div>
            </Col>
        </Row>
    )

};

export default Home;