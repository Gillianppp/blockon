import React, { Component } from 'react';
import { Icon, Label, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './TextBlock.css';

const ReactionType = {
  Minimal: 100,
  Low: 200,
  Moderate: 300,
  High: 400,
  Intense: 500
}

class TextBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      selectedFlag: ''
    };
    this.toggleBox = this.toggleBox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggleBox(type) {
    const { isOpened, selectedFlag } = this.state;
    this.setState({
      isOpened: !isOpened,
      selectedFlag: selectedFlag === type ? '' : type
    });
  }

  onSubmit () {
    const { isOpened, selectedFlag } = this.state;
    const { onRiskMeterChange } = this.props;
    if(isOpened) {
      onRiskMeterChange(ReactionType[selectedFlag]);
    } else {
      onRiskMeterChange(0);
    }
  }

  isSelectedFlag (flag) {
    return this.state.selectedFlag === flag;
  }

  render() {
    const { isOpened } = this.state;
    const { userType } = this.props;
    return (
      <div>
        { userType === 'pharmacist' &&
          <h1 className="imgTitle">Report Patient Status</h1>
        }

        <Label.Group className="flagGroup">
          <Label className={`flagLabel ${this.isSelectedFlag('Minimal') ? 'labelActive' : ''}`} as='a' 
            onClick={() => this.toggleBox('Minimal')}>
            Sudden Aggressiveness or restlessness
            {this.isSelectedFlag('Minimal') &&
              <Icon name='check circle outline' className="checkIcon" />
            }

          </Label>
          <Label className={`flagLabel ${this.isSelectedFlag('Low') ? 'labelActive' : ''}`} as='a' 
            onClick={() => this.toggleBox('Low')}>
            Sudden change in behavior
            {this.isSelectedFlag('Low') &&
              <Icon name='check circle outline' className="checkIcon" />
            }

          </Label>
          <Label className={`flagLabel ${this.isSelectedFlag('Moderate') ? 'labelActive' : ''}`} as='a' 
            onClick={() => this.toggleBox('Moderate')}>
            Abrupt weight changes
            {this.isSelectedFlag('Moderate') &&
              <Icon name='check circle outline' className="checkIcon" />
            }

          </Label>
          <Label className={`flagLabel ${this.isSelectedFlag('High') ? 'labelActive' : ''}`} as='a' 
            onClick={() => this.toggleBox('High')}>
            Dilated or constricted pupils
            {this.isSelectedFlag('High') &&
              <Icon name='check circle outline' className="checkIcon" />
            }

          </Label>
          <Label className={`flagLabel ${this.isSelectedFlag('Intense') ? 'labelActive' : ''}`} as='a' 
            onClick={() => this.toggleBox('Intense')}>
            Bloodshot or glazed eyes
            {this.isSelectedFlag('Intense') &&
              <Icon name='check circle outline' className="checkIcon" />
            }

          </Label>
        </Label.Group>
        {isOpened &&
          <Button onClick={ this.onSubmit} size='tiny' negative className="flagButton">Flag Patient</Button>
        }

      </div>
    );
  }
}

TextBlock.propTypes = {
  userType: PropTypes.string.isRequired,
  onRiskMeterChange: PropTypes.func
};

TextBlock.defaultProps = {
  userType: '',
  onRiskMeterChange: () => {}
};


export default TextBlock;
