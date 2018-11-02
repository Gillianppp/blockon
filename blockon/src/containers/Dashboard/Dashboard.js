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
            risk: 0,
            patientData: [{
                Name: 'Hydrocodane',
                CreateDate: '10/15/2015',
                Status: "Active",
                ControlledSubstance:false,
                Opioid: false,
                Dosage: '50mg',
                LastDispenseDate: '10/15/2015',
                NoOfRefills: '2',
                Phamacy:"CVS 978 Boylston st, Boston,MA",
                id: 1000
              },
              {
                Name: 'Simvastatin',
                CreateDate: '10/26/2015',
                Status: "Active",
                ControlledSubstance:false,
                Opioid: true,
                Dosage: '50mg',
                LastDispenseDate: '10/15/2015',
                NoOfRefills: '0',
                Phamacy:"CVS 978 Boylston st, Boston,MA",
                id: 1001
              },
              {
                Name: 'Lipitor',
                CreateDate: '10/20/2015',
                Status: "Expired",
                ControlledSubstance:true,
                Opioid: true,
                Dosage: '50mg',
                LastDispenseDate: '10/15/2015',
                NoOfRefills: '0',
                Phamacy:"CVS 978 Boylston st, Boston,MA",
                id: 1002
              },
              {
                Name: 'Levothyroxin',
                CreateDate: '10/20/2015',
                Status: "Expired",
                ControlledSubstance:false,
                Opioid: false,
                Dosage: '50mg',
                LastDispenseDate: '10/15/2015',
                NoOfRefills: '6',
                Phamacy:"CVS 978 Boylston st, Boston,MA",
                id: 1003
              },
              {
                Name: 'Lisinopril',
                CreateDate: '10/20/2015',
                Status: "Expired",
                ControlledSubstance:false,
                Opioid: false,
                Dosage: '50mg',
                LastDispenseDate: '10/15/2015',
                NoOfRefills: '6',
                Phamacy:"CVS 978 Boylston st, Boston,MA",
                id: 1004
              }]
        }
        this.updateNumberOfRefills = this.updateNumberOfRefills.bind(this);
        this.onRiskMeterChange = this.onRiskMeterChange.bind(this);
    }
    
    onRiskMeterChange (risk) {
        this.setState({risk})
    }

    updateNumberOfRefills (id) {
        const patientData = [...this.state.patientData];
        patientData.forEach(med => {
            if(med.id === id) {
                med.NoOfRefills = med.NoOfRefills - 1;
                med.Status = "Expired";
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
                                <RiskMeter value={this.state.risk}/>
                            </Col>
                            <Col xs={12} lg={6} className="otherSection">
                            { userType === 'pharmacist' &&
                                <TextBlock
                                    onRiskMeterChange={this.onRiskMeterChange} 
                                    userType={userType}/>
                            }
                            { userType === 'physician' &&
                                <Tabs 
                                    {...this.props}
                                    onRiskMeterChange={this.onRiskMeterChange}

                                />
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
                                <PatientDoctorTable patientData={this.state.patientData}/>
                            }
                                
                            </Col>
                        </Row>
                    </div>
                </div>

            );

    }
};

export default Dashboard;