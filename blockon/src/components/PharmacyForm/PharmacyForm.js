import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Form, Input } from 'semantic-ui-react';
import './PharmacyForm.css';

class PharmacyForm extends Component {
    render() {
        return (
            <Form>
                <Row>
                    <Col xs={12}>
                        <Form.Field inline>
                            <label>First name</label>
                            <Input placeholder='First name' />
                        </Form.Field>

                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Form.Field inline>
                            <label>Dosage</label>
                            <Input placeholder='First name' />
                        </Form.Field>
                    </Col>
                    <Col xs={6}>
                    <Form.Field inline>
                        <label>Date</label>                       
                    </Form.Field>
                    </Col>
                </Row>
            </Form>


        );
    }
};

export default PharmacyForm;