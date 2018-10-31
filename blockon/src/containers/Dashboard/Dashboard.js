import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import HeaderBar from '../../components/Header/Header';
import RiskMeter from '../../components/RiskMeter/RiskMeter';
import TextBlock from '../../components/TextBlock/TextBlock';
import Tabs from '../../components/Tabs/Tabs';
import PatientPharmaTable from '../../components/PatientPharmaTable/PatientPharmaTable';
import PatientDoctorTable from '../../components/PatientDoctorTable/PatientDoctorTable';
import './Dashboard.css';

class Dashboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            patientData: [{
                name: 'Hydrocodane',
                presDate: '10/15/2015',
                status: true,
                opioid: 'yes',
                dosage: '50mg',
                lastDate: '10/15/2015',
                noRefil: '2',
                id: 1000
              },
              {
                name: 'Simvastatin',
                presDate: '10/26/2015',
                status: true,
                opioid: 'yes',
                dosage: '50mg',
                lastDate: '10/15/2015',
                noRefil: '0',
                id: 1001
              },
              {
                name: 'Lipitor',
                presDate: '10/20/2015',
                status: false,
                opioid: 'yes',
                dosage: '50mg',
                lastDate: '10/15/2015',
                noRefil: '6',
                id: 1002
              },
              {
                name: 'Levothyroxin',
                presDate: '10/20/2015',
                status: false,
                opioid: 'no',
                dosage: '50mg',
                lastDate: '10/15/2015',
                noRefil: '6',
                id: 1003
              },
              {
                name: 'Lisinopril',
                presDate: '10/20/2015',
                status: false,
                opioid: 'no',
                dosage: '50mg',
                lastDate: '10/15/2015',
                noRefil: '6',
                id: 1004
              }]
        }
        this.updateNumberOfRefills = this.updateNumberOfRefills.bind(this);
    } 

    updateNumberOfRefills (id) {
        const patientData = [...this.state.patientData];
        patientData.forEach(med => {
            if(med.id === id) {
                med.noRefil = med.noRefil - 1;
                med.status = false;
            }
        })
        this.setState({patientData});
    }

    render() {
        const userType = this.props.match.params.usertype;
            return (
                <div className="dashboardWrapper">
                    <Row>
                        <Col xs={12} lg={12}>
                            <HeaderBar />
                        </Col>
                    </Row>
                    <div className="dbsecondWrapper">
                        <Row className="firstSection">
                            <Col xs={12} lg={5} className="meterSection" >
                                <RiskMeter />
                            </Col>
                            <Col xs={12} lg={6} className="otherSection">
                            { userType === 'pharmacist' &&
                                <TextBlock userType={userType}/>
                            }
                            { userType === 'physician' &&
                                <Tabs {...this.props}/>
                            }
                               
                            </Col>
                        </Row>
                        <Row className="secondSection">
                            <Col xs={12} lg={12} className="tableSection">
                            { userType === 'pharmacist' &&
                                <PatientPharmaTable 
                                    updateNumberOfRefills={this.updateNumberOfRefills}
                                    patientData={this.state.patientData}/>
                            }
                            { userType === 'physician' &&
                                <PatientDoctorTable />
                            }
                                
                            </Col>
                        </Row>
                    </div>
                </div>

            );

    }
};

export default Dashboard;