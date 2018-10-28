import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import HeaderBar from '../../components/Header/Header';
// import PharmacyForm from '../../components/PharmacyForm/PharmacyForm';
import RiskMeter from '../../components/RiskMeter/RiskMeter';
import TextBlock from '../../components/TextBlock/TextBlock';
import PatientTable from '../../components/PatientTable/PatientTable';
import './Dashboard.css';


class Dashboard extends Component {
  render() {
      const userType = this.props.match.params.usertype;
      if (userType === 'Physician'){
        return(
            <div>
            <Row>
                <Col xs={12} lg={12}>
                    <HeaderBar />
                </Col>
            </Row>
            <Row className="firstSection">
                <Col xs={12} lg={5} className="meterSection" >
                    <RiskMeter />
                </Col>
                <Col xs={12} lg={6} className="otherSection">
                    <TextBlock />
                </Col>
            </Row>
            <Row className="secondSection">
                <Col xs={12} lg={12} className="tableSection">
                    <PatientTable />
                </Col>
            </Row>
            </div>
            
        );
      } else if (userType === 'pharmacist'){
        return(
            <Row>
            <Col xs={12} lg={12}>
                <HeaderBar />
                <h1> heyyyyyyy {userType}</h1>
            </Col>
        </Row>
        );
      } else {
        return(
            <Row>
            <Col xs={12} lg={12}>
                <HeaderBar />
                <h1> heyyyyyyy {userType}</h1>
            </Col>
        </Row>
        );
      }
  }
};

export default Dashboard;