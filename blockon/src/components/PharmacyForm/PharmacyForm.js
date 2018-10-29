import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { DateInput } from 'semantic-ui-calendar-react';
import { Form, Input } from 'semantic-ui-react';
import './PharmacyForm.css';


class PharmacyForm extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          date: '',
          time: '',
          dateTime: '',
          datesRange: ''
        };
      }
     
      handleChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value });
        }
      }
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
                        <DateInput name="date"
          placeholder="Date"
          value={this.state.date}
          iconPosition="left"
          onChange={this.handleChange}/>
                        </Form.Field>
                    </Col>
                </Row>
            </Form>


        );
    }
};

export default PharmacyForm;