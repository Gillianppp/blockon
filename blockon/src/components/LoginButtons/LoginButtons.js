import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
// import { Row, Col } from 'react-flexbox-grid';
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
        fetch('http://localhost:3001/PostPrescription',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
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
        <div className="buttonBg">
            <div className="buttonWrapper">
                <Button.Group vertical>
                    <Button onClick={() => this.postPrescription()}>Click here to POST API</Button>
                    <Button onClick={() => this.callApi()}>Click here to call API</Button>
                    <Button className="loginButton" size='huge'>Physician</Button>
                    <Button className="loginButton" size='huge'>Pharmachist</Button>
                    <Button className="loginButton" size='huge'>Patient</Button>
                    <Button className="loginButton" size='huge'>PDMP Coordinator</Button>
                    <Button className="loginButton" size='huge'>Director of Health</Button>
                </Button.Group>
            </div>
        </div>
    )

};

export default LoginButtons;