import React, { Component } from 'react';
import { Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/images/CryptScrypt-white.png';
import './LoginButtons.css';


class LoginButtons extends Component {
    callApi(){
        // Github fetch library : https://github.com/github/fetch
        // Call the API page
        fetch('http://localhost:3001/queryallcars')
        .then((result) => {
          // Get the result
          // If we want text, call result.text()
          return result.json();
        }).then((jsonResult) => {
          // Do something with the result
          console.log(jsonResult);
        })
      }

    postPrescription(){
        fetch('http://localhost:3001/PostPrescription/114',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                Name: 'Drug1',
                CreateDate: '11/03/2018',
                Status:'Active',
                ControlledSubstance:'False',
                Schedule:'Schedule II',
                Dosage:'20mg',
                Brand:'Generic',
                LastDispenseDate:'N/A',
                NumberOfRefills:'3',
                Phamacy:'CVS in Boston'

              })
            
        })
        .then((response)=>response.text())
        .then((responseText)=>{
            console.log(responseText);
        })
        .catch((error)=>{
            console.error(error);
        });

    }
      


    

    render = () => (
        <div>
            <div className="buttonBg"></div>
            <Image src={headerLogo} alt="logo" className="loginLogo"/>
            <div className="buttonWrapper">
                <Button.Group vertical>

                    <Button onClick={() => this.postPrescription()}>Click here to POST API</Button>
                    <Button onClick={() => this.callApi()}>Click here to call API</Button>
                    <Link className="loginButton"  to="/auth/physician"><Button size='huge'>Physician</Button></Link>
                    <Link className="loginButton"  to="/auth/pharmacist"><Button size='huge'>Pharmacist</Button></Link>
                    <Link className="loginButton" to="/auth/patient"><Button size='huge'>Patient</Button></Link>
                    <Link className="loginButton" to="/auth/pdmp"><Button size='huge'>PDMP Coordinator</Button></Link>
                    <Link className="loginButton" to="/auth/director"><Button size='huge'>Director of Health</Button></Link>

                </Button.Group>
            </div>
        </div>
    )

};

export default LoginButtons;