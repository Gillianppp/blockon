import React, { Component } from 'react';
import { Label, Table, Button, Popup } from 'semantic-ui-react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import './PatientPharmaTable.css';

const Dispense = (patient) => {
  const { Status, onClick, id } = patient;
  if (Status === "Active") {
    return <Button onClick={() => onClick(id)} className="dispBtn">Dispense</Button>
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
    const sortedData = patientData.sort((a, b) => b.CreateDate.localeCompare(a.CreateDate));
    return (
      <Table singleLine className="patientTable">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Prescription Name</Table.HeaderCell>
            <Table.HeaderCell>Controlled Substance</Table.HeaderCell>
            <Table.HeaderCell>Schedule</Table.HeaderCell>
            <Table.HeaderCell>Prescription Date</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Dosage</Table.HeaderCell>
            <Table.HeaderCell>Brand</Table.HeaderCell>
            <Table.HeaderCell>Last Dispense Date</Table.HeaderCell>
            <Table.HeaderCell>Available Refils</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            sortedData.map((patient, index) => (
              <Table.Row key={uuid()}>
                <Table.Cell>{patient.Name}</Table.Cell>
                <Table.Cell>{`${patient.ControlledSubstance ? 'Yes' : 'No'}`}</Table.Cell>
                <Table.Cell>{patient.Schedule}</Table.Cell>
                <Table.Cell>{patient.CreateDate}</Table.Cell>
                <Table.Cell><Label color={`${patient.Status === "Active" ? 'green' : 'red'}`}>{`${patient.Status === "Active" ? 'Active' : 'Expired'}`}</Label></Table.Cell>
                <Table.Cell>{patient.Dosage}</Table.Cell>
                <Table.Cell>{patient.Brand}</Table.Cell>
                <Table.Cell>{patient.LastDispenseDate}</Table.Cell>
                <Table.Cell>{patient.NoOfRefills}</Table.Cell>
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
    Status: PropTypes.string.isRequired,
    ControlledSubstance: PropTypes.bool.isRequired,
    Dosage: PropTypes.string.isRequired,
    LastDispenseDate: PropTypes.string.isRequired,
    NoOfRefills: PropTypes.string.isRequired,
    Schedule: PropTypes.string.isRequired,
    updateNumberOfRefills: PropTypes.func
  })),

};

PatientPharmaTable.defaultProps = {
  updateNumberOfRefills: () => { },
  patientData: []
};


export default PatientPharmaTable;
