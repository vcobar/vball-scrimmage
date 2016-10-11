import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerProfile extends Component {
  render() {
    if(!this.props.player) {
      return <div />
    }
    return (
      <div>
        <h3>Profile for:</h3>
        <div>Name: {this.props.player.name}</div>
        <div>Playing? {this.props.player.isActive ? 'Yes' : 'No'}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    player: state.activePlayer
  };
}

export default connect(mapStateToProps)(PlayerProfile);
