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
            RiskLevel: 0,
            Prescriptions: [{
                Name: 'Hydrocodane',
                Brand: "Generic",
                CreateDate: '10/15/2015',
                Status: "Active",
                ControlledSubstance:false,
                Dosage: '50mg',
                LastDispenseDate: '10/15/2015',
                NumberOfRefills: '2',
                Phamacy:"CVS 978 Boylston st, Boston,MA",
                Schedule:"II",
                id: 1000
              },
              {
                Name: 'Simvastatin',
                Brand: "Generic",
                CreateDate: '10/26/2015',
                Status: "Active",
                ControlledSubstance:false,
                Dosage: '50mg',
                LastDispenseDate: '10/15/2015',
                NumberOfRefills: '6',
                Phamacy:"CVS 978 Boylston st, Boston,MA",
                Schedule:"II",
                id: 1001
              },
              {
                Name: 'Lipitor',
                Brand: "Generic",
                CreateDate: '10/20/2015',
                Status: "Expired",
                ControlledSubstance:true,
                Dosage: '50mg',
                LastDispenseDate: '10/15/2015',
                NumberOfRefills: '0',
                Phamacy:"CVS 978 Boylston st, Boston,MA",
                Schedule:"II",
                id: 1002
              },
              {
                Name: 'Levothyroxin',
                Brand: "Generic",
                CreateDate: '10/20/2015',
                Status: "Expired",
                ControlledSubstance:false,

                Dosage: '50mg',
                LastDispenseDate: '10/15/2015',
                NumberOfRefills: '6',
                Phamacy:"CVS 978 Boylston st, Boston,MA",
                Schedule:"II",
                id: 1003
              },
              {
                Name: 'Lisinopril',
                Brand: "Generic",
                CreateDate: '10/20/2015',
                Status: "Expired",
                ControlledSubstance:false,

                Dosage: '50mg',
                LastDispenseDate: '10/15/2015',
                NumberOfRefills: '6',
                Phamacy:"CVS 978 Boylston st, Boston,MA",
                Schedule:"II",
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
        const patientData = [...this.state.Prescriptions];
        var currentDate = new Date();
        var date = currentDate.getDate();
        var month = currentDate.getMonth(); 
        var year = currentDate.getFullYear();
        patientData.forEach(med => {
            if(med.id === id) {
                med.NumberOfRefills = med.NumberOfRefills - 1;
                med.Status = "Expired";
                med.LastDispenseDate = month + "/" + date + "/" + year;
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
                                <RiskMeter value={this.state.RiskLevel}/>
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
                                    patientData={this.state.Prescriptions}/>
                            }
                            { userType === 'physician' &&
                                <PatientDoctorTable patientData={this.state.Prescriptions}/>
                            }
                                
                            </Col>
                        </Row>
                    </div>
                </div>

            );

    }
};

export default Dashboard;