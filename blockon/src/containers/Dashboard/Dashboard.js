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

    componentDidMount(){
        console.log("try to fetch api");
        fetch('http://localhost:3001/queryallcars')
        .then(res => res.json())
        .then(
            (data) => {
            console.log("this result is", data);
            var allDrugs = [];
            for(var i =0;i<data.length;i++){
                if(data[i].Record.Id == 111){
                    allDrugs.push(data[i].Record.Prescriptions);
                }
            }

            this.setState({json:{
                Id:111,
                RiskLevel:"2",
                Prescriptions:allDrugs
            }});
          console.log(this.state.json);
        })
      }

    constructor (props) {
        super(props);
        this.state = {
            json:[]
        }
        this.updateNumberOfRefills = this.updateNumberOfRefills.bind(this);
        this.onRiskMeterChange = this.onRiskMeterChange.bind(this);      
    }
    
    onRiskMeterChange (risk) {
        this.setState({risk})
    }
    
    updateNumberOfRefills (name) {
        const patientData = [...this.state.Prescriptions];
        var currentDate = new Date();
        var date = currentDate.getDate();
        var month = currentDate.getMonth(); 
        var year = currentDate.getFullYear();
        patientData.forEach(med => {
            console.log(name);
            if(med.Name === name) {
                console.log("here",med);
                med.NumberOfRefills = (parseInt(med.NumberOfRefills) - 1).toString();
                med.ExpireDate = (new Date()).toString();
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
                                    patientData={this.state.json.Prescriptions}/>
                            }
                            { userType === 'physician' &&
                                <PatientDoctorTable patientData={this.state.json.Prescriptions}/>
                            }
                                
                            </Col>
                        </Row>
                    </div>
                </div>

            );

    }
};

export default Dashboard;