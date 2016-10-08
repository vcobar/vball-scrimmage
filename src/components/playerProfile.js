import React, { Component } from 'react';
import Player from './player';

class PlayerProfile extends Component {
  constructor(props) {
    super(props);

    this.state = { profileDisabled: true }
  }

  render() {

    var inputProperties = {
      value: this.props.profile.name
    }

    return (
        <div id="player-profile">
          <p>
            Name:
              <input {...inputProperties} />
          </p>
        </div>
    );
  }
}

export default PlayerProfile;

// <input
//   value       = {this.props.profile.name}
//   className   = {this.state.profileDisabled}
//   onClick     = { () => this.setState({profileDisabled: false}) }
//   onBlur      = { () => this.setState({profileDisabled: true}) }
//  />
