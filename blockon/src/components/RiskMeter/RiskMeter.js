import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import minimalImg from '../../assets/images/minimal-meter.png';
import './RiskMeter.css';

class RiskMeter extends Component {
  render() {
    return (
      <div>
        <h1 className="imgTitle">Patient's Risk Status:</h1>
        <Image className="meterImg" src={minimalImg} alt="minimal img" />
      </div>
        
    );
  }
}


export default RiskMeter;
