import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import ReactSpeedometer from "react-d3-speedometer";
import './RiskMeter.css';


class RiskMeter extends Component {

  getMeterLabel (value) {
    if(value === 100) {
      return 'MINIMAL'
    } 
    if(value === 200) {
      return 'LOW'
    }
    if(value === 300) {
      return 'MODERATE'
    }
    if(value === 400) {
      return 'HIGH'
    }
    if(value === 500) {
      return 'INTENSE'
    }else {
      return 'NO RISK'
    }
  }
   
  render() {
    const {value} = this.props;
    return (
      <div>
        <h1 className="imgTitle">Patient's Risk Status:</h1>
        <ReactSpeedometer maxValue={500}
          value={value}
          needleTransitionDuration={1500}
          needleColor="red"
          startColor="skyblue"
          segments={5}
          endColor="teal" />
        <Label className="meterLabel">
         {this.getMeterLabel(value)}
      </Label>
      </div>

    );
  }
}


export default RiskMeter;
