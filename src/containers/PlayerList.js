import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPlayer } from '../actions/index';
import { toggleActive } from '../actions/index';
import { bindActionCreators } from 'redux';

// we make containers when we want to have a component to touch the redux state directly
class PlayerList extends Component {
  renderList() {
    return this.props.players.map( (player) => {
      let activeStatus = (player.isActive) ? ' active' : ' inActive';
      return (
        <div
          key={player.id}
          className={"player" + activeStatus}
          onClick={ () => this.props.selectPlayer(player) }
        >
          {player.name}
        </div>
      );
    });
  }
  render() {
    return (
      <div className="playerList">
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is return will show up as props inside PlayerList container
  return {
    players: state.players
  };
}

// anything return from this funciton
// will end up as props on the PlayerList container
function mapDispatchToProps(dispatch) {
  // Whenever selectPlayer is called
  // the result should be passed to all our reducers, thru dispatch function
  // To take from actions to flow thru reducers
  return bindActionCreators({ selectPlayer: selectPlayer, toggleActive: toggleActive  }, dispatch);
}

// Promote PlayerList from a component to a container
// It needs to know about this new dispatch method, selectPlayer
// Make it available as a prop
// take some state and make it available to the props of the container
// action creators and make it available to be called inside the container
export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
