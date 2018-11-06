import React, { Component } from 'react';
import { Label, Table } from 'semantic-ui-react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import './PatientDoctorTable.css';

class PatientDoctorTable extends Component {
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

  render() {
    const { patientData } = this.props;
    return (
        <Table singleLine className="patientTable">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Prescription Name</Table.HeaderCell>
            <Table.HeaderCell>Brand</Table.HeaderCell>
            <Table.HeaderCell>Prescription Date</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Opioid</Table.HeaderCell>
            <Table.HeaderCell>Dosage</Table.HeaderCell>
            <Table.HeaderCell>Last Dispense Date</Table.HeaderCell>
            <Table.HeaderCell># of Refils</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
            {
                 patientData.map((patient, index) => (
                    <Table.Row key={uuid()}>
                        <Table.Cell>{patient.Name}</Table.Cell>
                        <Table.Cell>{patient.Brand}</Table.Cell>
                        <Table.Cell>{patient.CreateDate}</Table.Cell>
                        <Table.Cell><Label color={`${patient.Status === "Active" ? 'green' : 'red'}`}>{`${patient.Status === "Active" ? 'Active' : 'Expired'}`}</Label></Table.Cell>
                        <Table.Cell>{`${patient.Opioid ? 'Yes' : 'No'}`}</Table.Cell>
                        <Table.Cell>{patient.Dosage}</Table.Cell>
                        <Table.Cell>{patient.LastDispenseDate}</Table.Cell>
                        <Table.Cell>{patient.NoOfRefills}</Table.Cell>
                    </Table.Row>
                        ))
            }
       
        </Table.Body>
      </Table>
    );
  }
}

PatientDoctorTable.propTypes = {
    patientData: PropTypes.arrayOf(PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Brand: PropTypes.string.isRequired,
      CreateDate: PropTypes.string.isRequired,
      Status: PropTypes.string.isRequired,
      Opioid: PropTypes.bool.isRequired,
      Dosage: PropTypes.string.isRequired,
      LastDispenseDate: PropTypes.string.isRequired,
      NoOfRefills: PropTypes.string.isRequired,
    })),

  };

  PatientDoctorTable.defaultProps = {
    patientData: []
  };


export default PatientDoctorTable;
