import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {
  renderList() {

    return this.props.players.map( (player) => {
      let activeStatus = (player.isActive) ? ' active' : ' inActive';
      return (
        <div className={"player" + activeStatus}>
          <div key={player.id}>{player.name}</div>
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
  return {
    players: state.players
  };
}

export default connect(mapStateToProps)(PlayerList);
