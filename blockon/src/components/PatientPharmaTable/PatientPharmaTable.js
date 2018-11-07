import React, { Component } from 'react';
import { Label, Table, Button, Popup } from 'semantic-ui-react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import './PatientPharmaTable.css';

const Dispense = (patient) => {
  const { ExpireDate, onClick, Name } = patient;
  if (Date.parse(patient.ExpireDate) > new Date()) {
    return <Button onClick={() => onClick(Name)} className="dispBtn">Dispense</Button>
  }

  return (
    <Popup className="popUp"
      trigger={<span>N/A</span>}
      content='You will need to go back to the doctor to get a second refill'
    />
  );
};

class PatientPharmaTable extends Component {


  render() {
    const { patientData, updateNumberOfRefills } = this.props;
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
            <Table.HeaderCell>Action</Table.HeaderCell>
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
                <Table.Cell><Label color={`${Date.parse(patient.ExpireDate) > new Date() ? 'green' : 'red'}`}>{`${Date.parse(patient.ExpireDate) > new Date()  ? 'Active' : 'Expired'}`}</Label></Table.Cell>
                <Table.Cell>{patient.ControlledSubstance}</Table.Cell>
                <Table.Cell>{patient.Dosage}</Table.Cell>
                <Table.Cell>{patient.LastDispenseDate}</Table.Cell>
                <Table.Cell>{patient.NumberOfRefills}</Table.Cell>
                <Table.Cell>
                  <Dispense {...patient} onClick={updateNumberOfRefills} />
                </Table.Cell>
              </Table.Row>
            ))
          }

        </Table.Body>
      </Table>
    );
  }
}

PatientPharmaTable.propTypes = {
  patientData: PropTypes.arrayOf(PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Brand: PropTypes.string.isRequired,
    CreateDate: PropTypes.string.isRequired,
    ExpireDate: PropTypes.string.isRequired,
    ControlledSubstance: PropTypes.bool.isRequired,
    Dosage: PropTypes.string.isRequired,
    LastDispenseDate: PropTypes.string.isRequired,
    NumberOfRefills: PropTypes.string.isRequired,
    Schedule: PropTypes.string.isRequired,
    updateNumberOfRefills: PropTypes.func
  })),

};

PatientPharmaTable.defaultProps = {
  updateNumberOfRefills: () => { },
  patientData: []
};


export default PatientPharmaTable;
