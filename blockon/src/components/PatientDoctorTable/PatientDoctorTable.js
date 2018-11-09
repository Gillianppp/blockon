import React, { Component } from 'react';
import { Label, Table } from 'semantic-ui-react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import './PatientDoctorTable.css';

class PatientDoctorTable extends Component {
  render() {
    const { patientData } = this.props;
    const sortedData = patientData.sort((a, b) => b.CreateDate.localeCompare(a.CreateDate));
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
                 sortedData.map((patient, index) => (
                    <Table.Row key={uuid()}>
                        <Table.Cell>{patient.Name}</Table.Cell>
                        <Table.Cell>{patient.Brand}</Table.Cell>
                        <Table.Cell>{patient.Schedule}</Table.Cell>
                        <Table.Cell>{patient.CreateDate}</Table.Cell>
                        <Table.Cell><Label color={`${Date.parse(patient.ExpireDate) > new Date() ? 'green' : 'red'}`}>{`${Date.parse(patient.ExpireDate) > new Date()  ? 'Active' : 'Expired'}`}</Label></Table.Cell>
                        <Table.Cell>{patient.ControlledSubstance}</Table.Cell>
                        <Table.Cell>{patient.Dosage}</Table.Cell>
                        <Table.Cell>{patient.LastDispenseDate}</Table.Cell>
                        <Table.Cell>{patient.NumberOfRefills}</Table.Cell>
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
      ExpireDate: PropTypes.string.isRequired,
      ControlledSubstance: PropTypes.string.isRequired,
      Dosage: PropTypes.string.isRequired,
      LastDispenseDate: PropTypes.string.isRequired,
      NumberOfRefills: PropTypes.string.isRequired,
      Schedule: PropTypes.string.isRequired,
    })),

  };

  PatientDoctorTable.defaultProps = {
    patientData: []
  };


export default PatientDoctorTable;
