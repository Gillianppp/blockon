import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Form, Input, Button, Icon,} from 'semantic-ui-react';
import 'react-widgets/dist/css/react-widgets.css';
import { DateTimePicker } from 'react-widgets';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import './PharmacyForm.css';
Moment.locale('en');
momentLocalizer();



class PharmacyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFormSubmitted: false,
            isHidden: true,
            drugName: '',
            brand:'',
            dosage:'',
            expireOn:''
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.isBlur = this.isBlur.bind(this);
    }

    onFormSubmit() {
        this.setState({ isFormSubmitted: true });
    }

    handleChange(event) {
        this.setState({ drugName: event.target.value });
      }

      isBlur() {
        this.setState({ isHidden: false });
      }

    render() {
        const { isFormSubmitted } = this.state;
        if (!isFormSubmitted) {
            return (
                <Form className="presForm">
                    <Row>
                        <Col xs={6}>
                            <Form.Field inline className="formField">
                                <label className="formLabel">Drug Name</label>
                                <Input value={this.state.drugName} onChange={this.handleChange}  onBlur={this.isBlur} className="formInput" placeholder='Drug Name' />
                            </Form.Field>
                            <Form.Field>
                            {this.state.drugName.length > 0 && !this.state.isHidden && 
                            <p className="opiText">This is an Opioid <Icon name="warning sign" /></p>
                            }
                            </Form.Field>
                        </Col>
                        <Col xs={6}>
                            <Form.Field inline className="formField">
                                <label className="formLabel">Brand</label>
                                <Input className="formInput" placeholder='Brand' />
                            </Form.Field>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Form.Field inline className="formField">
                                <label className="formLabel">Dosage</label>
                                <Input className="formInput" placeholder='Dosage' />
                            </Form.Field>
                        </Col>
                        <Col xs={6}>
                            <Form.Field inline className="formField datePicker">
                                <label className="formLabel dateLabel">Expire on</label>
                                <DateTimePicker className="formInput dateInput"
                                    time={false}
                                />
                            </Form.Field>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Form.Field inline className="formField">
                                <label className="formLabel">Pharmacy</label>
                                <p className="addressText">CVS 978 Boylston st, Boston,MA 02461</p>
                                <a href="/" className="changeLink">Change</a>
                            </Form.Field>
                        </Col>
                    </Row>
                    <Button onClick={this.onFormSubmit} className="submitBtn">Submit</Button>
                </Form>
            );
        }

        return <div className="successMessage">Thank you, new prescription is submitted.</div>
    }
};

export default PharmacyForm;