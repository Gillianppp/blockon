import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import HeaderBar from '../../components/Header/Header';
import PharmacyForm from '../../components/PharmacyForm/PharmacyForm';
import RiskMeter from '../../components/RiskMeter/RiskMeter';
import TextBlock from '../../components/TextBlock/TextBlock';
import PatientPharmaTable from '../../components/PatientPharmaTable/PatientPharmaTable';
import PatientDoctorTable from '../../components/PatientDoctorTable/PatientDoctorTable';
import './Dashboard.css';


class Dashboard extends Component {
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
                            { userType === 'Pharmacist' &&
                                <TextBlock />
                            }
                            { userType === 'Physician' &&
                                <PharmacyForm />
                            }
                               
                            </Col>
                        </Row>
                        <Row className="secondSection">
                            <Col xs={12} lg={12} className="tableSection">
                            { userType === 'Pharmacist' &&
                                <PatientPharmaTable />
                            }
                            { userType === 'Physician' &&
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