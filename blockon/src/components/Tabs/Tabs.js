import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import TextBlock from '../../components/TextBlock/TextBlock';
import PharmacyForm from '../../components/PharmacyForm/PharmacyForm';
import './Tabs.css';



class Tabs extends Component {
    
    TabOne = () => {
        return (
            <Tab.Pane className="tabOne">
                <PharmacyForm />
            </Tab.Pane>
        );
    
    };

    TabTwo = () => {
        const userType = this.props.match.params.usertype;
        return (
            <Tab.Pane className="tabTwo">
                <TextBlock 
                    onRiskMeterChange={this.props.onRiskMeterChange}
                    userType={userType}/>
            </Tab.Pane>
        );
    
    };

    render() {
        return(
            <div>
            <Tab menu={{ secondary: true, pointing: true }}
              panes={[
                { menuItem: 'Submit Patient Prescription', render: () => this.TabOne() },
                { menuItem: 'Report Patient Status', render: () => this.TabTwo() }
              ]}
            />
          </div>
        );
    }
  };

  export default Tabs;