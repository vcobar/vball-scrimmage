import React, { Component } from 'react';

class PlayerProfile extends Component {
  constructor(props) {
    super(props);

    this.state = { profileName: props.profile.name,
                   buttonText: 'Edit',
                   profileDisabled: true
                 };

    this.handleChange      = this.handleChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleChange(event) {
    this.setState( {profileName: event.target.value} );
  }
  handleButtonClick(event) {
    this.setState({profileDisabled: !this.state.profileDisabled,
                    buttonText: (this.state.profileDisabled) ? 'Save' : 'Edit'
                  });
  }
  render() {
    let inputProperties = {
      type: 'text',
      required: 'true',
      draggable: 'true',
      value: this.state.profileName,
      onChange: this.handleChange,
      onBlur: this.handleBlur
    }
    let profileName = <input disabled={this.state.profileDisabled} {...inputProperties} />;

    let buttonProperties = {
      onClick: this.handleButtonClick
    }
    let profileButton = <button {...buttonProperties}>{this.state.buttonText}</button>;

    return (
        <div id="player-profile">
            <p>
              Name:
                {profileName}
                {profileButton}
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
