import React from 'react';
import { Image } from 'semantic-ui-react';
import './LoginOne.css';
import firstScreenImg from '../../assets/images/people.jpg';


const LoginOne = () => (
    <Image className="bgImage" src={firstScreenImg} alt="img" />
  );

export default LoginOne;