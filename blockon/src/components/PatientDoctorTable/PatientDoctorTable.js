import React, { Component } from 'react';
import { Label, Table } from 'semantic-ui-react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import './PatientDoctorTable.css';

class PatientDoctorTable extends Component {
  render() {
    const { patientData } = this.props;
    return (
        <Table singleLine className="patientTable">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Prescription Name</Table.HeaderCell>
            <Table.HeaderCell>Brand</Table.HeaderCell>
            <Table.HeaderCell>Schedule</Table.HeaderCell>
            <Table.HeaderCell>Prescription Date</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Controlled Substance</Table.HeaderCell>
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
                        <Table.Cell>{patient.Schedule}</Table.Cell>
                        <Table.Cell>{patient.CreateDate}</Table.Cell>
                        <Table.Cell><Label color={`${patient.Status === "Active" ? 'green' : 'red'}`}>{`${patient.Status === "Active" ? 'Active' : 'Expired'}`}</Label></Table.Cell>
                        <Table.Cell>{`${patient.ControlledSubstance ? 'Yes' : 'No'}`}</Table.Cell>
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
      ControlledSubstance: PropTypes.bool.isRequired,
      Dosage: PropTypes.string.isRequired,
      LastDispenseDate: PropTypes.string.isRequired,
      NoOfRefills: PropTypes.string.isRequired,
      Schedule: PropTypes.string.isRequired,
    })),

  };

  PatientDoctorTable.defaultProps = {
    patientData: []
  };


export default PatientDoctorTable;
