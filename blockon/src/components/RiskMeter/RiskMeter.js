import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
// import minimalImg from '../../assets/images/minimal-meter.png';
import ReactSpeedometer from "react-d3-speedometer";
import './RiskMeter.css';

class RiskMeter extends Component {
  render() {
    return (
      <div>
        <h1 className="imgTitle">Patient's Risk Status:</h1>
        <ReactSpeedometer maxValue={500}
    value={473}
    needleColor="red"
    startColor="skyblue"
    segments={5}
    endColor="teal"/>
     <Label className="meterLabel">
        LOW
      </Label>
      </div>
        
    );
  }
}


export default RiskMeter;
