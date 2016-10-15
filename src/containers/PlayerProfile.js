import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closePlayer } from '../actions/index';
import { toggleActive } from '../actions/index';
import { bindActionCreators } from 'redux';

class PlayerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: null };
  }
  togglePlayerStatus(event) {
    this.props.toggleActive(this.props.player);
    this.setState({ isChecked: !this.props.player.isActive })
  }
  render() {
    if(!this.props.player) {
      return <div className="PlayerProfile hide" />
    }
    return (
      <div className="PlayerProfile show">
        <div id="player-profile-top">
            Profile
        </div>
        <div id="player-profile-middle">
          <div className="title">Name: </div><div className="content">{this.props.player.name}</div>
          <div className="title">Playing?</div>
          <div className="content">
            <label className="switch">
              <input
                type="checkbox"
                checked={this.props.player.isActive}
                onChange={ (event) => this.togglePlayerStatus(event) }
              />
              <div className="slider round"></div>
            </label>
          </div>

        </div>
        <div id="player-profile-bottom">
          <div id="buttonClose" onClick={ () => this.props.closePlayer(this.props.player) }>Close</div>
        </div>
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
  return bindActionCreators({ closePlayer: closePlayer, toggleActive: toggleActive }, dispatch);
}

// Promote PlayerList from a component to a container
// It needs to know about this new dispatch method, selectPlayer
// Make it available as a prop
// take some state and make it available to the props of the container
// action creators and make it available to be called inside the container
export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile);
