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
            expireOn:new Date(),
            numberOfRefill:'',
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.brandChange = this.brandChange.bind(this);
        this.dosageChange = this.dosageChange.bind(this);
        this.refillChange = this.refillChange.bind(this);

        this.isBlur = this.isBlur.bind(this);
        this.postPrescription = this.postPrescription.bind(this);
    }
    postPrescription(name, dosage, brand,expireOn,numberOfRefill){
       // localStorage.setItem('key',40);
        var key = localStorage.getItem('key');
        localStorage.setItem('key',parseInt(key) + 1);
        this.keyNumber = this.keyNumber + 1;
        fetch('http://localhost:3001/PostPrescription/111s',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "Name": name,
                "CreateDate": Moment().format('L'),
                "ExpireDate":expireOn,
                "ControlledSubstance":"False",
                "Schedule":"Schedule II",
                "Dosage":dosage,
                "Brand":brand,
                "LastDispenseDate":"N/A",
               "NumberOfRefills":numberOfRefill,
                "Phamacy":"CVS 978 Boylston st, Boston,MA 02461",
                "Key":"DRUG"+localStorage.getItem('key'),
              })
            
        })
        .then((response)=>response.text())
        .then((responseText)=>{
            console.log(responseText);
           console.log("local storage",localStorage.getItem('key'));
            //console.log(this.keyNumber);
        })
        .catch((error)=>{
            console.error(error);
        });

    }

    onFormSubmit() {
        console.log(this.state.drugName);
        console.log(this.state.brand);
        console.log(this.state.dosage);
        console.log(Moment(this.state.expireOn).format('L'));
        console.log(this.state.numberOfRefill);

        this.postPrescription(this.state.drugName, this.state.dosage, this.state.brand, Moment(this.state.expireOn).format('L'), this.state.numberOfRefill);

        this.setState({ isFormSubmitted: true });
    }

    handleChange(event) {
        this.setState({ drugName: event.target.value });
      }
    
    brandChange(event){
        this.setState({brand:event.target.value});
    }
    dosageChange(event){
        this.setState({dosage:event.target.value});
    }
    refillChange(event){
        this.setState({numberOfRefill:event.target.value});
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
                                <Input value={this.state.brand}    className="formInput" onChange={this.brandChange} placeholder='Brand' />
                            </Form.Field>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Form.Field inline className="formField">
                                <label className="formLabel">Dosage</label>
                                <Input  value={this.state.dosage} onChange={this.dosageChange} className="formInput" placeholder='Dosage' />
                            </Form.Field>
                        </Col>
                        <Col xs={6}>
                            <Form.Field inline className="formField datePicker">
                                <label className="formLabel dateLabel">Expire on</label>
                                <DateTimePicker value ={this.state.expireOn} onChange={value => this.setState({ expireOn: value })} className="formInput dateInput"
                                    time={false}
                                />
                            </Form.Field>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Form.Field inline className="formField">
                                <label className="formLabel">Number of Refills</label>
                                <Input  value={this.state.numberOfRefill} onChange={this.refillChange} className="formInput" placeholder='Number of Refills' />
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


[{"Key":"DRUG0", "Record":{"Id":"111","Prescriptions":[{"Brand":"Generic","ControlledSubstance":"Yes","CreateDate":"08/01/2018","Dosage":"50","ExpireDate":"01/20/2019","LastDispenseDate":"08/03/2018","Name":"Hydrocodone","NumberOfRefills":"1","Phamacy":"BostonMA","Schedule":"Schedule II"}],"RiskLevel":"2"}},{"Key":"DRUG1", "Record":{"Id":"111","Prescriptions":[{"Brand":"Generic","ControlledSubstance":"Yes","CreateDate":"07/11/2018","Dosage":"50","ExpireDate":"12/20/2018","LastDispenseDate":"08/03/2018","Name":"Simvastatin","NumberOfRefills":"1","Phamacy":"BostonMA","Schedule":"Schedule III"}],"RiskLevel":"2"}},{"Key":"DRUG14", "Record":{"Id":"113","Prescriptions":[{"Brand":"Generic","ControlledSubstance":"No","CreateDate":"01/02/2018","Dosage":"50","ExpireDate":"Active","LastDispenseDate":"08/03/2018","Name":"Xantix","NumberOfRefills":"1","Phamacy":"BostonMA","Schedule":"Yes"}],"RiskLevel":"3"}},{"Key":"DRUG33", "Record":{"Id":"111s","Prescriptions":[{"Brand":"Gernic","ControlledSubstance":"False","CreateDate":"11/07/2018","Dosage":"30mg","ExpireDate":"11/07/2018","LastDispenseDate":"N/A","Name":"DRUG33","NumberOfRefills":"3","Phamacy":"CVS 978 Boylston st, Boston,MA 02461","Schedule":"Schedule II"}],"RiskLevel":"4"}},{"Key":"DRUG40", "Record":{"Id":"111s","Prescriptions":[{"Brand":"gdfg","ControlledSubstance":"False","CreateDate":"11/07/2018","Dosage":"45","ExpireDate":"11/07/2018","LastDispenseDate":"N/A","Name":"gdfgdf","NumberOfRefills":"34","Phamacy":"CVS 978 Boylston st, Boston,MA 02461","Schedule":"Schedule II"}],"RiskLevel":"4"}},{"Key":"DRUG401", "Record":{"Id":"111s","Prescriptions":[{"Brand":"gfdg","ControlledSubstance":"False","CreateDate":"11/07/2018","Dosage":"gdfg","ExpireDate":"11/07/2018","LastDispenseDate":"N/A","Name":"gdfg","NumberOfRefills":"","Phamacy":"CVS 978 Boylston st, Boston,MA 02461","Schedule":"Schedule II"}],"RiskLevel":"4"}},{"Key":"DRUG4011", "Record":{"Id":"111s","Prescriptions":[{"Brand":"hgfh","ControlledSubstance":"False","CreateDate":"11/07/2018","Dosage":"fgd","ExpireDate":"11/07/2018","LastDispenseDate":"N/A","Name":"hfgh","NumberOfRefills":"gdfg","Phamacy":"CVS 978 Boylston st, Boston,MA 02461","Schedule":"Schedule II"}],"RiskLevel":"4"}},{"Key":"DRUG4012", "Record":{"Id":"111s","Prescriptions":[{"Brand":"gdfg","ControlledSubstance":"False","CreateDate":"11/07/2018","Dosage":"45","ExpireDate":"11/07/2018","LastDispenseDate":"N/A","Name":"gdfg","NumberOfRefills":"3","Phamacy":"CVS 978 Boylston st, Boston,MA 02461","Schedule":"Schedule II"}],"RiskLevel":"4"}},{"Key":"DRUG41", "Record":{"Id":"111s","Prescriptions":[{"Brand":"fsd","ControlledSubstance":"False","CreateDate":"11/07/2018","Dosage":"32","ExpireDate":"11/07/2018","LastDispenseDate":"N/A","Name":"fsd","NumberOfRefills":"3","Phamacy":"CVS 978 Boylston st, Boston,MA 02461","Schedule":"Schedule II"}],"RiskLevel":"4"}},{"Key":"DRUG42", "Record":{"Id":"111s","Prescriptions":[{"Brand":"d","ControlledSubstance":"False","CreateDate":"11/07/2018","Dosage":"34","ExpireDate":"11/07/2018","LastDispenseDate":"N/A","Name":"df","NumberOfRefills":"34","Phamacy":"CVS 978 Boylston st, Boston,MA 02461","Schedule":"Schedule II"}],"RiskLevel":"4"}}]