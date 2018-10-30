import React, { Component } from 'react';
import { Icon, Label, Button } from 'semantic-ui-react';
import './TextBlock.css';


class TextBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { isOpened } = this.state;
    this.setState({
      isOpened: !isOpened,
    });
  }

  render() {
    const { isOpened } = this.state;
    const { userType } = this.props;
    return (
      <div>
        { userType === 'Pharmacist' &&
          <h1 className="imgTitle">Report Patient Status</h1>
        }

        <Label.Group className="flagGroup">
          <Label className={`flagLabel ${isOpened ? 'labelActive' : ''}`} as='a' onClick={this.toggleBox}>
            Fun
            {isOpened &&
              <Icon name='check circle outline' className="checkIcon" />
            }

          </Label>
          <Label as='a' className="flagLabel">
            Happy
          </Label>
          <Label as='a' className="flagLabel" >Smart</Label>
          <Label as='a' className="flagLabel">Insane</Label>
          <Label as='a' className="flagLabel" >Exciting</Label>
        </Label.Group>
        {isOpened &&
          <Button size='tiny' negative className="flagButton">Flag Patient</Button>
        }

      </div>
    );
  }
}


export default TextBlock;
