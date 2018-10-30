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
                        <Table.Cell>{patient.name}</Table.Cell>
                        <Table.Cell>{patient.presDate}</Table.Cell>
                        <Table.Cell><Label color={`${patient.status === true ? 'green' : 'red'}`}>{`${patient.status === true ? 'Active' : 'Expired'}`}</Label></Table.Cell>
                        <Table.Cell>{patient.opioid}</Table.Cell>
                        <Table.Cell>{patient.dosage}</Table.Cell>
                        <Table.Cell>{patient.lastDate}</Table.Cell>
                        <Table.Cell>{patient.noRefil}</Table.Cell>
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
      name: PropTypes.string.isRequired,
      presDate: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired,
      opioid: PropTypes.string.isRequired,
      dosage: PropTypes.string.isRequired,
      lastDate: PropTypes.string.isRequired,
      noRefil: PropTypes.string.isRequired,
    })),

  };

  PatientDoctorTable.defaultProps = {
    patientData: [
      {
        name: 'Hydrocodane',
        presDate: '10/15/2015',
        status: true,
        opioid: 'yes',
        dosage: '50mg',
        lastDate: '10/15/2015',
        noRefil: '2'
      },
      {
        name: 'Simvastatin',
        presDate: '10/26/2015',
        status: true,
        opioid: 'yes',
        dosage: '50mg',
        lastDate: '10/15/2015',
        noRefil: '0'
      },
      {
        name: 'Lipitor',
        presDate: '10/20/2015',
        status: false,
        opioid: 'yes',
        dosage: '50mg',
        lastDate: '10/15/2015',
        noRefil: '6'
      },
      {
        name: 'Levothyroxin',
        presDate: '10/20/2015',
        status: false,
        opioid: 'no',
        dosage: '50mg',
        lastDate: '10/15/2015',
        noRefil: '6'
      },
      {
        name: 'Lisinopril',
        presDate: '10/20/2015',
        status: false,
        opioid: 'no',
        dosage: '50mg',
        lastDate: '10/15/2015',
        noRefil: '6'
      },
    ]
  };


export default PatientDoctorTable;
