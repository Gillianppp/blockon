import React, { Component } from 'react';
import { Label, Table, Button, Popup } from 'semantic-ui-react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import './PatientPharmaTable.css';

const Dispense = (patient) => {
  const { status, onClick, id } = patient;
  if (status) {
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
    return (
      <Table singleLine className="patientTable">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Prescription Name</Table.HeaderCell>
            <Table.HeaderCell>Prescription Date</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Opioid</Table.HeaderCell>
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
                <Table.Cell>{patient.name}</Table.Cell>
                <Table.Cell>{patient.presDate}</Table.Cell>
                <Table.Cell>
                  <Label color={`${patient.status === true ? 'green' : 'red'}`}>
                    {`${patient.status === true ? 'Active' : 'Expired'}`}
                  </Label>
                </Table.Cell>
                <Table.Cell>{patient.opioid}</Table.Cell>
                <Table.Cell>{patient.dosage}</Table.Cell>
                <Table.Cell>{patient.lastDate}</Table.Cell>
                <Table.Cell>{patient.noRefil}</Table.Cell>
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
    name: PropTypes.string.isRequired,
    presDate: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    opioid: PropTypes.string.isRequired,
    dosage: PropTypes.string.isRequired,
    lastDate: PropTypes.string.isRequired,
    noRefil: PropTypes.string.isRequired,
    updateNumberOfRefills: PropTypes.func
  })),

};

PatientPharmaTable.defaultProps = {
  updateNumberOfRefills: () => { },
  patientData: []
};


export default PatientPharmaTable;
