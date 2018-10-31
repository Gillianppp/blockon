import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Form, Input, Button } from 'semantic-ui-react';
import './PharmacyForm.css';

class PharmacyForm extends Component {
    render() {
        return (
            <Form>
                <Row>
                    <Col xs={6}>
                        <Form.Field inline className="formField">
                            <label>First name</label>
                            <Input placeholder='First name' />
                        </Form.Field>
                    </Col>
                    <Col xs={6}>
                        <Form.Field inline className="formField">
                            <label>Last name</label>
                            <Input placeholder='Last name' />
                        </Form.Field>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Form.Field inline className="formField">
                            <label>Dosage</label>
                            <Input placeholder='Dosage' />
                        </Form.Field>
                    </Col>
                    <Col xs={6}>
                        <Form.Field inline className="formField">
                            <label>Date</label>
                        </Form.Field>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Field inline className="formField">
                            <label>Pharmacy</label>
                            <Input placeholder='Pharmacy' />
                        </Form.Field>
                    </Col>
                </Row>
                <Button className="submitBtn">Submit</Button>
            </Form>


        );
    }
};

export default PharmacyForm;