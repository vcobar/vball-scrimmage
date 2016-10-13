import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closePlayer } from '../actions/index';
import { bindActionCreators } from 'redux';

class PlayerProfile extends Component {
  render() {
    if(!this.props.player) {
      return <div className="PlayerProfile" />
    }

    return (
      <div className="PlayerProfile">
        <h3>Profile for:</h3>
        <div>Name: {this.props.player.name}</div>
        <div>Playing? {this.props.player.isActive ? 'Yes' : 'No'}</div>
        <button onClick={ () => this.props.closePlayer(this.props.player) }>Close</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    player: state.activePlayer
  };
}

// anything return from this funciton
// will end up as props on the PlayerList container
function mapDispatchToProps(dispatch) {
  // Whenever selectPlayer is called
  // the result should be passed to all our reducers, thru dispatch function
  // To take from actions to flow thru reducers
  return bindActionCreators({ closePlayer: closePlayer }, dispatch);
}

// Promote PlayerList from a component to a container
// It needs to know about this new dispatch method, selectPlayer
// Make it available as a prop
// take some state and make it available to the props of the container
// action creators and make it available to be called inside the container
export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile);
